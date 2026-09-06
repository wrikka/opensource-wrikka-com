# @wrikka/web-server

## Overview

Production-ready web server library with file-system routing, AOT compilation, and universal runtime support built on Bun and Web Standards

## Metadata

| Field | Value |
| --- | --- |
| Type | NPM |
| Category | Web-server |
| Path | `packages/web-server/package.json` |
| Version | `0.1.0` |
| License | `MIT` |
| Repository | <https://github.com/wrikka/bun-packages> |
| Keywords | web-server, http, file-system-routing, middleware, websocket, aot, bun, typescript, clean-architecture |
| Main | `./dist/index.js` |
| Module | `./dist/index.js` |
| Types | `./dist/index.d.ts` |

## Directory Structure

- 📄 `AGENTS.md`
- 📁 `examples`
- 📄 `examples/aot-compilation.ts`
- 📄 `examples/api-docs.ts`
- 📄 `examples/basic-server.ts`
- 📄 `examples/bundle-analyzer.ts`
- 📄 `examples/bundle-optimization.ts`
- 📄 `examples/cache-headers.ts`
- 📄 `examples/cli-scaffold.ts`
- 📄 `examples/compression.ts`
- 📄 `examples/cors.ts`
- 📄 `examples/database.ts`
- 📄 `examples/edge-deployment.ts`
- 📄 `examples/edge-optimization-v2.ts`
- 📄 `examples/edge-optimization.ts`
- 📄 `examples/env-validation.ts`
- 📄 `examples/error-formatter.ts`
- 📄 `examples/error-pages.ts`
- 📄 `examples/file-system-routing.ts`
- 📄 `examples/graphql.ts`
- 📄 `examples/health-check.ts`
- 📄 `examples/hmr-fast-refresh.ts`
- 📄 `examples/hmr.ts`
- 📄 `examples/hot-reload.ts`
- 📄 `examples/incremental-aot.ts`
- 📄 `examples/logging.ts`
- 📄 `examples/middleware.ts`
- 📄 `examples/performance-benchmark.ts`
- 📄 `examples/performance-profiler.ts`
- 📄 `examples/plugin-system.ts`

## Source Files

- `src/adapters/cache/memory.ts`
- `src/adapters/database/sqlite.ts`
- `src/adapters/file-system/bun-extended.ts`
- `src/adapters/file-system/bun.ts`
- `src/adapters/http/server.ts`
- `src/adapters/session/memory.ts`
- `src/adapters/storage/memory.ts`
- `src/adapters/vite/index.ts`
- `src/adapters/vite/plugin.ts`
- `src/adapters/vite/types/index.ts`
- `src/index.ts`
- `src/modules/aot/application/usecases/compile-routes.ts`
- `src/modules/aot/domain/analyzer/handler-analyzer.ts`
- `src/modules/aot/index.ts`
- `src/modules/aot/types/index.ts`
- `src/modules/api-docs/application/usecases/generate-docs.ts`
- `src/modules/api-docs/index.ts`
- `src/modules/api-docs/types/index.ts`
- `src/modules/bundle-analyzer/application/usecases/analyze.ts`
- `src/modules/bundle-analyzer/index.ts`
- `src/modules/bundle-analyzer/types/index.ts`
- `src/modules/bundle-optimization/application/usecases/optimize.ts`
- `src/modules/bundle-optimization/domain/analyzer/dependency-analyzer.ts`
- `src/modules/bundle-optimization/index.ts`
- `src/modules/bundle-optimization/types/index.ts`
- `src/modules/cache-headers/domain/models/cache-control.ts`
- `src/modules/cache-headers/index.ts`
- `src/modules/cache-headers/types/index.ts`
- `src/modules/cli-scaffold/application/usecases/scaffold.ts`
- `src/modules/cli-scaffold/index.ts`
- `src/modules/cli-scaffold/types/index.ts`
- `src/modules/compression/application/usecases/compress.ts`
- `src/modules/compression/index.ts`
- `src/modules/compression/types/index.ts`
- `src/modules/cors/application/usecases/cors-middleware.ts`
- `src/modules/cors/domain/models/cors.ts`
- `src/modules/cors/index.ts`
- `src/modules/cors/types/index.ts`
- `src/modules/database/application/usecases/database-manager.ts`
- `src/modules/database/domain/models/query-builder.ts`

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
| build:watch | `tsdown --watch` |
| typecheck | `tsc --noEmit` |
| typecheck:watch | `tsc --noEmit --watch` |
| lint | `biome check src` |
| lint:fix | `biome check --write src` |
| format | `biome format --write src` |
| test | `bun test` |
| test:watch | `bun test --watch` |
| test:coverage | `bun test --coverage` |
| scan | `ast-grep scan` |
| check | `bun run lint && bun run typecheck && bun run scan` |
| verify | `bun run check && bun run test && bun run build` |
| clean | `bunx rimraf dist node_modules` |

## Dependencies

| Name | Version |
| --- | --- |
| arktype | `catalog:` |

## Dev Dependencies

| Name | Version |
| --- | --- |
| @biomejs/biome | `catalog:` |
| @types/bun | `catalog:` |
| tsdown | `catalog:` |
| typescript | `catalog:` |
| vite | `catalog:` |

## README

# @wrikka/web-server

> 🚀 Production-ready web server with 37 features, surpassing Nitro & Elysia

High-performance web server built with Bun native APIs and Functional Clean Architecture. Features AOT compilation, Sucrose-like dependency inference, universal runtime support, and comprehensive DX tools.

![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)
![Bun](https://img.shields.io/badge/Bun-1.3.14-white.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-6.0.3-blue.svg)
![SolidJS](https://img.shields.io/badge/SolidJS-1.9.13-cyan.svg)

## Features

| Icon | Feature | Description | Benefit |
|------|---------|-------------|---------|
| 🏗️ | Clean Architecture | Domain, Application, Ports, Adapters separation with pure functions | Maintainable codebase with clear boundaries and testable business logic |
| ⚡ | AOT Compilation | Advanced AOT with AST transformation and inlining | Optimized handlers with dead code elimination and property inlining |
| 🔍 | Sucrose-like Analysis | Static dependency inference for context properties | Skip parsing unused components, better performance |
| ✅ | Schema Validation | End-to-end type safety with runtime validation | Catch errors at compile time and runtime |
| 🌐 | Universal Runtime | Support for Bun, Node, Deno, and Edge runtimes | Deploy anywhere with single codebase |
| 📦 | Tree-shaking | Modular imports for optimal bundle size | Import only needed modules, ~5-15KB tree-shaken bundles |
| 🔌 | Plugin System | Extensible architecture with lifecycle hooks | Community extensions, modular development |
| 📊 | Performance Profiler | Built-in profiling with flame graph generation | Identify bottlenecks, optimize performance |
| 🔄 | Hot Reload | State preservation during development | Faster development cycles without losing state |
| ⚡ | Edge Optimizations | Edge-native optimizations for edge runtimes | Better performance on Cloudflare Workers, Vercel Edge |
| 🛠️ | CLI Scaffold | Quick project setup with template selection | Get started in minutes with best practices |
| ❌ | Error Formatter | Clear, actionable error messages with suggestions | Faster debugging with context and suggestions |
| 📈 | Bundle Analyzer | Visualize bundle composition and optimization opportunities | Identify large modules, optimize bundle size |
| 🚀 | Fast Refresh | Instant UI updates without losing state | Better DX during development |

## Quick Start

1. **Install dependencies**
   ```bash
   bun install
   ```

2. **Build the package**
   ```bash
   bun run build
   ```

3. **Run tests**
   ```bash
   bun run test
   ```

## Usage

### Basic Server

```ts
import { createRoute, createServer } from '@wrikka/web-server'

const server = createServer({
  port: 3000,
  routes: [
    createRoute('GET', '/health', async () => new Response('OK')),
  ],
})

await server.start()
```

### File-System Routing

```ts
import { createBunFileSystemAdapter, discoverRoutes } from '@wrikka/web-server'

const result = await discoverRoutes(
  { routesDir: './routes' },
  createBunFileSystemAdapter(),
)
```

### Middleware Pipeline

```ts
import { composeMiddlewares, createCORSMiddleware } from '@wrikka/web-server'

const pipeline = composeMiddlewares([
  createCORSMiddleware({ origin: '*' }),
])
```

### Schema Validation

```ts
import { schemaBuilder } from '@wrikka/web-server'

const userSchema = schemaBuilder.object({
  name: schemaBuilder.string(),
  age: schemaBuilder.number(),
})

const result = userSchema.parse(data)
```

## Architecture

```
src/
├── modules/                      # Feature modules (Vertical Slice)
│   ├── routing/                 # File-system routing
│   ├── middleware/              # Middleware pipeline
│   ├── validation/              # Request validation
│   ├── static-files/            # Static file serving
│   ├── env-validation/          # Environment validation
│   ├── logging/                 # Logging & observability
│   ├── session/                 # Session management
│   ├── compression/             # Compression middleware
│   ├── cache-headers/            # Cache headers auto-config
│   ├── health-check/            # Health check endpoint
│   ├── request-logging/         # Request/response logging
│   ├── edge-deployment/          # Edge deployment adapter
│   ├── hmr/                     # Hot module replacement
│   ├── websocket/               # WebSocket support
│   ├── rate-limiting/            # Rate limiting middleware
│   ├── cors/                    # CORS configuration
│   ├── error-pages/              # Error page templates
│   ├── database/                # Database ORM integration
│   ├── api-docs/                 # API documentation generator
│   ├── graphql/                 # GraphQL integration
│   ├── aot/                     # AOT compilation
│   ├── static-analysis/         # Static code analysis
│   ├── universal-runtime/        # Universal runtime support
│   ├── schema-validation/        # Schema validation
│   ├── sucrose/                 # Dependency inference
│   ├── runtime-optimization/    # Runtime optimization
│   ├── incremental-aot/          # Incremental AOT
│   ├── plugin-system/            # Plugin system
│   ├── performance-profiler/     # Performance profiler
│   ├── hot-reload/              # Hot reload
│   ├── edge-optimization/       # Edge optimizations
│   ├── cli-scaffold/            # CLI scaffold generator
│   ├── error-formatter/          # Error formatter
│   ├── bundle-analyzer/         # Bundle analyzer
│   ├── hmr-fast-refresh/         # HMR with fast refresh
│   ├── bundle-optimization/      # Bundle size optimization
│   ├── performance-benchmark/     # Performance benchmarking
│   ├── standard-schema/          # Standard Schema compliance
│   └── edge-optimization-v2/     # Edge runtime optimization v2
├── adapters/                     # External systems
│   ├── http/                     # HTTP layer
│   ├── storage/                  # Storage adapters
│   ├── cache/                    # Cache adapters
│   ├── file-system/              # File system adapters
│   ├── session/                  # Session adapters
│   └── database/                # Database adapters
├── presentation/                 # Entry points
│   └── server/                   # Server entry
└── shared/                       # Shared kernel
    ├── types/                    # Result, Option, Either
    ├── utils/                    # Pure utilities
    ├── errors/                   # Error types
    └── constants/                # Constants
```

## Performance

- **Bundle Size**: 101.81 kB (59.95 kB minified, 15.70 kB gzipped)
- **Tree-shaken**: ~5-15KB for modular imports
- **Runtime**: Bun native APIs (<1ms cold start)
- **AOT**: Ahead-of-time compilation for optimized handlers
- **Sucrose**: Static analysis for dependency inference

## Comparison

### vs Nitro

- ⭐ File-system routing (Nitro has it)
- ⭐ Environment validation (Nitro lacks it)
- ⭐ AOT compilation (Nitro lacks it)
- ⭐ Static analysis (Nitro limited)
- ⭐ Clean architecture (Nitro lacks it)
- ✅ Better tree-shaking

### vs Elysia

- ⭐ File-system routing (Elysia lacks it)
- ⭐ Environment validation (Elysia lacks it)
- ⭐ Clean architecture (Elysia lacks it)
- ⭐ Built-in features (39 vs plugins)
- ✅ Better testability
- 🚧 Equal AOT compilation
- ❌ Slower runtime (Elysia is fastest)

## License

This project is licensed under the <a href="https://choosealicense.com/licenses/mit/" target="_blank" rel="noopener noreferrer">MIT License</a>.

- ✓ Commercial use, Distribution, Modification, Private use
- ⓘ License and copyright notice
- ✕ Liability, Warranty

## Links

- Repository: <https://github.com/wrikka/bun-packages>
- Source: <https://github.com/wrikka/bun-packages/blob/main/packages/web-server/package.json>
