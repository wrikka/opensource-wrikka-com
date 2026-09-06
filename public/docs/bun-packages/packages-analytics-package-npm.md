# @wrikka/analytics

## Overview

Product and usage analytics

## Metadata

| Field | Value |
| --- | --- |
| Type | NPM |
| Category | Analytics |
| Path | `packages/analytics/package.json` |
| Version | `0.1.0` |
| Keywords | analytics, solid-js, arktype, drizzle, bun, typescript |
| Main | `./src/index.ts` |
| Types | `./dist/src/index.d.ts` |

## Directory Structure

- 📄 `AGENTS.md`
- 📄 `biome.jsonc`
- 📄 `moon.yml`
- 📄 `package.json`
- 📄 `README.md`
- 📁 `src`
- 📁 `src/adapters`
- 📄 `src/index.test.ts`
- 📄 `src/index.ts`
- 📁 `src/modules`
- 📁 `src/presentation`
- 📁 `src/shared`
- 📄 `tsconfig.json`

## Source Files

- `src/adapters/config/config-defaults.ts`
- `src/adapters/config/config-provider.ts`
- `src/adapters/config/index.ts`
- `src/adapters/db/index.ts`
- `src/adapters/db/local-storage.ts`
- `src/adapters/db/repositories/event-repository.ts`
- `src/adapters/db/schema/events.ts`
- `src/adapters/db/schema/funnels.ts`
- `src/adapters/db/schema/index.ts`
- `src/adapters/db/schema/sessions.ts`
- `src/adapters/db/storage/consent.ts`
- `src/adapters/db/storage/index.ts`
- `src/adapters/index.ts`
- `src/adapters/infrastructure/analytics-http.ts`
- `src/adapters/infrastructure/batching/event-batcher.ts`
- `src/adapters/infrastructure/batching/index.ts`
- `src/adapters/infrastructure/cache/index.ts`
- `src/adapters/infrastructure/cache/memory-cache.ts`
- `src/adapters/infrastructure/events/event-processor.ts`
- `src/adapters/infrastructure/events/index.ts`
- `src/adapters/infrastructure/http/fetch-client.ts`
- `src/adapters/infrastructure/http/index.ts`
- `src/adapters/infrastructure/index.ts`
- `src/adapters/infrastructure/session/index.ts`
- `src/adapters/infrastructure/session/session-manager.ts`
- `src/adapters/solid/index.ts`
- `src/adapters/solid/runtime/index.ts`
- `src/adapters/solid/runtime/plugin.ts`
- `src/adapters/solid/runtime/types.ts`
- `src/index.test.ts`
- `src/index.ts`
- `src/modules/analytics/application/index.ts`
- `src/modules/analytics/application/usecases/calculate-funnel.ts`
- `src/modules/analytics/application/usecases/calculate-retention.ts`
- `src/modules/analytics/application/usecases/index.ts`
- `src/modules/analytics/application/usecases/track-event.ts`
- `src/modules/analytics/application/workflows/index.ts`
- `src/modules/analytics/domain/events/analytics-events.ts`
- `src/modules/analytics/domain/events/index.ts`
- `src/modules/analytics/domain/index.ts`

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
| arktype | `catalog:` |
| drizzle-orm | `catalog:` |
| solid-js | `catalog:` |

## Dev Dependencies

| Name | Version |
| --- | --- |
| @types/bun | `catalog:` |
| typescript | `catalog:` |
| vitest | `catalog:` |

## README

# @wrikka/analytics

Product and usage analytics SDK with a Clean Architecture core and optional SolidJS presentation layer.

## Features

- Event, session, user, funnel, retention, and web vital models
- Pure domain operations for tracking and analysis
- In-memory local storage adapter
- Drizzle ORM PostgreSQL schema definitions
- SolidJS dashboard components and composables

## Scripts

- `bun run dev` — run entry point
- `bun run build` — bundle for Bun
- `bun run typecheck` — `tsc --noEmit`
- `bun run test` — `vitest`
- `bun run verify` — full verify

## Architecture

- `src/modules/analytics` — domain, application, and ports
- `src/adapters` — storage, HTTP, and SolidJS runtime adapters
- `src/presentation` — SolidJS components and HTTP handlers
- `src/shared` — shared kernel and utilities

## Stack

- Bun
- TypeScript
- SolidJS
- ArkType
- Drizzle ORM
