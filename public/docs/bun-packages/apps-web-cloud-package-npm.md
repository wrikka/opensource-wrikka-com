# @wrikka/cloud

## Overview

Wrikka cloud platform dashboard

## Metadata

| Field | Value |
| --- | --- |
| Type | NPM |
| Category | Web Apps |
| Path | `apps/web/cloud/package.json` |
| Version | `0.1.0` |
| Keywords | cloud, dashboard, elysia, bun, typescript |
| Main | `./src/index.ts` |
| Types | `./src/index.ts` |

## Directory Structure

- 📄 `AGENTS.md`
- 📄 `biome.jsonc`
- 📄 `moon.yml`
- 📄 `package.json`
- 📄 `README.md`
- 📁 `src`
- 📄 `src/index.ts`
- 📁 `src/presentation`
- 📄 `tsconfig.json`

## Source Files

- `src/index.ts`
- `src/presentation/web/dashboard.ts`
- `src/presentation/web/products.ts`

## Quick Start

### Install

```bash
bun install
```

### Build

```bash
bun run build
```

### Develop

```bash
bun run dev
```

### Test

```bash
bun run test
```

### Lint

```bash
bun run lint
```

## Scripts

| Script | Command |
| --- | --- |
| dev | `bun run src/index.ts` |
| build | `bun build src/index.ts --outdir dist --target bun` |
| typecheck | `bunx tsc --noEmit` |
| lint | `biome check` |
| lint:fix | `biome check --write` |
| format | `biome check --write` |
| test | `vitest run --passWithNoTests` |
| scan | `bunx ast-grep scan` |
| check | `bun run lint && bun run typecheck && bun run scan` |
| verify | `bun run check && bun run test && bun run build` |

## Dependencies

| Name | Version |
| --- | --- |
| @wrikka/analytics | `workspace:*` |
| elysia | `catalog:` |

## Dev Dependencies

| Name | Version |
| --- | --- |
| @types/bun | `catalog:` |
| typescript | `catalog:` |
| vitest | `catalog:` |

## README

# @wrikka/cloud

Wrikka cloud platform dashboard. A Vercel-inspired web dashboard for exploring
cloud products. Products are listed with their status; most are marked
"coming soon" while the first active product is `Notification` available via
`packages/notification`.

## Commands

- `bun run dev` — start the platform dashboard
- `bun run build` — bundle for Bun
- `bun run typecheck` — type check
- `bun run lint` — Biome check
- `bun run check` — lint + typecheck + scan
- `bun run verify` — check + test + build

## Architecture

- `elysia` for HTTP server
- server-side HTML dashboard at `/`
- sidebar + product card grid
