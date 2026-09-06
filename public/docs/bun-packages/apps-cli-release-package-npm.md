# @wrikka/release

## Overview

Modern release automation tool with integrated changelog generation

## Metadata

| Field | Value |
| --- | --- |
| Type | NPM |
| Category | CLI Apps |
| Path | `apps/cli/release/package.json` |
| Version | `0.1.0` |
| License | `MIT` |
| Keywords | release, version, automation, changelog, monorepo, bun, effect-ts |
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
- 📄 `coverage/changelog.ts.html`
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
- 📁 `src/bin`
- 📄 `src/index.ts`
- 📁 `src/modules`
- 📁 `src/presentation`
- 📁 `src/shared`
- 📁 `test`
- 📄 `test/changelog.test.ts`
- 📄 `tsconfig.json`
- 📄 `tsconfig.tsbuildinfo`
- 📄 `tsdown.config.ts`

## Source Files

- `src/adapters/config/cache.ts`
- `src/adapters/config/config.service.ts`
- `src/adapters/config/config.ts`
- `src/adapters/config/database.ts`
- `src/adapters/config/http.ts`
- `src/adapters/config/index.ts`
- `src/adapters/http/ai.providers.ts`
- `src/adapters/http/ai.service.ts`
- `src/adapters/http/github.repository.ts`
- `src/adapters/http/github.service.ts`
- `src/adapters/persistence/changelog.repository.ts`
- `src/adapters/persistence/git-hook.repository.ts`
- `src/adapters/persistence/git.service.ts`
- `src/adapters/repositories/changelog.repository.adapter.ts`
- `src/adapters/repositories/changelog.repository.ts`
- `src/adapters/repositories/git.repository.ts`
- `src/bin/cli.ts`
- `src/index.ts`
- `src/modules/changelog/application/constructors/changelog.constructors.ts`
- `src/modules/changelog/application/constructors/data-constructors.ts`
- `src/modules/changelog/application/constructors/release-constructors.ts`
- `src/modules/changelog/application/domain-events/changelog.events.ts`
- `src/modules/changelog/application/domain-events/event-dispatcher.ts`
- `src/modules/changelog/application/domain-events/event-factories.ts`
- `src/modules/changelog/application/domain-events/event-handlers.ts`
- `src/modules/changelog/application/domain-events/event-types.ts`
- `src/modules/changelog/application/domain-events/handlers.ts`
- `src/modules/changelog/application/guards/auth-guards.ts`
- `src/modules/changelog/application/guards/changelog.guards.ts`
- `src/modules/changelog/application/index.ts`
- `src/modules/changelog/application/transformers/changelog.transformer.ts`
- `src/modules/changelog/application/transformers/changelog.transformers.ts`
- `src/modules/changelog/application/transformers/commit-transformer.ts`
- `src/modules/changelog/application/usecases/changelog.usecase.ts`
- `src/modules/changelog/application/usecases/generate-changelog.usecase.ts`
- `src/modules/changelog/application/usecases/release.usecase.ts`
- `src/modules/changelog/application/usecases/update-changelog.usecase.ts`
- `src/modules/changelog/application/validators/additional-validators.ts`
- `src/modules/changelog/application/validators/changelog.validators.ts`
- `src/modules/changelog/application/validators/input-validators.ts`

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

- `release`: `./dist/bin/cli.js`
- `ts-release`: `./dist/bin/cli.js`

## Dependencies

| Name | Version |
| --- | --- |
| @wrikka/utils | `workspace:*` |
| find-up | `^8.0.0` |
| glob | `catalog:` |
| zod | `catalog:` |

## Dev Dependencies

| Name | Version |
| --- | --- |
| @types/bun | `catalog:` |
| @types/node | `catalog:` |
| @vitest/coverage-v8 | `^4.1.11` |
| bunup | `catalog:` |
| typescript | `catalog:` |
| vitest | `catalog:` |

## README

> ![Status](https://img.shields.io/badge/status-in_development-red)

# @wrikka/release

Modern release automation tool — Semantic versioning, changelog generation, git tagging, monorepo support, and npm publishing in a single workflow. The legacy `@wrikka/changelog` workspace has been merged into this package and restructured under Clean Architecture.

![Bun](https://img.shields.io/badge/Bun-1.3.14-000000)
![TypeScript](https://img.shields.io/badge/TypeScript-7.0.2-3178c6)
![Version](https://img.shields.io/badge/version-0.1.0-1976d2)

```text
┌──────────────────────────────────────────────────────────┐
│  @wrikka/release                                         │
│  Modern release automation tool                          │
│                                                          │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌─────────┐  │
│  │ Validate │->│ Version  │->│ Update   │->| Git Tag │  │
│  │ Options  │  │ Bump     │  │ Packages │  | & Push  │  │
│  └──────────┘  └──────────┘  └──────────┘  └────┬────┘  │
│                                                   │       │
│  ┌──────────┐  ┌──────────┐              ┌──────▼─────┐  │
│  │ Publish  │<-│ Generate │<-───────────│  Changelog │  │
│  │ Packages │  │ Report   │              │  & Commits │  │
│  └──────────┘  └──────────┘              └────────────┘  │
└──────────────────────────────────────────────────────────┘
```

## Get Started

1. Install — `bun add @wrikka/release`
   ```bash
   bun add @wrikka/release
   ```
2. Build — `bun run build`
   ```bash
   cd apps/cli/release && bun run build
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
| ![icon](https://api.iconify.design/mdi:tag.svg?color=%231976d2&width=16) | Semantic Versioning | Auto-detect version bumps from commits |
| ![icon](https://api.iconify.design/mdi:file-document.svg?color=%23388e3c&width=16) | Changelog Generation | Create changelogs from commit history |
| ![icon](https://api.iconify.design/mdi:git.svg?color=%23d32f2f&width=16) | Git Integration | Tags, commits, and push to remote |
| ![icon](https://api.iconify.design/mdi:cube.svg?color=%23f57c00&width=16) | Monorepo Support | Coordinate releases across packages |
| ![icon](https://api.iconify.design/mdi:hook.svg?color=%237b1fa2&width=16) | Git Hooks | Install and uninstall git hooks |
| ![icon](https://api.iconify.design/mdi:eye.svg?color=%23c2185b&width=16) | Dry Run Mode | Preview changes without side effects |
| ![icon](https://api.iconify.design/mdi:rocket.svg?color=%23303f9f&width=16) | NPM Publishing | Publish packages to npm registry |
| ![icon](https://api.iconify.design/mdi:github.svg?color=%230097a7&width=16) | GitHub Sync | Sync releases with GitHub |
| ![icon](https://api.iconify.design/mdi:robot.svg?color=%2300796b&width=16) | AI Changelog | AI-powered changelog generation |

## Architecture

The package follows Clean Architecture:

- `src/modules/` — Vertical slice modules (`release`, `changelog`)
- `src/adapters/` — External systems (config, HTTP, persistence, repositories)
- `src/presentation/` — CLI / HTTP entry points
- `src/shared/` — Shared kernel (types, utils, constants, components)
- `src/bin/` — CLI executable entry

## Usage

### CLI

```bash
bunx release --help
bunx release --dry-run
bunx release --version-bump minor
bunx release --no-publish
bunx release --changed-only

bunx release init
bunx release generate [version] --since <tag> --ai
bunx release update
bunx release bump [major|minor|patch]
bunx release hook install
bunx release hook uninstall
bunx release gh release [-r <version>] [--draft]
```

### SDK

```bash
bun add @wrikka/release
```

```typescript
import { executeRelease, calculateVersion, checkStatus, Changelog } from '@wrikka/release';

const status = await checkStatus(repository, 'my-workspace');
const version = await calculateVersion(repository, 'minor', undefined, 'my-workspace');
const result = await executeRelease(repository, {
  versionBump: 'minor',
  workspace: 'my-workspace',
  changedOnly: true,
  dryRun: true,
});

// Changelog module
const changelog = Changelog.generateChangelog('1.2.0', commits);
```

| api | description | options | default |
|-----|-------------|---------|---------|
| `executeRelease(repository, options)` | Execute full release workflow | `versionBump`, `workspace`, `dryRun`, `noGit`, `noChangelog`, `noPublish`, `changedOnly`, `ignorePrivate` | — |
| `calculateVersion(repository, bump, preid?, workspace?)` | Calculate next version | `bump`: major, minor, patch, prerelease | — |
| `checkStatus(repository, workspace?)` | Check current release status | `workspace` | — |
| `Changelog.generateChangelog(version, commits)` | Generate a changelog entry | `version`, `commits` | — |
