/**
 * Generates sitemap.xml, robots.txt, rss.xml, and llms.txt into public/
 * from docs/manifest.json (produced by pull-docs).
 */
import { readFile, writeFile } from "node:fs/promises";
import {
	generateLlmsTxt,
	generatePluginsLlmsTxt,
	generateRobots,
	generateRss,
	generateSitemap,
} from "@wrikka/create-docs/seo";
import { site } from "../src/site";

interface Manifest {
	collections: {
		id: string;
		label: string;
		icon?: string;
		description?: string;
		repoUrl?: string;
	}[];
	docs: Record<
		string,
		{
			id: string;
			label: string;
			category: string;
			description: string;
			path: string;
			type: "rust" | "npm" | "api" | "md";
		}[]
	>;
}

async function main() {
	const manifest = JSON.parse(
		await readFile("docs/manifest.json", "utf-8"),
	) as Manifest;

	const input = {
		site: { title: site.title, description: site.description, url: site.url },
		collections: manifest.collections,
		docs: new Map(Object.entries(manifest.docs)),
	};

	await writeFile("public/sitemap.xml", generateSitemap(input), "utf-8");
	await writeFile("public/robots.txt", generateRobots(site.url), "utf-8");
	await writeFile("public/rss.xml", generateRss(input), "utf-8");

	const llms = generateLlmsTxt(input);
	await writeFile("public/llm.txt", llms, "utf-8");
	await writeFile("public/llms.txt", llms, "utf-8");
	await writeFile(
		"public/llms-plugins.txt",
		generatePluginsLlmsTxt([], site.title),
		"utf-8",
	);

	const urlCount =
		1 +
		Object.values(manifest.docs).reduce(
			(n, list) => n + list.length,
			0,
		) +
		manifest.collections.length;
	console.log(
		`Generated sitemap.xml (~${urlCount} urls), robots.txt, rss.xml, llm.txt, llms.txt, llms-plugins.txt`,
	);
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
