# @wrikka/bench-deps

## Overview

Benchmark and compare dependencies with detailed metrics

## Metadata

| Field | Value |
| --- | --- |
| Type | NPM |
| Category | CLI Apps |
| Path | `apps/cli/bench-deps/package.json` |
| Version | `0.1.0` |
| License | `MIT` |
| Keywords | benchmark, dependencies, bundle-size, comparison |
| Main | `./dist/index.js` |
| Types | `./dist/index.d.ts` |

## Directory Structure

- 📄 `AGENTS.md`
- 📁 `coverage`
- 📄 `coverage/base.css`
- 📄 `coverage/block-navigation.js`
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
- 📄 `src/index.ts`
- 📁 `src/modules`
- 📁 `src/presentation`
- 📁 `src/shared`
- 📄 `tsconfig.json`
- 📄 `tsconfig.tsbuildinfo`

## Source Files

- `src/adapters/bundle-size/bundle-size-adapter.ts`
- `src/adapters/bundle-size/index.ts`
- `src/adapters/github/github-adapter.ts`
- `src/adapters/github/index.ts`
- `src/adapters/npm/index.ts`
- `src/adapters/npm/npm-adapter.ts`
- `src/index.ts`
- `src/modules/benchmark/application/index.ts`
- `src/modules/benchmark/application/usecases/benchmark-dependencies.ts`
- `src/modules/benchmark/application/usecases/index.ts`
- `src/modules/benchmark/domain/index.ts`
- `src/modules/benchmark/domain/models/dependency.ts`
- `src/modules/benchmark/domain/models/index.ts`
- `src/modules/benchmark/domain/operations/activity.ts`
- `src/modules/benchmark/domain/operations/bundle-size.ts`
- `src/modules/benchmark/domain/operations/index.ts`
- `src/modules/benchmark/domain/validators/dependency.ts`
- `src/modules/benchmark/domain/validators/index.ts`
- `src/modules/benchmark/index.ts`
- `src/modules/benchmark/ports/bundle-size.ts`
- `src/modules/benchmark/ports/github.ts`
- `src/modules/benchmark/ports/index.ts`
- `src/modules/benchmark/ports/npm.ts`
- `src/modules/benchmark/types/index.ts`
- `src/presentation/cli/commands/bench.ts`
- `src/presentation/cli/commands/benchmark.ts`
- `src/presentation/cli/commands/index.ts`
- `src/presentation/cli/formatters/index.ts`
- `src/presentation/cli/formatters/table.ts`
- `src/presentation/cli/index.ts`
- `src/presentation/index.ts`
- `src/shared/constants/constants.ts`
- `src/shared/constants/index.ts`
- `src/shared/errors/app-error.ts`
- `src/shared/errors/index.ts`
- `src/shared/types/index.ts`
- `src/shared/types/option.ts`
- `src/shared/types/result.ts`
- `src/shared/utils/date.ts`
- `src/shared/utils/format.ts`

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
| bench | `bun run src/cli/index.ts` |

## Binaries

- `bench-deps`: `./dist/cli/index.js`

## Dependencies

| Name | Version |
| --- | --- |
| chalk | `catalog:` |
| cli-table3 | `catalog:` |
| octokit | `catalog:` |

## Dev Dependencies

| Name | Version |
| --- | --- |
| @types/node | `catalog:` |
| @wrikka/utils | `workspace:*` |
| bunup | `catalog:` |
| typescript | `catalog:` |

## README

> ![Status](https://img.shields.io/badge/status-in_development-red)

# @wrikka/bench-deps

Benchmark and compare dependencies with detailed metrics — Collect npm metadata, GitHub activity, and bundle size data side by side to make informed dependency choices.

![Bun](https://img.shields.io/badge/Bun-1.3-0097a7)
![TypeScript](https://img.shields.io/badge/TypeScript-7.0-1976d2)

```text
┌──────────────────────────────────────────────────────────┐
│  bench-deps — Dependency Benchmark Tool                  │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │  Package      Bundle    Stars    Activity          │  │
│  │  ───────────  ───────   ──────   ─────────         │  │
│  │  chalk        45.2 KB   22.1k    High              │  │
│  │  picocolors   12.8 KB   1.2k     Medium            │  │
│  │  cli-table3   38.5 KB   800      Medium            │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│  Benchmark Stats                                         │
│  ┌────────────────────────────────────────────────────┐  │
│  │  Mean     142.35 ms                                │  │
│  │  Median   138.12 ms                                │  │
│  │  Min      125.40 ms                                │  │
│  │  Max      163.52 ms                                │  │
│  └────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────┘
```

## Get Started

1. Install — `bun install` in the monorepo root
   ```bash
   bun install
   ```
2. Build — `bun run build`
   ```bash
   bun run build
   ```
3. Run Benchmark — `bun run bench <pkg1> <pkg2>`
   ```bash
   bun run bench chalk picocolors
   ```

## Features

| Icon | Feature | Description |
|:---:|---------|-------------|
| ![icon](https://api.iconify.design/mdi:scale-bathroom.svg?color=%231976d2&width=16) | Multi-Package Comparison | Compare multiple npm packages side by side |
| ![icon](https://api.iconify.design/mdi:github.svg?color=%23388e3c&width=16) | GitHub Activity Metrics | Fetch stars, releases, and activity scores |
| ![icon](https://api.iconify.design/mdi:package-variant-closed.svg?color=%23f57c00&width=16) | Bundle Size Analysis | Measure and compare bundle sizes |
| ![icon](https://api.iconify.design/mdi:table.svg?color=%237b1fa2&width=16) | Table & JSON Output | Format results as table or JSON |
| ![icon](https://api.iconify.design/mdi:repeat.svg?color=%23c2185b&width=16) | Multi-Run Benchmarking | Run multiple times with timing statistics |
| ![icon](https://api.iconify.design/mdi:chart-line.svg?color=%230097a7&width=16) | Activity Scoring | Calculate activity level from GitHub metrics |

## Usage

### Usage via CLI

```bash
bench-deps chalk picocolors --format table
bench-deps chalk picocolors --format json
bench-deps chalk picocolors --github-token <token>
```

```text
┌──────────────────────────────────────────────────────────┐
│  $ bench-deps chalk picocolors                           │
│  Benchmarking dependencies...                            │
│  Packages: chalk, picocolors                             │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │  Package      Bundle    Stars    Activity          │  │
│  │  chalk        45.2 KB   22.1k    High              │  │
│  │  picocolors   12.8 KB   1.2k     Medium            │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│  Successfully benchmarked 2 package(s)                   │
└──────────────────────────────────────────────────────────┘
```

| api | description | options | default |
|-----|-------------|---------|---------|
| `benchmarkCommand(opts)` | Run single benchmark | `packages`, `format`, `githubToken` | `format=table` |
| `benchCommand(opts)` | Run multi-run benchmark with stats | `packages`, `format`, `githubToken`, `runs` | `runs=3` |
| `benchmarkDependencies(pkgs, adapters)` | Core benchmark logic | `github`, `npm`, `bundleSize` adapters | — |
