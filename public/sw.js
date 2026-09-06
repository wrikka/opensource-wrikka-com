/* create-docs offline service worker.
 * Runtime caching: cache-first for same-origin static assets,
 * network-first (cache fallback) for page navigations and docs data. */
const CACHE = "wrikka-docs-v1";
const PRECACHE = ["/", "/manifest.webmanifest"];

self.addEventListener("install", (event) => {
	event.waitUntil(
		caches
			.open(CACHE)
			.then((cache) => cache.addAll(PRECACHE))
			.then(() => self.skipWaiting()),
	);
});

self.addEventListener("activate", (event) => {
	event.waitUntil(
		caches
			.keys()
			.then((keys) =>
				Promise.all(
					keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)),
				),
			)
			.then(() => self.clients.claim()),
	);
});

self.addEventListener("fetch", (event) => {
	const { request } = event;
	if (request.method !== "GET") return;
	const url = new URL(request.url);
	if (url.origin !== location.origin) return;

	if (request.mode === "navigate") {
		event.respondWith(
			fetch(request)
				.then((res) => {
					const copy = res.clone();
					caches.open(CACHE).then((c) => c.put(request, copy));
					return res;
				})
				.catch(async () =>
					(await caches.match(request)) || caches.match("/"),
				),
		);
		return;
	}

	event.respondWith(
		caches.match(request).then(
			(cached) =>
				cached ||
				fetch(request).then((res) => {
					if (res.ok) {
						const copy = res.clone();
						caches.open(CACHE).then((c) => c.put(request, copy));
					}
					return res;
				}),
		),
	);
});
