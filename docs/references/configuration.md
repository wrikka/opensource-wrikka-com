---
title: Configuration
description: All configuration options and environment variables
---

# Configuration

## Environment Variables

| No. | Name | Required | Default | Description |
|-----|------|----------|---------|-------------|
| 1 | `GITHUB_TOKEN` | no (CI sets it) | — | `pull-docs` GitHub API auth; without it, `localDir` fallback is used |
| 2 | `GITHUB_CLIENT_ID` | no | — | GitHub OAuth app id (Worker env) |
| 3 | `GITHUB_CLIENT_SECRET` | no | — | GitHub OAuth secret (Worker env) |

## Config Files

| No. | File | Purpose |
|-----|------|---------|
| 1 | `wrangler.toml` | Worker name, `compatibility_date`, `ASSETS` binding (`./dist` + SPA fallback), `AI` binding |
| 2 | `create-docs.config.ts` | doc `sources` — repo, branch, `docsDir`, icon, `optional`, `localDir` |
| 3 | `vite.config.ts` | Vite + `vite-plugin-solid` |
| 4 | `uno.config.ts` | UnoCSS presets — Wind + `presetIcons` (mdi) |
| 5 | `tsconfig.json` | TS strict, JSX for SolidJS |
| 6 | `.gitignore` | `docs/*` ignored except project-owned doc paths |

## Example

```bash
# .env
GITHUB_TOKEN=ghp_...           # pull docs from GitHub (CI path)
GITHUB_CLIENT_ID=...           # optional OAuth
GITHUB_CLIENT_SECRET=...       # optional OAuth
```
