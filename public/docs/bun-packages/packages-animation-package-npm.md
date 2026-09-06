# @wrikka/animation

## Overview

Fast, lightweight JavaScript animation library with Clean Architecture

## Metadata

| Field | Value |
| --- | --- |
| Type | NPM |
| Category | Animation |
| Path | `packages/animation/package.json` |
| Version | `0.1.0` |
| License | `MIT` |
| Keywords | animation, anime, motion, transition, easing, timeline, stagger, solidjs, solid, typescript |

## Directory Structure

- 📄 `AGENTS.md`
- 📄 `biome.jsonc`
- 📄 `bun.lock`
- 📄 `CHANGELOG.md`
- 📁 `coverage`
- 📁 `coverage/adapters`
- 📄 `coverage/base.css`
- 📄 `coverage/block-navigation.js`
- 📄 `coverage/clover.xml`
- 📄 `coverage/coverage-final.json`
- 📄 `coverage/favicon.png`
- 📄 `coverage/index.html`
- 📁 `coverage/modules`
- 📄 `coverage/prettify.css`
- 📄 `coverage/prettify.js`
- 📁 `coverage/shared`
- 📄 `coverage/sort-arrow-sprite.png`
- 📄 `coverage/sorter.js`
- 📁 `docs`
- 📁 `docs/development`
- 📁 `docs/examples`
- 📁 `docs/getting-started`
- 📄 `docs/index.md`
- 📁 `docs/project`
- 📄 `moon.yml`
- 📄 `package.json`
- 📄 `README.md`
- 📄 `RELEASE.md`
- 📁 `scripts`
- 📄 `sgconfig.yml`

## Source Files

- `src/adapters/adapter-base.ts`
- `src/adapters/animation-adapter-base.ts`
- `src/adapters/api.ts`
- `src/adapters/browser/canvas-helper.ts`
- `src/adapters/browser/composition-helper.ts`
- `src/adapters/browser/dom-helper.ts`
- `src/adapters/browser/draggable.ts`
- `src/adapters/browser/index.ts`
- `src/adapters/browser/request-animation-frame.ts`
- `src/adapters/browser/scope-helper.ts`
- `src/adapters/browser/scroll-observer.ts`
- `src/adapters/browser/svg-helper.ts`
- `src/adapters/browser/text-splitter.ts`
- `src/adapters/db/memory-repository.ts`
- `src/adapters/index.ts`
- `src/adapters/main-api.ts`
- `src/adapters/solid/advanced/index.ts`
- `src/adapters/solid/advanced/use-advanced-stagger.ts`
- `src/adapters/solid/advanced/use-animation-chain.ts`
- `src/adapters/solid/advanced/use-animation-inspector.ts`
- `src/adapters/solid/advanced/use-timeline-editor.ts`
- `src/adapters/solid/ai-tools/index.ts`
- `src/adapters/solid/ai-tools/use-ai-animation-generator.ts`
- `src/adapters/solid/ai-tools/use-reverse-engineering.ts`
- `src/adapters/solid/core/index.ts`
- `src/adapters/solid/core/use-animation.ts`
- `src/adapters/solid/core/use-performance-profiler.ts`
- `src/adapters/solid/core/use-stagger.ts`
- `src/adapters/solid/core/use-timeline.ts`
- `src/adapters/solid/graphics/index.ts`
- `src/adapters/solid/graphics/use-kinetic-typography.ts`
- `src/adapters/solid/graphics/use-lottie-animation.ts`
- `src/adapters/solid/graphics/use-shader-effects.ts`
- `src/adapters/solid/graphics/use-transform-3d.ts`
- `src/adapters/solid/graphics/use-video-exporter.ts`
- `src/adapters/solid/graphics/use-webgl-renderer.ts`
- `src/adapters/solid/index.ts`
- `src/adapters/solid/input-media/index.ts`
- `src/adapters/solid/input-media/use-audio-reactive.ts`
- `src/adapters/solid/input-media/use-motion-capture.ts`

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
| build:watch | `tsdown --watch` |
| typecheck | `tsc --noEmit` |
| typecheck:watch | `tsc --noEmit --watch` |
| lint | `biome check` |
| lint:fix | `biome check --write` |
| format | `biome check --write` |
| test | `vitest run` |
| test:watch | `vitest` |
| test:coverage | `vitest run --coverage` |
| scan | `ast-grep scan` |
| verify | `bun run scan && bun run lint && bun run typecheck && bun run test` |
| ci | `bun run verify && bun run build` |
| clean | `bunx rimraf node_modules dist` |
| release | `release-it` |
| docs:dev | `vitepress dev docs` |
| docs:build | `vitepress build docs` |
| docs:preview | `vitepress preview docs` |

## Dependencies

| Name | Version |
| --- | --- |
| react | `catalog:` |

## Dev Dependencies

| Name | Version |
| --- | --- |
| @ast-grep/cli | `^0.45.2` |
| @biomejs/biome | `catalog:` |
| @eslint/js | `^10.0.1` |
| @types/node | `catalog:` |
| @types/react | `catalog:` |
| @typescript/native-preview | `^7.0.0-dev.20260707.2` |
| eslint | `catalog:` |
| release-it | `catalog:` |
| solid-js | `catalog:` |
| svelte | `^5.57.0` |
| taze | `catalog:` |
| tsdown | `catalog:` |
| typescript | `catalog:` |
| typescript-eslint | `^8.68.0` |
| vitepress | `^1.6.4` |
| vitest | `catalog:` |

## Peer Dependencies

| Name | Version |
| --- | --- |
| eslint | `catalog:` |
| solid-js | `catalog:` |

## README

# @wrikka/animation

> 🚀 Fast, lightweight JavaScript animation library with Clean Architecture

A modern animation library built with TypeScript and Clean Architecture principles, providing framework-agnostic core animation capabilities with dedicated Solid.js adapter.

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://choosealicense.com/licenses/mit/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue.svg)](https://www.typescriptlang.org/)
[![Bun](https://img.shields.io/badge/Bun-1.0+-ff69b4.svg)](https://bun.sh/)
[![Biome](https://img.shields.io/badge/Biome-2.5-60a5fa.svg)](https://biomejs.dev/)

## Features

| Icon | Feature | Description | Benefit |
|------|---------|-------------|---------|
| 🎬 | Core Animation Engine | Powerful animation and timeline entities with full control methods | Create complex animations with simple, intuitive API |
| 🎨 | Graphics & Visual Effects | Lottie animations, WebGL shaders, 3D transforms, video export, and kinetic typography | Create stunning visual effects with GPU acceleration |
| 🤖 | AI-Powered Tools | AI animation generator and reverse engineering for motion analysis | Generate animations automatically and analyze existing motion patterns |
| 📊 | Advanced Animation Tools | Timeline editor, animation inspector, animation chains, and advanced stagger effects | Build complex animation systems with professional-grade tools |
| ⚡ | High Performance | Built with Bun runtime and tsdown bundler for optimal performance | Fast execution and minimal bundle size |
| 🔄 | Advanced Easing | 13 built-in easing functions with custom registration support | Smooth, natural-feeling animations for any use case |
| 🌊 | Stagger Effects | Grid-based stagger with direction and axis control | Create beautiful sequential animations for lists and grids |
| 📜 | Scroll Observer | Scroll-triggered animations with threshold detection | Engage users with scroll-based storytelling |
| 🎯 | Draggable Elements | Draggable elements with snap, inertia, and bounds | Build interactive interfaces with drag functionality |
| ✂️ | Text Splitting | Split text into characters, words, or lines for animation | Create kinetic typography and text effects |
| 🎭 | SVG Animation | SVG morph, draw, and motion path animations | Animate SVG graphics with precision |
| 🖼️ | Canvas Drawing | Canvas drawing methods for 2D graphics | Create custom canvas animations |
| 🎵 | Audio Reactive | Beat detection and frequency-based animations | Synchronize animations with audio input |
| 🎪 | 3D Transforms | Full 3D transform support with perspective | Create immersive 3D animations |
| 📊 | Performance Profiling | Built-in performance monitoring and metrics | Optimize animations with real-time insights |
| 📱 | Responsive Animations | Breakpoint-based animation properties | Adapt animations to different screen sizes |
| 🔍 | Animation Inspector | Visual debugging and animation state inspection | Debug animations with visual feedback |
| 🎮 | WebGL Renderer | WebGL shader support for GPU-accelerated graphics | Create high-performance GPU animations |
| 🔗 | GSAP Compatibility | GSAP-like API for easy migration | Seamlessly migrate from GSAP projects |

## Quick Start

1. **Install the package**

```bash
bun add @wrikka/animation
```

2. **Import and use**

```typescript
import { animate, stagger } from "@wrikka/animation";

// Basic animation
animate(".box", { x: 250, rotate: "1turn" }, { duration: 800 });

// Staggered animation
animate(".item", { opacity: 1, y: 0 }, {
  delay: stagger(100, { from: "first" })
});
```

**Modular imports for smaller bundles:**

```typescript
// Core API (15.34 kB gzipped)
import { animate, stagger } from "@wrikka/animation";

// Graphics features (17.13 kB gzipped)
import { useTransform3D } from "@wrikka/animation/graphics";

// Advanced features (9.12 kB gzipped)
import { useAnimationChain } from "@wrikka/animation/advanced";

// AI tools (5.12 kB gzipped)
import { useAIAnimationGenerator } from "@wrikka/animation/ai-tools";
```

3. **Use with Solid.js**

```typescript
// Solid.js
import { useAnimation } from "@wrikka/animation/solid";
```

## Usage

### Basic Animation

```typescript
import { animate } from "@wrikka/animation";

// Animate CSS properties
animate(".element", {
  x: 100,
  y: 50,
  rotate: "90deg",
  scale: 1.5,
  opacity: 0.8
}, {
  duration: 1000,
  delay: 200,
  easing: "easeOutQuad",
  onComplete: () => console.log("Animation complete")
});
```


### Timeline Sequencing

```typescript
import { createTimeline } from "@wrikka/animation";

const timeline = createTimeline();

timeline
  .add(animate(".box1", { x: 100 }, { duration: 500 }))
  .add(animate(".box2", { y: 100 }, { duration: 500 }), 200)
  .add(animate(".box3", { scale: 1.5 }, { duration: 500 }), 400);

timeline.play();
```


### Stagger Effects

```typescript
import { animate, stagger } from "@wrikka/animation";

// Grid stagger
animate(".grid-item", { opacity: 1, scale: 1 }, {
  delay: stagger(50, {
    from: "center",
    grid: [3, 4],
    axis: "x"
  })
});

// Directional stagger
animate(".list-item", { x: 0, opacity: 1 }, {
  delay: stagger(100, {
    from: "last",
    direction: "reverse"
  })
});
```


### Scroll Observer

```typescript
import { onScroll } from "@wrikka/animation";

const observer = onScroll(".section", {
  threshold: 0.5,
  onEnter: (element) => {
    animate(element, { y: 0, opacity: 1 }, { duration: 600 });
  },
  onLeave: (element) => {
    animate(element, { y: 50, opacity: 0 }, { duration: 600 });
  }
});
```


### Draggable Elements

```typescript
import { createDraggable } from "@wrikka/animation";

const draggable = createDraggable(".draggable", {
  snap: 50,
  inertia: true,
  bounds: { left: 0, right: 500, top: 0, bottom: 500 }
});

draggable.on("drag", (position) => {
  console.log("Position:", position);
});
```


### Text Splitting

```typescript
import { splitText, animate } from "@wrikka/animation";

// Split text into characters
const chars = splitText(".text", {
  type: "chars",
  tag: "span",
  className: "char"
});

// Animate each character
animate(chars, { opacity: 1, y: 0 }, {
  delay: stagger(30, { from: "first" })
});
```


### Solid.js Integration

```typescript
import { useAnimation, useTimeline, useStagger } from "@wrikka/animation/solid";

function MyComponent() {
  const { animation, isPlaying, play, pause } = useAnimation(
    ".box",
    { x: 250, rotate: "1turn" },
    { duration: 800 }
  );

  const timeline = useTimeline();
  const staggerFn = useStagger(100, { from: "first" });

  return (
    <div>
      <div class="box">Animate me</div>
      <button onClick={play}>Play</button>
      <button onClick={pause}>Pause</button>
    </div>
  );
}
```


### Graphics & Visual Effects

```typescript
import { createLottieAnimation, createWebGLRenderer, createTransform3D } from "@wrikka/animation";

// Lottie animation
const lottie = createLottieAnimation({
  container: ".lottie-container",
  path: "/animation.json",
  autoplay: true,
  loop: true
});

// WebGL renderer
const renderer = createWebGLRenderer({
  canvas: ".webgl-canvas",
  shaders: [vertexShader, fragmentShader]
});

// 3D transforms
const transform3D = createTransform3D(
  ".element",
  { rotateX: "45deg", rotateY: "45deg", translateZ: 100 },
  { perspective: 1000 }
);
```


### AI-Powered Tools

```typescript
import { createAIAnimationGenerator, createReverseEngineering } from "@wrikka/animation";

// AI animation generator
const aiGenerator = createAIAnimationGenerator({
  prompt: "Create a smooth fade-in animation",
  target: ".element",
  style: "elegant"
});

const animation = aiGenerator.generate();

// Reverse engineering
const reverseEng = createReverseEngineering({
  target: ".animated-element",
  analyzeProperties: true
});

const analysis = reverseEng.analyze();
console.log("Animation properties:", analysis.properties);
```


### Advanced Animation Tools

```typescript
import { createAnimationChain, createAnimationInspector, createTimelineEditor } from "@wrikka/animation";

// Animation chain
const chain = createAnimationChain([
  { target: ".box1", properties: { x: 100 }, options: { duration: 500 } },
  { target: ".box2", properties: { y: 100 }, options: { duration: 500 } },
  { target: ".box3", properties: { scale: 1.5 }, options: { duration: 500 } }
]);

chain.play();

// Animation inspector
const inspector = createAnimationInspector({
  showOverlay: true,
  showTimeline: true
});

inspector.inspect(".animated-element");

// Timeline editor
const editor = createTimelineEditor({
  container: ".timeline-editor",
  interactive: true
});

editor.loadTimeline(timeline);
```

## License

This project is licensed under the MIT License, allowing for commercial use, distribution, modification, and private use with proper attribution.

This project is licensed under the <a href="https://choosealicense.com/licenses/mit/" target="_blank" rel="noopener noreferrer">MIT License</a>.

- ✓ Commercial use, Distribution, Modification, Private use
- ⓘ License and copyright notice
- ✕ Liability, Warranty
