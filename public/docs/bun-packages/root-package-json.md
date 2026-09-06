# @wrikka/bun-packages

## Overview

Bun packages monorepo for Wrikka

## Metadata

| Field | Value |
| --- | --- |
| Type | NPM |
| Category | Root |
| Path | `package.json` |
| Version | `1.0.0` |

## Directory Structure

- 📄 `AGENTS.md`
- 📁 `apps`
- 📁 `apps/cli`
- 📁 `apps/services`
- 📁 `apps/toolkits`
- 📁 `apps/web`
- 📄 `biome.jsonc`
- 📄 `bun.lock`
- 📄 `CHANGELOG.md`
- 📄 `CONTRIBUTING.md`
- 📁 `docs`
- 📄 `docs/AGENTS.md`
- 📁 `docs/getting-started`
- 📄 `docs/index.md`
- 📄 `docs/moon.yml`
- 📄 `docs/package.json`
- 📁 `docs/project`
- 📄 `docs/tsconfig.json`
- 📄 `docs/uno.config.ts`
- 📁 `docs/workspaces`
- 📄 `hk.pkl`
- 📄 `knip.json`
- 📄 `mise.toml`
- 📄 `package.json`
- 📁 `packages`
- 📁 `packages/analytics`
- 📁 `packages/animation`
- 📁 `packages/app-router`
- 📁 `packages/chart`
- 📁 `packages/composables`

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
| dev | `moon run :dev` |
| build | `moon run :build` |
| build:watch | `moon run :build-watch` |
| typecheck | `moon run :typecheck` |
| typecheck:watch | `moon run :typecheck-watch` |
| lint | `moon run :lint` |
| lint:fix | `moon run :lint-fix` |
| format | `moon run :format` |
| test | `moon run :test` |
| test:watch | `moon run :test-watch` |
| test:coverage | `moon run :test-coverage` |
| test:integration | `moon run :test-integration` |
| test:e2e | `moon run :test-e2e` |
| scan | `moon run :scan` |
| check | `moon run :lint && moon run :typecheck && moon run :scan` |
| verify | `bun run check && moon run :test && moon run :build` |
| deps:analyze | `bunx depcheck` |
| knip | `knip` |
| knip:fix | `knip --fix` |
| knip:strict | `knip --strict` |
| clean | `bunx rimraf node_modules` |
| bench | `bunx mitata` |
| prepare | `mise x -- hk install; exit 0` |
| prerelease | `moon run :build` |
| release | `auto-it` |
| dev:docs | `bun --filter @wrikka/docs dev` |
| build:docs | `bun --filter @wrikka/docs build` |
| preview:docs | `bun --filter @wrikka/docs preview` |

## Dependencies

| Name | Version |
| --- | --- |
| cac | `catalog:` |
| chalk | `catalog:` |
| commander | `catalog:` |
| execa | `^10.0.1` |
| picocolors | `catalog:` |
| zod | `catalog:` |
| zod-to-json-schema | `catalog:` |

## Dev Dependencies

| Name | Version |
| --- | --- |
| @biomejs/biome | `catalog:` |
| @moonrepo/cli | `^2.5.3` |
| @types/bun | `catalog:` |
| @types/node | `catalog:` |
| @types/react | `catalog:` |
| @wrikka/create-cli | `workspace:*` |
| @wrikka/utils | `workspace:*` |
| bunup | `catalog:` |
| dprint | `catalog:` |
| glob | `catalog:` |
| ink | `catalog:` |
| knip | `^6.33.0` |
| oxlint | `catalog:` |
| shiki | `catalog:` |
| taze | `catalog:` |
| tsdown | `catalog:` |
| typescript | `catalog:` |
| unocss | `catalog:` |
| vite-plugin-checker | `^0.14.5` |
| vitest | `catalog:` |

## Environment

| Runtime | Version |
| --- | --- |
| node | `>=20 <22` |
| bun | `>=1.3.10 <2.0.0` |

## README

> ![Status](https://img.shields.io/badge/status-active-brightgreen)

# @wrikka/bun-packages

Bun packages monorepo for Wrikka — a unified collection of CLI tools, shared libraries, web apps, and services built with Bun, TypeScript, Moonrepo, and SolidJS.

![Bun](https://img.shields.io/badge/Bun-1.3.14-fbf0df)
![Moonrepo](https://img.shields.io/badge/Moonrepo-2.5-7b1fa2)
![TypeScript](https://img.shields.io/badge/TypeScript-7.0-3178c6)
![SolidJS](https://img.shields.io/badge/SolidJS-1.9-1c6fbb)
![Vite](https://img.shields.io/badge/Vite-8.2-646cff)

```text
┌──────────────────────────────────────────────────────────┐
│  @wrikka/bun-packages — Wrikka platform monorepo         │
│                                                          │
│  ┌─────────────┬─────────────┬────────────────────────┐  │
│  │  CLI Tools  │  Web Apps   │    Shared Packages     │  │
│  ├─────────────┼─────────────┼────────────────────────┤  │
│  │ release     │ cloud       │ utils                  │  │
│  │ test        │ create-docs │ stores                 │  │
│  │ task-mgr    │ web-inspect │ query                  │  │
│  └─────────────┴─────────────┴────────────────────────┘  │
│                                                          │
│  $ moon run :build    $ bun run dev    $ bun run verify  │
└──────────────────────────────────────────────────────────┘
```

## Get Started

1. Install prerequisites — Bun and Node.js
   ```bash
   bun --version  # >= 1.3.10
   node --version # >= 20
   ```
2. Clone and install
   ```bash
   git clone <repo-url>
   cd bun-packages
   bun install
   ```
3. Build all workspaces
   ```bash
   bun run build
   ```
4. Run checks
   ```bash
   bun run check
   ```
5. Start dev
   ```bash
   bun run dev
   ```

## Features

| Icon | Feature | Description | Benefit | Usage |
|:---:|:--------|:------------|:--------|:------|
| ![icon](https://api.iconify.design/mdi:console.svg?color=%230097a7&width=16) | CLI Toolkits | Terminal tools for release, testing, task management, and quality checks | Speeds up daily developer workflows | `moon run :build` |
| ![icon](https://api.iconify.design/mdi:web.svg?color=%237b1fa2&width=16) | Web Apps | Dashboard and dev-tool web apps built with SolidJS and Vite | Provides visual interfaces for platform operations | `bun --filter @wrikka/cloud dev` |
| ![icon](https://api.iconify.design/mdi:package-variant.svg?color=%231976d2&width=16) | Shared Libraries | Reusable packages for state, routing, charts, animations, and integrations | Avoids duplication across Wrikka projects | `import { ... } from '@wrikka/utils'` |
| ![icon](https://api.iconify.design/mdi:rocket-launch.svg?color=%23388e3c&width=16) | Monorepo Orchestration | Moonrepo + Bun workspaces with unified tasks, lint, typecheck, and test | Keeps builds and checks consistent at scale | `moon run :check` |
| ![icon](https://api.iconify.design/mdi:tag.svg?color=%23c2185b&width=16) | Release Automation | Automated releases and changelog generation | Ships versions safely with generated release notes | `bun run release` |
| ![icon](https://api.iconify.design/mdi:check-circle.svg?color=%2300796b&width=16) | Testing & Quality | Bun-native tests, linting, formatting, and unused-code detection | Maintains code quality and prevents regressions | `bun run verify` |

## Usage

### Usage via CLI

```bash
moon --help
```

```text
┌──────────────────────────────────────────────────────────┐
│  $ moon --help                                           │
│                                                          │
│  USAGE                                                   │
│    moon [OPTIONS] <COMMAND>                              │
│                                                          │
│  COMMANDS                                                │
│  action-graph   Dependency graph of actions              │
│  check          Run build and test tasks                 │
│  ci             Run affected tasks in CI                 │
│  clean          Clean workspace artifacts                │
│  project        Display project info                     │
│  projects       Display all projects                     │
│  query          Query moon data as JSON                  │
│  run            Run one or many tasks                    │
│  sync           Sync workspace to healthy state          │
│  task           Display task info                        │
│  tasks          Display all tasks                        │
│  upgrade        Upgrade moon to latest                   │
│                                                          │
│  OPTIONS                                                 │
│    -h, --help    Print help                              │
│    -V, --version Print version                           │
└──────────────────────────────────────────────────────────┘
```

### Usage via Web

<details>
<summary>Web app dashboard click flow</summary>

Open a web app workspace and start the dev server.

```bash
bun --filter @wrikka/cloud dev
```

```text
┌──────────────────────────────────────────────────────────┐
│  @wrikka/cloud — Wrikka platform dashboard               │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │  [Logo]  Dashboard    [Projects] [Deploys] [Logs]  │  │
│  │                                                    │  │
│  │  ┌────────────────┐  ┌──────────────────────────┐  │  │
│  │  │ Project Status │  │ Recent Builds            │  │  │
│  │  │  active  42    │  │  release   success     o │  │  │
│  │  │  pending  3    │  │  test      running     - │  │  │
│  │  └────────────────┘  └──────────────────────────┘  │  │
│  └────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────┘
```

</details>

### Usage via TUI

<details>
<summary>TUI navigation for task-manager</summary>

Run the TUI from any terminal.

```bash
bunx @wrikka/task-manager
```

```text
┌──────────────────────────────────────────────────────────┐
│  @wrikka/task-manager — Main Menu                        │
│                                                          │
│  > View tasks        [Enter]                             │
│    Create task       [↑/↓]                               │
│    Update status     [q]  quit                           │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

</details>

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for development setup, conventions, and validation workflows.
