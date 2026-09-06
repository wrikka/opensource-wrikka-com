import { Outlet } from "@tanstack/solid-router";
import { createSignal, Show } from "solid-js";
import { SidebarNav } from "../components/SidebarNav";
import { TopNav } from "../components/TopNav";

export function DocsLayout() {
	const [navOpen, setNavOpen] = createSignal(false);

	return (
		<div class="min-h-screen flex flex-col bg-background text-foreground">
			<TopNav onMenuToggle={() => setNavOpen(!navOpen())} />
			<div class="flex flex-1 min-h-0">
				<SidebarNav open={navOpen()} onNavigate={() => setNavOpen(false)} />
				<Show when={navOpen()}>
					<button
						type="button"
						aria-label="Close sidebar"
						class="fixed inset-0 top-14 z-20 bg-overlay lg:hidden cursor-default"
						onClick={() => setNavOpen(false)}
					/>
				</Show>
				<main class="flex-1 min-w-0">
					<Outlet />
				</main>
			</div>
		</div>
	);
}
