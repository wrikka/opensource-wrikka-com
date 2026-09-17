---
title: Usage
description: Day-to-day usage of the opensource-wrikka-com site codebase
---

# Usage

## Quick Start

```bash
bun run pull-docs   # pull markdown docs from source repos
bun run dev         # start the Vite dev server
```

## Common Tasks

### Pull latest docs

```bash
bun run pull-docs
```

Fetches each collection in `create-docs.config.ts` into `docs/<id>/` plus `manifest.json`/`sources.json`. Without `GITHUB_TOKEN`, `localDir` resolves sibling repos under `D:\newkub` (e.g. `wpackages/bun-packages/docs`).

### Build for production

```bash
bun run build
```

`prebuild` runs `pull-docs` + `generate-seo.ts`, then `vite build` emits `dist/` for Workers Assets.

### Preview the production build

```bash
bun run preview
```

### Deploy

```bash
bun run deploy   # wrangler deploy — production; confirm before running
```

### Type-check

```bash
bun run typecheck
```

## Adding a Doc Source

Add an entry to `sources` in `create-docs.config.ts`:

```ts
{
	id: "my-repo",
	label: "My Repo",
	description: "What it contains",
	repo: "https://github.com/wrikka/my-repo",
	branch: "main",
	docsDir: "docs",
	icon: "i-mdi:folder",
	optional: true,                       // skip when unreachable
	localDir: findLocal("my-repo", "docs"), // offline fallback
}
```

## Examples From The Codebase

The `bun-packages` collection in `create-docs.config.ts`:

```ts
{
	id: "bun-packages",
	label: "Bun Packages",
	description: "TypeScript tooling, web apps, and the create-docs framework.",
	repo: "https://github.com/wrikka/bun-packages",
	branch: "main",
	docsDir: "docs",
	icon: "i-mdi:nodejs",
	localDir: useGitHub ? undefined : findLocal("bun-packages", "docs"),
}
```

And the Worker's dual routing in `src/worker.ts` — oRPC first, static assets as fallback:

```ts
const handler = new RPCHandler(router, {
	interceptors: [onError((error) => console.error(error))],
});
```
