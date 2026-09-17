---
title: Installation
description: How to install and set up opensource-wrikka-com
---

# Installation

## Requirements

| No. | Tool | Version | Check |
|-----|------|---------|-------|
| 1 | Bun | `>=1.0` | `bun --version` |
| 2 | Wrangler | 4 (dev dep) | `bunx wrangler --version` |
| 3 | `GITHUB_TOKEN` | optional | needed only to pull docs from GitHub |

## Install

```bash
git clone git@github.com:wrikka/opensource-wrikka-com.git
cd opensource-wrikka-com
bun install
```

## Configuration

- `create-docs.config.ts` — doc sources (repos, branch, `docsDir`, `localDir` fallback)
- `wrangler.toml` — Worker name, `compatibility_date`, `ASSETS` binding (`./dist`, SPA fallback), `AI` binding
- `.env` (gitignored) — `GITHUB_TOKEN`, `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET` as needed

## Verify

```bash
bun run pull-docs   # fetch doc sources into docs/
bun run dev         # vite dev server
```
