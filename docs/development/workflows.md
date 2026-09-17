---
title: Workflows
description: Development workflows and CI for opensource-wrikka-com
---

# Workflows

## Daily Loop

```bash
bun run pull-docs   # refresh doc collections
bun run dev         # vite dev server
bun run typecheck   # after edits
```

## Before Merge

```bash
bun run verify   # typecheck + build (includes pull-docs + generate-seo)
```

## Deploy

```bash
bun run deploy   # wrangler deploy — production; get user confirmation first
```

## CI

`.github/` contains the deploy workflow: CI sets `GITHUB_TOKEN`, runs `pull-docs` (GitHub API path), builds, and `wrangler deploy`s.

## Adding a Doc Source

1. Add a `sources` entry in `create-docs.config.ts` (id, label, description, repo, docsDir, icon, optional, localDir)
2. `bun run pull-docs` — verify the collection lands in `docs/<id>/` and `manifest.json`
3. Collections appear in the site nav automatically via the manifest

## Bumping `create-docs`

The site tracks `@wrikka/create-docs` releases (recent commits bump 0.2.3 → 0.2.4). Update `package.json`, `bun install`, then `bun run verify`.
