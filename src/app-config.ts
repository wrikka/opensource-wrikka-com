import type { ApiCollection, DocsAppConfig } from "@wrikka/create-docs/solid";
import { orpcDataSource } from "./data-source";
import { site } from "./site";

const siteRpc: ApiCollection = {
	id: "api",
	label: "API",
	icon: "i-mdi:api",
	description: "API reference for this documentation site",
	type: "api",
	style: "rpc",
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
	site,
	github: {
		owner: "wrikka",
		repo: "opensource-wrikka-com",
		branch: "main",
		stats: true,
		releases: true,
		contributors: true,
		issues: true,
		oauth: { scope: "repo" },
	},
	dataSource: orpcDataSource,
	defaultCollection: "rust-packages",
	home: {
		hero: {
			name: "opensource",
			text: "wrikka.com",
			badge: "Docs · API · MCP · Ask AI",
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
			{
				icon: "i-mdi:history",
				title: "Changelog",
				details: "GitHub releases rendered as a changelog.",
				link: "/changelog",
			},
			{
				icon: "i-mdi:account-group-outline",
				title: "Community",
				details: "Contributors, recent commits, and milestones.",
				link: "/community",
			},
			{
				icon: "i-mdi:puzzle-outline",
				title: "Plugins",
				details: "Integrations powering this site.",
				link: "/plugins",
			},
		],
		slides: [
			{
				icon: "i-mdi:console",
				title: "Search everything",
				details:
					"Ctrl+K opens a two-column command palette with live document preview — search docs and run commands.",
			},
			{
				icon: "i-mdi:robot-outline",
				title: "Ask AI & MCP",
				details:
					"Ask AI answers grounded in docs via Workers AI, and LLMs can consume /llms.txt plus the /mcp JSON-RPC endpoint.",
				link: "/plugins",
			},
			{
				icon: "i-mdi:palette-outline",
				title: "Daily accent themes",
				details:
					"A different accent color every day of the week — pick your own from the palette in the top bar.",
			},
			{
				icon: "i-mdi:github",
				title: "GitHub powered",
				details:
					"Live releases, issues, commits, contributors, tags, and branches — straight from the GitHub API.",
				link: "/changelog",
			},
			{
				icon: "i-mdi:cellphone",
				title: "Mobile first",
				details:
					"Bottom navigation, safe-area spacing, and touch-friendly targets on small screens.",
			},
		],
	},
	apiCollections: [siteRpc],
	plugins: [
		{
			name: "MCP server",
			description:
				"Model Context Protocol JSON-RPC endpoint at /mcp (tools: search_docs, get_doc) so LLMs can query this documentation.",
			icon: "i-mdi:robot-outline",
			url: "/mcp",
		},
		{
			name: "LLM documentation",
			description:
				"Machine-readable docs for LLMs: /llms.txt index plus /llms-plugins.txt for plugin docs.",
			icon: "i-mdi:text-box-outline",
			url: "/llms.txt",
		},
		{
			name: "GitHub OAuth",
			description:
				"Sign in with GitHub via OAuth (worker-side token exchange) or a personal access token — create repos and save docs to GitHub.",
			icon: "i-mdi:github",
		},
		{
			name: "oRPC integration",
			description:
				"Docs content, search, and Ask AI served over oRPC endpoints.",
			icon: "i-mdi:api",
		},
		{
			name: "OpenAPI adapter",
			description:
				"Turn an OpenAPI spec into a Scalar-style API reference collection.",
			icon: "i-mdi:file-document-outline",
		},
		{
			name: "Workers AI",
			description:
				"Ask AI answers grounded in docs, powered by Cloudflare Workers AI.",
			icon: "i-mdi:robot-outline",
		},
		{
			name: "@wrikka/create-docs",
			description:
				"The documentation framework powering this site — search, SEO, GitHub, PWA, and more.",
			icon: "i-mdi:book-open-page-variant",
			url: "https://github.com/wrikka/bun-packages",
			install: "bun add @wrikka/create-docs",
		},
	],
	showcase: [
		{
			id: "agent-browser",
			label: "agent-browser",
			description:
				"Browser automation agent built with Rust — supports Chrome, Firefox, Safari, Edge.",
			icon: "i-mdi:web",
			link: "/rust-packages/apps-cli-agent-browser-Cargo-rust",
			tags: ["Rust", "CLI", "Browser"],
		},
		{
			id: "agent-capture",
			label: "agent-capture",
			description:
				"Multi-platform capture CLI for browser, terminal, code snippets, and component previews.",
			icon: "i-mdi:camera",
			link: "/rust-packages/apps-cli-agent-capture-Cargo-rust",
			tags: ["Rust", "CLI", "Capture"],
		},
		{
			id: "wrikka-files-desktop",
			label: "wrikka-files-desktop",
			description:
				"Wrikka Desktop Explorer — custom-column, agent-driven file explorer.",
			icon: "i-mdi:folder-open",
			link: "/rust-packages/apps-desktop-files-desktop-src-tauri-Cargo-rust",
			tags: ["Rust", "Tauri", "Desktop"],
		},
		{
			id: "wrikka-terminal",
			label: "wrikka-terminal",
			description: "Wrikka Terminal — GPU-accelerated terminal emulator.",
			icon: "i-mdi:console",
			link: "/rust-packages/apps-desktop-terminal-desktop-src-tauri-Cargo-rust",
			tags: ["Rust", "Tauri", "Terminal"],
		},
		{
			id: "create-docs",
			label: "@wrikka/create-docs",
			description:
				"The documentation framework powering this site — search, SEO, GitHub, PWA, and more.",
			icon: "i-mdi:book-open-page-variant",
			link: "/bun-packages/root-package-json",
			badge: "Framework",
			tags: ["TypeScript", "SolidJS", "Vite"],
		},
	],
	i18n: {
		current: "en",
		list: [{ id: "en", label: "English" }],
	},
	theme: { defaultMode: "dark" },
	features: {
		search: true,
		askAi: true,
		editLink: true,
		lastUpdated: true,
		themeToggle: true,
		breadcrumbs: true,
		reportIssue: true,
		openPR: true,
		rss: true,
		sitemap: true,
		pwa: true,
		analytics: true,
		mcp: true,
	},
};
