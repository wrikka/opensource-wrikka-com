# @wrikka/graph

## Overview

A graph visualization module with Clean Architecture for SolidJS

## Metadata

| Field | Value |
| --- | --- |
| Type | NPM |
| Category | Graph |
| Path | `packages/graph/package.json` |
| Version | `0.1.0` |
| License | `MIT` |
| Repository | <https://github.com/nuxt-modules/nuxt-modules> |
| Keywords | graph, visualization, clean-architecture, typescript, solidjs, solid-js, solid-module |
| Main | `./dist/index.cjs` |
| Module | `./dist/index.js` |
| Types | `./dist/index.d.ts` |

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
- 📁 `test`
- 📁 `test/fixtures`
- 📁 `test/helpers`
- 📁 `test/modules`
- 📄 `tsconfig.json`
- 📄 `tsconfig.tsbuildinfo`
- 📄 `tsdown.config.ts`
- 📄 `vitest.config.ts`

## Source Files

- `src/adapters/config/index.ts`
- `src/adapters/db/edge-repository.ts`
- `src/adapters/db/graph-repository.ts`
- `src/adapters/db/index.ts`
- `src/adapters/db/node-repository.ts`
- `src/adapters/external/cache-service.ts`
- `src/adapters/external/event-publisher.ts`
- `src/adapters/external/index.ts`
- `src/adapters/external/layout-service.ts`
- `src/adapters/external/logger.ts`
- `src/adapters/external/traversal-service.ts`
- `src/adapters/http/index.ts`
- `src/adapters/index.ts`
- `src/adapters/solid/index.ts`
- `src/adapters/solid/runtime/module.tsx`
- `src/index.ts`
- `src/modules/graph/application/index.ts`
- `src/modules/graph/application/usecases/add-edge.ts`
- `src/modules/graph/application/usecases/add-node.ts`
- `src/modules/graph/application/usecases/create-graph.ts`
- `src/modules/graph/application/usecases/index.ts`
- `src/modules/graph/application/usecases/traverse-graph.ts`
- `src/modules/graph/application/workflows/index.ts`
- `src/modules/graph/domain/events/index.ts`
- `src/modules/graph/domain/index.ts`
- `src/modules/graph/domain/models/index.ts`
- `src/modules/graph/domain/operations/centrality.ts`
- `src/modules/graph/domain/operations/cycle-detection.ts`
- `src/modules/graph/domain/operations/graph-operations.ts`
- `src/modules/graph/domain/operations/index.ts`
- `src/modules/graph/domain/operations/metrics.ts`
- `src/modules/graph/domain/operations/pathfinding.ts`
- `src/modules/graph/domain/operations/traversal.ts`
- `src/modules/graph/domain/validators/edge-validators.ts`
- `src/modules/graph/domain/validators/graph-validators.ts`
- `src/modules/graph/domain/validators/index.ts`
- `src/modules/graph/domain/validators/node-validators.ts`
- `src/modules/graph/index.ts`
- `src/modules/graph/ports/index.ts`
- `src/modules/graph/types/index.ts`

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
| ci | `verify && build` |

## Dependencies

| Name | Version |
| --- | --- |
| arktype | `catalog:` |
| solid-js | `catalog:` |

## Dev Dependencies

| Name | Version |
| --- | --- |
| typescript | `catalog:` |

## README

# @wrikka/graph

> 🚀 A graph visualization module with Clean Architecture for SolidJS

A powerful graph visualization module built with Clean Architecture principles, supporting node-edge graphs, traversal algorithms, and interactive visualizations for SolidJS applications.

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://choosealicense.com/licenses/mit/)
[![SolidJS](https://img.shields.io/badge/solidjs-1.9-44694D.svg)](https://solidjs.com/)
[![TypeScript](https://img.shields.io/badge/typescript-5.0-3178C6.svg)](https://www.typescriptlang.org/)

## Features

| Icon | Feature | Description |
|:----:|:--------|:------------|
| <center>![network-1](https://api.iconify.design/mdi:graph.svg?color=%233498DB&width=16)</center> | Graph Visualization | Interactive node-edge graph rendering |
| <center>![tree-view](https://api.iconify.design/mdi:tree.svg?color=%2327AE60&width=16)</center> | Traversal Algorithms | BFS, DFS, and custom traversal methods |
| <center>![chart-relationship](https://api.iconify.design/mdi:chart-box.svg?color=%239B59B6&width=16)</center> | Edge Management | Create and manage graph edges |
| <center>![circle-node](https://api.iconify.design/mdi:circle.svg?color=%23E74C3C&width=16)</center> | Node Management | Add, update, and remove nodes |
| <center>![rule](https://api.iconify.design/mdi:rule.svg?color=%23F39C12&width=16)</center> | Clean Architecture | Domain-driven design with clear layers |
| <center>![plug](https://api.iconify.design/mdi:plug.svg?color=%2300C58E&width=16)</center> | SolidJS Integration | Seamless SolidJS module integration |
| <center>![api](https://api.iconify.design/mdi:api.svg?color=%23E67E22&width=16)</center> | Composable API | Composable functions for graph operations |
| <center>![settings](https://api.iconify.design/mdi:cog.svg?color=%2345B7D1&width=16)</center> | Configurable | Flexible configuration options |

## Get Started

1. **Install the module** — add @wrikka/graph to your project

   ```bash
   bun add @wrikka/graph
   ```

2. **Use the composable** — create and manage graphs in your SolidJS component

   ```tsx
   import { useGraph } from '@wrikka/graph'

   function MyComponent() {
     const { createGraph, addNode, addEdge, traverse } = useGraph()
     const graph = createGraph('my-graph')
     addNode(graph, { id: '1', label: 'Node 1' })
     addNode(graph, { id: '2', label: 'Node 2' })
     addEdge(graph, { from: '1', to: '2', label: 'connected' })
     return <div>Graph created with {graph.nodes.length} nodes</div>
   }
   ```

## Usage

### Creating a Graph

```typescript
import { createGraph } from '@wrikka/graph'

const graph = createGraph('dependency-graph', {
  directed: true,
  weighted: false,
})
```

### Adding Nodes and Edges

```typescript
import { addNode, addEdge } from '@wrikka/graph'

addNode(graph, {
  id: 'user-service', label: 'User Service',
  data: { port: 3000, version: '1.0.0' },
  position: { x: 100, y: 100 },
})

addEdge(graph, {
  from: 'user-service', to: 'auth-service',
  label: 'depends on', weight: 1,
})
```

### Graph Traversal

```typescript
import { traverseGraph } from '@wrikka/graph'

// BFS traversal
const bfsResult = traverseGraph(graph, { startNode: 'user-service', algorithm: 'bfs' })

// DFS traversal
const dfsResult = traverseGraph(graph, { startNode: 'user-service', algorithm: 'dfs' })

console.log(bfsResult.visited) // ['user-service', 'auth-service', ...]
```

### Using the Composable

```tsx
import { useGraph } from '@wrikka/graph'
import { onMount } from 'solid-js'

function MyComponent() {
  const { graph, addNode, addEdge, traverse, getNeighbors } = useGraph()

  onMount(() => {
    addNode({ id: '1', label: 'Start' })
    addNode({ id: '2', label: 'End' })
    addEdge({ from: '1', to: '2' })
  })

  const neighbors = getNeighbors('1')
  const result = traverse('1', 'bfs')

  return (
    <For each={graph().nodes}>{(node) => <div key={node.id}>{node.label}</div>}</For>
  )
}
```

### Graph Visualization Component

```tsx
import { GraphVisualization } from '@wrikka/graph/components'
import { createSignal } from 'solid-js'

function MyComponent() {
  const [graph] = createSignal({
    nodes: [
      { id: '1', label: 'A', position: { x: 100, y: 100 } },
      { id: '2', label: 'B', position: { x: 300, y: 100 } },
    ],
    edges: [{ from: '1', to: '2', label: 'connected' }],
  })
  return <GraphVisualization graph={graph()} />
}
```

### Advanced Graph Operations

```typescript
import {
  findShortestPath, findConnectedComponents,
  detectCycles, topologicalSort
} from '@wrikka/graph'

const path = findShortestPath(graph, 'node-a', 'node-b')
const components = findConnectedComponents(graph)
const hasCycles = detectCycles(graph)
const sorted = topologicalSort(graph)
```

### Graph Analysis

```typescript
import { calculateDegree, calculateCentrality, calculateClustering } from '@wrikka/graph'

const degree = calculateDegree(graph, 'node-1')
const centrality = calculateCentrality(graph, 'node-1')
const clustering = calculateClustering(graph, 'node-1')
```

## License

This project is licensed under the <a href="https://choosealicense.com/licenses/mit/" target="_blank" rel="noopener noreferrer">MIT License</a>.

- ✓ Commercial use, Distribution, Modification, Private use
- ⓘ License and copyright notice
- ✕ Liability, Warranty

## Links

- Repository: <https://github.com/nuxt-modules/nuxt-modules>
- Source: <https://github.com/nuxt-modules/nuxt-modules/blob/main/packages/graph/package.json>
