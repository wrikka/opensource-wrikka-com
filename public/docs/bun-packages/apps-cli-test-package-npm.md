# @wrikka/test

## Overview

Fast test framework with Bun native performance and Clean Architecture

## Metadata

| Field | Value |
| --- | --- |
| Type | NPM |
| Category | CLI Apps |
| Path | `apps/cli/test/package.json` |
| Version | `0.1.0` |
| License | `MIT` |
| Repository | <https://github.com/wrikka/bun-packages> |
| Homepage | <https://github.com/wrikka/bun-packages/tree/main/apps/cli/test#readme> |
| Keywords | test, testing, framework, bun, typescript, jest, vitest, unit-test, integration-test, e2e-test, coverage, mocking, snapshot, benchmark, performance |
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
- 📄 `src/index.ts`
- 📁 `src/modules`
- 📁 `src/presentation`
- 📁 `src/shared`
- 📁 `test`
- 📄 `test/basic.test.ts`
- 📄 `tsconfig.json`
- 📄 `vitest.config.ts`

## Source Files

- `src/adapters/config/index.ts`
- `src/adapters/db/filesystem-repository.ts`
- `src/adapters/external/index.ts`
- `src/adapters/http/index.ts`
- `src/adapters/transformers/test-results.ts`
- `src/index.ts`
- `src/modules/test-runner/application/usecases/run-tests.ts`
- `src/modules/test-runner/application/workflows/execute-test-workflow.ts`
- `src/modules/test-runner/domain/events/assertion-failed.ts`
- `src/modules/test-runner/domain/events/assertion-passed.ts`
- `src/modules/test-runner/domain/events/factories.ts`
- `src/modules/test-runner/domain/events/index.ts`
- `src/modules/test-runner/domain/events/test-case-completed.ts`
- `src/modules/test-runner/domain/events/test-case-started.ts`
- `src/modules/test-runner/domain/events/test-runner-completed.ts`
- `src/modules/test-runner/domain/events/test-runner-started.ts`
- `src/modules/test-runner/domain/events/test-suite-completed.ts`
- `src/modules/test-runner/domain/events/test-suite-started.ts`
- `src/modules/test-runner/domain/events/types.ts`
- `src/modules/test-runner/domain/models/index.ts`
- `src/modules/test-runner/domain/models/test-case.ts`
- `src/modules/test-runner/domain/models/test-result.queries.ts`
- `src/modules/test-runner/domain/models/test-result.serialization.ts`
- `src/modules/test-runner/domain/models/test-result.stats.ts`
- `src/modules/test-runner/domain/models/test-result.ts`
- `src/modules/test-runner/domain/models/test-result.types.ts`
- `src/modules/test-runner/domain/models/test-suite.ts`
- `src/modules/test-runner/domain/operations/collect.ts`
- `src/modules/test-runner/domain/operations/execute.ts`
- `src/modules/test-runner/domain/validators/index.ts`
- `src/modules/test-runner/domain/validators/schemas.ts`
- `src/modules/test-runner/domain/value-objects/assertion.ts`
- `src/modules/test-runner/domain/value-objects/index.ts`
- `src/modules/test-runner/domain/value-objects/test-location.ts`
- `src/modules/test-runner/domain/value-objects/test-status.ts`
- `src/modules/test-runner/index.ts`
- `src/modules/test-runner/ports/test-repository.interface.ts`
- `src/modules/test-runner/ports/test-repository.ts`
- `src/modules/test-runner/types/index.ts`
- `src/modules/test-runner/types/test-file.ts`

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

- `wrikka-test`: `./dist/presentation/cli/index.js`

## Dependencies

| Name | Version |
| --- | --- |
| @wrikka/report-cli | `workspace:*` |
| chalk | `catalog:` |
| commander | `catalog:` |
| glob | `catalog:` |
| ora | `catalog:` |
| table | `^6.9.0` |
| ws | `^8.21.3` |

## Dev Dependencies

| Name | Version |
| --- | --- |
| @types/node | `catalog:` |
| @types/ws | `^8.18.1` |
| bun-types | `catalog:` |
| bunup | `catalog:` |
| typescript | `catalog:` |

## Environment

| Runtime | Version |
| --- | --- |
| bun | `>=1.0.0` |
| node | `>=18.0.0` |

## README

> 🚀 Fast test framework with Bun native performance and Clean Architecture

# @wrikka/test

Fast test framework with Bun native performance and Clean Architecture

![Bun](https://img.shields.io/badge/Bun-1.3.14-000000?logo=bun&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-%5E7.0.2-3178c6?logo=typescript&logoColor=white) ![Version](https://img.shields.io/badge/version-0.1.0-1976d2)


```text
┌──────────────────────────────────────┐
│            test-runner             │
│  ┌──────────────┐  ┌──────────────┐  │
│  │    Input     │  │   Process    │  │
│  └──────┬───────┘  └──────┬───────┘  │
│         │                 │          │
│         └────────┬────────┘          │
│                  ▼                   │
│  ┌────────────────────────────────┐  │
│  │           Output               │  │
│  └────────────────────────────────┘  │
└──────────────────────────────────────┘
```


## Get Started

1. **Install the package**

   Add @wrikka/test to your project or install workspace dependencies.

   ```bash
   bun add @wrikka/test
   ```

2. **Build the package**

   Compile the package and produce the dist output.

   ```bash
   cd apps/cli/test && bun run build
   ```

3. **Run in development**

   Start the dev/watch mode or the CLI entry point.

   ```bash
   bun run dev
   ```

4. **Verify quality**

   Run lint, type check, and tests.

   ```bash
   bun run verify
   ```

## Features

| Icon | Feature | Description |
|:----:|:--------|:------------|
| <center>![cube](https://api.iconify.design/mdi:cube.svg?color=%231976d2&width=16)</center> | Test Framework | Fast test framework with Bun native performance |
| <center>![code-braces](https://api.iconify.design/mdi:code-braces.svg?color=%23388e3c&width=16)</center> | TypeScript | Full strict TypeScript support |
| <center>![test-tube](https://api.iconify.design/mdi:test-tube.svg?color=%237b1fa2&width=16)</center> | Testing | Vitest unit and integration tests |


## Usage

### Usage via API

```typescript
import { FileSystemRepository, createAssertionFailedEvent, createAssertionPassedEvent } from '@wrikka/test';

const result = createAssertionFailedEvent({});
```

### Usage via CLI

```bash
bunx wrikka-test --help
```

### Usage via SDK

Install the package:

```bash
bun add @wrikka/test
```

Import and use in your project:

```typescript
import { FileSystemRepository, createAssertionFailedEvent, createAssertionPassedEvent } from '@wrikka/test';

const result = createAssertionFailedEvent({});
```

## Links

- Repository: <https://github.com/wrikka/bun-packages>
- Homepage: <https://github.com/wrikka/bun-packages/tree/main/apps/cli/test#readme>
- Source: <https://github.com/wrikka/bun-packages/blob/main/apps/cli/test/package.json>
