import type { DocsAppConfig } from "@wrikka/create-docs/solid";
import { dataSource } from "./data-source";
import { site } from "./site";

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
	dataSource,
	defaultCollection: "bun-packages",
	home: {
		hero: {
			name: "opensource",
			text: "wrikka.com",
			badge: "Docs",
			tagline: "Documentation hub for all open-source packages.",
			actions: [
				{ text: "Bun packages", link: "/bun-packages", theme: "brand" },
				{ text: "Rust packages", link: "/rust-packages", theme: "alt" },
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
		],
	},
	features: {
		search: true,
		themeToggle: true,
		breadcrumbs: true,
		lastUpdated: true,
		editLink: true,
		reportIssue: true,
		openPR: true,
		rss: true,
		sitemap: true,
		pwa: true,
	},
};
