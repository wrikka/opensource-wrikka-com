import { createStaticDataSource } from "@wrikka/create-docs/solid";
import sources from "../docs/sources.json";

const allFiles = import.meta.glob("../docs/**/*.{md,yml,yaml}", {
	query: "?raw",
	import: "default",
	eager: true,
}) as Record<string, string>;

// AI-translated docs committed to the repo, laid out as
// i18n/<collection>/<locale>/<file>. Merged into each collection so
// translated pages appear under e.g. /bun-packages/th--index.
const i18nFiles = import.meta.glob("../i18n/**/*.{md,mdx}", {
	query: "?raw",
	import: "default",
	eager: true,
}) as Record<string, string>;

const collections = sources.map((meta) => {
	// Pulled files live under docs/docs/<id>/; remap glob keys to the
	// `../<id>/…` shape that createStaticDataSource expects so doc ids stay clean.
	const prefix = `../docs/docs/${meta.id}/`;
	const i18nPrefix = `../i18n/${meta.id}/`;
	const files = Object.fromEntries(
		[
			...Object.entries(allFiles).filter(([p]) => p.startsWith(prefix)),
			...Object.entries(i18nFiles).filter(([p]) =>
				p.startsWith(i18nPrefix),
			),
		].map(([p, v]) => {
			const rel = p.startsWith(i18nPrefix)
				? p.slice(i18nPrefix.length)
				: p.slice(prefix.length);
			return [`../${meta.id}/${rel}`, v];
		}),
	);
	return { meta, files };
});

export const dataSource = createStaticDataSource({ collections });
