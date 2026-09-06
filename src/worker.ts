import { onError } from "@orpc/server";
import { RPCHandler } from "@orpc/server/fetch";
import { type AiBinding, type AssetsBinding, router } from "./server/router";

interface Env {
	ASSETS: AssetsBinding;
	AI?: AiBinding;
	GITHUB_TOKEN?: string;
	GITHUB_CLIENT_ID?: string;
	GITHUB_CLIENT_SECRET?: string;
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

function jsonResponse(data: unknown, status = 200): Response {
	return new Response(JSON.stringify(data), {
		status,
		headers: {
			"Content-Type": "application/json",
			"Access-Control-Allow-Origin": "*",
		},
	});
}

function toBase64(input: string): string {
	const bytes = new TextEncoder().encode(input);
	let binary = "";
	const chunk = 0x8000;
	for (let i = 0; i < bytes.length; i += chunk) {
		binary += String.fromCharCode(...bytes.subarray(i, i + chunk));
	}
	return btoa(binary);
}

async function handleContentSave(
	request: Request,
	env: Env,
): Promise<Response> {
	if (request.method !== "POST") {
		return jsonResponse({ error: "Method not allowed" }, 405);
	}
	const token =
		request.headers.get("Authorization")?.replace(/^Bearer\s+/i, "") ??
		env.GITHUB_TOKEN;
	if (!token) {
		return jsonResponse(
			{
				error:
					"No GitHub credentials — authorize with GitHub or configure GITHUB_TOKEN",
			},
			503,
		);
	}
	const {
		owner,
		repo,
		path: filePath,
		content,
		branch = "main",
		message,
	} = (await request.json().catch(() => ({}))) as Record<string, string>;
	if (!owner || !repo || !filePath || content === undefined || !message) {
		return jsonResponse({ error: "Missing required fields" }, 400);
	}

	const ghHeaders = {
		Authorization: `Bearer ${token}`,
		Accept: "application/vnd.github+json",
		"X-GitHub-Api-Version": "2022-11-28",
	};
	try {
		const getRes = await fetch(
			`https://api.github.com/repos/${owner}/${repo}/contents/${filePath}?ref=${encodeURIComponent(branch)}`,
			{ headers: ghHeaders },
		);
		const existing = getRes.ok
			? ((await getRes.json()) as { sha?: string })
			: null;

		const putRes = await fetch(
			`https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`,
			{
				method: "PUT",
				headers: { ...ghHeaders, "Content-Type": "application/json" },
				body: JSON.stringify({
					message,
					content: toBase64(content),
					branch,
					...(existing?.sha ? { sha: existing.sha } : {}),
				}),
			},
		);
		if (!putRes.ok) {
			const text = await putRes.text();
			return jsonResponse({ error: text }, putRes.status);
		}
		return jsonResponse({ ok: true });
	} catch (e) {
		return jsonResponse(
			{ error: e instanceof Error ? e.message : "Save error" },
			500,
		);
	}
}

interface DocIndexEntry {
	collection: string;
	id: string;
	title: string;
	description: string;
	text: string;
	content: string;
}

let indexCache: { docs: DocIndexEntry[] } | null = null;

async function loadIndex(env: Env): Promise<{ docs: DocIndexEntry[] }> {
	if (indexCache) return indexCache;
	const res = await env.ASSETS.fetch(
		new Request("https://assets.local/search-index.json"),
	);
	if (!res.ok) throw new Error("search-index.json not found");
	indexCache = (await res.json()) as { docs: DocIndexEntry[] };
	return indexCache;
}

async function handleMcp(request: Request, env: Env): Promise<Response> {
	if (request.method !== "POST") {
		return jsonResponse({ error: "Method not allowed" }, 405);
	}
	const body = (await request.json().catch(() => ({}))) as {
		id?: unknown;
		method?: string;
		params?: Record<string, unknown>;
	};
	const { id = null, method, params = {} } = body;

	const reply = (result: unknown) =>
		jsonResponse({ jsonrpc: "2.0", id, result });
	const rpcError = (code: number, message: string) =>
		jsonResponse({ jsonrpc: "2.0", id, error: { code, message } });

	if (method === "initialize") {
		return reply({
			protocolVersion: "2024-11-05",
			capabilities: { tools: {} },
			serverInfo: { name: "opensource-wrikka-com", version: "0.2.0" },
		});
	}
	if (method === "notifications/initialized" || method === "ping") {
		return reply({});
	}
	if (method === "tools/list") {
		return reply({
			tools: [
				{
					name: "search_docs",
					description: "Search documentation content",
					inputSchema: {
						type: "object",
						properties: {
							query: { type: "string", description: "Search query" },
							limit: {
								type: "number",
								description: "Max results",
								default: 5,
							},
						},
						required: ["query"],
					},
				},
				{
					name: "get_doc",
					description: "Get a document by collection and id",
					inputSchema: {
						type: "object",
						properties: {
							collection: { type: "string", description: "Collection id" },
							id: { type: "string", description: "Document id" },
						},
						required: ["collection", "id"],
					},
				},
			],
		});
	}
	if (method === "tools/call") {
		const name = params.name;
		const args = (params.arguments ?? {}) as Record<string, unknown>;
		const { docs } = await loadIndex(env);
		if (name === "search_docs") {
			const q = String(args.query ?? "").toLowerCase();
			const limit = Math.min(Number(args.limit ?? 5), 20);
			const results = docs
				.filter((d) =>
					[d.title, d.description, d.text].join(" ").toLowerCase().includes(q),
				)
				.slice(0, limit)
				.map((d) => ({
					collection: d.collection,
					id: d.id,
					title: d.title,
					description: d.description,
					snippet: d.text.slice(0, 200),
				}));
			return reply({
				content: [{ type: "text", text: JSON.stringify(results, null, 2) }],
			});
		}
		if (name === "get_doc") {
			const doc = docs.find(
				(d) => d.collection === args.collection && d.id === args.id,
			);
			if (!doc) return rpcError(-32602, "Document not found");
			return reply({ content: [{ type: "text", text: doc.content }] });
		}
		return rpcError(-32601, "Unknown tool");
	}
	return rpcError(-32601, "Method not found");
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

		if (url.pathname === "/api/github/auth") {
			if (!env.GITHUB_CLIENT_ID) {
				return jsonResponse({ error: "GitHub OAuth not configured" }, 503);
			}
			const redirectUri =
				url.searchParams.get("redirect_uri") ?? `${url.origin}/auth/github/callback`;
			const state = url.searchParams.get("state") ?? crypto.randomUUID();
			const scope = url.searchParams.get("scope") ?? "repo";
			const authUrl =
				`https://github.com/login/oauth/authorize?client_id=${env.GITHUB_CLIENT_ID}` +
				`&redirect_uri=${encodeURIComponent(redirectUri)}` +
				`&scope=${encodeURIComponent(scope)}` +
				`&state=${encodeURIComponent(state)}`;
			return jsonResponse({ url: authUrl, state });
		}

		if (url.pathname === "/api/github/token" && request.method === "POST") {
			if (!env.GITHUB_CLIENT_ID || !env.GITHUB_CLIENT_SECRET) {
				return jsonResponse({ error: "GitHub OAuth not configured" }, 503);
			}
			const body = (await request.json().catch(() => ({}))) as Record<
				string,
				string
			>;
			const res = await fetch(
				"https://github.com/login/oauth/access_token",
				{
					method: "POST",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						client_id: env.GITHUB_CLIENT_ID,
						client_secret: env.GITHUB_CLIENT_SECRET,
						code: body.code,
					}),
				},
			);
			const data = (await res.json()) as {
				access_token?: string;
				error?: string;
				error_description?: string;
			};
			if (!res.ok || data.error) {
				return jsonResponse(
					{
						error: data.error ?? "token_error",
						message: data.error_description ?? `GitHub token error ${res.status}`,
					},
					400,
				);
			}
			return jsonResponse({ access_token: data.access_token });
		}

		if (url.pathname === "/api/content/save") {
			return handleContentSave(request, env);
		}

		if (url.pathname === "/api/mcp" || url.pathname === "/mcp") {
			return handleMcp(request, env);
		}

		if (url.pathname.startsWith("/api/github/")) {
			const upstream =
				"https://api.github.com" +
				url.pathname.slice("/api/github".length) +
				url.search;
			const headers = new Headers({
				Accept: "application/vnd.github+json",
				"X-GitHub-Api-Version": "2022-11-28",
				"User-Agent": "opensource-wrikka-com/1.0",
			});
			const clientAuth = request.headers.get("Authorization");
			if (clientAuth) {
				headers.set("Authorization", clientAuth);
			} else if (env.GITHUB_TOKEN) {
				headers.set("Authorization", `Bearer ${env.GITHUB_TOKEN}`);
			}
			const method = request.method.toUpperCase();
			const body =
				method === "GET" || method === "HEAD"
					? undefined
					: await request.arrayBuffer();
			const res = await fetch(upstream, { method, headers, body });
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
