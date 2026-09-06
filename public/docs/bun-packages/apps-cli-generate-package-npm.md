# @wrikka/generate

## Overview

Generate and improve features — template generator and improve tools

## Metadata

| Field | Value |
| --- | --- |
| Type | NPM |
| Category | CLI Apps |
| Path | `apps/cli/generate/package.json` |
| Version | `0.1.0` |
| License | `MIT` |
| Keywords | template, generator, scaffolding, cli, boilerplate, code-generation, bun |
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
- 📁 `example`
- 📄 `example/template.config.json`
- 📁 `example/templates`
- 📄 `moon.yml`
- 📄 `package.json`
- 📄 `README.md`
- 📁 `src`
- 📁 `src/adapters`
- 📄 `src/index.ts`
- 📁 `src/modules`
- 📁 `src/presentation`
- 📁 `src/shared`
- 📁 `src/template-engine`
- 📄 `tsconfig.json`
- 📄 `tsconfig.tsbuildinfo`

## Source Files

- `src/adapters/output/external-services/clack-prompter.ts`
- `src/adapters/output/external-services/handlebars-engine.ts`
- `src/adapters/output/external-services/prompter.ts`
- `src/adapters/output/external-services/template-engine.ts`
- `src/adapters/output/repositories/bun-file-writer.ts`
- `src/adapters/output/repositories/file-writer.ts`
- `src/index.ts`
- `src/modules/template-generator/application/index.ts`
- `src/modules/template-generator/application/usecases/generate-template.use-case.ts`
- `src/modules/template-generator/application/usecases/generate-template.usecase.ts`
- `src/modules/template-generator/application/usecases/load-config.usecase.ts`
- `src/modules/template-generator/domain/errors/errors.ts`
- `src/modules/template-generator/domain/errors/index.ts`
- `src/modules/template-generator/domain/models/generator.ts`
- `src/modules/template-generator/domain/models/index.ts`
- `src/modules/template-generator/domain/models/template.ts`
- `src/modules/template-generator/domain/operations/index.ts`
- `src/modules/template-generator/domain/operations/string-utils.ts`
- `src/modules/template-generator/domain/operations/template.ts`
- `src/modules/template-generator/index.ts`
- `src/modules/template-generator/ports/file-writer.ts`
- `src/modules/template-generator/ports/index.ts`
- `src/modules/template-generator/ports/prompter.ts`
- `src/modules/template-generator/ports/template-engine.ts`
- `src/modules/template-generator/types/factories.ts`
- `src/modules/template-generator/types/index.ts`
- `src/presentation/cli/index.ts`
- `src/shared/errors/errors.ts`
- `src/shared/errors/index.ts`
- `src/shared/types/index.ts`
- `src/shared/types/types.ts`
- `src/shared/utils/index.ts`
- `src/shared/utils/string-utils.ts`
- `src/template-engine/adapters/config/config.ts`
- `src/template-engine/adapters/config/index.ts`
- `src/template-engine/adapters/config/template.config.ts`
- `src/template-engine/adapters/eta/eta.ts`
- `src/template-engine/adapters/eta/index.ts`
- `src/template-engine/adapters/logging/logger.ts`
- `src/template-engine/adapters/mustache/index.ts`

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

- `generate`: `./dist/index.js`
- `template-gen`: `./dist/index.js`

## Dependencies

| Name | Version |
| --- | --- |
| @wrikka/create-cli | `workspace:*` |
| @wrikka/utils | `workspace:*` |
| eta | `^4.6.0` |
| mustache | `^4.2.0` |
| picocolors | `catalog:` |
| zod-to-json-schema | `catalog:` |

## Dev Dependencies

| Name | Version |
| --- | --- |
| @biomejs/biome | `catalog:` |
| @types/bun | `catalog:` |
| @types/mustache | `catalog:` |
| @types/node | `catalog:` |
| @wrikka/utils | `workspace:*` |
| bunup | `catalog:` |
| dprint | `catalog:` |
| oxlint | `catalog:` |
| typescript | `catalog:` |
| vitest | `catalog:` |

## README

> ![Status](https://img.shields.io/badge/status-in_development-red)

# @wrikka/template-generator

Fast, type-safe template generator with Bun native template engine

![Bun](https://img.shields.io/badge/Bun-1.3.14-000000?logo=bun&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-%5E7.0.2-3178c6?logo=typescript&logoColor=white) ![Version](https://img.shields.io/badge/version-0.1.0-1976d2)

```text
┌──────────────────────────────────────┐
│         template-generator         │
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

   ```bash
   bun add @wrikka/template-generator
   ```

2. **Build the package**

   ```bash
   cd apps/cli/template-generator && bun run build
   ```

3. **Run in development**

   ```bash
   bun run dev
   ```

4. **Verify quality**

   ```bash
   bun run verify
   ```

## Features

| Icon | Feature | Description |
|:----:|:--------|:------------|
| <center>![cube](https://api.iconify.design/mdi:cube.svg?color=%231976d2&width=16)</center> | Zero-dependency Rendering | Template rendering using Bun's built-in features |
| <center>![cube](https://api.iconify.design/mdi:cube.svg?color=%23388e3c&width=16)</center> | TypeScript Support | Full TypeScript support with strict mode |
| <center>![cube](https://api.iconify.design/mdi:cube.svg?color=%23d32f2f&width=16)</center> | Interactive Prompts | Beautiful interactive prompts using Clack |
| <center>![cube](https://api.iconify.design/mdi:cube.svg?color=%23f57c00&width=16)</center> | Domain-driven Design | Clear separation of concerns |
| <center>![cube](https://api.iconify.design/mdi:cube.svg?color=%237b1fa2&width=16)</center> | Custom Generators | File transformations and conditional logic |
| <center>![cube](https://api.iconify.design/mdi:cube.svg?color=%23c2185b&width=16)</center> | String Helpers | pascalCase, camelCase, kebabCase, etc. |
| <center>![cube](https://api.iconify.design/mdi:cube.svg?color=%23303f9f&width=16)</center> | Preview Changes | Preview changes before writing files |
| <center>![cube](https://api.iconify.design/mdi:cube.svg?color=%230097a7&width=16)</center> | Bun Optimized | Optimized for Bun runtime with minimal dependencies |

## Usage

### Usage via API

```typescript
import { generateTemplate, createTemplate, createTemplateVariable } from '@wrikka/template-generator';

const result = generateTemplate();
```

### Usage via CLI

```bash
bunx template-gen --help
```

### Usage via SDK

```bash
bun add @wrikka/template-generator
```

```typescript
import { generateTemplate, createTemplate, createTemplateVariable } from '@wrikka/template-generator';

const result = generateTemplate();
```
