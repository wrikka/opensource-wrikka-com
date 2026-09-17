---
title: Architecture
description: System structure, conventions and boundaries
---

# Architecture

## Layers / Modules

| No. | Layer | Path | Responsibility | Depends On |
|-----|-------|------|----------------|------------|
| 1 | SPA entry | `src/index.tsx` | boot SolidJS app, mount router | `site.ts`, `app-config.ts` |
| 2 | Site config | `src/site.ts`, `src/app-config.ts` | site metadata, nav, theme config | — |
| 3 | Doc loading | `src/data-source.ts` | load pulled collections | `manifest.json`, `marked` |
| 4 | API client | `src/lib/orpc.ts` | typed oRPC client | `src/server/router.ts` types |
| 5 | Worker entry | `src/worker.ts` | route `/rpc/*` vs `ASSETS`, CORS | `router.ts`, `wrangler.toml` |
| 6 | oRPC router | `src/server/router.ts` | procedures (docs, search, translate) | `zod`, `AI` binding |
| 7 | Docs pipeline | `create-docs.config.ts` | declare source repos + pull policy | `@wrikka/create-docs` |
| 8 | SEO | `scripts/generate-seo.ts` | emit static SEO artifacts | pulled docs |

## Conventions

- SPA→server traffic goes through `src/lib/orpc.ts` — never raw `fetch`
- RPC payloads validated with `zod`
- Styling = UnoCSS utilities; icons = `i-mdi:*` (`presetIcons`)
- `docs/` is generated output — only project-owned paths are committed (`.gitignore` negations)

## Boundaries

- `src/` → `src/lib` → `src/server` — one direction; server never imports SPA code
- `docs/<collection>/` is read-only input; site code reads it, never writes
- Worker (`worker.ts`, `server/`) is the only edge-side code

## Data Flow

```
pull-docs ──► docs/<id>/*.md + manifest.json ──► vite build ──► dist/
generate-seo ──► public/{sitemap,rss,llm*}.xml|txt
request ──► worker.ts ──► /rpc/* → router.ts ──► zod/AI
                        └─ else   → ASSETS (dist/) → SPA fallback
```
