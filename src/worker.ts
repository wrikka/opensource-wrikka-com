import { onError } from "@orpc/server";
import { RPCHandler } from "@orpc/server/fetch";
import { type AssetsBinding, router } from "./server/router";

interface Env {
	ASSETS: AssetsBinding;
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

		if (url.pathname.startsWith("/rpc/")) {
			const { matched, response } = await handler.handle(request, {
				prefix: "/rpc",
				context: {
					headers: request.headers,
					assets: env.ASSETS,
					origin: url.origin,
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
