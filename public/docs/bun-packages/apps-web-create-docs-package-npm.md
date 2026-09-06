# @wrikka/create-docs

## Overview

Vite plugin for documentation sites built on Functional Clean Architecture with SolidJS support

## Metadata

| Field | Value |
| --- | --- |
| Type | NPM |
| Category | Web Apps |
| Path | `apps/web/create-docs/package.json` |
| Version | `0.1.0` |
| License | `MIT` |
| Repository | <https://github.com/wrikka/bun-packages> |
| Homepage | <https://github.com/wrikka/bun-packages/tree/main/apps/web/create-docs#readme> |
| Keywords | docs, documentation, vite, plugin, solidjs, solid-js, mdx, markdown, content, vite-plugin, clean-architecture |
| Main | `./dist/index.cjs` |
| Module | `./dist/index.js` |
| Types | `./dist/index.d.ts` |

## Directory Structure

- 📄 `AGENTS.md`
- 📄 `bunup.config.ts`
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
- 📄 `moon.yml`
- 📄 `package.json`
- 📄 `README.md`
- 📁 `src`
- 📁 `src/adapters`
- 📁 `src/code-block-enhancements`
- 📁 `src/config`
- 📁 `src/content`
- 📁 `src/content-validation`
- 📄 `src/index.ts`
- 📁 `src/live-editor`
- 📁 `src/modules`
- 📁 `src/navigation`
- 📁 `src/plugin`

## Source Files

- `src/adapters/config/index.ts`
- `src/adapters/config/node-config-loader.ts`
- `src/adapters/fs/fs-docs-loader.ts`
- `src/adapters/fs/index.ts`
- `src/adapters/fs/memory-fs.ts`
- `src/adapters/fs/node-fs.ts`
- `src/adapters/git/index.ts`
- `src/adapters/index.ts`
- `src/adapters/velite.ts`
- `src/adapters/vite/docs-watcher.ts`
- `src/adapters/vite/index.ts`
- `src/adapters/vite/polling-watcher.ts`
- `src/code-block-enhancements/index.ts`
- `src/config/index.ts`
- `src/content/index.ts`
- `src/content-validation/index.ts`
- `src/index.ts`
- `src/live-editor/index.ts`
- `src/modules/analytics/application/plausible-adapter.ts`
- `src/modules/analytics/application/umami-adapter.ts`
- `src/modules/analytics/domain/events/index.ts`
- `src/modules/analytics/domain/models/index.ts`
- `src/modules/analytics/domain/operations/analytics-operations.ts`
- `src/modules/analytics/domain/validators/index.ts`
- `src/modules/analytics/index.ts`
- `src/modules/analytics/ports/analytics-port.ts`
- `src/modules/analytics/types/analytics.ts`
- `src/modules/api-docs/application/type-docs-adapter.ts`
- `src/modules/api-docs/domain/events/index.ts`
- `src/modules/api-docs/domain/models/index.ts`
- `src/modules/api-docs/domain/operations/api-docs-operations.ts`
- `src/modules/api-docs/domain/validators/index.ts`
- `src/modules/api-docs/index.ts`
- `src/modules/api-docs/ports/api-docs-port.ts`
- `src/modules/api-docs/types/api-docs.ts`
- `src/modules/api-reference/openapi.ts`
- `src/modules/api-reference/orpc.ts`
- `src/modules/code-block-enhancements/application/usecases/index.ts`
- `src/modules/code-block-enhancements/domain/code-operations.ts`
- `src/modules/code-block-enhancements/domain/events/index.ts`

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
| @codemirror/basic-setup | `^0.20.0` |
| @codemirror/lang-markdown | `^6.5.2` |
| @codemirror/state | `^6.7.1` |
| @codemirror/view | `^6.43.9` |
| @mdx-js/mdx | `^3.1.1` |
| @monaco-editor/react | `^4.7.0` |
| arktype | `catalog:` |
| js-yaml | `^5.4.1` |
| marked | `^18.0.11` |
| monaco-editor | `catalog:` |
| simple-git | `^3.36.0` |
| solid-js | `catalog:` |
| velite | `^0.4.0` |

## Dev Dependencies

| Name | Version |
| --- | --- |
| @biomejs/biome | `catalog:` |
| @types/bun | `catalog:` |
| @types/node | `catalog:` |
| @wrikka/utils | `workspace:*` |
| bunup | `catalog:` |
| typescript | `catalog:` |
| vite | `catalog:` |
| vitest | `catalog:` |

## Peer Dependencies

| Name | Version |
| --- | --- |
| vite | `catalog:` |
| solid-js | `^1.9.0` |
| @tanstack/solid-router | `^1.170.30` |

## Environment

| Runtime | Version |
| --- | --- |
| node | `>=20 <22` |
| bun | `>=1.3.10 <2.0.0` |

## README

> ![Status](https://img.shields.io/badge/status-in_development-red)

# @wrikka/create-docs

Vite plugin for documentation sites built on Functional Clean Architecture with SolidJS support. Parse markdown and MDX, build navigation, generate search indexes, and render beautiful docs with live editing.

![Vite](https://img.shields.io/badge/Vite-8.2-646cff)
![SolidJS](https://img.shields.io/badge/SolidJS-1.9-1c6fbb)
![TypeScript](https://img.shields.io/badge/TypeScript-7.0.2-3178c6)

```text
┌──────────────────────────────────────────────────────────┐
│  create-docs — Vite Docs Plugin                          │
│                                                          │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐          │
│  │  Markdown  │→ │  Parse     │→ │  Virtual   │          │
│  │  + MDX     │  │  Frontmatter│  │  Modules   │          │
│  └────────────┘  └────────────┘  └────────────┘          │
│                                       ↓                  │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐          │
│  │  SolidJS   │← │  Search    │← │  Sidebar   │          │
│  │  Render    │  │  Index     │  │  + Nav     │          │
│  └────────────┘  └────────────┘  └────────────┘          │
└──────────────────────────────────────────────────────────┘
```

## Get Started

1. Install — `bun add @wrikka/create-docs vite`
   ```bash
   bun add @wrikka/create-docs vite
   ```
2. Add Plugin — configure in `vite.config.ts`
   ```typescript
   import { defineConfig } from 'vite';
   import { docsPlugin } from '@wrikka/create-docs';

   export default defineConfig({
     plugins: [docsPlugin({ site: { title: 'My Docs' } })],
   });
   ```
3. Build — `bunup`
   ```bash
   bun run build
   ```

## Features

| Icon | Feature | Description |
|:---:|---------|-------------|
| ![icon](https://api.iconify.design/mdi:language-markdown.svg?color=%231976d2&width=16) | Markdown And MDX Parsing | Parse frontmatter, code blocks, and MDX components |
| ![icon](https://api.iconify.design/mdi:file-tree.svg?color=%23388e3c&width=16) | Navigation Builder | Auto-generate sidebar and nav from folder structure |
| ![icon](https://api.iconify.design/mdi:magnify.svg?color=%23d32f2f&width=16) | Search Index | Build full-text search index from doc pages |
| ![icon](https://api.iconify.design/mdi:format-list-numbered.svg?color=%23f57c00&width=16) | Table Of Contents | Generate TOC from markdown headings |
| ![icon](https://api.iconify.design/mdi:code-braces.svg?color=%237b1fa2&width=16) | Code Block Enhancements | Syntax highlighting and copy buttons for code blocks |
| ![icon](https://api.iconify.design/mdi:pencil-box.svg?color=%23c2185b&width=16) | Live Editor | Edit docs in-browser with git commit and push |
| ![icon](https://api.iconify.design/mdi:seo.svg?color=%23303f9f&width=16) | SEO Optimization | Generate meta tags and optimize for search engines |
| ![icon](https://api.iconify.design/mdi:eye.svg?color=%230097a7&width=16) | File Watcher | Hot reload on markdown file changes |
| ![icon](https://api.iconify.design/mdi:check-circle.svg?color=%2300796b&width=16) | Content Validation | Validate frontmatter and content structure |
| ![icon](https://api.iconify.design/mdi:cube.svg?color=%23ffa000&width=16) | Virtual Modules | Inject parsed content as virtual Vite modules |

## Usage

### Usage via Vite Plugin

Add the plugin to your Vite config and point it at your docs directory.

```typescript
import { defineConfig } from 'vite';
import { docsPlugin } from '@wrikka/create-docs';

export default defineConfig({
  plugins: [docsPlugin({
    site: { title: 'My Docs', description: 'Project documentation' },
    docsDir: './docs',
    search: { enabled: true },
  })],
});
```

```text
┌──────────────────────────────────────────────────────────┐
│  $ vite dev                                              │
│                                                          │
│  VITE v8.2  ready in 320 ms                              │
│                                                          │
│  ➜  Local:   http://localhost:5173/                      │
│  ➜  Network: use --host to expose                       │
│                                                          │
│  [create-docs] Watching ./docs/**/*.md                   │
│  [create-docs] Indexed 24 pages                          │
│  [create-docs] Search index built (186 entries)          │
└──────────────────────────────────────────────────────────┘
```

| option | description | options | default |
|--------|-------------|---------|---------|
| `site` | Site title and description | `title`, `description` | — |
| `docsDir` | Documentation directory path | string | `./docs` |
| `search` | Search configuration | `enabled` | `enabled: true` |
| `watchMode` | File watcher mode | `native`, `polling` | `native` |
| `fullReload` | Force full browser reload | boolean | `false` |

### Usage via SDK

Import parsing, navigation, and search utilities programmatically.

```typescript
import { buildDocPage, buildSidebar, buildSearchIndex } from '@wrikka/create-docs';

const page = buildDocPage(rawMarkdown);
const sidebar = buildSidebar(pages);
const searchIndex = buildSearchIndex(pages);
```

```text
┌──────────────────────────────────────────────────────────┐
│  > buildDocPage('# Hello\n\nContent here...')            │
│                                                          │
│  {                                                       │
│    slug: 'hello',                                        │
│    title: 'Hello',                                       │
│    body: 'Content here...',                              │
│    toc: [{ level: 1, text: 'Hello', slug: 'hello' }]     │
│  }                                                       │
└──────────────────────────────────────────────────────────┘
```

| api | description | options | default |
|-----|-------------|---------|---------|
| `docsPlugin(config)` | Create Vite plugin | `site`, `docsDir`, `search` | — |
| `buildDocPage(raw)` | Parse markdown to doc page | `raw` string | — |
| `buildSidebar(pages)` | Build sidebar from pages | `pages` array | — |
| `buildSearchIndex(pages)` | Build search index | `pages` array | — |
| `generateToc(page)` | Generate table of contents | `page` object | — |

## Links

- Repository: <https://github.com/wrikka/bun-packages>
- Homepage: <https://github.com/wrikka/bun-packages/tree/main/apps/web/create-docs#readme>
- Source: <https://github.com/wrikka/bun-packages/blob/main/apps/web/create-docs/package.json>
