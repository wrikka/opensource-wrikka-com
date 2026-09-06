import { ORPCError, os } from "@orpc/server";
import { z } from "zod";

export interface AssetsBinding {
	fetch(request: Request | string): Promise<Response>;
}

export interface CollectionMeta {
	id: string;
	label: string;
	icon: string;
	description: string;
}

export interface DocEntry {
	id: string;
	label: string;
	category: string;
	description: string;
	path: string;
	type: "rust" | "npm";
}

export interface Manifest {
	collections: CollectionMeta[];
	docs: Record<string, DocEntry[]>;
}

interface Ctx {
	headers: Headers;
	assets: AssetsBinding;
	origin: string;
}

const pub = os.$context<Ctx>();

let manifestPromise: Promise<Manifest> | undefined;

function getManifest(ctx: Ctx): Promise<Manifest> {
	manifestPromise ??= ctx.assets
		.fetch(new Request(`${ctx.origin}/manifest.json`))
		.then(async (res) => {
			if (!res.ok) {
				manifestPromise = undefined;
				throw new ORPCError("INTERNAL_SERVER_ERROR", {
					message: `Failed to load manifest: ${res.status}`,
				});
			}
			return res.json() as Promise<Manifest>;
		});
	return manifestPromise;
}

const collectionInput = z.object({
	collection: z.string().min(1),
});

export const router = {
	docs: {
		collections: pub.handler(async ({ context }) => {
			const manifest = await getManifest(context);
			return manifest.collections;
		}),

		list: pub.input(collectionInput).handler(async ({ input, context }) => {
			const manifest = await getManifest(context);
			return manifest.docs[input.collection] ?? [];
		}),

		get: pub
			.input(collectionInput.extend({ id: z.string().min(1) }))
			.handler(async ({ input, context }) => {
				const manifest = await getManifest(context);
				const entries = manifest.docs[input.collection];
				if (!entries || !entries.some((d) => d.id === input.id)) {
					throw new ORPCError("NOT_FOUND", { message: "Doc not found" });
				}
				const res = await context.assets.fetch(
					new Request(
						`${context.origin}/docs/${input.collection}/${input.id}.md`,
					),
				);
				if (!res.ok) {
					throw new ORPCError("NOT_FOUND", {
						message: `Doc asset missing: ${res.status}`,
					});
				}
				return { content: await res.text() };
			}),
	},
};

export type Router = typeof router;
