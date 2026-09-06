# @wrikka/create-cli

## Overview

Create CLI - Unified terminal prompt, UI, TUI framework, CLI framework, and data display utilities

## Metadata

| Field | Value |
| --- | --- |
| Type | NPM |
| Category | Toolkits Apps |
| Path | `apps/toolkits/create-cli/package.json` |
| Version | `0.1.0` |
| License | `MIT` |
| Keywords | cli, prompt, terminal, interactive, input, command-line, terminal-ui, tui, components, charts, markdown, spinner, progress, colors, gradient, powerline, theme, table, tree, diff, json, command, parser, completion, bun, typescript, clean-architecture |
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
- 📄 `moon.yml`
- 📄 `package.json`
- 📄 `README.md`
- 📁 `src`
- 📁 `src/adapters`
- 📄 `src/barrel-adapters.ts`
- 📄 `src/barrel-box.ts`
- 📄 `src/barrel-charts.ts`
- 📄 `src/barrel-cli.ts`
- 📄 `src/barrel-color.ts`
- 📄 `src/barrel-display.ts`
- 📄 `src/barrel-gradient.ts`
- 📄 `src/barrel-markdown.ts`
- 📄 `src/barrel-powerline.ts`
- 📄 `src/barrel-presentation.ts`
- 📄 `src/barrel-progress.ts`

## Source Files

- `src/adapters/box/box-handler.ts`
- `src/adapters/charts/charts-handler.ts`
- `src/adapters/config/index.ts`
- `src/adapters/config/terminal-config.ts`
- `src/adapters/console/index.ts`
- `src/adapters/console/operations.ts`
- `src/adapters/database/database-config.ts`
- `src/adapters/database/index.ts`
- `src/adapters/input/cli/prompt-adapter.ts`
- `src/adapters/markdown/markdown-handler.ts`
- `src/adapters/progress/progress-handler.ts`
- `src/adapters/prompt/prompt-handler.ts`
- `src/adapters/spinner/spinner-handler.ts`
- `src/adapters/terminal/bun-terminal.adapter.ts`
- `src/adapters/terminal/index.ts`
- `src/adapters/terminal/terminal-operations.ts`
- `src/adapters/timer/index.ts`
- `src/adapters/timer/timer-operations.ts`
- `src/barrel-adapters.ts`
- `src/barrel-box.ts`
- `src/barrel-charts.ts`
- `src/barrel-cli.ts`
- `src/barrel-color.ts`
- `src/barrel-display.ts`
- `src/barrel-gradient.ts`
- `src/barrel-markdown.ts`
- `src/barrel-powerline.ts`
- `src/barrel-presentation.ts`
- `src/barrel-progress.ts`
- `src/barrel-prompt.ts`
- `src/barrel-reporter.ts`
- `src/barrel-shared.ts`
- `src/barrel-spinner.ts`
- `src/barrel-theme.ts`
- `src/barrel-tui.ts`
- `src/index.ts`
- `src/modules/box/application/index.ts`
- `src/modules/box/domain/events/index.ts`
- `src/modules/box/domain/index.ts`
- `src/modules/box/domain/models/index.ts`

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

## Dependencies

| Name | Version |
| --- | --- |
| @wrikka/utils | `workspace:*` |
| chalk | `catalog:` |
| shiki | `catalog:` |

## Dev Dependencies

| Name | Version |
| --- | --- |
| @biomejs/biome | `catalog:` |
| @types/bun | `catalog:` |
| @types/node | `catalog:` |
| @wrikka/utils | `workspace:*` |
| bunup | `catalog:` |
| typescript | `catalog:` |
| vitest | `catalog:` |

## README

> ![Status](https://img.shields.io/badge/status-in_development-red)

# @wrikka/create-cli

Unified terminal prompt, UI, TUI framework, CLI framework, and data display utilities — Build interactive CLI applications with prompts, boxes, charts, spinners, progress bars, themes, gradients, and data display components.

![Bun](https://img.shields.io/badge/Bun-1.3-0097a7)
![TypeScript](https://img.shields.io/badge/TypeScript-7.0-1976d2)
![Chalk](https://img.shields.io/badge/Chalk-6.0-c2185b)

```text
┌──────────────────────────────────────────────────────────┐
│  create-cli — Terminal UI & Prompt Framework              │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │  Select a framework:                               │  │
│  │                                                    │  │
│  │  > Bun   (fast, native)                            │  │
│  │    Node  (widely supported)                        │  │
│  │    Deno  (secure by default)                       │  │
│  │                                                    │  │
│  │  [============================]  60%               │  │
│  └────────────────────────────────────────────────────┘  │
│                                                          │
│  Modules: prompt, box, charts, spinner, theme, gradient   │
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
3. Use in your app — import components
   ```bash
   bun run dev
   ```

## Features

| Icon | Feature | Description |
|:---:|---------|-------------|
| ![icon](https://api.iconify.design/mdi:form-textbox.svg?color=%231976d2&width=16) | Interactive Prompts | Text, select, confirm, multiselect, autocomplete, date, path, password, number, editor, search |
| ![icon](https://api.iconify.design/mdi:cube-outline.svg?color=%23388e3c&width=16) | Box Rendering | Configurable borders, padding, and styles |
| ![icon](https://api.iconify.design/mdi:chart-bar.svg?color=%23f57c00&width=16) | Charts | Bar, pie, and line chart rendering |
| ![icon](https://api.iconify.design/mdi:loading.svg?color=%237b1fa2&width=16) | Spinners | Animated terminal spinners |
| ![icon](https://api.iconify.design/mdi:progress-check.svg?color=%23c2185b&width=16) | Progress Bars | Customizable progress bar rendering |
| ![icon](https://api.iconify.design/mdi:palette.svg?color=%230097a7&width=16) | Theme System | Dark, light, dracula, solarized presets |
| ![icon](https://api.iconify.design/mdi:gradient-horizontal.svg?color=%2300796b&width=16) | Gradient Text | Multi-color gradient text rendering |
| ![icon](https://api.iconify.design/mdi:power-plug.svg?color=%23ffa000&width=16) | Powerline Bars | Powerline-style status bar segments |
| ![icon](https://api.iconify.design/mdi:terminal.svg?color=%23303f9f&width=16) | CLI Framework | Command parser, help generation, shell completion |
| ![icon](https://api.iconify.design/mdi:table-large.svg?color=%23d32f2f&width=16) | Data Display | Tables, trees, lists, key-value, diff, JSON rendering |
| ![icon](https://api.iconify.design/mdi:markdown.svg?color=%231976d2&width=16) | Markdown Rendering | Render markdown in the terminal |
| ![icon](https://api.iconify.design/mdi:react.svg?color=%230097a7&width=16) | TUI Core | Reactive component framework with signals |

## Usage

### Usage via SDK

```typescript
import { text, select, confirm, renderBox, renderTable } from "@wrikka/create-cli";

const name = await text({ message: "Project name?" });
const framework = await select({
  message: "Choose framework",
  options: [{ value: "bun", label: "Bun" }, { value: "node", label: "Node" }],
});
```

```text
┌──────────────────────────────────────────────────────────┐
│  $ bun run src/index.ts                                  │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │  Project name?                                     │  │
│  │  > my-app                                          │  │
│  │                                                    │  │
│  │  Choose framework:                                 │  │
│  │  > Bun   (fast, native)                            │  │
│  │    Node  (widely supported)                        │  │
│  └────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────┘
```

| api | description | options | default |
|-----|-------------|---------|---------|
| `text(opts)` | Text input prompt | `message`, `validate`, `defaultValue` | — |
| `select(opts)` | Single-choice select prompt | `message`, `options` | — |
| `confirm(opts)` | Yes/no confirmation prompt | `message`, `initialValue` | `true` |
| `multiselect(opts)` | Multi-choice select prompt | `message`, `options`, `required` | — |
| `renderTable(opts)` | Render data as a table | `rows`, `columns`, `border` | — |
| `renderBox(opts)` | Render content in a box | `content`, `borderStyle`, `padding` | — |
