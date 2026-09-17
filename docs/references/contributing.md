---
title: Contributing
description: How to contribute to the project
---

# Contributing

## Setup

```bash
git clone git@github.com:wrikka/opensource-wrikka-com.git
cd opensource-wrikka-com
bun install
bun run pull-docs   # needs GITHUB_TOKEN or sibling checkouts
bun run dev
```

## Workflow

1. Open an issue in `wrikka/opensource-wrikka-com` before large changes
2. Conventional commits (`feat:`, `fix:`, `docs:`, `chore:`)
3. `bun run verify` (typecheck + build) must pass before merge
4. Deploys are manual — `bun run deploy` only after maintainer confirmation

## Code Style

- TypeScript strict, SolidJS JSX
- UnoCSS utilities + `i-mdi:*` icons — no new CSS frameworks
- Server code stays in `src/worker.ts` + `src/server/`; SPA never imports it
- Never edit `docs/<collection>/` — generated; fix the source repo's `docs/`

## Reporting Issues

Include: which collection/page, `bun run pull-docs` output if doc-related, browser + URL for rendering bugs, and `bun run verify` output for build issues.
