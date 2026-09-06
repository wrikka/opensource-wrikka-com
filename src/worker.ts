import { onError } from "@orpc/server";
import { RPCHandler } from "@orpc/server/fetch";
import { type AiBinding, type AssetsBinding, router } from "./server/router";

interface Env {
	ASSETS: AssetsBinding;
	AI?: AiBinding;
	GITHUB_TOKEN?: string;
}

const handler = new RPCHandler(router, {
	interceptors: [onError((error) => console.error(error))],
});

function corsHeaders(response: Response): Response {
	const headers = new Headers(response.headers);
	headers.set("Access-Control-Allow-Origin", "*");
	return new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers,
	});
}

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		if (request.method === "OPTIONS") {
			return new Response(null, {
				status: 204,
				headers: {
					"Access-Control-Allow-Origin": "*",
					"Access-Control-Allow-Methods": "GET, HEAD, POST, OPTIONS",
					"Access-Control-Allow-Headers": "*",
				},
			});
		}

		const url = new URL(request.url);

		if (url.pathname.startsWith("/api/github/")) {
			const upstream =
				"https://api.github.com" +
				url.pathname.slice("/api/github".length) +
				url.search;
			const headers = new Headers({
				Accept: "application/vnd.github+json",
				"User-Agent": "opensource-wrikka-com/1.0",
			});
			if (env.GITHUB_TOKEN) {
				headers.set("Authorization", `Bearer ${env.GITHUB_TOKEN}`);
			}
			const res = await fetch(upstream, { headers });
			return corsHeaders(res);
		}

		if (url.pathname.startsWith("/rpc/")) {
			const { matched, response } = await handler.handle(request, {
				prefix: "/rpc",
				context: {
					headers: request.headers,
					assets: env.ASSETS,
					origin: url.origin,
					ai: env.AI,
				},
			});
			if (matched) return corsHeaders(response);
		}

		try {
			return corsHeaders(await env.ASSETS.fetch(request));
		} catch (e) {
			return new Response(`Not found: ${e}`, { status: 404 });
		}
	},
};
