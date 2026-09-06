import path from "node:path";
import { fileURLToPath } from "node:url";
import UnoCSS from "unocss/vite";
import { defineConfig } from "vite";
import solid from "vite-plugin-solid";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

function removeCrossorigin() {
	return {
		name: "remove-crossorigin",
		transformIndexHtml(html: string) {
			return html.replace(/\s+crossorigin(="anonymous")?/g, "");
		},
		enforce: "post" as const,
	};
}

export default defineConfig({
	plugins: [UnoCSS(), solid(), removeCrossorigin()],
	resolve: {
		dedupe: ["solid-js", "@tanstack/solid-router"],
		alias: {
			"@wrikka/create-docs/solid": path.resolve(
				__dirname,
				"node_modules/@wrikka/create-docs/src/runtime/index.ts",
			),
			"@wrikka/create-docs/theme.css": path.resolve(
				__dirname,
				"node_modules/@wrikka/create-docs/src/runtime/theme.css",
			),
			"@wrikka/create-docs/markdown-content.css": path.resolve(
				__dirname,
				"node_modules/@wrikka/create-docs/src/runtime/markdown-content.css",
			),
		},
	},
	optimizeDeps: {
		exclude: ["@wrikka/create-docs"],
	},
	server: {
		port: 5173,
	},
	build: {
		target: "esnext",
		outDir: "dist",
		sourcemap: true,
	},
});
