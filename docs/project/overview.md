---
title: Overview
description: What opensource-wrikka-com is and how it is structured
---

# Overview

`opensource-wrikka-com` is the codebase behind [opensource.wrikka.com](https://opensource.wrikka.com) — a SolidJS single-page application that catalogs every workspace in the wrikka open-source monorepos and renders their markdown documentation. It is deployed as a Cloudflare Worker that serves the Vite build output through Workers Assets, with an oRPC API layer and a Workers AI binding for translations.

## Architecture

- `src/index.tsx` — SolidJS app entry (SPA, `@tanstack/solid-router`)
- `src/worker.ts` — Cloudflare Worker entry: oRPC `RPCHandler`, CORS, static-asset fallback
- `src/server/router.ts` — oRPC procedures (docs manifest, search, translate via `AI` binding)
- `src/lib/orpc.ts` — typed oRPC client for the SPA
- `src/site.ts` / `src/app-config.ts` / `src/data-source.ts` — site metadata, app config, doc source loading
- `create-docs.config.ts` — which repos to pull docs from (`@wrikka/create-docs` `pull-docs`)
- `scripts/generate-seo.ts` — prebuild SEO artifacts (sitemap, robots, rss, llm.txt, search index)

## Request Flow

1. `bun run pull-docs` fetches `docs/` trees from configured repos (GitHub API with `GITHUB_TOKEN`, or sibling `localDir` offline) into `docs/<collection>/` + `manifest.json`/`sources.json`
2. `bun run build` — `prebuild` pulls docs + generates SEO files, then `vite build` emits `dist/`
3. `wrangler deploy` — `src/worker.ts` serves `dist/` via the `ASSETS` binding (`not_found_handling: single-page-application`); `/rpc/*` goes through the oRPC router

## Tech Stack

| No. | Area | Choice | Why |
|-----|------|--------|-----|
| 1 | UI framework | SolidJS 1.9 | fine-grained reactivity, small bundle |
| 2 | Router | `@tanstack/solid-router` | typed SPA routing |
| 3 | Build | Vite 8 + `vite-plugin-solid` | fast dev/build |
| 4 | Styling | UnoCSS 66 (`uno.config.ts`) + `@iconify-json/mdi` | atomic CSS + icons |
| 5 | API | oRPC (`@orpc/server` + `@orpc/client`) | end-to-end typed RPC |
| 6 | Validation | zod 4 | schema-validated RPC payloads |
| 7 | Markdown | `marked` | render pulled docs in SPA |
| 8 | Runtime | Bun + Cloudflare Workers (workerd) | dev loop + edge deploy |
| 9 | Docs pipeline | `@wrikka/create-docs` 0.2.4 | pull/generate markdown docs per repo |
| 10 | AI | Workers AI binding | doc translation |

## Key Concepts

- **Collections** — one per source repo (`bun-packages`, `rust-apps`, `rust-packages`), defined in `create-docs.config.ts`
- **SPA fallback** — Workers Assets serves `index.html` for unknown paths; routing is client-side
- **Optional sources** — private repos marked `optional: true` are skipped when unreachable

## Project Structure

```
src/
  index.tsx        SPA entry
  worker.ts        Worker entry (oRPC + assets)
  site.ts          site metadata
  app-config.ts    app config
  data-source.ts   doc source loading
  server/router.ts oRPC procedures
  lib/orpc.ts      typed client
create-docs.config.ts  doc sources
scripts/generate-seo.ts SEO artifacts
docs/            generated site content + this documentation
```
