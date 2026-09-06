import { useParams } from "@tanstack/solid-router";
import { createResource, Show } from "solid-js";
import { DocMarkdown } from "../components/DocMarkdown";
import { DocToc } from "../components/DocToc";
import { createDocsList } from "../lib/data";
import { orpc } from "../lib/orpc";

export function DocPage() {
	const params = useParams({ strict: false });
	const collection = () => params().collection ?? "";
	const docId = () => params().docId ?? "";

	const [docs] = createDocsList(collection);
	const meta = () => (docs() ?? []).find((d) => d.id === docId());

	const [doc] = createResource(
		() => ({ collection: collection(), id: docId() }),
		async ({ collection, id }) => {
			if (!collection || !id) return { content: "" };
			return orpc.docs.get({ collection, id });
		},
	);

	return (
		<div class="flex gap-8 max-w-6xl mx-auto px-6 py-8">
			<article class="flex-1 min-w-0">
				<Show when={meta()}>
					{(m) => (
						<div class="flex items-center gap-2 pb-4 mb-2 border-b border-border text-xs text-muted">
							<span class="i-mdi:folder-open-outline" aria-hidden="true" />
							<code class="font-mono">{m().path}</code>
							<span
								class={`ml-auto inline-flex items-center gap-1 px-2 py-0.5 rounded-full border border-border text-[11px] uppercase tracking-wide ${
									m().type === "rust" ? "text-warning" : "text-accent"
								}`}
							>
								{m().type}
							</span>
						</div>
					)}
				</Show>
				<Show
					when={doc()}
					fallback={
						<p class="text-muted text-sm">
							{doc.error ? "Failed to load document." : "Loading…"}
						</p>
					}
				>
					{(d) => <DocMarkdown source={d().content} />}
				</Show>
			</article>
			<aside class="hidden xl:block w-56 shrink-0">
				<div class="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto">
					<Show when={doc()}>
						{(d) => <DocToc source={d().content} />}
					</Show>
				</div>
			</aside>
		</div>
	);
}
