# @wrikka/stores

## Overview

Clean Architecture state management for SolidJS with time-travel, persistence, and validation

## Metadata

| Field | Value |
| --- | --- |
| Type | NPM |
| Category | Stores |
| Path | `packages/stores/package.json` |
| Version | `0.1.0` |
| License | `MIT` |
| Repository | <https://github.com/wrikka/bun-packages> |
| Keywords | solidjs, state, store, reactivity, validation, persistence, time-travel, clean-architecture |
| Main | `./dist/index.mjs` |
| Module | `./dist/index.mjs` |
| Types | `./dist/index.d.mts` |

## Directory Structure

- 📄 `AGENTS.md`
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
- 📁 `coverage/src`
- 📁 `examples`
- 📄 `examples/tsconfig.json`
- 📄 `examples/validation-advanced.ts`
- 📄 `examples/validation-core.ts`
- 📄 `examples/validation-objects.ts`
- 📄 `examples/validation-store.ts`
- 📄 `examples/validation.ts`
- 📄 `moon.yml`
- 📄 `package.json`
- 📄 `README.md`
- 📁 `scripts`
- 📄 `scripts/migration-cli.ts`
- 📄 `scripts/migration-executor.ts`
- 📄 `scripts/migration-jotai.ts`
- 📄 `scripts/migration-react-query.ts`
- 📄 `scripts/migration-redux.ts`
- 📄 `scripts/migration-tools.ts`

## Source Files

- `src/adapters/analytics/index.ts`
- `src/adapters/analytics/monitoring.ts`
- `src/adapters/devtools/index.ts`
- `src/adapters/persistence/index.ts`
- `src/adapters/persistence/versioning.ts`
- `src/adapters/router/index.ts`
- `src/adapters/storage/index.ts`
- `src/adapters/storage/indexed-db.ts`
- `src/adapters/storage/local-storage.ts`
- `src/adapters/storage/session-storage.ts`
- `src/adapters/sync/index.ts`
- `src/adapters/sync/tab-sync.ts`
- `src/adapters/validation/arktype-validator.ts`
- `src/adapters/validation/error-handling.ts`
- `src/adapters/validation/index.ts`
- `src/adapters/validation/schemas/api-schemas.ts`
- `src/adapters/validation/schemas/common-schemas.ts`
- `src/adapters/validation/schemas/config-schemas.ts`
- `src/adapters/validation/schemas/constraint-schemas.ts`
- `src/adapters/validation/schemas/ecommerce-schemas.ts`
- `src/adapters/validation/schemas/form-schemas.ts`
- `src/adapters/validation/schemas/primitive-schemas.ts`
- `src/adapters/validation/schemas/store-schemas.ts`
- `src/adapters/validation/schemas.ts`
- `src/index.ts`
- `src/modules/query/index.ts`
- `src/modules/query/mutation-state.ts`
- `src/modules/query/mutation-store.ts`
- `src/modules/query/query-builder.ts`
- `src/modules/query/query-cache.ts`
- `src/modules/query/query-manager.ts`
- `src/modules/query/query-state.ts`
- `src/modules/query/query-store.ts`
- `src/modules/store/application/usecases/index.ts`
- `src/modules/store/domain/models/index.ts`
- `src/modules/store/domain/operations/actions.ts`
- `src/modules/store/domain/operations/composition.ts`
- `src/modules/store/domain/operations/derived-operations.ts`
- `src/modules/store/domain/operations/diffing.ts`
- `src/modules/store/domain/operations/event-bus.ts`

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
| test:coverage | `vitest run --coverage` |
| ci | `bun run lint && bun run typecheck && bun run test && bun run build` |
| schema | `bun run scripts/schema-generator.ts` |
| migrate | `bun run scripts/migration-tools.ts` |

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

# @solid-framework/stores

> 🚀 Clean Architecture state management for SolidJS with time-travel, persistence, and validation

A powerful state management solution built with Clean Architecture principles, offering time-travel debugging, multiple persistence adapters, runtime validation with Arktype, and deep reactivity for SolidJS applications.

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://choosealicense.com/licenses/mit/)
[![SolidJS](https://img.shields.io/badge/solidjs-1.9-44694D.svg)](https://solidjs.com/)
[![TypeScript](https://img.shields.io/badge/typescript-5.0-3178C6.svg)](https://www.typescriptlang.org/)

## Features

| Icon | Feature | Description |
|:----:|:--------|:------------|
| <center>![layers](https://api.iconify.design/lucide:layers.svg?color=%238B5CF6&width=16)</center> | Clean Architecture | Domain models, use cases, and adapters separation |
| <center>![history](https://api.iconify.design/lucide:history.svg?color=%23F59E0B&width=16)</center> | Time Travel | Undo/redo with history management |
| <center>![database](https://api.iconify.design/lucide:database.svg?color=%2310B981&width=16)</center> | Persistence | LocalStorage, SessionStorage, IndexedDB adapters |
| <center>![shield-check](https://api.iconify.design/lucide:shield-check.svg?color=%233B82F6&width=16)</center> | Validation | Runtime validation with Arktype |
| <center>![edit-3](https://api.iconify.design/lucide:edit-3.svg?color=%236366F1&width=16)</center> | Draft Mutations | Immutable updates with `produce` and `reconcile` |
| <center>![git-branch](https://api.iconify.design/lucide:git-branch.svg?color=%23EC4899&width=16)</center> | Derived Stores | Computed values with `createDerivedStore` |
| <center>![eye](https://api.iconify.design/lucide:eye.svg?color=%23F97316&width=16)</center> | Deep Observation | Deep reactivity with `createDeepStore` |
| <center>![wrench](https://api.iconify.design/lucide:wrench.svg?color=%2314B8A6&width=16)</center> | DevTools | Integration with SolidJS DevTools |
| <center>![shield](https://api.iconify.design/lucide:shield.svg?color=%23EF4444&width=16)</center> | TypeScript | Full type safety |

## Get Started

1. **Install the package** — add @solid-framework/stores to your project

   ```bash
   bun add @solid-framework/stores
   ```

2. **Create a store** — start managing state

   ```typescript
   import { createStore, produce, reconcile } from "@solid-framework/stores";

   const counterStore = createStore(0);
   counterStore.setState((prev) => prev + 1);

   const userStore = createStore<User>({ name: "John", age: 30 });
   userStore.setState(produce((draft) => { draft.name = "Jane"; draft.age = 31; }));
   userStore.setState(reconcile({ email: "jane@example.com" }));
   ```

## Usage

### Basic Store

```typescript
import { createStore } from "@solid-framework/stores";

const store = createStore({ count: 0, name: "App" });
store.getState(); // { count: 0, name: "App" }
store.setState({ count: 1, name: "Updated" });
store.setState((prev) => ({ ...prev, count: prev.count + 1 }));
const unsubscribe = store.subscribe((newState) => console.log("Changed:", newState));
```

### Draft Mutations with produce

```typescript
import { createStore, produce } from "@solid-framework/stores";

const userStore = createStore<User>({ name: "John", age: 30 });
userStore.setState(produce((draft) => {
  draft.name = "Jane";
  draft.age = 31;
}));
```

### Partial Updates with reconcile

```typescript
import { createStore, reconcile } from "@solid-framework/stores";

const userStore = createStore<User>({ name: "John", age: 30 });
userStore.setState(reconcile({ email: "jane@example.com" }));
// Result: { name: "John", age: 30, email: "jane@example.com" }
```

### Time Travel

```typescript
import { createStoreWithHistory, undoStore, redoStore, canUndoStore, canRedoStore } from "@solid-framework/stores";

const { store, history } = createStoreWithHistory({ count: 0 }, 50);
store.setState({ count: 1 });
store.setState({ count: 2 });

if (canUndoStore(history)) {
  const { store: undoedStore } = undoStore(store, history);
  console.log(undoedStore.getState()); // { count: 1 }
}
```

### Derived Stores

```typescript
import { createStore, createDerivedStore } from "@solid-framework/stores";

const counterStore = createStore({ count: 0, multiplier: 2 });
const doubledStore = createDerivedStore(counterStore, (s) => s.count * s.multiplier);

counterStore.setState({ count: 5, multiplier: 2 });
console.log(doubledStore.getState()); // 10
```

### Deep Observation

```typescript
import { createDeepStore } from "@solid-framework/stores";

const deepStore = createDeepStore({
  user: { name: "John", address: { city: "NYC", zip: "10001" } },
});

deepStore.setState((prev) => ({
  ...prev, user: { ...prev.user, address: { ...prev.user.address, city: "LA" } },
}));
```

### Persistence

```typescript
import { createLocalStorageAdapter } from "@solid-framework/stores/storage";

const storage = createLocalStorageAdapter();
storage.set("user", { name: "John", age: 30 });
const user = storage.get("user");
storage.remove("user");
storage.clear();
```

### Validation

```typescript
import { createArktypeValidator, UserSchema, commonSchemas } from "@solid-framework/stores/validation";

const user = UserSchema({ name: "John", email: "john@example.com", age: 30 });
const validator = createArktypeValidator<User>(
  "{ name: string >= 2, email: string.email, age: number.integer >= 18 <= 100 }"
);
if (validator.validate(data)) console.log("Valid!");
```

### Snapshot

```typescript
import { createStore, snapshot } from "@solid-framework/stores";

const store = createStore({ count: 0, name: "App" });
const stateSnapshot = snapshot(store);
store.setState({ count: 5 });
console.log(stateSnapshot); // Still { count: 0, name: "App" }
```

## License

This project is licensed under the <a href="https://choosealicense.com/licenses/mit/" target="_blank" rel="noopener noreferrer">MIT License</a>.

- ✓ Commercial use, Distribution, Modification, Private use
- ⓘ License and copyright notice
- ✕ Liability, Warranty

## Links

- Repository: <https://github.com/wrikka/bun-packages>
- Source: <https://github.com/wrikka/bun-packages/blob/main/packages/stores/package.json>
