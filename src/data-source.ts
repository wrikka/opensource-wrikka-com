import { createStaticDataSource } from "@wrikka/create-docs/solid";
import sources from "../docs/sources.json";

const allFiles = import.meta.glob("../docs/**/*.{md,yml,yaml}", {
	query: "?raw",
	import: "default",
	eager: true,
}) as Record<string, string>;

const collections = sources.map((meta) => {
	const prefix = `../${meta.id}/`;
	const files = Object.fromEntries(
		Object.entries(allFiles).filter(([p]) => p.startsWith(prefix)),
	);
	return { meta, files };
});

export const dataSource = createStaticDataSource({ collections });
