import { createResource } from "solid-js";
import type { CollectionMeta, DocEntry } from "../server/router";
import { orpc } from "./orpc";

export const [collections] = createResource<CollectionMeta[]>(() =>
	orpc.docs.collections(),
);

export function createDocsList(collection: () => string | undefined) {
	return createResource<DocEntry[], string | undefined>(
		collection,
		async (id) => {
			if (!id) return [];
			return orpc.docs.list({ collection: id });
		},
		{ initialValue: [] },
	);
}
