---
title: Features
description: Complete list of shipped features in opensource-wrikka-com
---

# Features

## Docs Catalog

| No. | Feature | Description | Module | Status |
|-----|---------|-------------|--------|--------|
| 1 | Multi-repo doc pull | fetch `docs/` from configured repos via `pull-docs` | `create-docs.config.ts` | shipped |
| 2 | Collection manifest | `docs/manifest.json` — id/label/icon/repoUrl per collection | `pull-docs` output | shipped |
| 3 | Local fallback | `localDir` sibling-repo resolution when no `GITHUB_TOKEN` | `create-docs.config.ts` | shipped |
| 4 | Markdown rendering | `marked` renders pulled pages in the SPA | `src/` | shipped |
| 5 | Workspace catalog | per-workspace pages for bun-packages/rust repos | site sections | shipped |

## Site & UI

| No. | Feature | Description | Module | Status |
|-----|---------|-------------|--------|--------|
| 6 | SolidJS SPA | typed routing, theme, components | `src/` | shipped |
| 7 | Icons | `@iconify-json/mdi` via UnoCSS presetIcons | `uno.config.ts` | shipped |
| 8 | Search index | generated `public/search-index.json` | `scripts/generate-seo.ts` | shipped |

## API & Backend

| No. | Feature | Description | Module | Status |
|-----|---------|-------------|--------|--------|
| 9 | oRPC API | typed procedures — manifest, docs, search | `src/server/router.ts` | shipped |
| 10 | CORS wrapper | permissive `Access-Control-Allow-Origin` on responses | `src/worker.ts` | shipped |
| 11 | Workers AI translate | `AI` binding for doc translation | `wrangler.toml`, router | shipped |
| 12 | GitHub OAuth fields | `GITHUB_CLIENT_ID`/`GITHUB_CLIENT_SECRET` env support | `src/worker.ts` | shipped |

## SEO & Distribution

| No. | Feature | Description | Module | Status |
|-----|---------|-------------|--------|--------|
| 13 | SEO generation | sitemap/robots/rss/llm.txt/llms*.txt at prebuild | `scripts/generate-seo.ts` | shipped |
| 14 | Edge deploy | Cloudflare Worker + Workers Assets, SPA fallback | `wrangler.toml` | shipped |
| 15 | i18n merge | folder-merge translate pipeline | pull-docs pipeline | shipped |
