---
title: Testing
description: How to verify opensource-wrikka-com
---

# Testing

## Commands

```bash
bun run typecheck   # tsc --noEmit
bun run build       # full build incl. pull-docs + SEO generation
bun run verify      # typecheck + build
bun run preview     # serve the production build locally
```

## Test Types

| No. | Type | Runner | Command | Scope |
|-----|------|--------|---------|-------|
| 1 | Typecheck | tsc | `bun run typecheck` | `src/**/*.ts(x)` |
| 2 | Build smoke | Vite + wrangler | `bun run build && bun run preview` | full site |
| 3 | Deploy check | wrangler | `bun run deploy` then curl `opensource.wrikka.com` | production |

There is no unit-test runner in this project — verification is typecheck + build + preview smoke.

## Known Gaps

- No automated e2e; visual verification via `bun run dev`/`preview`
- `optional: true` collections fail silently when their repo is unreachable — check `docs/manifest.json` after `pull-docs` if a collection seems missing
- `AI` translate path requires a deployed Worker (or `wrangler dev` with the binding) — not exercisable via `vite dev` alone
