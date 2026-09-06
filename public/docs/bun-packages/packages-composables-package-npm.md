# @wrikka/composables

## Overview

Wrikka Composables - SolidJS composables with Clean Architecture

## Metadata

| Field | Value |
| --- | --- |
| Type | NPM |
| Category | Composables |
| Path | `packages/composables/package.json` |
| Version | `0.1.0` |
| Main | `./src/index.ts` |
| Types | `./src/index.ts` |

## Directory Structure

- 📄 `AGENTS.md`
- 📄 `biome.jsonc`
- 📄 `moon.yml`
- 📄 `package.json`
- 📄 `README.md`
- 📁 `src`
- 📁 `src/adapters`
- 📄 `src/index.ts`
- 📁 `src/modules`
- 📁 `src/presentation`
- 📁 `src/shared`
- 📁 `src/test`
- 📄 `test.log`
- 📄 `tsconfig.json`
- 📄 `tsconfig.tsbuildinfo`
- 📄 `tsdown.config.ts`
- 📄 `vitest.config.ts`

## Source Files

- `src/adapters/config/constants.ts`
- `src/adapters/config/index.ts`
- `src/adapters/index.ts`
- `src/adapters/monaco/index.ts`
- `src/adapters/qr/index.ts`
- `src/index.ts`
- `src/modules/array/application/index.ts`
- `src/modules/array/application/usecases/index.ts`
- `src/modules/array/domain/events/index.ts`
- `src/modules/array/domain/index.ts`
- `src/modules/array/domain/models/index.ts`
- `src/modules/array/domain/operations/create.ts`
- `src/modules/array/domain/operations/index.ts`
- `src/modules/array/domain/operations/modify.ts`
- `src/modules/array/domain/operations/query.ts`
- `src/modules/array/domain/validators/index.ts`
- `src/modules/array/index.ts`
- `src/modules/array/types/index.ts`
- `src/modules/counter/application/index.ts`
- `src/modules/counter/application/usecases/index.ts`
- `src/modules/counter/domain/events/index.ts`
- `src/modules/counter/domain/index.ts`
- `src/modules/counter/domain/models/index.ts`
- `src/modules/counter/domain/operations/calculate.ts`
- `src/modules/counter/domain/operations/create.ts`
- `src/modules/counter/domain/operations/index.ts`
- `src/modules/counter/domain/operations/modify.ts`
- `src/modules/counter/domain/operations/query.ts`
- `src/modules/counter/domain/operations/validate.ts`
- `src/modules/counter/domain/validators/counter-validators.ts`
- `src/modules/counter/domain/validators/index.ts`
- `src/modules/counter/index.ts`
- `src/modules/counter/ports/index.ts`
- `src/modules/counter/types/index.ts`
- `src/modules/editor/application/index.ts`
- `src/modules/editor/application/useCodeEditor.ts`
- `src/modules/editor/domain/events/editor-events.ts`
- `src/modules/editor/domain/events/index.ts`
- `src/modules/editor/domain/index.ts`
- `src/modules/editor/domain/models/editor.ts`

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
| test | `vitest run` |
| scan | `ast-grep scan` |
| verify | `bun run scan && bun run lint && bun run typecheck && bun run test` |
| ci | `bun run verify && bun run build` |

## Dependencies

| Name | Version |
| --- | --- |
| @shikijs/markdown-it | `catalog:` |
| arktype | `catalog:` |
| jsqr | `^1.4.0` |
| qrcode | `^1.5.4` |

## Dev Dependencies

| Name | Version |
| --- | --- |
| @types/qrcode | `^1.5.6` |
| bun-types | `catalog:` |
| monaco-editor | `catalog:` |
| taze | `catalog:` |
| typescript | `catalog:` |

## Peer Dependencies

| Name | Version |
| --- | --- |
| solid-js | `catalog:` |

## README

> ![Status](https://img.shields.io/badge/status-in_development-red)

# @wrikka/composables

SolidJS composables with Clean Architecture — A comprehensive collection of reactive composables for browser, sensor, network, element, and utility interactions.

![SolidJS](https://img.shields.io/badge/SolidJS-1.9-1c6fbb)
![Bun](https://img.shields.io/badge/Bun-1.3-1976d2)
![TypeScript](https://img.shields.io/badge/TypeScript-7.0-3178c6)

```text
┌──────────────────────────────────────────────────────────┐
│  @wrikka/composables                                    │
│  SolidJS Composables — Clean Architecture               │
│                                                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │  Modules                                           │  │
│  │  array  counter  editor  sensor  storage  time     │  │
│  │  toggle                                            │  │
│  │                                                    │  │
│  │  Presentation (Solid)                              │  │
│  │  animation  array  browser  elements  math         │  │
│  │  network  sensors  state  time  utilities          │  │
│  └────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────┘
```

## Get Started

1. Install — `bun add @wrikka/composables solid-js`
   ```bash
   bun add @wrikka/composables solid-js
   ```
2. Import a composable — use in any SolidJS component
   ```ts
   import { useClipboard, useFetch, useMouse } from "@wrikka/composables";
   ```
3. Build — `bun run build`
   ```bash
   bun run build
   ```

## Features

| Icon | Feature | Description |
|:---:|---------|-------------|
| ![icon](https://api.iconify.design/mdi:gesture-tap.svg?color=%231976d2&width=16) | Element Composables | Drag, drop, hover, click, scroll, resize, intersection, virtual list |
| ![icon](https://api.iconify.design/mdi:web.svg?color=%23388e3c&width=16) | Browser Composables | Clipboard, fullscreen, geolocation, notifications, WebAuthn, QR/barcode |
| ![icon](https://api.iconify.design/mdi:sensor.svg?color=%237b1fa2&width=16) | Sensor Composables | Device motion, orientation, gamepad input |
| ![icon](https://api.iconify.design/mdi:network.svg?color=%230097a7&width=16) | Network Composables | Fetch, WebSocket, EventSource with reactive state |
| ![icon](https://api.iconify.design/mdi:clock-outline.svg?color=%23f57c00&width=16) | Time Composables | Debounce, throttle, interval, timeout, pausable watchers |
| ![icon](https://api.iconify.design/mdi:state-machine.svg?color=%23c2185b&width=16) | State Composables | Shared composables, counter, toggle, synced refs |
| ![icon](https://api.iconify.design/mdi:animation.svg?color=%23303f9f&width=16) | Animation Composables | RAF, elapsed time, transitions, timestamps |
| ![icon](https://api.iconify.design/mdi:array.svg?color=%2300796b&width=16) | Array Composables | Reactive filter, map, sort, reduce, push, pop |
| ![icon](https://api.iconify.design/mdi:toolbox.svg?color=%23ffa000&width=16) | Utility Composables | Memoize, event bus, sorted, type conversion |
| ![icon](https://api.iconify.design/mdi:microphone.svg?color=%23d32f2f&width=16) | Media Composables | Speech recognition, synthesis, user media, display media |

## Usage

### Usage via SDK

Import composables directly into SolidJS components. Each composable returns reactive signals that auto-update.

```ts
import { useClipboard, useMouse, useFetch } from "@wrikka/composables";

// Clipboard
const { text, copy, copied } = useClipboard();

// Mouse position
const { x, y } = useMouse();

// Fetch with reactive state
const { data, error, loading } = useFetch("https://api.example.com/data");
```

```text
┌──────────────────────────────────────────────────────────┐
│  $ bun run src/index.ts                                  │
│  @wrikka/composables loaded                              │
│                                                          │
│  Modules: 7  Composables: 120+                           │
│  Exports: array, browser, elements, network, state       │
│                                                          │
│  ✓ All composables reactive                              │
│  ✓ Clean Architecture (domain/application/presentation)  │
└──────────────────────────────────────────────────────────┘
```

| api | description | options | default |
|-----|-------------|---------|---------|
| `useClipboard()` | Reactive clipboard copy/paste | `source`, `copiedDuring` | `copiedDuring=1500` |
| `useFetch(url)` | Reactive fetch with loading/error | `url`, `options` | `options={}` |
| `useMouse()` | Reactive mouse position | `type`, `touch` | `type='page'` |
| `useFullscreen()` | Fullscreen control | `target` | `target=document` |
| `useGeolocation()` | Reactive geolocation | `options` | `options={}` |
| `useWebSocket(url)` | Reactive WebSocket | `url`, `options` | `options={}` |
| `createSharedComposable(fn)` | Singleton composable | `fn` | — |
