# @wrikka/wwhiteboard-web

## Overview

@wrikka/wwhiteboard-web npm workspace at apps/wasm/canvas/web/package.json

## Metadata

| Field | Value |
| --- | --- |
| Type | NPM |
| Category | WASM Apps |
| Path | `apps/wasm/canvas/web/package.json` |
| Version | `0.1.0` |

## Directory Structure

- 📄 `biome.jsonc`
- 📄 `bun.lock`
- 📄 `index.html`
- 📄 `moon.yml`
- 📄 `package.json`
- 📄 `README.md`
- 📁 `src`
- 📄 `src/App.tsx`
- 📁 `src/application`
- 📁 `src/components`
- 📁 `src/domain`
- 📁 `src/hooks`
- 📄 `src/index.tsx`
- 📁 `src/shared`
- 📁 `src/styles`
- 📄 `tsconfig.json`
- 📄 `tsconfig.tsbuildinfo`
- 📄 `uno.config.ts`
- 📄 `vite.config.ts`

## Source Files

- `src/App.tsx`
- `src/application/hooks/useCanvas.ts`
- `src/application/hooks/useCanvasSelection.ts`
- `src/application/hooks/useCanvasState.ts`
- `src/application/hooks/useCanvasTools.ts`
- `src/application/hooks/useCanvasViewport.ts`
- `src/application/hooks/useWasmLoader.ts`
- `src/components/Canvas.tsx`
- `src/components/CommandPalette.tsx`
- `src/components/DemoMode.tsx`
- `src/components/index.ts`
- `src/components/LayersPanel.tsx`
- `src/components/PropertiesPanel.tsx`
- `src/components/Toolbar.tsx`
- `src/components/TutorialOverlay.tsx`
- `src/domain/command-palette/palette-items.ts`
- `src/domain/demo/demo-data.ts`
- `src/domain/index.ts`
- `src/domain/layers/layer-data.ts`
- `src/domain/tutorial/tutorial-steps.ts`
- `src/hooks/index.ts`
- `src/hooks/useCanvas.ts`
- `src/index.tsx`
- `src/shared/constants/canvas.ts`
- `src/shared/constants/index.ts`
- `src/shared/constants/tools.ts`
- `src/shared/types/canvas.ts`
- `src/shared/types/index.ts`

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

### Preview

```bash
bun run preview
```

## Scripts

| Script | Command |
| --- | --- |
| dev | `bun run src/index.ts` |
| build | `bun build` |
| typecheck | `tsc --noEmit` |
| lint | `biome lint` |
| lint:fix | `biome lint --write` |
| format | `biome format --write` |
| test | `vitest run` |
| verify | `bun run lint && bun run typecheck && bun run test` |
| ci | `bun run verify && bun run build` |
| preview | `vite preview` |
| typecheck:watch | `tsc --noEmit --watch --preserveWatchOutput` |
| format:check | `biome format` |
| test:unit | `vitest run --coverage` |
| test:changed | `vitest --changed` |
| clean | `rm -rf dist \|\| Remove-Item -Recurse -Force dist` |
| update:deps | `bunx taze -r -w -i --force` |

## Dependencies

| Name | Version |
| --- | --- |
| solid-js | `^1.9.12` |

## Dev Dependencies

| Name | Version |
| --- | --- |
| @biomejs/biome | `^1.9.4` |
| @types/node | `^25.6.0` |
| @unocss/preset-icons | `^66.0.0` |
| @unocss/preset-wind4 | `^66.0.0` |
| typescript | `~6.0.2` |
| unocss | `^66.0.0` |
| vite | `^8.0.8` |
| vite-plugin-solid | `^2.11.12` |
| vitest | `^4.1.4` |

## README

> ![Status](https://img.shields.io/badge/status-in_development-red)

# @wrikka/wwhiteboard-web

Web frontend for the canvas whiteboard app — SolidJS + Vite + UnoCSS, backed by the Rust WASM core in `../native-rust`.

[![Bun](https://img.shields.io/badge/Bun-latest-f472b6)](https://bun.sh/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

```text
┌─────────────────────────────────────────────────────────────────┐
│                    @wrikka/wwhiteboard-web                      │
├──────────────┬──────────────────────────────────────────────────┤
│  domain      │  Domain models                                   │
├──────────────┼──────────────────────────────────────────────────┤
│  application │  Application logic · hooks                       │
├──────────────┼──────────────────────────────────────────────────┤
│  components  │  SolidJS components                              │
├──────────────┼──────────────────────────────────────────────────┤
│  shared      │  Shared utilities · styles                       │
└──────────────┴──────────────────────────────────────────────────┘
```

## Get Started

1. Install dependencies

   ```bash
   bun install
   ```

2. Run the dev server

   ```bash
   bun run dev
   ```

3. Verify — lint, typecheck, and test

   ```bash
   bun run verify
   ```

## Features

| Icon | Feature | Description |
|:---:|---------|-------------|
| ![icon](https://api.iconify.design/mdi:draw.svg?color=%231976d2&width=16) | Whiteboard | Canvas whiteboard UI |
| ![icon](https://api.iconify.design/mdi:language-rust.svg?color=%23f57c00&width=16) | WASM Core | Rust WASM core via `wcanvas-native-rust` |
| ![icon](https://api.iconify.design/mdi:lightning-bolt.svg?color=%237b1fa2&width=16) | Fast Tooling | Bun + Vite + Biome + Vitest |

## License

MIT License - see [LICENSE](../../../../LICENSE) for details.
