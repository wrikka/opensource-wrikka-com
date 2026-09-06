# wrikka-agent-tools

## Overview

Agent tools - shell, browser, review, git

## Metadata

| Field | Value |
| --- | --- |
| Type | RUST |
| Category | Domain |
| Path | `packages/domain/agent-sdk/tools/Cargo.toml` |
| Version | `0.1.0` |
| Edition | `2021` |

## Directory Structure

- 📄 `Cargo.toml`
- 📄 `README.md`
- 📁 `src`
- 📁 `src/adapters`
- 📄 `src/lib.rs`
- 📁 `src/modules`

## Source Files

- `src/adapters/acp.rs`
- `src/adapters/cache/mod.rs`
- `src/adapters/config/mod.rs`
- `src/adapters/custom_tools.rs`
- `src/adapters/db/mod.rs`
- `src/adapters/external/mod.rs`
- `src/adapters/http/mod.rs`
- `src/adapters/mcp.rs`
- `src/adapters/mod.rs`
- `src/adapters/skills.rs`
- `src/lib.rs`
- `src/modules/mod.rs`
- `src/modules/tool/application/mod.rs`
- `src/modules/tool/domain/mod.rs`
- `src/modules/tool/domain/models/code_interpreter.rs`
- `src/modules/tool/domain/models/git.rs`
- `src/modules/tool/domain/models/git_service.rs`
- `src/modules/tool/domain/models/git_tests.rs`
- `src/modules/tool/domain/models/git_types.rs`
- `src/modules/tool/domain/models/mod.rs`
- `src/modules/tool/domain/models/review/mod.rs`
- `src/modules/tool/domain/models/review/model.rs`
- `src/modules/tool/domain/models/review/tests.rs`
- `src/modules/tool/domain/models/review/types.rs`
- `src/modules/tool/domain/models/tool.rs`
- `src/modules/tool/mod.rs`
- `src/modules/tool/ports/mod.rs`

## Quick Start

### Build

```bash
cargo build -p wrikka-agent-tools
```

### Test

```bash
cargo test -p wrikka-agent-tools
```

### Run

```bash
cargo run -p wrikka-agent-tools
```

### Lint

```bash
cargo clippy -p wrikka-agent-tools
```

### Documentation

```bash
cargo doc -p wrikka-agent-tools --no-deps
```

## Environment

| Field | Value |
| --- | --- |
| Edition | `2021` |

## README

> ![Status](https://img.shields.io/badge/status-in_development-red)

# wrikka-agent-tools

Agent tools — shell, browser, review, and git tool implementations.

[![Rust](https://img.shields.io/badge/Rust-1.75%2B-orange)](https://www.rust-lang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

```text
┌─────────────────────────────────────────────────────────────────┐
│                      wrikka-agent-tools                         │
├──────────────┬──────────────────────────────────────────────────┤
│  modules     │  Tool domain modules                             │
├──────────────┼──────────────────────────────────────────────────┤
│  adapters    │  Tool adapters                                   │
└──────────────┴──────────────────────────────────────────────────┘
```

## Get Started

1. Add to your `Cargo.toml`

   ```toml
   [dependencies]
   wrikka-agent-tools = { path = "packages/domain/agent-sdk/tools" }
   ```

2. Use the library — `Rust`

   ```rust
   use wrikka_agent_tools::*;
   ```

## Features

| Icon | Feature | Description |
|:---:|---------|-------------|
| ![icon](https://api.iconify.design/mdi:console.svg?color=%231976d2&width=16) | Shell Tool | Shell execution tool |
| ![icon](https://api.iconify.design/mdi:web.svg?color=%23388e3c&width=16) | Browser Tool | Browser automation tool |
| ![icon](https://api.iconify.design/mdi:eye.svg?color=%23f57c00&width=16) | Review Tool | Code review tool |
| ![icon](https://api.iconify.design/mdi:source-branch.svg?color=%237b1fa2&width=16) | Git Tool | Git operations tool |

## License

MIT License - see [LICENSE](../../../../LICENSE) for details.
