# @wrikka/query

## Overview

Fine-grained reactive data fetching and cache management for SolidJS with Clean Architecture

## Metadata

| Field | Value |
| --- | --- |
| Type | NPM |
| Category | Query |
| Path | `packages/query/package.json` |
| Version | `0.1.0` |
| License | `MIT` |
| Repository | <https://github.com/wrikka/bun-packages> |
| Keywords | solidjs, query, data-fetching, cache, reactivity, state-management, clean-architecture, typescript |
| Main | `./dist/index.js` |
| Module | `./dist/index.js` |
| Types | `./dist/index.d.ts` |

## Directory Structure

- 📄 `AGENTS.md`
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
- 📄 `src/index.test.ts`
- 📄 `src/index.ts`
- 📁 `src/modules`
- 📁 `src/shared`
- 📄 `tsconfig.json`
- 📄 `tsconfig.tsbuildinfo`
- 📄 `tsdown.config.ts`
- 📄 `vitest.config.ts`

## Source Files

- `src/adapters/devtools/index.ts`
- `src/adapters/persistence/index.ts`
- `src/adapters/solid/index.ts`
- `src/adapters/solid/solid-query-context.ts`
- `src/adapters/solid/solid-query-empty-result.ts`
- `src/adapters/solid/solid-query-options.ts`
- `src/adapters/solid/solid-query-use-infinite.ts`
- `src/adapters/solid/solid-query-use-mutation.ts`
- `src/adapters/solid/solid-query-use-query.ts`
- `src/adapters/solid/solid.test.ts`
- `src/adapters/validation/index.ts`
- `src/index.test.ts`
- `src/index.ts`
- `src/modules/query/application/usecases/query-client-data.ts`
- `src/modules/query/application/usecases/query-client-helpers.ts`
- `src/modules/query/application/usecases/query-client-infinite.ts`
- `src/modules/query/application/usecases/query-client.ts`
- `src/modules/query/domain/models/mutation-cache.ts`
- `src/modules/query/domain/models/mutation.ts`
- `src/modules/query/domain/models/query-cache.ts`
- `src/modules/query/domain/models/query-environment.ts`
- `src/modules/query/domain/models/query-observer.ts`
- `src/modules/query/domain/models/query-operations.ts`
- `src/modules/query/domain/models/query.ts`
- `src/modules/query/domain/operations/index.ts`
- `src/modules/query/index.ts`
- `src/modules/query/ports/index.ts`
- `src/modules/query/types/index.ts`
- `src/shared/index.ts`

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
| build | `tsdown` |
| dev | `tsdown --watch` |
| typecheck | `tsc --noEmit` |
| lint | `biome check src` |
| lint:fix | `biome check --write src` |
| test | `vitest run` |
| test:watch | `vitest` |
| test:coverage | `vitest run --coverage` |
| scan | `ast-grep scan` |
| verify | `bun run scan && bun run lint && bun run typecheck && bun run test` |
| ci | `bun run verify && bun run build` |

## Dependencies

| Name | Version |
| --- | --- |
| arktype | `catalog:` |

## Dev Dependencies

| Name | Version |
| --- | --- |
| @biomejs/biome | `catalog:` |
| tsdown | `catalog:` |
| typescript | `catalog:` |
| vitest | `catalog:` |

## Peer Dependencies

| Name | Version |
| --- | --- |
| solid-js | `catalog:` |

## README

# @solid-framework/query

A SolidJS-first, type-safe data-fetching and cache-management library.

## Features

- Fine-grained SolidJS reactivity via signals and stores
- Type-safe `queryOptions`, `createQuery`, `createMutation`, and `createInfiniteQuery`
- Query and mutation caches with `staleTime`, `gcTime`, retry, cancellation, and refetching
- Infinite queries with `maxPages`, `getNextPageParam`, and `getPreviousPageParam`
- Persistence, validation, and devtools ports
- Clean Architecture domain/application/adapter layering

## Quick start

```ts
import { QueryClient } from "@solid-framework/query";

const client = new QueryClient();

const data = await client.fetchQuery({
  queryKey: ["todos"],
  queryFn: async () => {
    const res = await fetch("/api/todos");
    return res.json();
  },
});
```

### Solid adapter

```tsx
import { QueryClient, QueryClientProvider } from "@solid-framework/query/solid";
import { createQuery } from "@solid-framework/query/solid";

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <Todos />
    </QueryClientProvider>
  );
}

function Todos() {
  const query = createQuery(() => ({
    queryKey: ["todos"],
    queryFn: async () => {
      const res = await fetch("/api/todos");
      return res.json();
    },
  }));

  return (
    <div>
      {query.isLoading && <p>Loading...</p>}
      {query.isSuccess && <ul>{query.data.map((todo) => <li>{todo.title}</li>)}</ul>}
    </div>
  );
}
```

## API surface

- `QueryClient` — fetch, prefetch, ensure, invalidate, refetch, cancel, remove, reset queries and mutations
- `QueryCache` / `MutationCache` — cached query and mutation instances
- `QueryObserver` — reactive observer with select, placeholder data, and staleness
- `createQuery`, `createMutation`, `createInfiniteQuery` — SolidJS primitives
- `skipToken` — disable/enable a query reactively
- Adapters: persistence, validation (arktype), devtools, network utilities

## Package exports

- `@solid-framework/query` — core domain and `QueryClient`
- `@solid-framework/query/solid` — SolidJS adapter
- `@solid-framework/query/persistence` — persistence adapters
- `@solid-framework/query/validation` — validation adapter for `arktype`
- `@solid-framework/query/devtools` — console devtools adapter

## Links

- Repository: <https://github.com/wrikka/bun-packages>
- Source: <https://github.com/wrikka/bun-packages/blob/main/packages/query/package.json>
