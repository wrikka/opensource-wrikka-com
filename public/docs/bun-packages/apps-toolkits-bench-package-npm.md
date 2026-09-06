# @wrikka/bench

## Overview

High-performance benchmarking library - extracted from wbench app

## Metadata

| Field | Value |
| --- | --- |
| Type | NPM |
| Category | Toolkits Apps |
| Path | `apps/toolkits/bench/package.json` |
| Version | `0.1.0` |
| License | `MIT` |
| Keywords | benchmark, performance, measure, timing, bun, typescript |
| Main | `./dist/index.cjs` |
| Module | `./dist/index.js` |
| Types | `./dist/index.d.ts` |

## Directory Structure

- 📄 `AGENTS.md`
- 📄 `bunup.config.ts`
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
- 📄 `src/index.test.ts`
- 📄 `src/index.ts`
- 📁 `src/modules`
- 📁 `src/shared`
- 📄 `tsconfig.json`
- 📄 `tsconfig.tsbuildinfo`

## Source Files

- `src/adapters/alerting/detection.ts`
- `src/adapters/alerting/notifiers.ts`
- `src/adapters/alerting/types.ts`
- `src/adapters/alerting/utils.ts`
- `src/adapters/analysis/diff-formatter.ts`
- `src/adapters/analyzers/analyzers.ts`
- `src/adapters/analyzers/index.ts`
- `src/adapters/cli/cli.ts`
- `src/adapters/cli/help.ts`
- `src/adapters/cli/index.ts`
- `src/adapters/config/config-loader.ts`
- `src/adapters/config/config.ts`
- `src/adapters/config/defaults.ts`
- `src/adapters/config/index.ts`
- `src/adapters/config/types.ts`
- `src/adapters/controllers/controllers.ts`
- `src/adapters/controllers/index.ts`
- `src/adapters/detection.ts`
- `src/adapters/diff-formatter.ts`
- `src/adapters/file-writer-api.ts`
- `src/adapters/file-writer-formatters.ts`
- `src/adapters/file-writer-types.ts`
- `src/adapters/file-writer.ts`
- `src/adapters/formatters/formatters.ts`
- `src/adapters/formatters/index.ts`
- `src/adapters/index.ts`
- `src/adapters/input/cli/cli-formatting.ts`
- `src/adapters/input/cli/cli-help.ts`
- `src/adapters/input/cli/cli-output.ts`
- `src/adapters/input/cli/cli-parsing.ts`
- `src/adapters/input/cli/cli-types.ts`
- `src/adapters/input/cli/index.ts`
- `src/adapters/input/http/index.ts`
- `src/adapters/input/http/public-api-helpers.ts`
- `src/adapters/input/http/public-api.ts`
- `src/adapters/input/index.ts`
- `src/adapters/logging/index.ts`
- `src/adapters/memory-tracker.ts`
- `src/adapters/monitoring/memory-tracker.ts`
- `src/adapters/monitoring/watch-mode.ts`

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

## Dependencies

| Name | Version |
| --- | --- |
| neverthrow | `catalog:` |
| zod | `catalog:` |

## Dev Dependencies

| Name | Version |
| --- | --- |
| @types/bun | `catalog:` |
| @types/node | `catalog:` |
| bunup | `catalog:` |
| typescript | `catalog:` |
| vitest | `catalog:` |

## README

> ![Status](https://img.shields.io/badge/status-in_development-red)

# @wrikka/bench

High-performance benchmarking library — extracted from wbench app. Measure, compare, and track code performance with statistical rigor and Bun-native speed.

![Bun](https://img.shields.io/badge/Bun-1.3.14-000000)
![TypeScript](https://img.shields.io/badge/TypeScript-7.0.2-3178c6)
![Version](https://img.shields.io/badge/version-0.1.0-1976d2)

```text
┌──────────────────────────────────────────────────────────┐
│  bench — High-Performance Benchmarking                   │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │  $ benchmark run src/*.bench.ts --format table     │  │
│  │                                                    │  │
│  │  Benchmark         ops/sec    p99       samples    │  │
│  │  ────────────────  ─────────  ─────────  ─────────  │  │
│  │  parse-json        1,250,000  0.12ms    500        │  │
│  │  serialize-obj       890,000  0.18ms    500        │  │
│  │  regex-match       2,100,000  0.05ms    500        │  │
│  │                                                    │  │
│  │  ✓ 3 benchmarks completed in 1.2s                  │  │
│  └────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────┘
```

## Get Started

1. Install — `bun add @wrikka/bench`
   ```bash
   bun add @wrikka/bench
   ```
2. Run Benchmarks — `bun run src/index.ts`
   ```bash
   bun run dev
   ```
3. Build — `bunup`
   ```bash
   bun run build
   ```

## Features

| Icon | Feature | Description |
|:---:|---------|-------------|
| ![icon](https://api.iconify.design/mdi:speedometer.svg?color=%231976d2&width=16) | High-Precision Timing | Sub-microsecond measurements with Bun native performance |
| ![icon](https://api.iconify.design/mdi:chart-line.svg?color=%23388e3c&width=16) | Statistical Summary | Mean, median, p99, standard deviation, boxplot statistics |
| ![icon](https://api.iconify.design/mdi:compare.svg?color=%23d32f2f&width=16) | Comparison Reports | Diff current results against historical baselines |
| ![icon](https://api.iconify.design/mdi:refresh.svg?color=%23f57c00&width=16) | Watch Mode | Re-run benchmarks automatically on file changes |
| ![icon](https://api.iconify.design/mdi:bell-alert.svg?color=%237b1fa2&width=16) | Regression Alerting | Detect and notify on performance regressions |
| ![icon](https://api.iconify.design/mdi:memory.svg?color=%23c2185b&width=16) | Memory Tracking | Monitor memory allocation during benchmark runs |
| ![icon](https://api.iconify.design/mdi:code-tags-check.svg?color=%23303f9f&width=16) | Dead Code Detection | Identify eliminated code during benchmark execution |
| ![icon](https://api.iconify.design/mdi:file-export.svg?color=%230097a7&width=16) | Multiple Output Formats | Table, JSON, markdown, chart, and boxplot renderers |
| ![icon](https://api.iconify.design/mdi:filter-variant.svg?color=%2300796b&width=16) | Filter And Tags | Filter benchmarks by name pattern or comma-separated tags |

## Usage

### Usage via CLI

Run benchmarks from the command line with filtering, formatting, and watch mode.

```bash
bun run src/index.ts run benchmarks/*.ts --format table --tags fast
```

```text
┌──────────────────────────────────────────────────────────┐
│  $ benchmark run benchmarks/*.ts --format table          │
│                                                          │
│  Benchmark         ops/sec    p99       samples          │
│  ────────────────  ─────────  ─────────  ─────────       │
│  parse-json        1,250,000  0.12ms    500              │
│  serialize-obj       890,000  0.18ms    500              │
│  regex-match       2,100,000  0.05ms    500              │
│                                                          │
│  ✓ 3 benchmarks completed in 1.2s                        │
└──────────────────────────────────────────────────────────┘
```

| flag | description | options | default |
|-----|-------------|---------|---------|
| `--format` | Output format | `table`, `json`, `markdown`, `chart`, `boxplot` | `table` |
| `--filter` | Filter by name pattern | regex string | — |
| `--tags` | Filter by tags | comma-separated | — |
| `--watch` | Enable watch mode | boolean | `false` |
| `--throw` | Throw on benchmark errors | boolean | `false` |

### Usage via SDK

Import the benchmarking library programmatically.

```typescript
import { runBenchmarks, generateReport } from '@wrikka/bench';

const results = await runBenchmarks({
  files: ['benchmarks/*.ts'],
  format: 'json',
  tags: ['fast'],
});

const report = generateReport(results);
console.log(report.summary);
```

```text
┌──────────────────────────────────────────────────────────┐
│  > runBenchmarks({ files, format: 'json' })              │
│                                                          │
│  {                                                       │
│    "benchmarks": [                                       │
│      { "name": "parse-json", "opsPerSec": 1250000 },     │
│      { "name": "regex-match", "opsPerSec": 2100000 }     │
│    ],                                                    │
│    "summary": { "total": 2, "duration": "1.2s" }         │
│  }                                                       │
└──────────────────────────────────────────────────────────┘
```

| api | description | options | default |
|-----|-------------|---------|---------|
| `runBenchmarks(opts)` | Run benchmark suite | `files`, `format`, `filter`, `tags` | — |
| `generateReport(results)` | Generate comparison report | `results`, `diffOptions` | — |
| `watchBenchmarks(opts)` | Start watch mode | `files`, `debounce` | `debounce=300` |
| `calculateStatisticalSummary(samples)` | Compute stats | `samples` | — |
