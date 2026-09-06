# @wrikka/template-generator

## Overview

Fast, type-safe template generator with Bun native template engine

## Metadata

| Field | Value |
| --- | --- |
| Type | NPM |
| Category | CLI Apps |
| Path | `apps/cli/template-generator/package.json` |
| Version | `0.1.0` |
| License | `MIT` |
| Keywords | template, generator, scaffolding, cli, boilerplate, code-generation, bun |
| Main | `./dist/index.cjs` |
| Module | `./dist/index.js` |
| Types | `./dist/index.d.ts` |

## Directory Structure

- 📄 `AGENTS.md`
- 📄 `biome.jsonc`
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
- `src/shared/utils/string-utils.ts`

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

- `template-gen`: `./dist/index.js`

## Dependencies

| Name | Version |
| --- | --- |
| @wrikka/create-cli | `workspace:*` |
| @wrikka/utils | `workspace:*` |
| picocolors | `catalog:` |

## Dev Dependencies

| Name | Version |
| --- | --- |
| @types/bun | `catalog:` |
| @types/node | `catalog:` |
| bunup | `catalog:` |
| dprint | `catalog:` |
| oxlint | `catalog:` |
| typescript | `catalog:` |

## README

> ![Status](https://img.shields.io/badge/status-in_development-red)

# @wrikka/template-generator

Fast, type-safe template generator — Scaffolding tool with Handlebars engine, interactive Clack prompts, variable extraction, and dry-run preview.

![Bun](https://img.shields.io/badge/Bun-1.3.14-000000)
![TypeScript](https://img.shields.io/badge/TypeScript-7.0.2-3178c6)
![Version](https://img.shields.io/badge/version-0.1.0-1976d2)

```text
┌──────────────────────────────────────────────────────────┐
│  @wrikka/template-generator                              │
│  Fast, type-safe template generator                      │
│                                                          │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌─────────┐  │
│  │  Load    │->│ Extract  │->│ Prompt   │->| Render  │  │
│  │  Config  │  │ Variables│  │ User     │  | Template│  │
│  └──────────┘  └──────────┘  └──────────┘  └────┬────┘  │
│                                                   │       │
│                              ┌────────────────────▼─────┐ │
│                              │  Write Files / Dry Run   │ │
│                              └──────────────────────────┘ │
└──────────────────────────────────────────────────────────┘
```

## Get Started

1. Install — `bun add @wrikka/template-generator`
   ```bash
   bun add @wrikka/template-generator
   ```
2. Build — `bun run build`
   ```bash
   cd apps/cli/template-generator && bun run build
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
| ![icon](https://api.iconify.design/mdi:cube-outline.svg?color=%231976d2&width=16) | Handlebars Engine | Template rendering with Handlebars |
| ![icon](https://api.iconify.design/mdi:language-typescript.svg?color=%23388e3c&width=16) | Type-Safe | Full TypeScript with strict mode |
| ![icon](https://api.iconify.design/mdi:console-line.svg?color=%23d32f2f&width=16) | Interactive Prompts | Beautiful prompts using Clack |
| ![icon](https://api.iconify.design/mdi:layers.svg?color=%23f57c00&width=16) | Clean Architecture | Domain-driven design separation |
| ![icon](https://api.iconify.design/mdi:wrench.svg?color=%237b1fa2&width=16) | Custom Generators | Configurable generators and transforms |
| ![icon](https://api.iconify.design/mdi:format-text.svg?color=%23c2185b&width=16) | String Helpers | pascalCase, camelCase, kebabCase, etc. |
| ![icon](https://api.iconify.design/mdi:eye.svg?color=%23303f9f&width=16) | Dry Run Preview | Preview changes before writing |
| ![icon](https://api.iconify.design/mdi:variable.svg?color=%230097a7&width=16) | Variable Extraction | Auto-extract template variables |
| ![icon](https://api.iconify.design/mdi:file-edit.svg?color=%2300796b&width=16) | File Transforms | Rename and modify output files |

## Usage

### Usage via CLI

```bash
bunx template-gen --help
bunx template-gen --config ./template.config.json
bunx template-gen --dry-run
bunx template-gen -c ./my-config.json -d
```

```text
┌──────────────────────────────────────────────────────────┐
│  $ bunx template-gen --config ./template.config.json     │
│                                                          │
│  Template Generator                                      │
│                                                          │
│  ? Component name: MyComponent                           │
│  ? Select type: functional                               │
│                                                          │
│  Success: Generated: src/MyComponent.tsx                 │
│  Success: Generated: src/MyComponent.test.tsx            │
│  Success: Generated: src/MyComponent.css                 │
│                                                          │
│  3/3 templates generated successfully!                   │
└──────────────────────────────────────────────────────────┘
```

### Usage via SDK

```bash
bun add @wrikka/template-generator
```

```typescript
import {
  generateTemplate,
  createTemplate,
  extractVariables,
  pascalCase,
  kebabCase,
} from '@wrikka/template-generator';

const template = createTemplate({
  id: 'component',
  name: 'React Component',
  path: './templates/component.tsx',
  content: 'export const {{name}} = () => {}',
  variables: [],
});

const vars = extractVariables(template.content);
```

| api | description | options | default |
|-----|-------------|---------|---------|
| `generateTemplate(input)` | Generate files from template | `templatePath`, `outputPath`, `data`, `dryRun` | `dryRun=false` |
| `createTemplate(config)` | Create template model | `id`, `name`, `path`, `content`, `variables` | — |
| `extractVariables(content)` | Extract variables from template | `content`: template string | — |
| `validateTemplateContent(content)` | Validate template content | `content`: template string | — |
