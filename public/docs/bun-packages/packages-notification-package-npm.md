# @wrikka/notification

## Overview

Notification infrastructure inspired by Novu

## Metadata

| Field | Value |
| --- | --- |
| Type | NPM |
| Category | Notification |
| Path | `packages/notification/package.json` |
| Version | `0.1.0` |
| Keywords | notification, elysia, bun, typescript, mcp, sdk |
| Main | `./src/index.ts` |
| Types | `./src/index.ts` |

## Directory Structure

- 📄 `AGENTS.md`
- 📄 `biome.jsonc`
- 📄 `moon.yml`
- 📄 `package.json`
- 📄 `README.md`
- 📁 `src`
- 📁 `src/adapters`
- 📁 `src/application`
- 📁 `src/domain`
- 📄 `src/index.ts`
- 📁 `src/presentation`
- 📁 `src/sdk`
- 📄 `tsconfig.json`

## Source Files

- `src/adapters/db/sqlite-store.ts`
- `src/adapters/http/server.ts`
- `src/adapters/mcp/index.ts`
- `src/adapters/skills/index.ts`
- `src/application/usecases/create-notification.ts`
- `src/application/usecases/create-subscriber.ts`
- `src/application/usecases/list-notifications.ts`
- `src/application/usecases/list-subscribers.ts`
- `src/application/usecases/trigger-notification.ts`
- `src/domain/entities/notification.ts`
- `src/domain/entities/subscriber.ts`
- `src/domain/repositories/notification-repository.ts`
- `src/index.ts`
- `src/presentation/mobile/index.ts`
- `src/presentation/web/dashboard.ts`
- `src/presentation/web/index.ts`
- `src/sdk/index.ts`

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
| @sinclair/typebox | `^0.34.52` |
| elysia | `catalog:` |

## Dev Dependencies

| Name | Version |
| --- | --- |
| @types/bun | `catalog:` |
| typescript | `catalog:` |
| vitest | `catalog:` |

## README

# @wrikka/notification

Notification infrastructure inspired by [Novu](https://novu.co/).
No authentication yet — working app first.

## Features

- **Web**: responsive dashboard at `http://localhost:3000`
- **Mobile**: dashboard is mobile-ready via responsive web
- **SDK**: TypeScript client in `src/sdk/index.ts`
- **MCP**: JSON-RPC MCP endpoint at `POST /mcp`
- **Skills**: Devin skill package in `.devin/skills/notification/`
- **API**: in-memory notification/subscriber/trigger service

## Scripts

- `bun run dev` — start server on `PORT` (default 3000)
- `bun run build` — build with `bun build`
- `bun run typecheck` — `tsc --noEmit`
- `bun run test` — `vitest`
- `bun run verify` — full verify

## API

- `GET /health`
- `GET /api/notifications`
- `POST /api/notifications`
- `GET /api/subscribers`
- `POST /api/subscribers`
- `POST /api/trigger`
- `POST /mcp`

## Architecture

Clean Architecture:

- `src/domain` — entities and repository interfaces
- `src/application` — use cases
- `src/adapters` — Elysia HTTP, in-memory DB, MCP, skills
- `src/presentation` — web dashboard and mobile entry
- `src/sdk` — public SDK

## Stack

- Bun
- Elysia
- TypeScript
