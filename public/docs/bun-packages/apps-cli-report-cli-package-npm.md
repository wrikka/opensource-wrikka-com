# @wrikka/report-cli

## Overview

Universal report generator CLI with pluggable templates and output formats

## Metadata

| Field | Value |
| --- | --- |
| Type | NPM |
| Category | CLI Apps |
| Path | `apps/cli/report-cli/package.json` |
| Version | `0.1.0` |
| License | `MIT` |
| Repository | <https://github.com/wrikka/bun-packages> |
| Homepage | <https://github.com/wrikka/bun-packages/tree/main/apps/cli/report-cli#readme> |
| Keywords | report, reporter, cli, templates, markdown, html, json, console, typescript, bun, wrikka |
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
- 📁 `src/application`
- 📁 `src/domain`
- 📄 `src/index.ts`
- 📁 `src/presentation`
- 📁 `src/shared`
- 📄 `tsconfig.json`
- 📄 `tsconfig.tsbuildinfo`

## Source Files

- `src/adapters/file.adapter.ts`
- `src/application/report.usecase.ts`
- `src/domain/benchmark-quality-templates.ts`
- `src/domain/renderers.ts`
- `src/domain/section-renderers.ts`
- `src/domain/summary-table-templates.ts`
- `src/domain/template-helpers.ts`
- `src/domain/templates.ts`
- `src/domain/test-coverage-templates.ts`
- `src/domain/types.ts`
- `src/index.ts`
- `src/presentation/cli.ts`
- `src/shared/colors.ts`

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
| dev | `bun run src/presentation/cli.ts` |
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
| clean | `bunx rimraf node_modules dist` |
| security | `bunx audit` |

## Binaries

- `wrikka-report`: `./dist/presentation/cli.js`
- `report-cli`: `./dist/presentation/cli.js`

## Dependencies

| Name | Version |
| --- | --- |
| cac | `catalog:` |
| picocolors | `catalog:` |
| zod | `catalog:` |

## Dev Dependencies

| Name | Version |
| --- | --- |
| @biomejs/biome | `catalog:` |
| @types/bun | `catalog:` |
| @types/node | `catalog:` |
| @wrikka/utils | `workspace:*` |
| bun-types | `catalog:` |
| bunup | `catalog:` |
| typescript | `catalog:` |
| vitest | `catalog:` |

## Environment

| Runtime | Version |
| --- | --- |
| bun | `>=1.0.0` |
| node | `>=18.0.0` |

## README

# @wrikka/report-cli

Universal report generator with pluggable templates and output formats.

## Features

- **Templates**: test, coverage, benchmark, quality, summary, table
- **Output formats**: console, json, markdown, html
- **CLI** for ad-hoc report generation from JSON files or stdin
- **Library API** for integration into other workspaces

## Installation

```bash
bun add @wrikka/report-cli
```

## CLI Usage

```bash
# List available templates
bunx @wrikka/report-cli list

# Generate a console test report from a JSON file
bunx @wrikka/report-cli report test ./test-results.json

# Generate a markdown benchmark report
bunx @wrikka/report-cli report benchmark ./benchmark-results.json --format markdown --output benchmark-report.md

# Generate a coverage report from stdin
cat coverage.json | bunx @wrikka/report-cli report coverage --format html --output coverage-report.html

# Validate input data against a template
bunx @wrikka/report-cli validate quality ./quality-results.json
```

## Library Usage

```typescript
import { createReport } from "@wrikka/report-cli";

const result = createReport(testData, {
	template: "test",
	format: "markdown",
});

console.log(result.content);
```

## Templates

| Template | Description | Default Format |
|----------|-------------|----------------|
| `test` | Test execution report | console |
| `coverage` | Code coverage report | console |
| `benchmark` | Benchmark performance report | markdown |
| `quality` | Code quality metrics report | console |
| `summary` | Generic key-value summary | console |
| `table` | Custom data table | console |

## Scripts

| Script | Command |
|--------|---------|
| `dev` | `bun run src/presentation/cli.ts` |
| `build` | `bunup` |
| `typecheck` | `tsc --noEmit` |
| `lint` | `biome check` |
| `test` | `vitest run` |
| `check` | `bun run lint && bun run typecheck && bun run scan` |
| `verify` | `bun run check && bun run test && bun run build` |

## Links

- Repository: <https://github.com/wrikka/bun-packages>
- Homepage: <https://github.com/wrikka/bun-packages/tree/main/apps/cli/report-cli#readme>
- Source: <https://github.com/wrikka/bun-packages/blob/main/apps/cli/report-cli/package.json>
