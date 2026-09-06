# wrikka-code-translation

## Overview

AI-powered code translation

## Metadata

| Field | Value |
| --- | --- |
| Type | RUST |
| Category | Tools |
| Path | `packages/tools/code-translation/Cargo.toml` |
| Version | `0.1.0` |
| Edition | `2021` |

## Directory Structure

- 📄 `Cargo.toml`
- 📄 `README.md`
- 📁 `src`
- 📁 `src/adapters`
- 📄 `src/lib.rs`
- 📁 `src/shared`

## Source Files

- `src/adapters/ai/mod.rs`
- `src/adapters/ai/openai_client/helpers.rs`
- `src/adapters/ai/openai_client/mod.rs`
- `src/adapters/ai/openai_client/repository.rs`
- `src/adapters/cache/cache_factory.rs`
- `src/adapters/cache/cache_stats.rs`
- `src/adapters/cache/cache_tests.rs`
- `src/adapters/cache/in_memory_cache.rs`
- `src/adapters/cache/mod.rs`
- `src/adapters/cache/noop_cache.rs`
- `src/adapters/cli/mod.rs`
- `src/adapters/cli/reporter.rs`
- `src/adapters/config/composite_adapter.rs`
- `src/adapters/config/environment_adapter.rs`
- `src/adapters/config/factory.rs`
- `src/adapters/config/file_adapter.rs`
- `src/adapters/config/mod.rs`
- `src/adapters/filesystem/mod.rs`
- `src/adapters/file_handlers/mod.rs`
- `src/adapters/file_handlers/project_scanner.rs`
- `src/adapters/grpc/mod.rs`
- `src/adapters/mcp/mod.rs`
- `src/adapters/mod.rs`
- `src/adapters/parsers/go_parser.rs`
- `src/adapters/parsers/mod.rs`
- `src/adapters/parsers/parser_factory.rs`
- `src/adapters/parsers/parser_tests.rs`
- `src/adapters/parsers/parser_types.rs`
- `src/adapters/parsers/python_parser.rs`
- `src/adapters/parsers/rust_parser.rs`
- `src/adapters/parsers/tree_sitter_parser.rs`
- `src/adapters/parsers/typescript_parser.rs`
- `src/adapters/rest/mod.rs`
- `src/adapters/scanners/gitignore_scanner.rs`
- `src/adapters/scanners/mod.rs`
- `src/adapters/service.rs`
- `src/lib.rs`
- `src/shared/constants/mod.rs`
- `src/shared/constants.rs`
- `src/shared/errors/mod.rs`

## Quick Start

### Build

```bash
cargo build -p wrikka-code-translation
```

### Test

```bash
cargo test -p wrikka-code-translation
```

### Run

```bash
cargo run -p wrikka-code-translation
```

### Lint

```bash
cargo clippy -p wrikka-code-translation
```

### Documentation

```bash
cargo doc -p wrikka-code-translation --no-deps
```

## Environment

| Field | Value |
| --- | --- |
| Edition | `2021` |

## README

> ![Status](https://img.shields.io/badge/status-in_development-red)

# wrikka-code-translation

AI-powered code translation between programming languages.

[![Rust](https://img.shields.io/badge/Rust-1.75%2B-orange)](https://www.rust-lang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

```text
┌─────────────────────────────────────────────────────────────────┐
│                   wrikka-code-translation                       │
├──────────────┬──────────────────────────────────────────────────┤
│  adapters    │  Translation adapters                            │
├──────────────┼──────────────────────────────────────────────────┤
│  shared      │  Shared kernel · types                           │
└──────────────┴──────────────────────────────────────────────────┘
```

## Get Started

1. Add to your `Cargo.toml`

   ```toml
   [dependencies]
   wrikka-code-translation = { path = "packages/tools/code-translation" }
   ```

2. Use the library — `Rust`

   ```rust
   use wrikka_code_translation::*;
   ```

## Features

| Icon | Feature | Description |
|:---:|---------|-------------|
| ![icon](https://api.iconify.design/mdi:translate.svg?color=%231976d2&width=16) | Code Translation | Translate code between languages |
| ![icon](https://api.iconify.design/mdi:robot.svg?color=%237b1fa2&width=16) | AI-Powered | AI-assisted translation pipeline |

## License

MIT License - see [LICENSE](../../../LICENSE) for details.
