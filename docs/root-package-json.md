# @wrikka/opensource-wrikka-com

## Overview

No description available.

## Metadata

| Field | Value |
| --- | --- |
| Type | NPM |
| Category | Root |
| Path | `package.json` |
| Version | `0.1.0` |

## Directory Structure

- 📄 `AGENTS.md`
- 📁 `apps`
- 📁 `apps/cli`
- 📁 `apps/desktop`
- 📁 `apps/tui`
- 📁 `apps/wasm`
- 📁 `apps/web`
- 📄 `biome.jsonc`
- 📄 `bun.lock`
- 📄 `Cargo.lock`
- 📄 `Cargo.toml`
- 📄 `clippy.toml`
- 📁 `opensource-wrikka-com`
- 📁 `opensource-wrikka-com/docs`
- 📄 `opensource-wrikka-com/index.html`
- 📄 `opensource-wrikka-com/package.json`
- 📁 `opensource-wrikka-com/scripts`
- 📁 `opensource-wrikka-com/src`
- 📄 `opensource-wrikka-com/tsconfig.json`
- 📄 `opensource-wrikka-com/vite.config.ts`
- 📄 `opensource-wrikka-com/wrangler.toml`
- 📄 `package.json`
- 📁 `packages`
- 📁 `packages/domain`
- 📁 `packages/infra`
- 📁 `packages/lib`
- 📁 `packages/tools`
- 📄 `README.md`
- 📁 `scripts`
- 📄 `scripts/analyze-project.ts`

## Workspace Members

- `opensource-wrikka-com`
- `apps/*/*`
- `apps/wasm/canvas/web`
- `packages/*/*`
- `packages/*/*/*`

## Quick Start

### Install

```bash
bun install
```

## Dev Dependencies

| Name | Version |
| --- | --- |
| @biomejs/biome | `^2.5.11` |
| @moonrepo/cli | `^2.5.3` |
| turbo | `^2.10.12` |

## README

> ![Status](https://img.shields.io/badge/status-in_development-red)

# opensource-wrikka-com

Rust packages monorepo for opensource-wrikka-com — Agent SDK, TUI apps, CLI tools, infrastructure, and foundation libraries built with Clean Architecture.

![Rust](https://img.shields.io/badge/Rust-1.70-ce422b)
![Moonrepo](https://img.shields.io/badge/Moonrepo-latest-7b1fa2)
![Cargo](https://img.shields.io/badge/Cargo-workspace-dea584)

### Workspaces

| Workspace | Description |
|-----------|-------------|
| [`apps/cli/agent-browser`](./apps/cli/agent-browser) | Browser automation agent — Chrome, Firefox, Safari, Edge |
| [`apps/cli/agent-capture`](./apps/cli/agent-capture) | Multi-platform agent capture CLI for browser, terminal, snippets |
| [`apps/cli/agent-computer`](./apps/cli/agent-computer) | Main orchestration for computer automation |
| [`apps/cli/file-ops`](./apps/cli/file-ops) | File operations utilities (wrikka-file-ops) |
| [`apps/cli/monorepo`](./apps/cli/monorepo) | Advanced monorepo management tool (wmonorepo) |
| [`apps/cli/convert-web-to-desktop`](./apps/cli/convert-web-to-desktop) | Convert web applications to desktop using Tauri |
| [`apps/tui/agent-tui`](./apps/tui/agent-tui) | Terminal-based AI assistant interface |
| [`apps/tui/terminal-tui`](./apps/tui/terminal-tui) | Terminal emulator TUI app |
| [`apps/tui/task-tui`](./apps/tui/task-tui) | Tasks manager TUI app |
| [`apps/tui/files-tui`](./apps/tui/files-tui) | File explorer TUI app |
| [`apps/tui/git-tui`](./apps/tui/git-tui) | Git manager TUI app |
| [`apps/tui/api-tui`](./apps/tui/api-tui) | API client TUI app |
| [`apps/tui/database-tui`](./apps/tui/database-tui) | Database explorer TUI app |
| [`apps/tui/system-tui`](./apps/tui/system-tui) | System monitor TUI app |
| [`apps/tui/editor-tui`](./apps/tui/editor-tui) | Modal TUI text editor (wrikka-editor-tui) |
| [`apps/desktop/files-desktop`](./apps/desktop/files-desktop) | Desktop file explorer (Tauri) |
| [`apps/wasm/canvas`](./apps/wasm/canvas) | Whiteboard application with Rust WASM and SolidJS |
| [`packages/domain/agent-sdk/core`](./packages/domain/agent-sdk/core) | AI agent core runtime — conversation, provider, memory |
| [`packages/domain/agent-sdk/channels`](./packages/domain/agent-sdk/channels) | Communication channels — Slack, WhatsApp, Email |
| [`packages/domain/agent-sdk/security`](./packages/domain/agent-sdk/security) | Security module — audit log, crypto, RBAC, rate limiting |
| [`packages/domain/agent-sdk/integrations`](./packages/domain/agent-sdk/integrations) | MCP OAuth, computer-use, web search/fetch |
| [`packages/domain/agent-sdk/tools`](./packages/domain/agent-sdk/tools) | Agent tools — shell, browser, review, git |
| [`packages/lib/effect`](./packages/lib/effect) | Effect system — core, HTTP, CLI |
| [`packages/lib/fp`](./packages/lib/fp) | Functional programming library |
| [`packages/lib/error`](./packages/lib/error) | Error handling with Clean Architecture |
| [`packages/lib/utils`](./packages/lib/utils) | Utility library with Clean Architecture |
| [`packages/infra/caching`](./packages/infra/caching) | High-performance concurrent caching with KV compression |
| [`packages/infra/filesystem`](./packages/infra/filesystem) | Filesystem utilities and operations |
| [`packages/infra/networking`](./packages/infra/networking) | Network communication utilities |
| [`packages/infra/observability`](./packages/infra/observability) | Monitoring and telemetry tools |
| [`packages/infra/storage`](./packages/infra/storage) | Storage abstractions with Clean Architecture |
| [`packages/tools/code-metrics`](./packages/tools/code-metrics) | Code analysis metrics and quality measures |
| [`packages/tools/code-translation`](./packages/tools/code-translation) | AI-powered code translation |
| [`packages/tools/repo-mapping`](./packages/tools/repo-mapping) | Repository map generation and analysis |
| [`packages/tools/search-engine`](./packages/tools/search-engine) | AI-friendly semantic search engine with AST parsing |
| [`packages/tools/parser-engine`](./packages/tools/parser-engine) | Advanced parser with multi-language support |
| [`packages/tools/template-engine`](./packages/tools/template-engine) | General-purpose template engine |
| [`packages/tools/reporter`](./packages/tools/reporter) | Generic reporting library with multiple formats |
| [`packages/tools/rules-engine`](./packages/tools/rules-engine) | Rules engine for code analysis and linting |
| [`packages/tools/lsp`](./packages/tools/lsp) | LSP integration — completion, diagnostics, go-to-definition |
| [`packages/tools/create-cli`](./packages/tools/create-cli) | Clean architecture CLI builder library |
| [`packages/tools/perf`](./packages/tools/perf) | Performance monitoring and benchmarking tools |
| [`packages/lib/tauri-plugin-wrikka-fs`](./packages/lib/tauri-plugin-wrikka-fs) | Tauri filesystem plugin for Wrikka Desktop |
| [`packages/domain/terminal-sdk`](./packages/domain/terminal-sdk) | Shared terminal SDK — core domain, ports, adapters |
| [`packages/lib/ratatui-ui`](./packages/lib/ratatui-ui) | Shared TUI component library for Ratatui — 20 reusable widgets |
| [`opensource-wrikka-com`](./opensource-wrikka-com) | Web workspace explorer (SolidJS + Vite) |

## Structure

- `apps/` — Applications (CLI, TUI, desktop, WASM, web submodules)
- `packages/lib/` — Foundation and shared libraries
- `packages/infra/` — Infrastructure adapters (caching, filesystem, networking, observability, storage)
- `packages/domain/` — Domain SDKs (agent SDK, terminal SDK)
- `packages/tools/` — Development tools
- `opensource-wrikka-com/` — Top-level web workspace explorer (git submodule)

## Quick Start

```bash
# Check the whole workspace
cargo check

# Check a specific package
cargo check -p wrikka-effect

# Run the web explorer
cd opensource-wrikka-com && bun install && bun run dev
```
