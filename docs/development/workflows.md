---
title: Workflows
description: Repeatable workflows — commands, scripts, CI/CD
---

# Workflows

## Daily Commands

| No. | Task | Command |
|-----|------|---------|
| 1 | Dev server | `bun run dev` |
| 2 | Pull docs | `bun run pull-docs` |
| 3 | Build | `bun run build` |
| 4 | Preview build | `bun run preview` |
| 5 | Typecheck | `bun run typecheck` |
| 6 | Verify | `bun run verify` |
| 7 | Deploy | `bun run deploy` |

## Scripts

| No. | Script | Purpose |
|-----|--------|---------|
| 1 | `pull-docs` | `create-docs` fetches each source repo's `docs/` into `docs/<id>/` + `manifest.json` |
| 2 | `prebuild` | runs `pull-docs` + `scripts/generate-seo.ts` before every build |
| 3 | `generate-seo` | emits `public/sitemap.xml`, `robots.txt`, `rss.xml`, `llm*.txt`, `search-index.json` |
| 4 | `verify` | `typecheck` + `build` — the merge gate |

## CI/CD

`.github/` deploy workflow: sets `GITHUB_TOKEN`, runs `pull-docs` (GitHub API path), `bun run build`, then `wrangler deploy`. Manual deploys use `bun run deploy` — confirm before running.
