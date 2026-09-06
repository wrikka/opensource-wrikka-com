import {
	createRootRoute,
	createRoute,
	createRouter,
	redirect,
} from "@tanstack/solid-router";
import { DocsLayout } from "./layouts/DocsLayout";
import { CollectionPage } from "./pages/CollectionPage";
import { DocPage } from "./pages/DocPage";

const rootRoute = createRootRoute({ component: DocsLayout });

const indexRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/",
	beforeLoad: () => {
		throw redirect({ to: "/$collection", params: { collection: "rust-packages" } });
	},
});

const collectionRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/$collection",
	component: CollectionPage,
});

const docRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/$collection/$docId",
	component: DocPage,
});

const routeTree = rootRoute.addChildren([
	indexRoute,
	collectionRoute,
	docRoute,
]);

export const router = createRouter({
	routeTree,
	defaultPreload: "intent",
	scrollRestoration: true,
});

declare module "@tanstack/solid-router" {
	interface Register {
		router: typeof router;
	}
}
