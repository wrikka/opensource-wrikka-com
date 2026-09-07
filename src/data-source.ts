import { createStaticDataSource } from "@wrikka/create-docs/solid";
import sources from "../docs/sources.json";

const allFiles = import.meta.glob("../docs/**/*.{md,yml,yaml}", {
	query: "?raw",
	import: "default",
	eager: true,
}) as Record<string, string>;

const collections = sources.map((meta) => {
	// Pulled files live under docs/docs/<id>/; remap glob keys to the
	// `../<id>/…` shape that createStaticDataSource expects so doc ids stay clean.
	const prefix = `../docs/docs/${meta.id}/`;
	const files = Object.fromEntries(
		Object.entries(allFiles)
			.filter(([p]) => p.startsWith(prefix))
			.map(([p, v]) => [`../${meta.id}/${p.slice(prefix.length)}`, v]),
	);
	return { meta, files };
});

export const dataSource = createStaticDataSource({ collections });
