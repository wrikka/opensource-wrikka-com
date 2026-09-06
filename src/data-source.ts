import { orpc } from "./lib/orpc";
import type {
	AskInput,
	AskResult,
	CollectionMeta,
	DocContent,
	DocEntry,
	DocsDataSource,
	SearchResult,
} from "@wrikka/create-docs/solid";

export const orpcDataSource: DocsDataSource = {
	async collections(): Promise<CollectionMeta[]> {
		return orpc.docs.collections();
	},
	async list(collection: string): Promise<DocEntry[]> {
		return orpc.docs.list({ collection });
	},
	async get(collection: string, id: string): Promise<DocContent> {
		return orpc.docs.get({ collection, id });
	},
	async search(q: string, collection?: string): Promise<SearchResult[]> {
		return orpc.docs.search({ q, ...(collection ? { collection } : {}) });
	},
	async ask(input: AskInput): Promise<AskResult> {
		return orpc.docs.ask(input);
	},
};
