# wrikka-filesystem

## Overview

Filesystem utilities and operations with Clean Architecture

## Metadata

| Field | Value |
| --- | --- |
| Type | RUST |
| Category | Infra |
| Path | `packages/infra/filesystem/Cargo.toml` |
| Version | `0.1.0` |
| Edition | `2021` |
| Rust Version | `>= 1.70` |
| License | `MIT` |
| Repository | <https://github.com/wrikka/opensource-wrikka-com> |
| Homepage | <https://github.com/wrikka/opensource-wrikka-com> |
| Authors | Wrikka Team |
| Keywords | filesystem, file, directory, path |

## Directory Structure

- 📄 `Cargo.toml`
- 📄 `README.md`
- 📁 `src`
- 📁 `src/application`
- 📁 `src/domain`
- 📁 `src/infrastructure`
- 📄 `src/lib.rs`

## Source Files

- `src/application/mod.rs`
- `src/application/services/mod.rs`
- `src/domain/events/directory_events.rs`
- `src/domain/events/file_events.rs`
- `src/domain/events/mod.rs`
- `src/domain/mod.rs`
- `src/domain/models/entities.rs`
- `src/domain/models/mod.rs`
- `src/domain/models/value_objects.rs`
- `src/domain/operations/directory_operations.rs`
- `src/domain/operations/file_operations.rs`
- `src/domain/operations/mod.rs`
- `src/domain/validators/directory_validators.rs`
- `src/domain/validators/file_validators.rs`
- `src/domain/validators/mod.rs`
- `src/infrastructure/adapters/mod.rs`
- `src/infrastructure/mod.rs`
- `src/infrastructure/utils/directory.rs`
- `src/infrastructure/utils/file_ops.rs`
- `src/infrastructure/utils/mod.rs`
- `src/infrastructure/utils/walker.rs`
- `src/infrastructure/utils/walker_config.rs`
- `src/infrastructure/utils/walker_functions.rs`
- `src/lib.rs`

## Quick Start

### Build

```bash
cargo build -p wrikka-filesystem
```

### Test

```bash
cargo test -p wrikka-filesystem
```

### Run

```bash
cargo run -p wrikka-filesystem
```

### Lint

```bash
cargo clippy -p wrikka-filesystem
```

### Documentation

```bash
cargo doc -p wrikka-filesystem --no-deps
```

## Environment

| Field | Value |
| --- | --- |
| Edition | `2021` |
| Rust Version | `>= 1.70` |

## README

> ![Status](https://img.shields.io/badge/status-in_development-red)

# wrikka-filesystem

Filesystem utilities and operations with Clean Architecture — directory operations, file metadata handling, and filesystem adapters.

[![Rust](https://img.shields.io/badge/Rust-1.75%2B-orange)](https://www.rust-lang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

```text
┌─────────────────────────────────────────────────────────────────┐
│                      wrikka-filesystem                          │
├──────────────┬──────────────────────────────────────────────────┤
│  domain      │  Models · Operations · Validators                │
├──────────────┼──────────────────────────────────────────────────┤
│  application │  Services · Use cases                            │
├──────────────┼──────────────────────────────────────────────────┤
│  infra       │  Adapters · Utils (walkers, file helpers)        │
└──────────────┴──────────────────────────────────────────────────┘
```

## Get Started

1. Add to your `Cargo.toml`

   ```toml
   [dependencies]
   wrikka-filesystem = { path = "packages/infra/filesystem" }
   ```

2. Use the library — `Rust`

   ```rust
   use wrikka_filesystem::domain::operations::*;
   ```

## Features

| Icon | Feature | Description |
|:---:|---------|-------------|
| ![icon](https://api.iconify.design/mdi:folder-cog.svg?color=%231976d2&width=16) | Directory Operations | Directory traversal and management |
| ![icon](https://api.iconify.design/mdi:file-document.svg?color=%23388e3c&width=16) | File Metadata | Metadata models and value objects |
| ![icon](https://api.iconify.design/mdi:file-tree.svg?color=%23f57c00&width=16) | Filesystem Utils | Walkers and file helper utilities |
| ![icon](https://api.iconify.design/mdi:layers.svg?color=%237b1fa2&width=16) | Clean Architecture | Domain, application, and adapter layers |

## License

MIT License - see [LICENSE](../../../LICENSE) for details.

## Links

- Repository: <https://github.com/wrikka/opensource-wrikka-com>
- Homepage: <https://github.com/wrikka/opensource-wrikka-com>
- Source: <https://github.com/wrikka/opensource-wrikka-com/blob/main/packages/infra/filesystem/Cargo.toml>
