# @solidjs/devtools

## Overview

@solidjs/devtools npm workspace at packages/devtools/package.json

## Metadata

| Field | Value |
| --- | --- |
| Type | NPM |
| Category | Devtools |
| Path | `packages/devtools/package.json` |
| Version | `0.1.0` |

## Directory Structure

- 📄 `AGENTS.md`
- 📄 `biome.jsonc`
- 📄 `index.html`
- 📄 `moon.yml`
- 📄 `package.json`
- 📄 `README.md`
- 📁 `src`
- 📁 `src/adapters`
- 📄 `src/App.tsx`
- 📄 `src/index.ts`
- 📁 `src/modules`
- 📁 `src/presentation`
- 📁 `src/shared`
- 📄 `src/style.css`
- 📁 `test`
- 📁 `test/fixtures`
- 📁 `test/helpers`
- 📁 `test/modules`
- 📄 `tsconfig.json`
- 📄 `tsconfig.tsbuildinfo`
- 📄 `uno.config.ts`
- 📄 `vite.config.ts`

## Source Files

- `src/adapters/connector.ts`
- `src/adapters/index.ts`
- `src/App.tsx`
- `src/index.ts`
- `src/modules/component-inspector/application/index.ts`
- `src/modules/component-inspector/application/usecases/component-inspector.ts`
- `src/modules/component-inspector/application/usecases/index.ts`
- `src/modules/component-inspector/application/usecases/useComponentInspector.ts`
- `src/modules/component-inspector/domain/events/component-events.ts`
- `src/modules/component-inspector/domain/events/index.ts`
- `src/modules/component-inspector/domain/index.ts`
- `src/modules/component-inspector/domain/models/component-node.ts`
- `src/modules/component-inspector/domain/models/component-tree.ts`
- `src/modules/component-inspector/domain/models/index.ts`
- `src/modules/component-inspector/domain/operations/component-operations.ts`
- `src/modules/component-inspector/domain/operations/index.ts`
- `src/modules/component-inspector/index.ts`
- `src/modules/devtools/application/index.ts`
- `src/modules/devtools/application/usecases/devtools.ts`
- `src/modules/devtools/application/usecases/index.ts`
- `src/modules/devtools/application/usecases/useDevtools.ts`
- `src/modules/devtools/domain/events/devtools-events.ts`
- `src/modules/devtools/domain/events/index.ts`
- `src/modules/devtools/domain/index.ts`
- `src/modules/devtools/domain/models/devtools-state.ts`
- `src/modules/devtools/domain/models/index.ts`
- `src/modules/devtools/domain/operations/devtools-operations.ts`
- `src/modules/devtools/domain/operations/index.ts`
- `src/modules/devtools/domain/validators/devtools-validators.ts`
- `src/modules/devtools/domain/validators/index.ts`
- `src/modules/devtools/index.ts`
- `src/modules/devtools/ports/connector.ts`
- `src/modules/devtools/ports/index.ts`
- `src/modules/timeline/application/index.ts`
- `src/modules/timeline/application/usecases/index.ts`
- `src/modules/timeline/application/usecases/timeline.ts`
- `src/modules/timeline/application/usecases/useTimeline.ts`
- `src/modules/timeline/domain/events/index.ts`
- `src/modules/timeline/domain/events/timeline-events.ts`
- `src/modules/timeline/domain/index.ts`

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

## Scripts

| Script | Command |
| --- | --- |
| dev | `vite` |
| build | `echo 'build skipped for devtools'` |
| typecheck | `echo 'typecheck skipped for devtools'` |

## Dev Dependencies

| Name | Version |
| --- | --- |
| typescript | `catalog:` |
| unocss | `catalog:` |
| vite | `catalog:` |
| vite-plugin-solid | `^2.11.14` |

## Peer Dependencies

| Name | Version |
| --- | --- |
| arktype | `catalog:` |
| solid-js | `catalog:` |

## README

# @solidjs/devtools

> 🔧 SolidJS developer tools for debugging and inspection

Developer tools integration for SolidJS Framework with Clean Architecture implementation, featuring component inspection, timeline recording, and state management through composable hooks.

![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)
![SolidJS](https://img.shields.io/badge/SolidJS-1.9.13-cyan.svg)

## Features

Core capabilities for debugging and inspecting SolidJS applications with real-time visibility into component state and performance.

| Icon | Feature | Description | Benefit |
|------|---------|-------------|---------|
| 🔍 | Component Inspector | Inspect SolidJS component trees and reactivity through DevtoolsPanel | Debug component structure and state flow with real-time connection status |
| ⏱️ | Timeline Recording | Record and replay component updates using useTimeline composable | Analyze performance and identify bottlenecks with event metadata |
| 🐛 | State Inspection | View and modify component state using useDevtools composable | Debug state changes and reactivity issues with panel toggle controls |
| 🔌 | Devtools Connector | Protocol connector for devtools communication via DevtoolsConnector interface | Enable extensible devtools protocol implementation for custom backends |

## Quick Start

Get started with devtools in three simple steps to enable debugging capabilities in your SolidJS application.

1. **Install the package**
   ```bash
   bun add @solidjs/devtools
   ```

2. **Add DevtoolsPanel to your SolidJS app**
   ```tsx
   import { DevtoolsPanel } from '@solidjs/devtools'

   function App() {
     return (
       <>
         <DevtoolsPanel />
         <YourApp />
       </>
     )
   }
   ```

3. **Use composables for advanced features**
   ```tsx
   import { useDevtools, useTimeline } from '@solidjs/devtools'

   function MyComponent() {
     const { isConnected, togglePanel } = useDevtools()
     const { recordEvent, clearTimeline } = useTimeline()

     return <div>Your component</div>
   }
   ```

## Usage

Detailed examples of how to use devtools composables and components for effective debugging.

### Component Inspection

Use DevtoolsPanel to inspect components with connection status:

```tsx
import { DevtoolsPanel } from '@solidjs/devtools'

function App() {
  return (
    <>
      <DevtoolsPanel />
      <YourApp />
    </>
  )
}
```

The panel displays:
- Connection status (Connected/Disconnected)
- Tabbed interface for different views
- Content area based on selected tab

### State Management

Manage devtools panel state and connection status using the useDevtools composable.

```tsx
import { useDevtools } from '@solidjs/devtools'

function MyComponent() {
  const { isConnected, isPanelOpen, togglePanel, openPanel, closePanel } = useDevtools()

  return (
    <div>
      <button onClick={togglePanel}>Toggle Panel</button>
      <p>Status: {isConnected() ? 'Connected' : 'Disconnected'}</p>
    </div>
  )
}
```

Available methods:
- `isConnected()` - Reactive signal for connection status
- `isPanelOpen()` - Reactive signal for panel visibility
- `togglePanel()` - Toggle panel open/close
- `openPanel()` - Open the devtools panel
- `closePanel()` - Close the devtools panel

### Timeline Recording

Record and analyze component lifecycle events for performance debugging.

```tsx
import { useTimeline } from '@solidjs/devtools'

function MyComponent() {
  const { events, recordEvent, clearTimeline } = useTimeline()

  function handleAction() {
    recordEvent({
      type: 'user-action',
      name: 'button-click',
      duration: 42,
      metadata: { buttonId: 'submit' }
    })
  }

  return (
    <div>
      <button onClick={handleAction}>Record Event</button>
      <button onClick={clearTimeline}>Clear Timeline</button>
    </div>
  )
}
```

TimelineEvent interface:
- `type: string` - Event type identifier
- `name: string` - Event name
- `duration?: number` - Event duration in milliseconds
- `metadata?: Record<string, unknown>` - Additional event data

### Devtools Connector

Extend devtools with custom backend implementations using the connector protocol.

```tsx
import { createConnector, type DevtoolsConnector } from '@solidjs/devtools'

const connector: DevtoolsConnector = createConnector()

async function setupDevtools() {
  await connector.connect()
  connector.send({ type: 'init' })
  connector.onMessage((message) => {
    console.log('Received:', message)
  })
}
```

DevtoolsConnector interface:
- `connect(): Promise<void>` - Establish connection
- `disconnect(): void` - Close connection
- `send(message: unknown): void` - Send message to backend
- `onMessage(handler: (message: unknown) => void): void` - Register message handler

## Reference

Technical documentation for architecture, exports, and package configuration.

### Architecture

The package follows Clean Architecture with layered structure:

- **Domain Layer** (`domain/`) - Business logic and connector protocol
- **Application Layer** (`application/`) - Composable hooks (useDevtools, useTimeline)
- **Ports** (`ports/`) - Interface definitions
- **Types** (`types/`) - Module-specific types
- **Presentation** (`presentation/`) - UI components (DevtoolsPanel)

### Exports

Public API exports for consuming the package.

```typescript
// Main exports
export { default as App } from './App'
export { DevtoolsPanel } from './presentation'

// Module exports
export { useDevtools, useTimeline } from './application'
export { createConnector, type DevtoolsConnector } from './domain'
```

### Package Configuration

Package metadata and dependency requirements.

```json
{
  "name": "@solidjs/devtools",
  "peerDependencies": {
    "solid-js": "^1.9.13"
  },
  "exports": {
    ".": {
      "solid": "./src/index.ts",
      "types": "./src/index.ts"
    },
    "./components": {
      "solid": "./src/components/DevtoolsPanel.tsx"
    }
  }
}
```

## License

MIT License for open-source usage and distribution.

This project is licensed under the <a href="https://choosealicense.com/licenses/mit/" target="_blank" rel="noopener noreferrer">MIT License</a>.

- ✓ Commercial use, Distribution, Modification, Private use
- ⓘ License and copyright notice
- ✕ Liability, Warranty
