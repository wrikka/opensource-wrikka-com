# @wrikka/check-quality

## Overview

Comprehensive code quality toolkit - linting, formatting, analysis, and unused file detection

## Metadata

| Field | Value |
| --- | --- |
| Type | NPM |
| Category | CLI Apps |
| Path | `apps/cli/check-quality/package.json` |
| Version | `0.2.0` |
| License | `MIT` |
| Keywords | code-quality, linter, formatter, static-analysis, unused-files, cli, typescript, monorepo, wrikka |
| Main | `dist/index.js` |
| Types | `dist/index.d.ts` |

## Directory Structure

- 📄 `AGENTS.md`
- 📄 `bunup.config.ts`
- 📁 `coverage`
- 📄 `coverage/base.css`
- 📄 `coverage/block-navigation.js`
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
- 📄 `vitest.config.ts`

## Source Files

- `src/adapters/config/config.ts`
- `src/adapters/config/index.ts`
- `src/adapters/db/db.ts`
- `src/adapters/db/index.ts`
- `src/adapters/external/external.ts`
- `src/adapters/external/index.ts`
- `src/adapters/http/http.ts`
- `src/adapters/http/index.ts`
- `src/adapters/index.ts`
- `src/adapters/output/repositories/file-system.ts`
- `src/adapters/output/repositories/index.ts`
- `src/index.ts`
- `src/modules/analyze/application/usecases/analyze.usecase.ts`
- `src/modules/analyze/application/workflows/index.ts`
- `src/modules/analyze/application/workflows/workflows.ts`
- `src/modules/analyze/domain/index.ts`
- `src/modules/analyze/domain/models.ts`
- `src/modules/analyze/domain/operations.ts`
- `src/modules/analyze/index.ts`
- `src/modules/analyze/ports/index.ts`
- `src/modules/analyze/types/index.ts`
- `src/modules/code-quality/application/usecases/analyze-project.usecase.ts`
- `src/modules/code-quality/domain/error-models.ts`
- `src/modules/code-quality/domain/events.ts`
- `src/modules/code-quality/domain/format-models.ts`
- `src/modules/code-quality/domain/index.ts`
- `src/modules/code-quality/domain/language-models.ts`
- `src/modules/code-quality/domain/lint-models.ts`
- `src/modules/code-quality/domain/models.ts`
- `src/modules/code-quality/domain/operations.ts`
- `src/modules/code-quality/domain/quality-analysis.ts`
- `src/modules/code-quality/domain/quality-metrics.ts`
- `src/modules/code-quality/domain/quality-models.ts`
- `src/modules/code-quality/domain/schemas.ts`
- `src/modules/code-quality/domain/validators.ts`
- `src/modules/code-quality/index.ts`
- `src/modules/code-quality/ports/index.ts`
- `src/modules/code-quality/types/index.ts`
- `src/modules/format/application/usecases/format.usecase.ts`
- `src/modules/format/application/workflows/index.ts`

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
| dev | `bun run src/cli.ts` |
| build | `bun build src/index.ts --outfile dist/index.js --target bun && bun build src/presentation/cli/cli.ts --outfile dist/cli.js --target bun && tsc --emitDeclarationOnly` |
| typecheck | `tsc --noEmit` |
| lint | `biome check` |
| format | `biome check --write` |
| test | `vitest run` |
| test:unit | `vitest run --coverage` |
| check | `bun run lint && bun run typecheck && bun run scan` |
| verify | `bun run check && bun run test && bun run build` |
| clean | `bunx rimraf node_modules dist` |
| build:watch | `bunup --watch` |
| typecheck:watch | `tsc --noEmit --watch` |
| lint:fix | `biome check --write` |
| test:watch | `vitest` |
| test:coverage | `vitest run --coverage` |
| test:integration | `vitest run --config vitest.integration.config.ts` |
| test:e2e | `vitest run --config vitest.e2e.config.ts` |
| scan | `ast-grep scan` |
| security | `bunx audit` |
| bench | `bunx mitata` |
| prerelease | `bun run build` |
| release | `auto-it` |

## Binaries

- `check-quality`: `./dist/cli.js`
- `cq`: `./dist/cli.js`

## Dependencies

| Name | Version |
| --- | --- |
| @ast-grep/napi | `^0.45.2` |
| @wrikka/create-cli | `workspace:*` |
| glob | `catalog:` |
| zod | `catalog:` |

## Dev Dependencies

| Name | Version |
| --- | --- |
| @biomejs/biome | `catalog:` |
| @types/bun | `catalog:` |
| @types/node | `catalog:` |
| @wrikka/utils | `workspace:*` |
| bunup | `catalog:` |
| oxlint | `catalog:` |
| typescript | `catalog:` |
| vitest | `catalog:` |

## README

> ![Status](https://img.shields.io/badge/status-in_development-red)

# @wrikka/check-quality

Comprehensive code quality toolkit — Lint, format, analyze, and detect unused files in TypeScript and JavaScript projects with a single CLI.

![Bun](https://img.shields.io/badge/Bun-1.3-0097a7)
![TypeScript](https://img.shields.io/badge/TypeScript-7.0-1976d2)
![Zod](https://img.shields.io/badge/Zod-4.4-1976d2)

```text
┌──────────────────────────────────────────────────────────┐
│  check-quality — Code Quality Toolkit                    │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │  Total files:        142                            │  │
│  │  Total lines:      8,450                             │  │
│  │  Avg complexity:     4.21                            │  │
│  │  Avg maintainability: 72.35                          │  │
│  │  Total issues:        12                             │  │
│  │                                                    │  │
│  │  Quality Gate: PASSED                               │  │
│  │  Score: 85.30 / 80                                  │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│  Unused files: 3   Lint errors: 2   Warnings: 10         │
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
3. Lint — `bun run dev lint src/`
   ```bash
   bun run dev lint src/
   ```

## Features

| Icon | Feature | Description |
|:---:|---------|-------------|
| ![icon](https://api.iconify.design/mdi:magnify-scan.svg?color=%231976d2&width=16) | Linting | Detect and auto-fix code issues |
| ![icon](https://api.iconify.design/mdi:format-align-left.svg?color=%23388e3c&width=16) | Formatting | Format code files with write or check mode |
| ![icon](https://api.iconify.design/mdi:chart-arc.svg?color=%23f57c00&width=16) | Quality Analysis | Measure complexity and maintainability metrics |
| ![icon](https://api.iconify.design/mdi:file-hidden.svg?color=%237b1fa2&width=16) | Unused File Detection | Find files not imported anywhere |
| ![icon](https://api.iconify.design/mdi:graph.svg?color=%23c2185b&width=16) | Dependency Graph | Build import graph for circular dependency detection |
| ![icon](https://api.iconify.design/mdi:gate.svg?color=%230097a7&width=16) | Quality Gate | Enforce quality thresholds in CI |
| ![icon](https://api.iconify.design/mdi:alert-circle.svg?color=%23d32f2f&width=16) | Error Reporting | Structured error and warning output |

## Usage

### Usage via CLI

```bash
cq lint src/ --fix
cq format src/ --write
cq analyze src/ --threshold 80
cq unused src/ -e src/index.ts
```

```text
┌──────────────────────────────────────────────────────────┐
│  $ cq analyze src/ --threshold 80                        │
│  Analyzing code quality...                               │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │  Total files:        142                            │  │
│  │  Total lines:      8,450                             │  │
│  │  Avg complexity:     4.21                            │  │
│  │  Avg maintainability: 72.35                          │  │
│  │  Total issues:        12                             │  │
│  │  Quality Gate: PASSED                               │  │
│  │  Score: 85.30 / 80                                  │  │
│  └────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────┘
```

| api | description | options | default |
|-----|-------------|---------|---------|
| `createLintUseCase(deps)` | Lint files and report issues | `filePaths`, `config`, `fix`, `silent` | `fix=false` |
| `createFormatUseCase(deps)` | Format code files | `filePaths`, `write` | `write=false` |
| `createAnalyzeUseCase(deps)` | Analyze code quality metrics | `filePaths`, `qualityGateThreshold` | `threshold=80` |
| `createUnusedFilesUseCase(deps)` | Find unused files | `patterns`, `entryPoints`, `includeAssets` | `includeAssets=false` |
