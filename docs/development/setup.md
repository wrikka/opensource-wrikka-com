---
title: Setup
description: Set up the opensource-wrikka-com dev environment
---

# Setup

## Clone & Install

```bash
git clone git@github.com:wrikka/opensource-wrikka-com.git
cd opensource-wrikka-com
bun install
```

## Environment

Create `.env` (gitignored) if you need authenticated pulls or OAuth:

```bash
GITHUB_TOKEN=ghp_...              # pull docs via GitHub API (CI sets this)
GITHUB_CLIENT_ID=...              # optional OAuth
GITHUB_CLIENT_SECRET=...          # optional OAuth
```

Without `GITHUB_TOKEN`, `pull-docs` falls back to `localDir` — sibling checkouts under `D:\newkub` (e.g. `wpackages/bun-packages/docs`).

## Scripts

```bash
bun run dev          # vite dev server
bun run pull-docs    # fetch doc collections into docs/
bun run build        # prebuild (pull-docs + generate-seo) then vite build
bun run preview      # preview the production build
bun run typecheck    # tsc --noEmit
bun run verify       # typecheck + build
bun run deploy       # wrangler deploy — confirm before running
```

## IDE

- TypeScript via `tsconfig.json`; SolidJS JSX via `vite-plugin-solid`
- UnoCSS utilities in `uno.config.ts` (presetWind + `presetIcons` with mdi)
