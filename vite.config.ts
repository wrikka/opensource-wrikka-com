import path from "node:path";
import { fileURLToPath } from "node:url";
import type { Connect, Plugin } from "vite";
import UnoCSS from "unocss/vite";
import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import { RPCHandler } from "@orpc/server/fetch";
import { router } from "./src/server/router.ts";

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

/**
 * Dev-only oRPC handler: runs the site's router inside the Vite dev server.
 * The `assets` binding proxies back to Vite itself so files under public/
 * (manifest.json, docs/*.md, search-index.json) resolve exactly like the
 * production Workers Assets binding. The Workers AI binding is not
 * available in dev — `docs.ask` returns PRECONDITION_FAILED there.
 */
function devRpc(): Plugin {
	const handler = new RPCHandler(router, {});
	return {
		name: "dev-rpc",
		apply: "serve",
		configureServer(server) {
			server.middlewares.use(
				"/rpc",
				(async (req, res, next: Connect.NextFunction) => {
					try {
						const host = req.headers.host ?? "localhost:5173";
						const origin = `http://${host}`;
						const reqUrl = new URL(req.url ?? "/", origin);
						const target = new URL(`/rpc${reqUrl.pathname}`, origin);
						target.search = reqUrl.search;

						const hasBody = req.method !== "GET" && req.method !== "HEAD";
						const body = hasBody
							? await new Promise<Buffer>((resolve, reject) => {
									const chunks: Buffer[] = [];
									req.on("data", (d: Buffer) => chunks.push(d));
									req.on("end", () => resolve(Buffer.concat(chunks)));
									req.on("error", reject);
								})
							: undefined;

						const headers = new Headers();
						for (const [k, v] of Object.entries(req.headers)) {
							if (v === undefined) continue;
							headers.set(k, Array.isArray(v) ? v.join(", ") : v);
						}

						const { matched, response } = await handler.handle(
							new Request(target, {
								method: req.method,
								headers,
								body,
							}),
							{
								prefix: "/rpc",
								context: {
									headers,
									assets: {
										fetch: (r: Request | string) => {
											const u = new URL(
												typeof r === "string" ? r : r.url,
											);
											return fetch(`${origin}${u.pathname}${u.search}`);
										},
									},
									origin,
									ai: undefined,
								},
							},
						);
						if (!matched) return next();

						res.statusCode = response.status;
						response.headers.forEach((value, key) => {
							res.setHeader(key, value);
						});
						res.setHeader("Access-Control-Allow-Origin", "*");
						res.end(Buffer.from(await response.arrayBuffer()));
					} catch (err) {
						next(err);
					}
				}) as Connect.NextHandleFunction,
			);
		},
	};
}

export default defineConfig({
	plugins: [UnoCSS(), solid(), removeCrossorigin(), devRpc()],
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
