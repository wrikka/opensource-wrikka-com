---
title: Architecture
description: Internal architecture and conventions of opensource-wrikka-com
---

# Architecture

## Two Halves, One Deploy

```
SPA (Vite build)                Worker (workerd)
src/index.tsx  ──────────────►  src/worker.ts
  @tanstack/solid-router          ├─ RPCHandler(router)  → /rpc/*
  marked (markdown)               └─ ASSETS binding      → static + SPA fallback
```

- `wrangler.toml`: `[assets] directory = "./dist"`, `not_found_handling = "single-page-application"`, `[ai] binding = "AI"`
- `src/worker.ts` wraps oRPC responses with permissive CORS and returns JSON errors via `jsonResponse`

## Docs Pipeline

```
create-docs.config.ts  ──pull-docs──►  docs/<collection>/*.md
      │                                  docs/manifest.json
      │                                  docs/sources.json
      └─ sources[]: repo | branch | docsDir | icon | optional | localDir
```

- `useGitHub = !!GITHUB_TOKEN` — CI pulls via API; local dev uses `localDir` sibling checkouts
- `optional: true` collections are skipped silently when unreachable (private repos)
- `docs/` is generated output — gitignored except this project's own pages (see `.gitignore` negations)

## Conventions

- SPA reads collections through the oRPC client (`src/lib/orpc.ts`), never `fetch` directly
- All RPC payloads validated with `zod`
- Styling via UnoCSS utilities; icons via `i-mdi:*` classes (`presetIcons`)
- No server state — Worker is stateless; docs are static files in `dist/`

## Boundaries

- Content lives in source repos' `docs/` — never edit `docs/<collection>/` here
- Site chrome (components/sections/theme) lives in `src/`
- `src/server/` is the only Worker-side code besides `worker.ts`
