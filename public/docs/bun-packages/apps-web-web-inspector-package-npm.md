# @wrikka/web-inspector

## Overview

@wrikka/web-inspector npm workspace at apps/web/web-inspector/package.json

## Metadata

| Field | Value |
| --- | --- |
| Type | NPM |
| Category | Web Apps |
| Path | `apps/web/web-inspector/package.json` |
| Version | `0.1.0` |
| Keywords | vite, plugin, inspector, debug, devtools, solidjs, solid-js |
| Main | `./src/index.ts` |
| Types | `./src/index.ts` |

## Directory Structure

- 📄 `AGENTS.md`
- 📄 `biome.jsonc`
- 📁 `examples`
- 📁 `examples/vite`
- 📄 `moon.yml`
- 📄 `package.json`
- 📄 `README.md`
- 📁 `src`
- 📁 `src/adapters`
- 📄 `src/index.ts`
- 📁 `src/modules`
- 📁 `src/presentation`
- 📁 `src/shared`
- 📁 `test`
- 📄 `tsconfig.json`
- 📄 `tsconfig.tsbuildinfo`
- 📄 `tsdown.config.ts`
- 📄 `uno.config.ts`
- 📄 `vitest.config.ts`

## Source Files

- `src/adapters/browser/framework-detection.ts`
- `src/adapters/browser/index.ts`
- `src/adapters/browser/source-map.ts`
- `src/adapters/index.ts`
- `src/adapters/vite.ts`
- `src/adapters/webpack.ts`
- `src/index.ts`
- `src/modules/web-inspector/application/index.ts`
- `src/modules/web-inspector/application/usecases/index.ts`
- `src/modules/web-inspector/application/usecases/select-component.ts`
- `src/modules/web-inspector/application/usecases/toggle-inspector.ts`
- `src/modules/web-inspector/application/workflows/index.ts`
- `src/modules/web-inspector/domain/events/index.ts`
- `src/modules/web-inspector/domain/index.ts`
- `src/modules/web-inspector/domain/models/index.ts`
- `src/modules/web-inspector/domain/models/inspector-state.ts`
- `src/modules/web-inspector/domain/operations/component.ts`
- `src/modules/web-inspector/domain/operations/index.ts`
- `src/modules/web-inspector/domain/validators/index.ts`
- `src/modules/web-inspector/domain/validators/validation.ts`
- `src/modules/web-inspector/ports/index.ts`
- `src/modules/web-inspector/types/index.ts`
- `src/presentation/http/index.ts`
- `src/presentation/http/inspector-handler.ts`
- `src/presentation/index.ts`
- `src/presentation/solid/components/index.ts`
- `src/presentation/solid/components/inspector-panel/ComponentTree.tsx`
- `src/presentation/solid/components/inspector-panel/SelectedComponentPanel.tsx`
- `src/presentation/solid/components/inspector-panel/types.ts`
- `src/presentation/solid/components/InspectorPanel.tsx`
- `src/presentation/solid/index.ts`
- `src/presentation/ui/InspectorPanel.ts`
- `src/shared/constants/index.ts`
- `src/shared/constants/inspector-constants.ts`
- `src/shared/constants/responsive-presets.ts`
- `src/shared/constants/seo-constants.ts`
- `src/shared/errors/index.ts`
- `src/shared/errors/inspector-error.ts`
- `src/shared/errors/network-error.ts`
- `src/shared/errors/state-error.ts`

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
| build | `tsdown` |
| typecheck | `tsc --noEmit` |
| lint | `biome check` |
| format | `biome check --write` |
| test | `vitest run --passWithNoTests` |
| scan | `ast-grep scan` |
| verify | `bun run scan && bun run lint && bun run typecheck && bun run test` |
| ci | `bun run verify && bun run build` |

## Dependencies

| Name | Version |
| --- | --- |
| arktype | `catalog:` |
| axe-core | `^4.13.0` |
| html2canvas | `^1.4.1` |
| launch-editor | `^2.14.1` |
| mitt | `^3.0.1` |
| nanoid | `^6.0.1` |
| solid-js | `catalog:` |
| unocss | `catalog:` |

## Dev Dependencies

| Name | Version |
| --- | --- |
| typescript | `catalog:` |
| vite | `catalog:` |

## Peer Dependencies

| Name | Version |
| --- | --- |
| vite | `catalog:` |

## README

# @wrikka/web-inspector

> 🚀 Vite plugin for inspecting and debugging Vue, React, Svelte, and Next.js applications

A powerful development tool for inspecting and debugging web applications, supporting multiple frameworks with component selection, source map resolution, and accessibility auditing.

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://choosealicense.com/licenses/mit/)
[![Vite](https://img.shields.io/badge/vite-5.0-646CFF.svg)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/typescript-5.0-3178C6.svg)](https://www.typescriptlang.org/)


```text
┌──────────────────────────────────────────────────────────┐
│  @wrikka/web-inspector                                   │
│                                                          │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐          │
│  │   Vue      │  │   React    │  │  Svelte    │          │
│  └─────┬──────┘  └─────┬──────┘  └─────┬──────┘          │
│        └───────────────┼───────────────┘                 │
│                        ▼                                 │
│  ┌──────────────────────────────────────────────────┐    │
│  │  Inspector UI  (/__inspect)                      │    │
│  │  • Component Tree  • Props  • State  • Events    │    │
│  └──────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────┘
```


## Get Started

1. **Install the plugin**

   ```bash
   bun add @wrikka/web-inspector
   ```

2. **Add to your Vite config**

   ```typescript
   import { defineConfig } from 'vite'
   import webInspector from '@wrikka/web-inspector'

   export default defineConfig({
     plugins: [webInspector()],
   })
   ```

3. **Start dev server**

   ```bash
   bun run dev
   ```

4. **Open inspector** — typically at `/__inspect`

## Features

| Icon | Feature | Description |
|:----:|:--------|:------------|
| <center>![search-locate](https://api.iconify.design/carbon:search-locate.svg?color=%231976d2&width=16)</center> | Component Inspection | Select and inspect components visually |
| <center>![code](https://api.iconify.design/carbon:code.svg?color=%23388e3c&width=16)</center> | Source Map Resolution | Resolve source maps for debugging |
| <center>![vue](https://api.iconify.design/carbon:vue.svg?color=%23d32f2f&width=16)</center> | Multi-Framework Support | Vue, React, Svelte, Next.js support |
| <center>![accessibility](https://api.iconify.design/carbon:accessibility.svg?color=%23f57c00&width=16)</center> | Accessibility Audit | Check accessibility compliance |
| <center>![rule](https://api.iconify.design/carbon:rule.svg?color=%237b1fa2&width=16)</center> | Clean Architecture | Domain-driven design with clear layers |
| <center>![bug](https://api.iconify.design/carbon:bug.svg?color=%23c2185b&width=16)</center> | Framework Detection | Auto-detect framework in use |
| <center>![settings](https://api.iconify.design/carbon:settings.svg?color=%23303f9f&width=16)</center> | Configurable | Flexible plugin configuration |
| <center>![script](https://api.iconify.design/carbon:script.svg?color=%230097a7&width=16)</center> | Vite Plugin | Native Vite plugin integration |


## Usage

### Usage via Vite Plugin

```typescript
import { defineConfig } from 'vite'
import webInspector from '@wrikka/web-inspector'

export default defineConfig({
  plugins: [
    webInspector({
      enabled: true,
      port: 3030,
      framework: 'auto',
    }),
  ],
})
```

### Usage via Client API

```typescript
import {
  toggleInspector,
  selectComponent,
  getComponentInfo,
  runAccessibilityAudit,
} from '@wrikka/web-inspector/client'

toggleInspector()
selectComponent('app-component-123')
const info = await getComponentInfo('app-component-123')
const audit = await runAccessibilityAudit()
```

### Usage via SDK

Install the package:

```bash
bun add @wrikka/web-inspector
```

Import and use in your project:

```typescript
import { getComponentProps, getComponentState, getComponentHierarchy } from '@wrikka/web-inspector/client'

const props = await getComponentProps('component-id')
const state = await getComponentState('component-id')
const hierarchy = await getComponentHierarchy('root-component-id')
```

### Plugin Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `enabled` | `boolean` | `true` | Enable inspector |
| `port` | `number` | `3030` | Inspector server port |
| `framework` | `string` | `'auto'` | Framework: auto, vue, react, svelte, nextjs |
| `components` | `boolean` | `true` | Enable component inspection |
| `props` | `boolean` | `true` | Show component props |
| `state` | `boolean` | `true` | Show component state |
| `events` | `boolean` | `true` | Show component events |
| `sourceMaps` | `boolean` | `true` | Enable source map resolution |
| `accessibility` | `boolean` | `true` | Enable accessibility auditing |


## License

This project is licensed under the <a href="https://choosealicense.com/licenses/mit/" target="_blank" rel="noopener noreferrer">MIT License</a>.

- ✓ Commercial use, Distribution, Modification, Private use
- ⓘ License and copyright notice
- ✕ Liability, Warranty
