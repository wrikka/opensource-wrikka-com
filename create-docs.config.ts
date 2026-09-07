/**
 * create-docs build-time config.
 *
 * Add one or more GitHub repositories here; `bun run pull-docs` fetches the
 * markdown files under each repo's docs directory before `vite build`.
 *
 * In CI, the workflow sets `GITHUB_TOKEN` so content is pulled from GitHub.
 * For local development without a token, `localDir` points to sibling repos.
 */
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { resolve } from "node:path";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const useGitHub = !!process.env.GITHUB_TOKEN;

function findLocal(...parts: string[]): string | undefined {
	const candidates = [
		// Local: opensource-wrikka-com and the monorepos live under D:\newkub.
		resolve(__dirname, "..", "wpackages", ...parts),
		// CI legacy / monorepo layouts.
		resolve(__dirname, "..", ...parts),
		resolve(__dirname, "..", "..", ...parts),
	];
	return candidates.find((p) => existsSync(p));
}

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
			localDir: useGitHub ? undefined : findLocal("bun-packages", "docs"),
		},
		{
			// rust-packages is a private monorepo without a root docs/ dir;
			// docs live under apps/*/docs — pull that subtree (needs GH_PAT in CI).
			id: "rust-apps",
			label: "Rust Apps",
			description: "Rust CLI, desktop, TUI, and WASM apps from rust-packages.",
			repo: "https://github.com/wrikka/rust-packages",
			branch: "main",
			docsDir: "apps",
			icon: "i-mdi:console",
			optional: true,
			localDir: useGitHub ? undefined : findLocal("rust-packages", "apps"),
		},
		{
			id: "rust-packages",
			label: "Rust Packages",
			description: "Rust libraries, SDKs, and tooling from rust-packages.",
			repo: "https://github.com/wrikka/rust-packages",
			branch: "main",
			docsDir: "packages",
			icon: "i-mdi:language-rust",
			optional: true,
			localDir: useGitHub ? undefined : findLocal("rust-packages", "packages"),
		},
	],
};
