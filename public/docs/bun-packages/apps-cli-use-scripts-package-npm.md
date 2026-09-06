# @wrikka/use-scripts

## Overview

Functional script generation library with AST manipulation and beautiful reporting

## Metadata

| Field | Value |
| --- | --- |
| Type | NPM |
| Category | CLI Apps |
| Path | `apps/cli/use-scripts/package.json` |
| Version | `1.0.0` |
| License | `MIT` |
| Repository | <https://github.com/wrikka/bun-packages> |
| Homepage | <https://github.com/wrikka/bun-packages/tree/main/apps/cli/use-scripts#readme> |
| Keywords | cli, script, script-generation, ast, ast-grep, code-generation, functional-programming, clean-architecture, typescript, commander, reporter |
| Main | `dist/index.js` |
| Types | `dist/index.d.ts` |

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
- 📄 `tsconfig.json`
- 📄 `tsconfig.tsbuildinfo`

## Source Files

- `src/adapters/ast-grep/ast-grep-adapter.ts`
- `src/adapters/ast-grep/index.ts`
- `src/adapters/config/config-adapter.ts`
- `src/adapters/config/index.ts`
- `src/adapters/index.ts`
- `src/adapters/reporter/index.ts`
- `src/adapters/reporter/reporter-adapter.ts`
- `src/index.ts`
- `src/modules/cli/application/usecases/execute-command.ts`
- `src/modules/cli/application/usecases/index.ts`
- `src/modules/cli/domain/index.ts`
- `src/modules/cli/domain/models/command.ts`
- `src/modules/cli/domain/models/index.ts`
- `src/modules/cli/domain/operations/defaults.ts`
- `src/modules/cli/domain/operations/help.ts`
- `src/modules/cli/domain/operations/index.ts`
- `src/modules/cli/domain/operations/parse.ts`
- `src/modules/cli/domain/operations/value.ts`
- `src/modules/cli/domain/validators/args.ts`
- `src/modules/cli/domain/validators/index.ts`
- `src/modules/cli/index.ts`
- `src/modules/cli/ports/config.port.ts`
- `src/modules/cli/ports/index.ts`
- `src/modules/cli/ports/reporter.port.ts`
- `src/modules/cli/types/command.ts`
- `src/modules/cli/types/index.ts`
- `src/modules/script-generation/application/usecases/generate-script.ts`
- `src/modules/script-generation/application/usecases/index.ts`
- `src/modules/script-generation/domain/index.ts`
- `src/modules/script-generation/domain/models/index.ts`
- `src/modules/script-generation/domain/models/script.ts`
- `src/modules/script-generation/domain/operations/generate.ts`
- `src/modules/script-generation/domain/operations/index.ts`
- `src/modules/script-generation/domain/operations/script.ts`
- `src/modules/script-generation/domain/operations/template.ts`
- `src/modules/script-generation/domain/operations/transform.ts`
- `src/modules/script-generation/domain/validators/index.ts`
- `src/modules/script-generation/domain/validators/variables.ts`
- `src/modules/script-generation/index.ts`
- `src/modules/script-generation/ports/ast.port.ts`

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

- `use-scripts`: `./dist/presentation/cli/index.js`

## Dependencies

| Name | Version |
| --- | --- |
| zod | `catalog:` |

## Dev Dependencies

| Name | Version |
| --- | --- |
| @biomejs/biome | `catalog:` |
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

> 🚀 Functional script generation library with AST manipulation and beautiful reporting

# @wrikka/use-scripts

Functional script generation library with AST manipulation and beautiful reporting

![Bun](https://img.shields.io/badge/Bun-1.3.14-000000?logo=bun&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-%5E7.0.2-3178c6?logo=typescript&logoColor=white) ![Version](https://img.shields.io/badge/version-1.0.0-1976d2)


```text
┌──────────────────────────────────────┐
│            use-scripts             │
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

   Add @wrikka/use-scripts to your project or install workspace dependencies.

   ```bash
   bun add @wrikka/use-scripts
   ```

2. **Build the package**

   Compile the package and produce the dist output.

   ```bash
   cd apps/cli/use-scripts && bun run build
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
| <center>![cube](https://api.iconify.design/mdi:cube.svg?color=%231976d2&width=16)</center> | Script Generation | Functional script generation with AST manipulation |
| <center>![code-braces](https://api.iconify.design/mdi:code-braces.svg?color=%23388e3c&width=16)</center> | TypeScript | Full strict TypeScript support |
| <center>![test-tube](https://api.iconify.design/mdi:test-tube.svg?color=%237b1fa2&width=16)</center> | Testing | Vitest unit and integration tests |


## Usage

### Usage via API

```typescript
import { ASTGrepAdapter, ConfigAdapter, ReporterAdapter } from '@wrikka/use-scripts';

const result = applyDefaults();
```

### Usage via CLI

```bash
bunx use-scripts --help
```

### Usage via SDK

Install the package:

```bash
bun add @wrikka/use-scripts
```

Import and use in your project:

```typescript
import { ASTGrepAdapter, ConfigAdapter, ReporterAdapter } from '@wrikka/use-scripts';

const result = applyDefaults();
```

## Links

- Repository: <https://github.com/wrikka/bun-packages>
- Homepage: <https://github.com/wrikka/bun-packages/tree/main/apps/cli/use-scripts#readme>
- Source: <https://github.com/wrikka/bun-packages/blob/main/apps/cli/use-scripts/package.json>
