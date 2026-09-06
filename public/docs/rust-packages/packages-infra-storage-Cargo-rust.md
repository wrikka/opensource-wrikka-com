# wrikka-storage

## Overview

Storage abstractions with Clean Architecture

## Metadata

| Field | Value |
| --- | --- |
| Type | RUST |
| Category | Infra |
| Path | `packages/infra/storage/Cargo.toml` |
| Version | `0.1.0` |
| Edition | `2021` |
| Rust Version | `>= 1.70` |
| License | `MIT` |
| Repository | <https://github.com/wrikka/opensource-wrikka-com> |
| Homepage | <https://github.com/wrikka/opensource-wrikka-com> |
| Authors | Wrikka Team |
| Keywords | storage, s3, filesystem, bucket |

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
- `src/domain/errors.rs`
- `src/domain/events/bucket_events.rs`
- `src/domain/events/mod.rs`
- `src/domain/events/object_events.rs`
- `src/domain/lib.rs`
- `src/domain/mod.rs`
- `src/domain/models/entities.rs`
- `src/domain/models/mod.rs`
- `src/domain/models/value_objects.rs`
- `src/domain/operations/bucket_operations.rs`
- `src/domain/operations/mod.rs`
- `src/domain/operations/object_operations.rs`
- `src/domain/validators/bucket_validators.rs`
- `src/domain/validators/mod.rs`
- `src/domain/validators/object_validators.rs`
- `src/infrastructure/adapters/mod.rs`
- `src/infrastructure/entities/mod.rs`
- `src/infrastructure/entities/storage_bucket.rs`
- `src/infrastructure/entities/storage_object.rs`
- `src/infrastructure/mod.rs`
- `src/lib.rs`

## Quick Start

### Build

```bash
cargo build -p wrikka-storage
```

### Test

```bash
cargo test -p wrikka-storage
```

### Run

```bash
cargo run -p wrikka-storage
```

### Lint

```bash
cargo clippy -p wrikka-storage
```

### Documentation

```bash
cargo doc -p wrikka-storage --no-deps
```

## Environment

| Field | Value |
| --- | --- |
| Edition | `2021` |
| Rust Version | `>= 1.70` |

## README

> ![Status](https://img.shields.io/badge/status-in_development-red)

# wrikka-storage

Storage abstractions with Clean Architecture — storage backends and persistence layers.

[![Rust](https://img.shields.io/badge/Rust-1.75%2B-orange)](https://www.rust-lang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

```text
┌─────────────────────────────────────────────────────────────────┐
│                       wrikka-storage                            │
├──────────────┬──────────────────────────────────────────────────┤
│  domain      │  Models · Operations · Validators                │
├──────────────┼──────────────────────────────────────────────────┤
│  application │  Services · Use cases                            │
├──────────────┼──────────────────────────────────────────────────┤
│  infra       │  Storage adapters · Persistence                  │
└──────────────┴──────────────────────────────────────────────────┘
```

## Get Started

1. Add to your `Cargo.toml`

   ```toml
   [dependencies]
   wrikka-storage = { path = "packages/infra/storage" }
   ```

2. Use the library — `Rust`

   ```rust
   use wrikka_storage::application::services::*;
   ```

## Features

| Icon | Feature | Description |
|:---:|---------|-------------|
| ![icon](https://api.iconify.design/mdi:database.svg?color=%231976d2&width=16) | Storage Abstractions | Backend-agnostic storage interfaces |
| ![icon](https://api.iconify.design/mdi:content-save.svg?color=%23388e3c&width=16) | Persistence | Persistence layer implementations |
| ![icon](https://api.iconify.design/mdi:power-plug.svg?color=%23f57c00&width=16) | Adapters | Pluggable storage adapters |
| ![icon](https://api.iconify.design/mdi:layers.svg?color=%237b1fa2&width=16) | Clean Architecture | Domain, application, and adapter layers |

## License

MIT License - see [LICENSE](../../../LICENSE) for details.

## Links

- Repository: <https://github.com/wrikka/opensource-wrikka-com>
- Homepage: <https://github.com/wrikka/opensource-wrikka-com>
- Source: <https://github.com/wrikka/opensource-wrikka-com/blob/main/packages/infra/storage/Cargo.toml>
