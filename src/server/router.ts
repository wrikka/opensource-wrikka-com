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
	repoUrl?: string;
}

export interface DocEntry {
	id: string;
	label: string;
	category: string;
	description: string;
	path: string;
	type: "rust" | "npm";
}

export interface SearchEntry {
	c: string;
	id: string;
	t: string;
	h: string[];
	x: string;
}

export interface SearchResult {
	collection: string;
	id: string;
	title: string;
	snippet: string;
	score: number;
}

export interface AiBinding {
	run(model: string, input: unknown): Promise<unknown>;
}

export interface Manifest {
	collections: CollectionMeta[];
	docs: Record<string, DocEntry[]>;
}

interface Ctx {
	headers: Headers;
	assets: AssetsBinding;
	origin: string;
	ai?: AiBinding;
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
				const entry = entries.find((d) => d.id === input.id)!;
				return {
					id: entry.id,
					label: entry.label,
					content: await res.text(),
				};
			}),

		search: pub
			.input(
				z.object({
					q: z.string().min(1).max(200),
					collection: z.string().optional(),
				}),
			)
			.handler(async ({ input, context }) => {
				const res = await context.assets.fetch(
					new Request(`${context.origin}/search-index.json`),
				);
				if (!res.ok) {
					throw new ORPCError("INTERNAL_SERVER_ERROR", {
						message: "Search index unavailable",
					});
				}
				const index = (await res.json()) as SearchEntry[];
				const terms = input.q.toLowerCase().split(/\s+/).filter(Boolean);
				const results: SearchResult[] = [];

				for (const e of index) {
					if (input.collection && e.c !== input.collection) continue;
					const title = e.t.toLowerCase();
					const headings = e.h.join(" ").toLowerCase();
					const body = e.x.toLowerCase();
					let score = 0;
					for (const term of terms) {
						if (title === term) score += 20;
						else if (title.includes(term)) score += 10;
						if (headings.includes(term)) score += 4;
						const count = body.split(term).length - 1;
						score += Math.min(count, 5);
					}
					if (score === 0) continue;
					const firstTerm = terms[0] ?? "";
					const pos = body.indexOf(firstTerm);
					const snippet =
						pos >= 0
							? e.x.slice(Math.max(0, pos - 60), pos + 140).trim()
							: e.x.slice(0, 140).trim();
					results.push({
						collection: e.c,
						id: e.id,
						title: e.t,
						snippet,
						score,
					});
				}

				return results
					.sort((a, b) => b.score - a.score)
					.slice(0, 20);
			}),

		ask: pub
			.input(
				collectionInput.extend({
					id: z.string().min(1),
					question: z.string().min(1).max(2000),
				}),
			)
			.handler(async ({ input, context }) => {
				if (!context.ai) {
					throw new ORPCError("PRECONDITION_FAILED", {
						message: "AI binding not configured",
					});
				}
				const res = await context.assets.fetch(
					new Request(
						`${context.origin}/docs/${input.collection}/${input.id}.md`,
					),
				);
				if (!res.ok) {
					throw new ORPCError("NOT_FOUND", { message: "Doc not found" });
				}
				const content = (await res.text()).slice(0, 24000);
				const out = (await context.ai.run("@cf/meta/llama-3.3-70b-instruct-fp8-fast", {
					messages: [
						{
							role: "system",
							content:
								"You are a documentation assistant. Answer ONLY from the provided document. If the answer is not in the document, say so. Be concise.",
						},
						{
							role: "user",
							content: `Document:\n${content}\n\nQuestion: ${input.question}`,
						},
					],
					max_tokens: 1024,
				})) as { response?: string };
				return { answer: out.response ?? "No answer generated." };
			}),
	},
};

export type Router = typeof router;
