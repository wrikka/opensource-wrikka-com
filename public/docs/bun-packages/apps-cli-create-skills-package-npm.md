# @wrikka/create-skills

## Overview

Devin skill orchestration CLI - run, call, spawn, delegate, and invoke

## Metadata

| Field | Value |
| --- | --- |
| Type | NPM |
| Category | CLI Apps |
| Path | `apps/cli/create-skills/package.json` |
| Version | `0.1.0` |
| License | `MIT` |
| Keywords | devin, skills, cli, mcp, subagents, orchestration |
| Main | `./dist/index.cjs` |
| Module | `./dist/index.js` |
| Types | `./dist/index.d.ts` |

## Directory Structure

- 📄 `AGENTS.md`
- 📄 `biome.jsonc`
- 📄 `bunup.config.ts`
- 📁 `docs`
- 📁 `docs/development`
- 📁 `docs/getting-started`
- 📄 `docs/index.md`
- 📁 `docs/project`
- 📁 `docs/references`
- 📁 `docs/roadmap`
- 📄 `moon.yml`
- 📄 `package.json`
- 📄 `README.md`
- 📁 `scripts`
- 📄 `scripts/smoke-test.ts`
- 📁 `src`
- 📁 `src/adapters`
- 📁 `src/application`
- 📁 `src/domain`
- 📄 `src/index.ts`
- 📁 `src/presentation`
- 📁 `src/shared`
- 📁 `test`
- 📄 `test/cli.test.ts`
- 📄 `tsconfig.json`

## Source Files

- `src/adapters/process-adapter.ts`
- `src/application/skill-service.ts`
- `src/application/subagent-service.ts`
- `src/domain/skill.ts`
- `src/index.ts`
- `src/presentation/cli.ts`
- `src/shared/config.ts`
- `src/shared/logger.ts`
- `src/shared/types.ts`

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
| test | `bun test` |
| test:watch | `bun test --watch` |
| test:coverage | `bun test --coverage` |
| scan | `ast-grep scan` |
| check | `bun run lint && bun run typecheck && bun run scan` |
| verify | `bun run check && bun run test && bun run build` |
| dev:docs | `bunx --bun vitepress dev docs` |
| build:docs | `bunx --bun vitepress build docs` |
| preview:docs | `bunx --bun vitepress preview docs` |
| clean | `bunx rimraf dist node_modules` |
| deps:analyze | `bunx depcheck` |

## Binaries

- `create-skills`: `./dist/presentation/cli.js`

## Dependencies

| Name | Version |
| --- | --- |
| cac | `catalog:` |
| picocolors | `catalog:` |

## Dev Dependencies

| Name | Version |
| --- | --- |
| bunup | `catalog:` |

## README

> ![Status](https://img.shields.io/badge/status-in_development-red)

# @wrikka/create-skills

Devin skill orchestration CLI — Run CLI commands, call MCP server tools, spawn subagents, delegate tasks, and invoke skills from a single unified interface.

![Bun](https://img.shields.io/badge/Bun-1.3-0097a7)
![TypeScript](https://img.shields.io/badge/TypeScript-7.0-1976d2)
![CAC](https://img.shields.io/badge/CAC-6.7-0097a7)

```text
┌──────────────────────────────────────────────────────────┐
│  create-skills — Devin Skill Orchestration CLI            │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │  Available commands:                               │  │
│  │                                                    │  │
│  │  run       Run a CLI with arguments                │  │
│  │  call      Call an MCP server tool                 │  │
│  │  spawn     Spawn a new subagent                    │  │
│  │  delegate  Delegate a task to a subagent           │  │
│  │  invoke    Invoke a skill by name                  │  │
│  │  list      List available skills                   │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│  Skills found: 12   MCP servers: 3   Subagents: 2         │
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
3. List Skills — `bun run dev list`
   ```bash
   bun run dev list
   ```

## Features

| Icon | Feature | Description |
|:---:|---------|-------------|
| ![icon](https://api.iconify.design/mdi:console.svg?color=%231976d2&width=16) | Run CLI Commands | Execute external CLI tools with arguments |
| ![icon](https://api.iconify.design/mdi:server-network.svg?color=%23388e3c&width=16) | MCP Tool Calling | Call MCP server tools with JSON params |
| ![icon](https://api.iconify.design/mdi:account-plus.svg?color=%23f57c00&width=16) | Subagent Spawning | Spawn new subagents with task descriptions |
| ![icon](https://api.iconify.design/mdi:send.svg?color=%237b1fa2&width=16) | Task Delegation | Delegate messages to existing subagents |
| ![icon](https://api.iconify.design/mdi:flash.svg?color=%23c2185b&width=16) | Skill Invocation | Invoke skills by name from local or global scope |
| ![icon](https://api.iconify.design/mdi:format-list-bulleted.svg?color=%230097a7&width=16) | Skill Listing | List all available skills |

## Usage

### Usage via CLI

```bash
create-skills run eslint --fix src/
create-skills call github --tool createIssue --params '{"title":"Bug"}'
create-skills spawn researcher --task "Analyze codebase"
create-skills delegate-to researcher --message "Check imports"
create-skills invoke update-readme --local
create-skills list
```

```text
┌──────────────────────────────────────────────────────────┐
│  $ create-skills list                                    │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │  Available skills:                                 │  │
│  │                                                    │  │
│  │  update-readme       Create README from template   │  │
│  │  follow-skills       Follow skill workflows        │  │
│  │  resolve-errors      Resolve code errors           │  │
│  │  scan-codebase       Scan codebase for symbols     │  │
│  │  deep-research       Cross-check multiple sources  │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│  Found 5 skills                                           │
└──────────────────────────────────────────────────────────┘
```

| api | description | options | default |
|-----|-------------|---------|---------|
| `runCommand(cli, args, logger)` | Run a CLI with arguments | `cli`, `args` | — |
| `callMcp(mcp, tool, params, logger)` | Call an MCP server tool | `mcp`, `tool`, `params` | `params={}` |
| `spawnSubagent(name, task, context, logger)` | Spawn a new subagent | `name`, `task`, `context` | — |
| `delegateToSubagent(name, message, logger)` | Delegate to existing subagent | `name`, `message` | — |
| `invokeSkill(skill, opts, logger)` | Invoke a skill by name | `skill`, `local`, `global` | `global=true` |
| `listAvailableSkills(logger)` | List all available skills | — | — |
