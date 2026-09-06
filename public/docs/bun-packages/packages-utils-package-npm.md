# @wrikka/utils

## Overview

Consolidated utility packages for Wrikka projects

## Metadata

| Field | Value |
| --- | --- |
| Type | NPM |
| Category | Utils |
| Path | `packages/utils/package.json` |
| Version | `1.0.0` |
| License | `MIT` |
| Repository | <https://github.com/wrikka/bun-packages> |
| Keywords | utils, utilities, shared, io, logger, math, validator, config, bun, typescript |
| Main | `./dist/index.cjs` |
| Module | `./dist/index.js` |
| Types | `./dist/index.d.ts` |

## Directory Structure

- 📄 `bunup.config.ts`
- 📁 `coverage`
- 📄 `coverage/base.css`
- 📄 `coverage/block-navigation.js`
- 📄 `coverage/clover.xml`
- 📁 `coverage/config`
- 📄 `coverage/coverage-final.json`
- 📄 `coverage/favicon.png`
- 📄 `coverage/index.html`
- 📁 `coverage/logger`
- 📄 `coverage/prettify.css`
- 📄 `coverage/prettify.js`
- 📁 `coverage/schema`
- 📄 `coverage/sort-arrow-sprite.png`
- 📄 `coverage/sorter.js`
- 📄 `dprint.jsonc`
- 📄 `moon.yml`
- 📄 `oxlintrc.json`
- 📄 `package.json`
- 📁 `src`
- 📁 `src/config`
- 📁 `src/design-patterns`
- 📄 `src/index.ts`
- 📁 `src/io`
- 📁 `src/logger`
- 📁 `src/math`
- 📁 `src/reactive`
- 📁 `src/schema`
- 📁 `src/shared`
- 📁 `src/transformer`

## Source Files

- `src/config/config-manager/index.ts`
- `src/config/config-manager/modules/config/application/usecases/config-usecase.ts`
- `src/config/config-manager/modules/config/domain/models/config-model.ts`
- `src/config/config-manager/modules/config/domain/operations/get-config.ts`
- `src/config/config-manager/modules/config/domain/operations/load-config.ts`
- `src/config/config-manager/modules/config/domain/operations/set-config.ts`
- `src/config/config-manager/modules/config/index.ts`
- `src/config/config-manager/modules/config/ports/index.ts`
- `src/config/config-manager/modules/config/types/index.ts`
- `src/config/config-manager/shared/constants/constants.ts`
- `src/config/config-manager/shared/constants/index.ts`
- `src/config/config-manager/shared/errors/error-classes.ts`
- `src/config/config-manager/shared/errors/errors.ts`
- `src/config/config-manager/shared/errors/index.ts`
- `src/config/config-manager/shared/types/index.ts`
- `src/config/config-manager/shared/utils/guards.ts`
- `src/config/config-manager/shared/utils/index.ts`
- `src/config/config-manager/shared/utils/utils.ts`
- `src/config/default-config/config/index.ts`
- `src/config/default-config/config/shared/index.ts`
- `src/config/default-config/index.ts`
- `src/config/default-config/modules/dprint/application/index.ts`
- `src/config/default-config/modules/dprint/domain/index.ts`
- `src/config/default-config/modules/dprint/dprint.ts`
- `src/config/default-config/modules/dprint/index.ts`
- `src/config/default-config/modules/dprint/ports/index.ts`
- `src/config/default-config/modules/dprint/types/index.ts`
- `src/config/default-config/modules/index.ts`
- `src/config/default-config/modules/oxlint/application/index.ts`
- `src/config/default-config/modules/oxlint/domain/index.ts`
- `src/config/default-config/modules/oxlint/index.ts`
- `src/config/default-config/modules/oxlint/oxlint.ts`
- `src/config/default-config/modules/oxlint/ports/index.ts`
- `src/config/default-config/modules/oxlint/types/index.ts`
- `src/config/default-config/modules/typescript/application/index.ts`
- `src/config/default-config/modules/typescript/application/usecases/index.ts`
- `src/config/default-config/modules/typescript/application/usecases/usecases.ts`
- `src/config/default-config/modules/typescript/domain/index.ts`
- `src/config/default-config/modules/typescript/domain/operations.ts`
- `src/config/default-config/modules/typescript/index.ts`

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
| tslib | `catalog:` |
| typescript-json-schema | `^0.68.0` |
| zod | `catalog:` |

## Dev Dependencies

| Name | Version |
| --- | --- |
| @biomejs/biome | `catalog:` |
| @types/bun | `catalog:` |
| @types/node | `catalog:` |
| bunup | `catalog:` |
| typescript | `catalog:` |
| vitest | `catalog:` |

## Environment

| Runtime | Version |
| --- | --- |
| bun | `>=1.0.0` |

## README

> This workspace does not have a `README.md` yet. Consider adding one to improve documentation.

## Links

- Repository: <https://github.com/wrikka/bun-packages>
- Source: <https://github.com/wrikka/bun-packages/blob/main/packages/utils/package.json>
