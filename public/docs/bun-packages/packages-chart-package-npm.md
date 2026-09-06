# @wrikka/chart

## Overview

Modern visualization library for SolidJS with Clean Architecture - Production-ready chart components

## Metadata

| Field | Value |
| --- | --- |
| Type | NPM |
| Category | Chart |
| Path | `packages/chart/package.json` |
| Version | `0.1.0` |
| License | `MIT` |
| Repository | <https://github.com/nuxt-modules/nuxt-modules> |
| Homepage | <https://github.com/nuxt-modules/nuxt-modules/tree/main/packages/chart> |
| Keywords | solidjs, solid-js, chart, visualization, clean-architecture |
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
- 📁 `test`
- 📁 `test/modules`
- 📄 `tsconfig.json`
- 📄 `tsconfig.tsbuildinfo`
- 📄 `tsdown.config.ts`
- 📄 `vitest.config.ts`

## Source Files

- `src/adapters/db/index.ts`
- `src/adapters/db/memory-repository.ts`
- `src/adapters/events/event-handler.ts`
- `src/adapters/events/index.ts`
- `src/adapters/external/animation-engine.ts`
- `src/adapters/external/animation-utils.ts`
- `src/adapters/external/animation.ts`
- `src/adapters/external/easings.ts`
- `src/adapters/external/export.ts`
- `src/adapters/external/index.ts`
- `src/adapters/external/renderers/canvas-renderer-utils.ts`
- `src/adapters/external/renderers/canvas-renderer.ts`
- `src/adapters/external/renderers/index.ts`
- `src/adapters/external/renderers/render-bar-chart.ts`
- `src/adapters/external/renderers/render-gauge-chart.ts`
- `src/adapters/external/renderers/render-line-chart.ts`
- `src/adapters/external/renderers/render-pie-chart.ts`
- `src/adapters/index.ts`
- `src/index.ts`
- `src/modules/chart/application/index.ts`
- `src/modules/chart/application/usecases/create-chart.ts`
- `src/modules/chart/application/usecases/destroy-chart.ts`
- `src/modules/chart/application/usecases/index.ts`
- `src/modules/chart/application/usecases/update-chart.ts`
- `src/modules/chart/application/workflows/index.ts`
- `src/modules/chart/domain/events/chart-events.ts`
- `src/modules/chart/domain/events/index.ts`
- `src/modules/chart/domain/index.ts`
- `src/modules/chart/domain/models/chart-model.ts`
- `src/modules/chart/domain/models/chart.ts`
- `src/modules/chart/domain/models/index.ts`
- `src/modules/chart/domain/operations/chart-calculations.ts`
- `src/modules/chart/domain/operations/chart-transformations.ts`
- `src/modules/chart/domain/operations/dataset-operations.ts`
- `src/modules/chart/domain/operations/index.ts`
- `src/modules/chart/domain/operations/model-operations.ts`
- `src/modules/chart/domain/validators/chart-validators.ts`
- `src/modules/chart/domain/validators/composite-validators.ts`
- `src/modules/chart/domain/validators/config-validators.ts`
- `src/modules/chart/domain/validators/data-validators.ts`

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
| dev | `bun --watch src/index.ts` |
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
| arktype | `catalog:` |
| solid-js | `catalog:` |

## Dev Dependencies

| Name | Version |
| --- | --- |
| bun-types | `catalog:` |
| tsdown | `catalog:` |

## Peer Dependencies

| Name | Version |
| --- | --- |
| solid-js | `catalog:` |

## README

# @wrikka/chart

> 🚀 Modern visualization library with Clean Architecture

A powerful charting library built with Clean Architecture principles, providing flexible data visualization with support for multiple chart types, real-time updates, and custom renderers.

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://choosealicense.com/licenses/mit/)
[![TypeScript](https://img.shields.io/badge/typescript-5.0-3178C6.svg)](https://www.typescriptlang.org/)
[![SolidJS](https://img.shields.io/badge/solidjs-1.9-4FC08D.svg)](https://solidjs.com/)

## Features

| Icon | Feature | Description |
|:----:|:--------|:------------|
| <center>![chart-line](https://api.iconify.design/mdi:chart-line.svg?color=%233498DB&width=16)</center> | Multiple Chart Types | Line, bar, pie, gauge, and custom charts |
| <center>![chart-pie](https://api.iconify.design/mdi:chart-pie.svg?color=%23E74C3C&width=16)</center> | Canvas Rendering | High-performance canvas-based rendering |
| <center>![time](https://api.iconify.design/mdi:clock.svg?color=%23F39C12&width=16)</center> | Real-Time Updates | Live data updates with smooth transitions |
| <center>![settings-adjust](https://api.iconify.design/mdi:cog.svg?color=%239B59B6&width=16)</center> | Custom Renderers | Extensible renderer system for custom visualizations |
| <center>![rule](https://api.iconify.design/mdi:rule.svg?color=%2327AE60&width=16)</center> | Clean Architecture | Domain-driven design with clear separation of concerns |
| <center>![calculator](https://api.iconify.design/mdi:calculator.svg?color=%23E67E22&width=16)</center> | Built-in Calculations | Common chart calculations and transformations |
| <center>![checkmark-filled](https://api.iconify.design/mdi:check-circle.svg?color=%231ABC9C&width=16)</center> | Validation | Type-safe data validation with Zod schemas |
| <center>![events](https://api.iconify.design/mdi:flash.svg?color=%2345B7D1&width=16)</center> | Event System | Domain events for chart lifecycle management |

## Get Started

1. **Install the package** — add @wrikka/chart to your project

   ```bash
   bun add @wrikka/chart
   ```

2. **Import and use** — create a chart in your SolidJS component

   ```tsx
   import { Chart } from '@wrikka/chart'
   import { createSignal } from 'solid-js'

   function App() {
     const [chartData] = createSignal({
       type: 'line' as const,
       data: {
         labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
         datasets: [{ label: 'Sales', data: [65, 59, 80, 81, 56] }],
       },
     })
     return <Chart data={chartData()} />
   }
   ```

## Usage

### Line Chart

```tsx
import { Chart } from '@wrikka/chart'

function LineChartExample() {
  const data = {
    type: 'line' as const,
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      datasets: [{ label: 'Values', data: [10, 15, 13, 17, 14] }],
    },
    options: { smooth: true, area: true },
  }
  return <Chart data={data} />
}
```

### Bar Chart

```tsx
import { Chart } from '@wrikka/chart'

function BarChartExample() {
  const data = {
    type: 'bar' as const,
    data: {
      labels: ['Product A', 'Product B', 'Product C', 'Product D'],
      datasets: [{ label: 'Sales', data: [120, 85, 95, 110] }],
    },
  }
  return <Chart data={data} />
}
```

### Gauge Chart

```tsx
import { GaugeChart } from '@wrikka/chart'

function GaugeChartExample() {
  const data = {
    value: 75, min: 0, max: 100,
    label: 'CPU Usage', unit: '%', color: '#10B981',
  }
  return <GaugeChart data={data} />
}
```

### Pie Chart

```tsx
import { Chart } from '@wrikka/chart'

function PieChartExample() {
  const data = {
    type: 'pie' as const,
    data: {
      labels: ['Product A', 'Product B', 'Product C', 'Product D'],
      datasets: [{ label: 'Sales', data: [30, 20, 25, 25] }],
    },
    options: { showLabels: true, showLegend: true },
  }
  return <Chart data={data} />
}
```

### Chart Cards

```tsx
import { ChartCard } from '@wrikka/chart'
import { For } from 'solid-js'

function ChartCardsExample() {
  const stats = [
    { title: 'Revenue', value: '$12,345', change: '+12%', chart: { type: 'line', data: [...] } },
    { title: 'Users', value: '1,234', change: '+5%', chart: { type: 'bar', data: [...] } },
  ]
  return (
    <div class="grid grid-cols-2 gap-4">
      <For each={stats}>{(stat) => <ChartCard data={stat} />}</For>
    </div>
  )
}
```

### Real-Time Updates

```tsx
import { Chart } from '@wrikka/chart'
import { createSignal, onMount, onCleanup } from 'solid-js'

function RealTimeChartExample() {
  const [chartData, setChartData] = createSignal({
    type: 'line' as const,
    data: { labels: [] as string[], datasets: [{ label: 'Live Data', data: [] as number[] }] },
  })

  onMount(() => {
    const interval = setInterval(() => {
      const timeStr = new Date().toLocaleTimeString()
      const value = Math.random() * 100
      setChartData((prev) => ({
        ...prev,
        data: {
          labels: [...prev.data.labels, timeStr].slice(-20),
          datasets: [{ ...prev.data.datasets[0], data: [...prev.data.datasets[0].data, value].slice(-20) }],
        },
      }))
    }, 1000)
    onCleanup(() => clearInterval(interval))
  })

  return <Chart data={chartData()} />
}
```

### Custom Calculations

```typescript
import { calculateAverage, calculateTrend } from '@wrikka/chart'

const data = [10, 15, 13, 17, 14, 18, 16]
const average = calculateAverage(data) // 14.71
const trend = calculateTrend(data) // 'up' | 'down' | 'stable'
```

### Chart Events

```tsx
import { Chart } from '@wrikka/chart'

function ChartWithEvents() {
  const [selectedPoint, setSelectedPoint] = createSignal(null)
  return (
    <div>
      <Chart data={chartData()} onPointClick={setSelectedPoint} />
      <Show when={selectedPoint()}>
        <div>Selected: {selectedPoint().label}</div>
      </Show>
    </div>
  )
}
```

## License

This project is licensed under the <a href="https://choosealicense.com/licenses/mit/" target="_blank" rel="noopener noreferrer">MIT License</a>.

- ✓ Commercial use, Distribution, Modification, Private use
- ⓘ License and copyright notice
- ✕ Liability, Warranty

## Links

- Repository: <https://github.com/nuxt-modules/nuxt-modules>
- Homepage: <https://github.com/nuxt-modules/nuxt-modules/tree/main/packages/chart>
- Source: <https://github.com/nuxt-modules/nuxt-modules/blob/main/packages/chart/package.json>
