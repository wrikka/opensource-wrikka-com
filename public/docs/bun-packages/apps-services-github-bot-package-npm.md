# @wrikka/github-bot

## Overview

GitHub App bot for dependency/version review - extracted from wgithub-bot app

## Metadata

| Field | Value |
| --- | --- |
| Type | NPM |
| Category | Services Apps |
| Path | `apps/services/github-bot/package.json` |
| Version | `0.1.0` |
| License | `MIT` |
| Keywords | github, bot, app, dependency, version, review, ai |
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
- 📄 `README.md`
- 📁 `src`
- 📁 `src/adapters`
- 📁 `src/exports`
- 📄 `src/index.ts`
- 📁 `src/modules`
- 📁 `src/shared`
- 📄 `tsconfig.base.json`
- 📄 `tsconfig.json`

## Source Files

- `src/adapters/input/cli/cli-commands.ts`
- `src/adapters/input/http/handlers.ts`
- `src/adapters/input/http/webhook-handlers.ts`
- `src/adapters/output/repositories/github-repository.ts`
- `src/exports/adapters.ts`
- `src/exports/application.ts`
- `src/exports/composition.ts`
- `src/exports/domain.ts`
- `src/exports/index.ts`
- `src/exports/infra.ts`
- `src/exports/shared.ts`
- `src/index.ts`
- `src/modules/github/application/index.ts`
- `src/modules/github/domain/models/github-repository.ts`
- `src/modules/github/domain/operations/api.ts`
- `src/modules/github/domain/operations/auth.ts`
- `src/modules/github/domain/validators/github-validators.ts`
- `src/modules/github/index.ts`
- `src/modules/github/ports/index.ts`
- `src/modules/github/types/domain.ts`
- `src/modules/policy/application/index.ts`
- `src/modules/policy/domain/index.ts`
- `src/modules/policy/index.ts`
- `src/modules/policy/ports/index.ts`
- `src/modules/policy/types/domain.ts`
- `src/modules/review/application/constructors/data-constructors.ts`
- `src/modules/review/application/domain-events/review-events.ts`
- `src/modules/review/application/guards/authorization-guards.ts`
- `src/modules/review/application/index.ts`
- `src/modules/review/application/transformers/github-transformers.ts`
- `src/modules/review/application/usecases/review-dependencies.ts`
- `src/modules/review/application/usecases/review-service.ts`
- `src/modules/review/application/usecases/review.ts`
- `src/modules/review/application/validators/input-validators.ts`
- `src/modules/review/domain/events/dependency-events.ts`
- `src/modules/review/domain/models/dependency-analysis.ts`
- `src/modules/review/domain/operations/dependency-parser.ts`
- `src/modules/review/index.ts`
- `src/modules/review/ports/index.ts`
- `src/modules/review/types/domain.ts`

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
| clean | `bunx rimraf node_modules` |
| security | `bunx audit` |

## Dependencies

| Name | Version |
| --- | --- |
| effect | `catalog:` |

## Dev Dependencies

| Name | Version |
| --- | --- |
| @types/bun | `catalog:` |
| @types/node | `catalog:` |
| bunup | `catalog:` |
| typescript | `catalog:` |
| vitest | `catalog:` |

## README

> ![Status](https://img.shields.io/badge/status-in_development-red)

# @wrikka/github-bot

GitHub App bot for dependency and version review — extracted from wgithub-bot app. Analyze pull requests, compare dependency changes, enforce review policies, and handle webhooks with signature verification.

![Bun](https://img.shields.io/badge/Bun-1.3.14-000000)
![TypeScript](https://img.shields.io/badge/TypeScript-7.0.2-3178c6)
![Effect](https://img.shields.io/badge/Effect-3.22-1976d2)

```text
┌──────────────────────────────────────────────────────────┐
│  github-bot — Dependency Review Bot                      │
│                                                          │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐          │
│  │  Webhook   │→ │  Parse PR  │→ │  Compare   │          │
│  │  Event     │  │  Files     │  │  Deps      │          │
│  └────────────┘  └────────────┘  └────────────┘          │
│                                       ↓                  │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐          │
│  │  Post      │← │  Generate  │← │  Apply     │          │
│  │  Comment   │  │  Report    │  │  Policies  │          │
│  └────────────┘  └────────────┘  └────────────┘          │
└──────────────────────────────────────────────────────────┘
```

## Get Started

1. Install — `bun add @wrikka/github-bot`
   ```bash
   bun add @wrikka/github-bot
   ```
2. Run Dev — `bun run src/index.ts`
   ```bash
   bun run dev
   ```
3. Build — `bunup`
   ```bash
   bun run build
   ```

## Features

| Icon | Feature | Description |
|:---:|---------|-------------|
| ![icon](https://api.iconify.design/mdi:github.svg?color=%231976d2&width=16) | PR Dependency Review | Analyze dependency changes in pull request files |
| ![icon](https://api.iconify.design/mdi:compare.svg?color=%23388e3c&width=16) | Dependency Comparison | Diff package.json changes between base and head |
| ![icon](https://api.iconify.design/mdi:shield-check.svg?color=%23d32f2f&width=16) | Policy Enforcement | Validate dependency changes against configured policies |
| ![icon](https://api.iconify.design/mdi:webhook.svg?color=%23f57c00&width=16) | Webhook Handling | Parse and verify GitHub webhook events with signatures |
| ![icon](https://api.iconify.design/mdi:robot.svg?color=%237b1fa2&width=16) | GitHub App Auth | Create and manage installation tokens via App JWT |
| ![icon](https://api.iconify.design:mdi:comment-text.svg?color=%23c2185b&width=16) | Review Reports | Generate and post review comments on pull requests |
| ![icon](https://api.iconify.design/mdi:api.svg?color=%23303f9f&width=16) | GitHub API Client | Fetch files, repos, and PR data with rate limit handling |
| ![icon](https://api.iconify.design/mdi:console.svg?color=%230097a7&width=16) | CLI Commands | Review, policy, and webhook management from terminal |
| ![icon](https://api.iconify.design/mdi:alert.svg?color=%2300796b&width=16) | Violation Detection | Flag policy violations and breaking dependency changes |

## Usage

### Usage via CLI

Run dependency reviews and manage policies from the command line.

```bash
bun run src/index.ts review facebook react 12345
```

```text
┌──────────────────────────────────────────────────────────┐
│  $ github-bot review facebook react 12345                │
│                                                          │
│  Fetching PR #12345 files...                             │
│  ✓ Found 3 changed files                                 │
│  ✓ package.json changed: +2 deps, -1 dep                 │
│                                                          │
│  Dependency Changes:                                     │
│    + zod         4.4.3 → 4.5.0    (minor)                │
│    + neverthrow  8.2.0 → 9.0.0    (major ⚠)              │
│    - chalk       6.0.0 (removed)                         │
│                                                          │
│  Policy Check: 1 violation found                         │
│  ✓ Review report posted to PR #12345                     │
└──────────────────────────────────────────────────────────┘
```

| command | description | usage |
|---------|-------------|-------|
| `review` | Analyze dependencies in a PR | `review <owner> <repo> <pr-number>` |
| `policy` | Manage review policies | `policy <action> [options]` |
| `webhook` | Manage webhook configuration | `webhook <action> [options]` |

### Usage via SDK

Import the bot's review and webhook functions programmatically.

```typescript
import {
  handleReviewEvent,
  createAppEnv,
  compareDependencies,
} from '@wrikka/github-bot';

const env = createAppEnv({
  appId: process.env.GITHUB_APP_ID!,
  privateKey: process.env.GITHUB_PRIVATE_KEY!,
});

const diff = compareDependencies(basePackageJson, headPackageJson);
await handleReviewEvent({ env, prNumber: 12345, diff });
```

```text
┌──────────────────────────────────────────────────────────┐
│  > handleReviewEvent({ env, prNumber: 12345, diff })     │
│                                                          │
│  ✓ Installation token created                            │
│  ✓ PR files fetched (3 files)                            │
│  ✓ Dependencies compared: +2 added, -1 removed           │
│  ✓ Policy validated: 1 violation                         │
│  ✓ Review report generated                               │
│  ✓ Comment posted to PR #12345                            │
│  → Result: { success: true, violations: 1 }              │
└──────────────────────────────────────────────────────────┘
```

| api | description | options | default |
|-----|-------------|---------|---------|
| `handleReviewEvent(opts)` | Process a review event | `env`, `prNumber`, `diff` | — |
| `compareDependencies(base, head)` | Compare package.json deps | `base`, `head` | — |
| `createAppEnv(config)` | Create GitHub App environment | `appId`, `privateKey` | — |
| `validateWebhookSignature(req)` | Verify webhook signature | `signature`, `payload` | — |
| `parseWebhookEvent(event)` | Parse webhook event type | `event` object | — |
