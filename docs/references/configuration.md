---
title: Configuration
description: Config files and environment variables for opensource-wrikka-com
---

# Configuration

## `wrangler.toml`

| No. | Key | Value | Purpose |
|-----|-----|-------|---------|
| 1 | `name` | `opensource-wrikka-com` | Worker name |
| 2 | `main` | `src/worker.ts` | Worker entry |
| 3 | `compatibility_date` | `2026-08-30` | workerd compat |
| 4 | `[assets] directory` | `./dist` | Vite build output |
| 5 | `[assets] binding` | `ASSETS` | static file binding |
| 6 | `[assets] not_found_handling` | `single-page-application` | SPA fallback |
| 7 | `[ai] binding` | `AI` | Workers AI (translate) |

## Environment Variables

| No. | Var | Where | Purpose |
|-----|-----|-------|---------|
| 1 | `GITHUB_TOKEN` | CI / `.env` | `pull-docs` GitHub API auth |
| 2 | `GITHUB_CLIENT_ID` | `.env` / Worker secret | OAuth (optional) |
| 3 | `GITHUB_CLIENT_SECRET` | `.env` / Worker secret | OAuth (optional) |

## `create-docs.config.ts`

Per-source fields: `id`, `label`, `description`, `repo`, `branch`, `docsDir`, `icon`, `optional`, `localDir`. `localDir` resolves `../wpackages/...` → `../...` → `../../...` for offline pulls.

## `uno.config.ts`

UnoCSS presets — Wind utilities + `presetIcons` with `@iconify-json/mdi` (`i-mdi:*` classes).

## `.gitignore` Notes

`docs/*` is ignored (generated content) except project-owned paths: `docs/index.md`, `docs/project/`, `docs/getting-started/`, `docs/development/`, `docs/references/`, `docs/roadmap/`. Generated SEO artifacts under `public/` are ignored too.
