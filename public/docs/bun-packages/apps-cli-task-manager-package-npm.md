# @wrikka/task-manager

## Overview

Task management tool for development workflows

## Metadata

| Field | Value |
| --- | --- |
| Type | NPM |
| Category | CLI Apps |
| Path | `apps/cli/task-manager/package.json` |
| Version | `1.0.0` |
| License | `MIT` |
| Keywords | task-manager, cli, development, typescript |
| Main | `./dist/index.cjs` |
| Module | `./dist/index.js` |
| Types | `./dist/index.d.ts` |

## Directory Structure

- 📄 `AGENTS.md`
- 📁 `bin`
- 📄 `bin/wtask.ts`
- 📄 `biome.jsonc`
- 📄 `bunup.config.ts`
- 📁 `coverage`
- 📄 `coverage/base.css`
- 📄 `coverage/block-navigation.js`
- 📄 `coverage/cache.ts.html`
- 📄 `coverage/clover.xml`
- 📄 `coverage/coverage-final.json`
- 📄 `coverage/favicon.png`
- 📄 `coverage/index.html`
- 📄 `coverage/prettify.css`
- 📄 `coverage/prettify.js`
- 📄 `coverage/sort-arrow-sprite.png`
- 📄 `coverage/sorter.js`
- 📄 `moon.yml`
- 📄 `package.json`
- 📄 `README.md`
- 📁 `src`
- 📁 `src/adapters`
- 📁 `src/exports`
- 📄 `src/index.ts`
- 📁 `src/modules`
- 📁 `src/shared`
- 📁 `test`
- 📄 `test/cache.test.ts`
- 📄 `tsconfig.json`

## Source Files

- `src/adapters/cache/cache-config-factory.ts`
- `src/adapters/cache/cache-config-types.ts`
- `src/adapters/cache/cache-config-validation.ts`
- `src/adapters/cache/cache-config-validators.ts`
- `src/adapters/cache/cache-config.ts`
- `src/adapters/cache/index.ts`
- `src/adapters/cache/memory-cache-operations-lifecycle.ts`
- `src/adapters/cache/memory-cache-operations-read.ts`
- `src/adapters/cache/memory-cache-operations-stats.ts`
- `src/adapters/cache/memory-cache-operations-write.ts`
- `src/adapters/cache/memory-cache-operations.ts`
- `src/adapters/cache/memory-client.ts`
- `src/adapters/cache/memory-init.ts`
- `src/adapters/cache/memory-operations-lifecycle.ts`
- `src/adapters/cache/memory-operations-read.ts`
- `src/adapters/cache/memory-operations-stats.ts`
- `src/adapters/cache/memory-operations-utils.ts`
- `src/adapters/cache/memory-operations-write.ts`
- `src/adapters/cache/memory-operations.ts`
- `src/adapters/cache/memory-store.ts`
- `src/adapters/cache/memory-utils.ts`
- `src/adapters/cache/redis-cache-operations.ts`
- `src/adapters/cache/redis-client-initialization.ts`
- `src/adapters/cache/redis-client.ts`
- `src/adapters/cache/redis-init.ts`
- `src/adapters/cache/redis-utils.ts`
- `src/adapters/cache/s3-cache-operations-lifecycle.ts`
- `src/adapters/cache/s3-cache-operations-read.ts`
- `src/adapters/cache/s3-cache-operations-stats.ts`
- `src/adapters/cache/s3-cache-operations-utils.ts`
- `src/adapters/cache/s3-cache-operations-write.ts`
- `src/adapters/cache/s3-cache-operations.ts`
- `src/adapters/cache/s3-client-init.ts`
- `src/adapters/cache/s3-client.ts`
- `src/adapters/cache/s3-init.ts`
- `src/adapters/cache/s3-operations.ts`
- `src/adapters/cache/s3-utils.ts`
- `src/adapters/input/cli/index.ts`
- `src/adapters/monitoring/logger-core.ts`
- `src/adapters/monitoring/logger-deprecated.ts`

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
| build | `bunup` |
| build:watch | `bunup --watch` |
| typecheck | `tsc --noEmit` |
| typecheck:watch | `tsc --noEmit --watch` |
| lint | `biome check` |
| lint:fix | `biome check --write` |
| format | `biome check --write` |
| test | `vitest run` |
| test:watch | `vitest` |
| test:coverage | `vitest run --coverage` |
| scan | `ast-grep scan` |
| check | `bun run lint && bun run typecheck && bun run scan` |
| verify | `bun run check && bun run test && bun run build` |
| deps:analyze | `bunx depcheck` |
| clean | `bunx rimraf node_modules` |
| security | `bunx audit` |

## Binaries

- `task-manager`: `./dist/index.js`

## Dependencies

| Name | Version |
| --- | --- |
| @aws-sdk/client-s3 | `^3.1121.0` |
| @wrikka/create-cli | `workspace:*` |
| commander | `catalog:` |
| ioredis | `^6.0.0` |
| zod | `catalog:` |

## Dev Dependencies

| Name | Version |
| --- | --- |
| @types/node | `catalog:` |
| @wrikka/utils | `workspace:*` |
| bunup | `catalog:` |
| typescript | `catalog:` |

## README

> ![Status](https://img.shields.io/badge/status-in_development-red)

# @wrikka/task-manager

Task management tool for development workflows — Task runner with multi-format loading, caching, scheduling, plugin system, and progress tracking.

![Bun](https://img.shields.io/badge/Bun-1.3.14-000000)
![TypeScript](https://img.shields.io/badge/TypeScript-7.0.2-3178c6)
![Version](https://img.shields.io/badge/version-1.0.0-1976d2)

```text
┌──────────────────────────────────────────────────────────┐
│  @wrikka/task-manager                                    │
│  Task management for development workflows               │
│                                                          │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌─────────┐  │
│  │  Load    │->│ Validate │->│ Execute  │->| Track   │  │
│  │  Tasks   │  │ Config   │  │ Tasks    │  | Progress│  │
│  └──────────┘  └──────────┘  └──────────┘  └────┬────┘  │
│                                                   │       │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌────▼─────┐  │
│  │  Cache   │  │ Schedule │  │  Plugin  │  │  Report  │  │
│  │  Results │  │  Tasks   │  │  System  │  │  Metrics │  │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘  │
└──────────────────────────────────────────────────────────┘
```

## Get Started

1. Install — `bun add @wrikka/task-manager`
   ```bash
   bun add @wrikka/task-manager
   ```
2. Build — `bun run build`
   ```bash
   cd apps/cli/task-manager && bun run build
   ```
3. Run Dev — `bun run dev`
   ```bash
   bun run dev
   ```
4. Verify — `bun run verify`
   ```bash
   bun run verify
   ```

## Features

| Icon | Feature | Description |
|:---:|---------|-------------|
| ![icon](https://api.iconify.design/mdi:play-circle.svg?color=%231976d2&width=16) | Task Runner | Execute tasks with error handling |
| ![icon](https://api.iconify.design/mdi:file-upload.svg?color=%23388e3c&width=16) | Multi-Format Loader | Load tasks from JSON, TOML, INI files |
| ![icon](https://api.iconify.design/mdi:cog.svg?color=%23d32f2f&width=16) | Config Validation | Parse and validate task configurations |
| ![icon](https://api.iconify.design/mdi:magnify.svg?color=%23f57c00&width=16) | FZF Integration | Fuzzy finding for task selection |
| ![icon](https://api.iconify.design/mdi:content-save.svg?color=%237b1fa2&width=16) | Local Caching | In-memory task output caching |
| ![icon](https://api.iconify.design/mdi:cloud-sync.svg?color=%23c2185b&width=16) | Remote Caching | Redis and S3 shared cache backends |
| ![icon](https://api.iconify.design/mdi:eye.svg?color=%23303f9f&width=16) | Watch Mode | File watching with auto-execution |
| ![icon](https://api.iconify.design/mdi:progress-clock.svg?color=%230097a7&width=16) | Progress Tracking | Real-time task progress callbacks |
| ![icon](https://api.iconify.design/mdi:puzzle-outline.svg?color=%2300796b&width=16) | Plugin System | Extensible hook-based architecture |
| ![icon](https://api.iconify.design/mdi:file-document-outline.svg?color=%23ffa000&width=16) | Task Templates | Predefined reusable task templates |
| ![icon](https://api.iconify.design/mdi:server.svg?color=%231976d2&width=16) | Environment Mgmt | Per-environment configurations |
| ![icon](https://api.iconify.design/mdi:clock-outline.svg?color=%23d32f2f&width=16) | Task Scheduling | Cron-like task scheduling |
| ![icon](https://api.iconify.design/mdi:chart-bar.svg?color=%23f57c00&width=16) | Performance Metrics | Execution timing and optimization |
| ![icon](https://api.iconify.design/mdi:run-fast.svg?color=%237b1fa2&width=16) | Parallel Execution | Run tasks in parallel or sequential |

## Usage

### Usage via CLI

```bash
bunx task-manager --help
bunx task-manager run
bunx task-manager run --parallel
bunx task-manager watch
bunx task-manager list
```

```text
┌──────────────────────────────────────────────────────────┐
│  $ bunx task-manager run                                 │
│                                                          │
│  Loading tasks from tasks.json...                        │
│  Found 5 tasks                                           │
│                                                          │
│  [1/5] Running: build...        done (1.2s)              │
│  [2/5] Running: test...         done (3.4s)              │
│  [3/5] Running: lint...         done (0.8s)              │
│  [4/5] Running: typecheck...    done (2.1s)              │
│  [5/5] Running: scan...         done (1.5s)              │
│                                                          │
│  All tasks completed in 9.0s                             │
└──────────────────────────────────────────────────────────┘
```

### Usage via SDK

```bash
bun add @wrikka/task-manager
```

```typescript
import {
  executeTask,
  executeTasksParallel,
  loadTasksFromJson,
  runTaskManagerCli,
} from '@wrikka/task-manager';

const tasks = await loadTasksFromJson('./tasks.json');
const result = await executeTasksParallel(tasks);
console.log(result);
```

| api | description | options | default |
|-----|-------------|---------|---------|
| `executeTask(task)` | Execute a single task | `task`: Task config | — |
| `executeTasksParallel(tasks)` | Run tasks in parallel | `tasks`: Task[] | — |
| `executeTasksSequential(tasks)` | Run tasks sequentially | `tasks`: Task[] | — |
| `loadTasksFromJson(path)` | Load tasks from JSON | `path`: file path | — |
| `loadTasksFromToml(path)` | Load tasks from TOML | `path`: file path | — |
| `loadTasksFromIni(path)` | Load tasks from INI | `path`: file path | — |
