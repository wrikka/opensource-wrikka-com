# agent-sdk-integrations

## Overview

Integrations for agent-sdk: MCP OAuth, computer-use, web search/fetch

## Metadata

| Field | Value |
| --- | --- |
| Type | RUST |
| Category | Domain |
| Path | `packages/sdk/agents-sdk/integrations/Cargo.toml` |
| Version | `0.1.0` |
| Edition | `2021` |
| License | `MIT` |
| Repository | <https://github.com/wrikka/opensource-wrikka-com> |
| Keywords | integrations, mcp, oauth, web-search, computer-use |

## Directory Structure

- 📄 `Cargo.toml`
- 📄 `README.md`
- 📁 `src`
- 📁 `src/acp`
- 📁 `src/adapters`
- 📄 `src/computer_use.rs`
- 📁 `src/custom_tools`
- 📄 `src/lib.rs`
- 📁 `src/mcp`
- 📄 `src/mcp_oauth.rs`
- 📁 `src/skills`
- 📄 `src/web_tools.rs`

## Source Files

- `src/acp/application/mod.rs`
- `src/acp/application/use_cases.rs`
- `src/acp/domain/events.rs`
- `src/acp/domain/mod.rs`
- `src/acp/domain/models/acp_connection.rs`
- `src/acp/domain/models/acp_editor.rs`
- `src/acp/domain/models/acp_message.rs`
- `src/acp/domain/models/mod.rs`
- `src/acp/domain/operations.rs`
- `src/acp/domain/validators.rs`
- `src/acp/mod.rs`
- `src/acp/ports/mod.rs`
- `src/adapters/acp/mod.rs`
- `src/adapters/acp/repositories/in_memory_repository.rs`
- `src/adapters/acp/repositories/mod.rs`
- `src/adapters/custom_tools/mod.rs`
- `src/adapters/custom_tools/repositories/file_system_repository.rs`
- `src/adapters/custom_tools/repositories/mod.rs`
- `src/adapters/mod.rs`
- `src/adapters/skills/mod.rs`
- `src/adapters/skills/repositories/file_system_repository.rs`
- `src/adapters/skills/repositories/mod.rs`
- `src/computer_use.rs`
- `src/custom_tools/application/mod.rs`
- `src/custom_tools/application/use_cases.rs`
- `src/custom_tools/domain/events.rs`
- `src/custom_tools/domain/mod.rs`
- `src/custom_tools/domain/models/custom_tool.rs`
- `src/custom_tools/domain/models/mod.rs`
- `src/custom_tools/domain/models/tool_definition.rs`
- `src/custom_tools/domain/models/tool_parameter.rs`
- `src/custom_tools/domain/operations.rs`
- `src/custom_tools/domain/validators.rs`
- `src/custom_tools/mod.rs`
- `src/custom_tools/ports/mod.rs`
- `src/lib.rs`
- `src/mcp/application/mod.rs`
- `src/mcp/application/use_cases.rs`
- `src/mcp/domain/events.rs`
- `src/mcp/domain/mod.rs`

## Quick Start

### Build

```bash
cargo build -p agent-sdk-integrations
```

### Test

```bash
cargo test -p agent-sdk-integrations
```

### Run

```bash
cargo run -p agent-sdk-integrations
```

### Lint

```bash
cargo clippy -p agent-sdk-integrations
```

### Documentation

```bash
cargo doc -p agent-sdk-integrations --no-deps
```

## Environment

| Field | Value |
| --- | --- |
| Edition | `2021` |

## README

> ![Status](https://img.shields.io/badge/status-in_development-red)

# agent-sdk-integrations

Integrations for agent-sdk — MCP OAuth flow, computer-use tool, web search/fetch tools, ACP, custom tools, and skills.

[![Rust](https://img.shields.io/badge/Rust-1.75%2B-orange)](https://www.rust-lang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

```text
┌─────────────────────────────────────────────────────────────────┐
│                    agent-sdk-integrations                       │
├──────────────┬──────────────────────────────────────────────────┤
│  mcp         │  MCP OAuth flow · MCP adapters                   │
├──────────────┼──────────────────────────────────────────────────┤
│  computer_use│  Computer-use tool                               │
├──────────────┼──────────────────────────────────────────────────┤
│  web_tools   │  Web search · fetch tools                        │
├──────────────┼──────────────────────────────────────────────────┤
│  acp         │  ACP integration                                 │
├──────────────┼──────────────────────────────────────────────────┤
│  skills      │  Custom tools · skills                           │
└──────────────┴──────────────────────────────────────────────────┘
```

## Get Started

1. Add to your `Cargo.toml`

   ```toml
   [dependencies]
   agent-sdk-integrations = { path = "packages/sdk/agents-sdk/integrations" }
   ```

2. Use the library — `Rust`

   ```rust
   use agent_sdk_integrations::*;
   ```

## Features

| Icon | Feature | Description |
|:---:|---------|-------------|
| ![icon](https://api.iconify.design/mdi:shield-key.svg?color=%231976d2&width=16) | MCP OAuth | OAuth flow for MCP servers |
| ![icon](https://api.iconify.design/mdi:monitor.svg?color=%23388e3c&width=16) | Computer Use | Computer-use tool integration |
| ![icon](https://api.iconify.design/mdi:web.svg?color=%23f57c00&width=16) | Web Tools | Web search and fetch tools |
| ![icon](https://api.iconify.design/mdi:puzzle.svg?color=%237b1fa2&width=16) | Custom Tools | Custom tools and skills support |

## License

MIT License - see [LICENSE](../../../../LICENSE) for details.

## Links

- Repository: <https://github.com/wrikka/opensource-wrikka-com>
- Source: <https://github.com/wrikka/opensource-wrikka-com/blob/main/packages/sdk/agents-sdk/integrations/Cargo.toml>
