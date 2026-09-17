---
title: Deployment
description: How opensource-wrikka.com is deployed to Cloudflare Workers
---

# Deployment

## Production

Live at [opensource.wrikka.com](https://opensource.wrikka.com) — Cloudflare Worker `opensource-wrikka-com` serving `dist/` via Workers Assets with SPA fallback.

## CI Pipeline (`.github/workflows/deploy.yml`)

| No. | Step | Detail |
|-----|------|--------|
| 1 | Trigger | `push` to `main`, `repository_dispatch` (`create-docs-updated`), `workflow_dispatch` |
| 2 | Checkout + setup | `actions/checkout@v4`, `setup-bun@v2`, `setup-node@v4` (Node 22 for Wrangler) |
| 3 | Install | `bun install` |
| 4 | Pull docs | `bun run pull-docs` with `GH_PAT || GITHUB_TOKEN` |
| 5 | Typecheck | `bun run typecheck` |
| 6 | Build | `bun run build` (incl. `generate-seo.ts`) |
| 7 | Deploy gate | skips deploy if `CLOUDFLARE_API_TOKEN` unset |
| 8 | Deploy | `bunx wrangler deploy` with `CLOUDFLARE_API_TOKEN` + `CLOUDFLARE_ACCOUNT_ID` |

## Secrets

| No. | Secret | Purpose |
|-----|--------|---------|
| 1 | `CLOUDFLARE_API_TOKEN` | `wrangler deploy` auth |
| 2 | `CLOUDFLARE_ACCOUNT_ID` | target account |
| 3 | `GH_PAT` | pull private sources (`rust-packages`) |

## Manual Deploy

```bash
bun run build    # includes pull-docs + SEO
bun run deploy   # wrangler deploy — production; confirm first
```

## Rollback

Workers keep version history — `wrangler rollback` (or redeploy a known-good commit) restores the previous deployment. Verify with `curl https://opensource.wrikka.com`.

## Translate Workflow (`.github/workflows/translate.yml`)

Manual `workflow_dispatch` — inputs: `locales` (e.g. `th,ja`), `apply` (bool), `limit`. Dry-run by default; with `apply` + `TRANSLATE_API_KEY`/`OPENAI_API_KEY` (+ optional `TRANSLATE_PROVIDER`/`TRANSLATE_BASE_URL`/`TRANSLATE_MODEL`) it writes translations and commits back to `main`.
