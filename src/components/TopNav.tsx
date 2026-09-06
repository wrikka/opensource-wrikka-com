import { Link, useParams } from "@tanstack/solid-router";
import { CollectionDropdown } from "./CollectionDropdown";
import { setSearchOpen } from "./SearchPalette";
import { ThemeToggle } from "./ThemeToggle";

export function TopNav(props: { onMenuToggle: () => void }) {
	const params = useParams({ strict: false });

	return (
		<header class="sticky top-0 z-40 h-14 flex items-center gap-3 px-4 border-b border-border bg-background/95 backdrop-blur">
			<button
				type="button"
				onClick={props.onMenuToggle}
				aria-label="Toggle sidebar"
				class="lg:hidden w-9 h-9 inline-flex items-center justify-center rounded-md text-muted hover:text-foreground hover:bg-surface transition-colors cursor-pointer"
			>
				<span class="i-mdi:menu" aria-hidden="true" />
			</button>
			<Link
				to="/"
				class="inline-flex items-center gap-2 no-underline text-foreground font-semibold text-sm"
			>
				<span class="i-mdi:book-open-page-variant text-primary text-lg" aria-hidden="true" />
				opensource.wrikka.com
			</Link>
			<div class="w-px h-6 bg-border hidden sm:block" aria-hidden="true" />
			<CollectionDropdown current={params().collection} />
			<div class="flex-1" />
			<button
				type="button"
				onClick={() => setSearchOpen(true)}
				aria-label="Search documentation"
				class="inline-flex items-center gap-2 px-3 h-9 rounded-md border border-border bg-surface text-sm text-muted hover:text-foreground hover:border-focus transition-colors cursor-pointer"
			>
				<span class="i-mdi:magnify" aria-hidden="true" />
				<span class="hidden sm:inline">Search…</span>
				<kbd class="hidden sm:inline text-[10px] px-1.5 py-0.5 rounded border border-border">
					Ctrl K
				</kbd>
			</button>
			<a
				href="https://github.com/wrikka/opensource-wrikka-com"
				target="_blank"
				rel="noreferrer"
				aria-label="GitHub repository"
				title="GitHub repository"
				class="w-9 h-9 inline-flex items-center justify-center rounded-md border border-border text-muted hover:text-foreground hover:bg-surface transition-colors"
			>
				<span class="i-mdi:github" aria-hidden="true" />
			</a>
			<ThemeToggle />
		</header>
	);
}
