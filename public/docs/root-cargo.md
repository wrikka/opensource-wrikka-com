# rust-packages

## Overview

Cargo workspace root for rust-packages

## Metadata

| Field | Value |
| --- | --- |
| Type | RUST |
| Category | Root |
| Path | `Cargo.toml` |
| Version | `0.1.0` |
| Edition | `2021` |
| Rust Version | `>= 1.70` |
| License | `MIT` |
| Repository | <https://github.com/wrikka/opensource-wrikka-com> |
| Homepage | <https://github.com/wrikka/opensource-wrikka-com> |
| Authors | Wrikka Team |

## Directory Structure

- 📄 `AGENTS.md`
- 📁 `apps`
- 📁 `apps/cli`
- 📁 `apps/desktop`
- 📁 `apps/tui`
- 📁 `apps/wasm`
- 📄 `biome.jsonc`
- 📄 `bun.lock`
- 📄 `Cargo.lock`
- 📄 `Cargo.toml`
- 📄 `clippy.toml`
- 📄 `LICENSE`
- 📁 `opensource-wrikka-com`
- 📄 `opensource-wrikka-com/AGENTS.md`
- 📁 `opensource-wrikka-com/docs`
- 📄 `opensource-wrikka-com/index.html`
- 📄 `opensource-wrikka-com/package.json`
- 📁 `opensource-wrikka-com/public`
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

## Workspace Members

- `packages/tools/code-metrics`
- `packages/tools/repo-mapping`
- `packages/tools/code-translation`
- `packages/lib/effect`
- `packages/tools/search-engine`
- `apps/cli/agent-browser`
- `apps/cli/agent-computer`
- `apps/cli/agent-capture`
- `# "apps/tui/agent-tui`
- `# git submodule
    # "packages/ui`
- `# TODO: Add UI package
    "packages/tools/reporter`
- `packages/tools/rules-engine`
- `packages/lib/fp`
- `packages/lib/error`
- `packages/lib/utils`
- `packages/infra/caching`
- `packages/infra/filesystem`
- `packages/infra/networking`
- `packages/infra/observability`
- `packages/infra/storage`
- `packages/tools/parser-engine`
- `packages/tools/template-engine`
- `apps/cli/file-ops`
- `packages/lib/ratatui-ui`
- `packages/domain/terminal-sdk`
- `# Agent SDK packages
    "packages/domain/agent-sdk/core`
- `packages/domain/agent-sdk/security`
- `packages/domain/agent-sdk/integrations`
- `packages/domain/agent-sdk/channels`
- `packages/domain/agent-sdk/tools`
- `apps/desktop/files-desktop/src-tauri`
- `apps/tui/files-tui`

## Quick Start

### Build

```bash
cargo build
```

### Test

```bash
cargo test
```

## Environment

| Field | Value |
| --- | --- |
| Edition | `2021` |
| Rust Version | `>= 1.70` |

## README

> ![Status](https://img.shields.io/badge/status-in_development-red)

# rust-packages

Open-source Rust workspace for Wrikka — CLI agents, TUI apps, libraries, and SDK crates.

![Rust](https://img.shields.io/badge/Rust-1.70%2B-f57c00)
![Tauri](https://img.shields.io/badge/Tauri-2-c2185b)
![Tokio](https://img.shields.io/badge/Tokio-1.52-0097a7)
![Moonrepo](https://img.shields.io/badge/Moonrepo-2-d32f2f)
![MIT](https://img.shields.io/badge/license-MIT-388e3c)

```text
┌──────────────────────────────────────────────────────────┐
│  rust-packages — Rust workspace                          │
│                                                          │
│  ┌──────────────┐  ┌──────────────────────────────────┐  │
│  │  Crates      │  │  Code / Build / Test             │  │
│  │  agent-*     │  │                                  │  │
│  │  packages/*  │  │  $ cargo build --workspace       │  │
│  │  apps/*      │  │  $ cargo test --workspace        │  │
│  │              │  │                                  │  │
│  └──────────────┘  └──────────────────────────────────┘  │
└──────────────────────────────────────────────────────────┘
```

## Get Started

1. Install Rust 1.70+ and cargo
   ```bash
   rustup update stable
   ```
2. Build the entire workspace
   ```bash
   cargo build --workspace
   ```
3. Run workspace tests
   ```bash
   cargo test --workspace
   ```
4. Run a specific app
   ```bash
   cargo run -p wrikka-file-ops -- --help
   ```

## Features

| Icon | Feature | Description | Benefit | Usage |
|:---:|:--------|:------------|:--------|:------|
| ![icon](https://api.iconify.design/mdi:console-line.svg?color=%230097a7&width=16) | CLI Agents | Command-line tools for browser and file operations | Automate agent tasks from the terminal | `cargo run -p <app>` |
| ![icon](https://api.iconify.design/mdi:folder-open.svg?color=%23ffa000&width=16) | File Operations | Rust utilities for file system tasks | Reliable cross-platform file handling | `cargo run -p wrikka-file-ops` |
| ![icon](https://api.iconify.design/mdi:web.svg?color=%23c2185b&width=16) | Browser Agent | Playwright-backed browser automation | Drive browser workflows programmatically | `cargo run -p agent-browser` |
| ![icon](https://api.iconify.design/mdi:code-braces.svg?color=%237b1fa2&width=16) | Parser Engine | Code parsing and analysis utilities | Analyze source code across languages | `wrikka-parser-engine` crate |
| ![icon](https://api.iconify.design/mdi:search-web.svg?color=%231976d2&width=16) | Search Engine | Repo indexing and search | Find code patterns fast | `wrikka-search-engine` crate |
| ![icon](https://api.iconify.design/mdi:translate.svg?color=%23388e3c&width=16) | Code Translation | Source-to-source translation helpers | Migrate code between languages | `wrikka-code-translation` crate |
| ![icon](https://api.iconify.design/mdi:chart-bar.svg?color=%23f57c00&width=16) | Code Metrics | Static analysis and metrics | Measure code quality and size | `wrikka-code-metrics` crate |
| ![icon](https://api.iconify.design/mdi:database.svg?color=%2300796b&width=16) | Storage & Caching | Infrastructure crates for storage and caching | Reusable persistence layer | `wrikka-storage` / `wrikka-caching` |
| ![icon](https://api.iconify.design/mdi:robot.svg?color=%23d32f2f&width=16) | Agent SDK | Core, security, integrations, channels, tools | Build agents with shared domain model | `wrikka-agent-*` crates |
| ![icon](https://api.iconify.design/mdi:desktop-tower-monitor.svg?color=%23303f9f&width=16) | TUI Apps | Terminal UI components and apps | Rich terminal interfaces | `cargo run -p files-tui` |

## Usage

### Usage via CLI

```bash
cargo run -p wrikka-file-ops -- --help
```

```text
┌──────────────────────────────────────────────────────────┐
│  $ cargo run -p wrikka-file-ops -- --help                │
│                                                          │
│  USAGE                                                   │
│    wrikka-file-ops [OPTIONS] <COMMAND>                   │
│                                                          │
│  COMMANDS                                                │
│    list      List files in a directory                   │
│    copy      Copy files matching a pattern               │
│    move      Move files matching a pattern               │
│    delete    Delete files matching a pattern             │
│    sync      Sync two directories                        │
│                                                          │
│  OPTIONS                                                 │
│    --help    Show this help message                      │
└──────────────────────────────────────────────────────────┘
```

### Usage via SDK

```toml
[dependencies]
wrikka-utils = { path = "packages/lib/utils" }
wrikka-effect = { path = "packages/lib/effect" }
```

```rust
use wrikka_utils::some_helper;

fn main() {
    let result = some_helper();
    println!("{result:?}");
}
```

| api | description | options | default |
|-----|-------------|---------|---------|
| `some_helper()` | Example utility | — | — |

### Usage via TUI

<details>
<summary>TUI keyboard shortcuts & layout</summary>

1. Build and run the TUI app
   ```bash
   cargo run -p files-tui
   ```
2. Use `↑`/`↓` to navigate, `Enter` to select, `q` to quit

```text
┌──────────────────────────────────────────────────────────┐
│  files-tui — File Manager                                │
│                                                          │
│  > /home/user/projects       [Enter] open                │
│    /home/user/documents      [↑/↓]  navigate             │
│    /home/user/downloads      [q]    quit                 │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

</details>

## License

MIT — see [LICENSE](LICENSE)

## Links

- Repository: <https://github.com/wrikka/opensource-wrikka-com>
- Homepage: <https://github.com/wrikka/opensource-wrikka-com>
- Source: <https://github.com/wrikka/opensource-wrikka-com/blob/main/Cargo.toml>
