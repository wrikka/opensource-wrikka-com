# @wrikka/create-design-system

## Overview

Design token compiler and design system creator that beats Style Dictionary - DTCG-native, multi-platform, type-safe

## Metadata

| Field | Value |
| --- | --- |
| Type | NPM |
| Category | Create-design-system |
| Path | `packages/create-design-system/package.json` |
| Version | `0.1.0` |
| License | `MIT` |
| Repository | <https://github.com/wrikka/bun-packages> |
| Keywords | design-system, design-tokens, dtcg, style-dictionary, css, scss, tailwind, ios, android, bun, typescript |
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
- 📁 `coverage/src`
- 📄 `moon.yml`
- 📄 `package.json`
- 📄 `README.md`
- 📁 `src`
- 📁 `src/adapters`
- 📄 `src/index.ts`
- 📁 `src/modules`
- 📁 `src/shared`
- 📁 `tests`
- 📄 `tests/index.test.ts`
- 📄 `tsconfig.cjs.json`
- 📄 `tsconfig.json`
- 📄 `tsconfig.tsbuildinfo`

## Source Files

- `src/adapters/formats/css.ts`
- `src/adapters/formats/index.ts`
- `src/adapters/formats/js.ts`
- `src/adapters/formats/json.ts`
- `src/adapters/formats/scss.ts`
- `src/adapters/formats/tailwind.ts`
- `src/adapters/types.ts`
- `src/index.ts`
- `src/modules/design-tokens/application/builder.ts`
- `src/modules/design-tokens/application/index.ts`
- `src/modules/design-tokens/domain/operations/index.ts`
- `src/modules/design-tokens/domain/operations/parser.ts`
- `src/modules/design-tokens/domain/operations/transformer.ts`
- `src/modules/design-tokens/domain/types.ts`
- `src/modules/design-tokens/domain/validators/guards.ts`
- `src/modules/design-tokens/domain/validators/index.ts`
- `src/modules/design-tokens/index.ts`
- `src/shared/types/design-tokens.ts`

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
| clean | `bunx rimraf dist node_modules` |
| security | `bunx audit` |

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

# @wrikka/create-design-system

Design token compiler and design system creator — DTCG-native, multi-platform, type-safe. Compiles design tokens to CSS, SCSS, Tailwind, JS, and JSON output formats.

![Bun](https://img.shields.io/badge/Bun-1.4-1976d2)
![TypeScript](https://img.shields.io/badge/TypeScript-7.0-3178c6)
![MIT](https://img.shields.io/badge/license-MIT-388e3c)

```text
┌──────────────────────────────────────────────────────────┐
│  @wrikka/create-design-system                            │
│  Design Token Compiler — DTCG Native                     │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │  Input: DesignSystemInput                          │  │
│  │    color  spacing  typography  border  shadow       │  │
│  │                                                    │  │
│  │  buildTokens() ──► PlatformOutput                  │  │
│  │    css  scss  tailwind  js  json                   │  │
│  └────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────┘
```

## Get Started

1. Install — `bun add @wrikka/create-design-system`
   ```bash
   bun add @wrikka/create-design-system
   ```
2. Build tokens — compile design tokens to target formats
   ```ts
   import { buildTokens, toCss, toTailwind } from "@wrikka/create-design-system";
   ```
3. Build — `bun run build`
   ```bash
   bun run build
   ```

## Features

| Icon | Feature | Description |
|:---:|---------|-------------|
| ![icon](https://api.iconify.design/mdi:palette.svg?color=%231976d2&width=16) | DTCG Native | Follows W3C Design Tokens Community Group spec |
| ![icon](https://api.iconify.design/mdi:format-paint.svg?color=%237b1fa2&width=16) | Multi-Platform | CSS, SCSS, Tailwind, JS, JSON output formats |
| ![icon](https://api.iconify.design/mdi:shield-check.svg?color=%23388e3c&width=16) | Type-Safe | Full TypeScript types for tokens and outputs |
| ![icon](https://api.iconify.design/mdi:token.svg?color=%23c2185b&width=16) | Token Builder | `buildTokens()` compiles raw tokens to platform output |
| ![icon](https://api.iconify.design/mdi:tailwind.svg?color=%230097a7&width=16) | Tailwind Config | Generate Tailwind theme from design tokens |
| ![icon](https://api.iconify.design/mdi:code-json.svg?color=%23f57c00&width=16) | Format Adapters | `toCss`, `toScss`, `toJs`, `toJson`, `toTailwind` |

## Usage

### Usage via SDK

Compile design tokens into platform-specific output formats.

```ts
import { buildTokens, toCss, toTailwind } from "@wrikka/create-design-system";

const output = buildTokens({
  color: { primary: { value: "#1976d2" } },
  spacing: { md: { value: "16px" } },
});

const css = toCss(output);
const tailwind = toTailwind(output);
```

```text
┌──────────────────────────────────────────────────────────┐
│  $ bun run src/index.ts                                  │
│  @wrikka/create-design-system                            │
│                                                          │
│  Tokens compiled: 42                                     │
│  Platforms: css, scss, tailwind, js, json                │
│                                                          │
│  ✓ DTCG compliant                                        │
│  ✓ Type-safe outputs                                     │
└──────────────────────────────────────────────────────────┘
```

| api | description | options | default |
|-----|-------------|---------|---------|
| `buildTokens(input)` | Compile design tokens to platform output | `DesignSystemInput`, `PlatformConfig` | all platforms |
| `toCss(output)` | Convert tokens to CSS variables | `PlatformOutput`, `FormatOptions` | — |
| `toScss(output)` | Convert tokens to SCSS variables | `PlatformOutput`, `FormatOptions` | — |
| `toTailwind(output)` | Convert tokens to Tailwind config | `PlatformOutput`, `FormatOptions` | — |
| `toJs(output)` | Convert tokens to JS module | `PlatformOutput`, `FormatOptions` | — |
| `toJson(output)` | Convert tokens to JSON | `PlatformOutput`, `FormatOptions` | — |

## Links

- Repository: <https://github.com/wrikka/bun-packages>
- Source: <https://github.com/wrikka/bun-packages/blob/main/packages/create-design-system/package.json>
