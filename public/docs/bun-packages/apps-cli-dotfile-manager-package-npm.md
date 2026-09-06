# @wrikka/dotfile-manager

## Overview

A simple dotfiles manager inspired by chezmoi

## Metadata

| Field | Value |
| --- | --- |
| Type | NPM |
| Category | CLI Apps |
| Path | `apps/cli/dotfile-manager/package.json` |
| Version | `0.0.2` |
| Repository | <https://github.com/your-username/dotfiles-manager.git> |
| Keywords | domain:dotfiles, dotfiles, layer:system, monorepo, runtime:bun, system, visibility:internal, wrikka |
| Main | `./dist/index.mjs` |
| Module | `./dist/index.mjs` |
| Types | `./dist/index.d.mts` |

## Directory Structure

- 📄 `AGENTS.md`
- 📄 `biome.jsonc`
- 📄 `bun.lock`
- 📄 `bunup.config.ts`
- 📄 `moon.yml`
- 📄 `package.json`
- 📄 `README.md`
- 📁 `src`
- 📁 `src/adapters`
- 📁 `src/app`
- 📄 `src/index.ts`
- 📁 `src/infra`
- 📁 `src/modules`
- 📁 `src/shared`
- 📁 `tests`
- 📄 `tests/sync-local.test.d.ts`
- 📄 `tests/sync-local.test.d.ts.map`
- 📄 `tests/sync-local.test.js.map`
- 📄 `tests/sync-local.test.ts`
- 📄 `tsconfig.json`
- 📄 `tsconfig.tsbuildinfo`
- 📄 `vitest.config.ts`

## Source Files

- `src/adapters/input/cli/commands/add.ts`
- `src/adapters/input/cli/commands/init.ts`
- `src/adapters/input/cli/commands/open.ts`
- `src/adapters/input/cli/commands/remove.ts`
- `src/adapters/input/cli/commands/sync-local.ts`
- `src/adapters/input/cli/commands/sync-remote.ts`
- `src/adapters/input/cli/components/file-list.ts`
- `src/adapters/input/cli/components/index.ts`
- `src/adapters/input/cli/components/menu.ts`
- `src/app/command.ts`
- `src/app/constants/defaults.ts`
- `src/app/constants/dotfiles.const.ts`
- `src/app/constants/editors.const.ts`
- `src/app/constants/index.ts`
- `src/app/constants/messages.const.ts`
- `src/app/interactive.ts`
- `src/app/usecases/add-file.usecase.ts`
- `src/app/usecases/init.usecase.ts`
- `src/app/utils/file.ts`
- `src/app/utils/git.ts`
- `src/app/utils/index.ts`
- `src/app/utils/path.ts`
- `src/index.ts`
- `src/infra/config/config.ts`
- `src/infra/config/index.ts`
- `src/infra/config/schemas.ts`
- `src/infra/external-services/enhanced-file-system.ts`
- `src/infra/external-services/file-system.ts`
- `src/infra/external-services/git.ts`
- `src/infra/external-services/index.ts`
- `src/infra/external-services/script-runner.ts`
- `src/infra/external-services/system-info.ts`
- `src/infra/external-services/template.ts`
- `src/modules/cli/index.ts`
- `src/modules/core/args-parser.ts`
- `src/modules/core/error-handler.ts`
- `src/modules/core/index.ts`
- `src/modules/dotfile/domain/events.ts`
- `src/modules/dotfile/domain/index.ts`
- `src/modules/dotfile/domain/models.ts`

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
| lint | `biome check src/` |
| format | `biome check --write src/` |
| test | `vitest run` |
| verify | `bun run lint && bun run typecheck && bun run test` |
| ci | `bun run verify && bun run build` |

## Binaries

- `wdotfiles`: `./dist/index.js`

## Dependencies

| Name | Version |
| --- | --- |
| @clack/prompts | `^1.7.0` |
| c12 | `3.3.4` |
| cac | `catalog:` |
| zod | `catalog:` |
| zod-to-json-schema | `catalog:` |

## Dev Dependencies

| Name | Version |
| --- | --- |
| @types/bun | `catalog:` |
| @types/mustache | `catalog:` |
| bunup | `catalog:` |
| dprint | `catalog:` |
| oxlint | `catalog:` |
| oxlint-tsgolint | `^0.23.0` |
| release-it | `catalog:` |
| typescript | `catalog:` |
| vitest | `catalog:` |

## README

> ![Status](https://img.shields.io/badge/status-in_development-red)

# @wrikka/dotfile-manager

A simple dotfiles manager inspired by chezmoi — Track, sync, and manage your dotfiles across local and remote repositories with an interactive TUI or CLI commands.

![Bun](https://img.shields.io/badge/Bun-1.3-0097a7)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0-1976d2)
![Zod](https://img.shields.io/badge/Zod-4.4-1976d2)

```text
┌──────────────────────────────────────────────────────────┐
│  wdotfiles — Dotfiles Manager                            │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │  Managed dotfiles:                                 │  │
│  │                                                    │  │
│  │  > .bashrc          synced   2025-01-14            │  │
│  │    .zshrc           synced   2025-01-14            │  │
│  │    .gitconfig       pending  2025-01-10            │  │
│  │    .vimrc           synced   2025-01-14            │  │
│  │    .tmux.conf       pending  2025-01-08            │  │
│  │                                                    │  │
│  │  [a] Add  [r] Remove  [s] Sync  [q] Quit          │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│  Total: 5   Synced: 3   Pending: 2                       │
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
3. Initialize — `bun run dev init`
   ```bash
   bun run dev init
   ```

## Features

| Icon | Feature | Description |
|:---:|---------|-------------|
| ![icon](https://api.iconify.design/mdi:folder-plus.svg?color=%231976d2&width=16) | Init Repository | Initialize dotfiles tracking repository |
| ![icon](https://api.iconify.design/mdi:file-plus.svg?color=%23388e3c&width=16) | Add Files | Add dotfiles to tracked repository |
| ![icon](https://api.iconify.design/mdi:file-remove.svg?color=%23d32f2f&width=16) | Remove Files | Remove dotfiles from tracking |
| ![icon](https://api.iconify.design/mdi:sync.svg?color=%23f57c00&width=16) | Local Sync | Sync dotfiles to local system with dry-run |
| ![icon](https://api.iconify.design/mdi:cloud-upload.svg?color=%237b1fa2&width=16) | Remote Sync | Sync dotfiles to remote git repository |
| ![icon](https://api.iconify.design/mdi:view-list.svg?color=%23c2185b&width=16) | List Files | View all managed dotfiles |
| ![icon](https://api.iconify.design/mdi:mouse.svg?color=%230097a7&width=16) | Interactive TUI | Browse and manage dotfiles interactively |
| ![icon](https://api.iconify.design/mdi:git.svg?color=%2300796b&width=16) | Git Integration | Version control for dotfile changes |

## Usage

### Usage via CLI

```bash
wdotfiles init
wdotfiles add ~/.bashrc
wdotfiles remove ~/.bashrc
wdotfiles sync-local --dry-run
wdotfiles sync-remote
wdotfiles open
```

```text
┌──────────────────────────────────────────────────────────┐
│  $ wdotfiles sync-local --dry-run                        │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │  Dry run — no changes will be made                 │  │
│  │                                                    │  │
│  │  .bashrc     -> ~/.bashrc     (will link)          │  │
│  │  .zshrc      -> ~/.zshrc      (will link)          │  │
│  │  .gitconfig  -> ~/.gitconfig  (up to date)         │  │
│  │  .vimrc      -> ~/.vimrc      (will link)          │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│  3 files would be linked, 1 already up to date           │
└──────────────────────────────────────────────────────────┘
```

| api | description | options | default |
|-----|-------------|---------|---------|
| `init()` | Initialize dotfiles manager | — | — |
| `add(file)` | Add a file to dotfiles tracking | `file` path | — |
| `remove(file)` | Remove a file from tracking | `file` path | — |
| `syncToLocal(opts)` | Sync dotfiles to local system | `dryRun` | `dryRun=false` |
| `syncToRemote()` | Sync dotfiles to remote repository | — | — |
| `open()` | List all managed dotfiles | — | — |

## Links

- Repository: <https://github.com/your-username/dotfiles-manager.git>
- Source: <https://github.com/your-username/dotfiles-manager.git/blob/main/apps/cli/dotfile-manager/package.json>
