/**
 * create-docs build-time config.
 *
 * Add one or more GitHub repositories here; `bun run pull-docs` fetches the
 * markdown files under each repo's docs directory before `vite build`.
 *
 * In CI, the workflow sets `GITHUB_TOKEN` so content is pulled from GitHub.
 * For local development without a token, `localDir` points to sibling repos.
 */
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const useGitHub = !!process.env.GITHUB_TOKEN;
const sibling = (name: string, ...rest: string[]) =>
	resolve(__dirname, "..", "..", name, ...rest);

export default {
	outDir: "./docs",
	sources: [
		{
			id: "bun-packages",
			label: "Bun Packages",
			description: "TypeScript tooling, web apps, and the create-docs framework.",
			repo: "https://github.com/wrikka/bun-packages",
			branch: "main",
			docsDir: "docs",
			icon: "i-mdi:nodejs",
			localDir: useGitHub ? undefined : sibling("bun-packages", "docs"),
		},
		{
			id: "rust-packages",
			label: "Rust Packages",
			description: "Rust CLI agents, TUI apps, libraries, and SDKs.",
			repo: "https://github.com/wrikka/rust-packages",
			branch: "main",
			docsDir: "docs",
			icon: "i-mdi:language-rust",
			// rust-packages has no docs/ root yet; keep optional until docs are added.
			optional: true,
		},
	],
};
