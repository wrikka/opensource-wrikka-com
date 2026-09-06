# @wrikka/integrations

## Overview

Integration adapters for Wrikka (Stripe, GitHub, Supabase, Cloudflare)

## Metadata

| Field | Value |
| --- | --- |
| Type | NPM |
| Category | Integrations |
| Path | `packages/integrations/package.json` |
| Version | `1.0.0` |
| License | `MIT` |
| Repository | <https://github.com/wrikka/bun-packages> |
| Keywords | integrations, stripe, github, supabase, cloudflare, bun, typescript |
| Main | `./dist/index.cjs` |
| Module | `./dist/index.js` |
| Types | `./dist/index.d.ts` |

## Directory Structure

- 📄 `AGENTS.md`
- 📄 `biome.jsonc`
- 📄 `bunup.config.ts`
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
- 📄 `moon.yml`
- 📄 `package.json`
- 📁 `src`
- 📄 `src/index.ts`
- 📁 `src/modules`
- 📄 `tsconfig.json`

## Source Files

- `src/index.ts`
- `src/modules/cloudflare/index.ts`
- `src/modules/github/index.ts`
- `src/modules/stripe/adapters/config/env-config.ts`
- `src/modules/stripe/adapters/config/index.ts`
- `src/modules/stripe/adapters/customer-adapter.ts`
- `src/modules/stripe/adapters/db/connection.ts`
- `src/modules/stripe/adapters/db/index.ts`
- `src/modules/stripe/adapters/db/repositories/customer-repository.ts`
- `src/modules/stripe/adapters/db/repositories/index.ts`
- `src/modules/stripe/adapters/db/repositories/invoice-repository.ts`
- `src/modules/stripe/adapters/db/repositories/member-subscription-repository.ts`
- `src/modules/stripe/adapters/db/repositories/schema/audit-logs.ts`
- `src/modules/stripe/adapters/db/repositories/schema/customers.ts`
- `src/modules/stripe/adapters/db/repositories/schema/index.ts`
- `src/modules/stripe/adapters/db/repositories/schema/invoices.ts`
- `src/modules/stripe/adapters/db/repositories/schema/member-subscriptions.ts`
- `src/modules/stripe/adapters/db/repositories/schema/subscription-plans.ts`
- `src/modules/stripe/adapters/db/repositories/subscription-plan-repository.ts`
- `src/modules/stripe/adapters/db/seed/index.ts`
- `src/modules/stripe/adapters/db/seed/seed.ts`
- `src/modules/stripe/adapters/external/audit-log-adapter.ts`
- `src/modules/stripe/adapters/external/database-audit-log-adapter.ts`
- `src/modules/stripe/adapters/external/email-notification-adapter.ts`
- `src/modules/stripe/adapters/external/index.ts`
- `src/modules/stripe/adapters/external/notification-adapter.ts`
- `src/modules/stripe/adapters/external/stripe-adapter.ts`
- `src/modules/stripe/adapters/external/stripe-customer-adapter.ts`
- `src/modules/stripe/adapters/http/http-helpers.ts`
- `src/modules/stripe/adapters/http/member-subscription-api.ts`
- `src/modules/stripe/adapters/http/plan-api.ts`
- `src/modules/stripe/adapters/http/subscription-api.ts`
- `src/modules/stripe/adapters/index.ts`
- `src/modules/stripe/adapters/invoice-adapter.ts`
- `src/modules/stripe/adapters/rest.ts`
- `src/modules/stripe/exports/adapters.ts`
- `src/modules/stripe/exports/index.ts`
- `src/modules/stripe/exports/infrastructure.ts`
- `src/modules/stripe/exports/modules/checkout.ts`
- `src/modules/stripe/exports/modules/connect.ts`

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
| typecheck | `bunx tsc --noEmit` |
| typecheck:watch | `bunx tsc --noEmit --watch` |
| lint | `biome check` |
| lint:fix | `biome check --write` |
| format | `biome check --write` |
| test | `vitest run` |
| test:watch | `vitest` |
| test:coverage | `vitest run --coverage` |
| scan | `bunx ast-grep scan` |
| check | `bun run lint && bun run typecheck && bun run scan` |
| verify | `bun run check && bun run test && bun run build` |
| deps:analyze | `bunx depcheck` |
| clean | `bunx rimraf node_modules dist` |

## Dependencies

| Name | Version |
| --- | --- |
| @stripe/stripe-js | `^9.14.0` |
| drizzle-orm | `catalog:` |
| pg | `^8.23.0` |
| postgres | `^3.4.9` |
| solid-js | `catalog:` |
| stripe | `^22.6.0` |

## Dev Dependencies

| Name | Version |
| --- | --- |
| @biomejs/biome | `catalog:` |
| @types/bun | `catalog:` |
| @types/node | `catalog:` |
| bunup | `catalog:` |
| typescript | `catalog:` |
| vitest | `catalog:` |

## README

> This workspace does not have a `README.md` yet. Consider adding one to improve documentation.

## Links

- Repository: <https://github.com/wrikka/bun-packages>
- Source: <https://github.com/wrikka/bun-packages/blob/main/packages/integrations/package.json>
