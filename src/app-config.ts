import type { ApiCollection, DocsAppConfig } from "@wrikka/create-docs/solid";
import { orpcDataSource } from "./data-source";

const siteRpc: ApiCollection = {
	id: "api",
	label: "API",
	icon: "i-mdi:api",
	description: "API reference for this documentation site",
	type: "api",
	endpoints: [
		{
			id: "rpc-collections",
			method: "POST",
			path: "/rpc/docs/collections",
			tag: "Docs",
			summary: "collections",
			description: "Return all documentation collections.",
			parameters: [],
			requestBody: { required: false, example: { json: {} } },
			responses: {
				"200": {
					description: "Array of collection metadata",
					example: {
						json: [
							{
								id: "rust-packages",
								label: "Rust Packages",
								icon: "i-mdi:language-rust",
							},
						],
					},
				},
			},
		},
		{
			id: "rpc-list",
			method: "POST",
			path: "/rpc/docs/list",
			tag: "Docs",
			summary: "list",
			description: "List all documents in a collection.",
			parameters: [],
			requestBody: {
				required: true,
				example: { json: { collection: "rust-packages" } },
			},
			responses: {
				"200": {
					description: "Array of document entries",
					example: { json: { items: [] } },
				},
			},
		},
		{
			id: "rpc-get",
			method: "POST",
			path: "/rpc/docs/get",
			tag: "Docs",
			summary: "get",
			description: "Fetch a single markdown document by collection and id.",
			parameters: [],
			requestBody: {
				required: true,
				example: {
					json: { collection: "rust-packages", id: "root-cargo" },
				},
			},
			responses: {
				"200": {
					description: "Markdown content",
					example: { json: { content: "# root\n\ncontent" } },
				},
			},
		},
		{
			id: "rpc-search",
			method: "POST",
			path: "/rpc/docs/search",
			tag: "Docs",
			summary: "search",
			description: "Full-text search across all documentation collections.",
			parameters: [],
			requestBody: {
				required: true,
				example: { json: { q: "agent", collection: "rust-packages" } },
			},
			responses: {
				"200": {
					description: "Ranked search results",
					example: { json: { results: [] } },
				},
			},
		},
		{
			id: "rpc-ask",
			method: "POST",
			path: "/rpc/docs/ask",
			tag: "AI",
			summary: "ask",
			description: "Ask a question about a document via Workers AI.",
			parameters: [],
			requestBody: {
				required: true,
				example: {
					json: {
						collection: "rust-packages",
						id: "root-cargo",
						question: "What is this workspace for?",
					},
				},
			},
			responses: {
				"200": {
					description: "Grounded AI answer",
					example: { json: { answer: "..." } },
				},
			},
		},
	],
};

export const docsAppConfig: DocsAppConfig = {
	site: {
		title: "opensource.wrikka.com",
		description: "Documentation hub for all wrikka collections",
		repoUrl: "https://github.com/wrikka/opensource-wrikka-com",
	},
	dataSource: orpcDataSource,
	defaultCollection: "rust-packages",
	home: {
		hero: {
			name: "opensource",
			text: "wrikka.com",
			tagline: "Documentation hub for all open-source packages.",
			actions: [
				{
					text: "Read docs",
					link: "/rust-packages",
					theme: "brand",
				},
				{
					text: "API reference",
					link: "/api/rpc-collections",
					theme: "alt",
				},
			],
		},
		features: [
			{
				icon: "i-mdi:language-rust",
				title: "Rust packages",
				details: "CLI agents, TUI apps, and libraries built with Rust.",
				link: "/rust-packages",
			},
			{
				icon: "i-mdi:nodejs",
				title: "Bun packages",
				details: "TypeScript tooling and web apps for the Bun ecosystem.",
				link: "/bun-packages",
			},
			{
				icon: "i-mdi:api",
				title: "API reference",
				details: "Try the site's oRPC endpoints interactively.",
				link: "/api/rpc-collections",
			},
		],
	},
	apiCollections: [siteRpc],
	features: {
		search: true,
		askAi: true,
		editLink: true,
		themeToggle: true,
	},
};
