---
name: opensource-wrikka-com
description: SolidJS documentation site for the wrikka open-source monorepo, deployed on Cloudflare Workers
related:
  - update-agents-md
  - follow-agents-md
  - follow-framework-solidjs
  - follow-tool-vite
  - follow-lang-typescript
  - follow-service-cloudflare
  - follow-runtime-bun
  - deep-validate
  - review-rules
  - ship
  - report
---

## Goal

Maintain and ship the `opensource.wrikka.com` documentation site — a SolidJS single-page app that catalogs every workspace in the parent wrikka monorepo (Rust crates and npm packages) and renders generated markdown docs, deployed as a Cloudflare Worker with Workers Assets.

## Scope

- SolidJS SPA source in `src/` (components, sections, theme)
- Build-time docs pulled by `bun run pull-docs` (configured in `create-docs.config.ts`)
- Cloudflare Worker entry `src/worker.ts` and `wrangler.toml`
- Build config: `vite.config.ts`, `tsconfig.json`, `package.json`
- Does NOT include editing the parent monorepo workspaces being documented

## Execute

### 1. Start Every Task

1. Run `/follow-agents-md` to read this `AGENTS.md`.
2. Read global rules from `C:\Users\Veerapong\.codeium\windsurf\memories\global_rules.md`.
3. Check `git status` before making changes.

### 2. Develop

1. Install dependencies with `bun install` (or `npm install` if Bun is unavailable).
2. Link the local `@wrikka/create-docs` package with `bun link @wrikka/create-docs`.
3. Start the dev server with `bun run dev` (Vite on port `5173`).
4. Pull docs from configured GitHub sources with `bun run pull-docs`.
5. Keep changes minimal and follow the existing component + co-located CSS pattern (`src/components/<Name>.tsx` + `<name>.css`).
6. Use `/<skill-name>` for each major workflow.

### 3. Validate

1. Run `bun run typecheck` (`tsc --noEmit`) — must pass with zero errors.
2. Run `bun run build` (`vite build`) — must pull docs, generate SEO, and produce `dist/` without errors.
3. Run `/deep-validate` before shipping.

### 4. Ship

1. Commit changes with `/git-commit` using conventional commits.
2. Push `main` to `origin` — never force-push.
3. Deploy to production with `bun run deploy` (`wrangler deploy`) only after user confirmation.
4. Verify the deployed site responds at `https://opensource-wrikka-com.<account>.workers.dev` or the configured domain.
5. Run `/report` to summarize.

## Rules

### 1. Format

- Use frontmatter `name`, `description`, `related`.
- Section order: `## Goal` → `## Scope` → `## Execute` → `## Rules` → `## Expected Outcome`.
- Keep the file under 250 lines.
- Use backticks for `tools`, `commands`, `paths`, and `skill-name`.

### 2. Architecture

- `solid-js: /follow-framework-solidjs`
- `vite: /follow-tool-vite`
- `typescript: /follow-lang-typescript`
- `cloudflare-workers: /follow-service-cloudflare`
- `bun: /follow-runtime-bun`
- `marked: tech: none` (markdown rendering only)

### 3. Platform

- `OS: windows`
- `runtime: bun + Cloudflare Workers (workerd)`
- `repo-type: single package (not a monorepo; documents the parent monorepo)`

### 4. Target User

- `primary: developers browsing wrikka open-source workspace docs`
- `secondary: maintainers regenerating docs after monorepo changes`

### 5. Skills

Core:
- `follow-framework-solidjs: /follow-framework-solidjs`
- `follow-tool-vite: /follow-tool-vite`
- `follow-lang-typescript: /follow-lang-typescript`
- `follow-service-cloudflare: /follow-service-cloudflare`
- `ship: /ship`
- `run-typecheck: /run-typecheck`
- `run-build: /run-build`
- `report: /report`

### 6. Safety

- Do not edit source code outside the task scope.
- Do not edit generated files (`docs/*.json`, `public/*.xml`, `src/data-source.ts` output) by hand — rerun `bun run pull-docs` or `bun run build` instead.
- Dry run before destructive actions.

### 7. Ship

- Use `/ship` for the release workflow.
- `bun run typecheck` and `bun run build` must pass before deploy.
- `wrangler deploy` goes straight to production — always get user confirmation first.

## Expected Outcome

- `AGENTS.md` follows Devin CLI standards.
- Typecheck and build pass cleanly.
- Site deploys to Cloudflare Workers and serves the SPA correctly.
