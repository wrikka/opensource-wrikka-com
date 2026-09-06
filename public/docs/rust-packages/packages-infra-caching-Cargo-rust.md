# wrikka-caching

## Overview

High-performance concurrent caching with KV cache compression

## Metadata

| Field | Value |
| --- | --- |
| Type | RUST |
| Category | Infra |
| Path | `packages/infra/caching/Cargo.toml` |
| Version | `0.1.0` |
| Edition | `2021` |
| Rust Version | `>= 1.70` |
| License | `MIT` |
| Repository | <https://github.com/wrikka/opensource-wrikka-com> |
| Homepage | <https://github.com/wrikka/opensource-wrikka-com> |
| Authors | Wrikka Team |
| Keywords | caching, concurrent, quantization, compression |

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
- `src/domain/events/mod.rs`
- `src/domain/mod.rs`
- `src/domain/models/entities.rs`
- `src/domain/models/mod.rs`
- `src/domain/models/value_objects.rs`
- `src/domain/operations/mod.rs`
- `src/domain/validators/mod.rs`
- `src/infrastructure/adapters/mod.rs`
- `src/infrastructure/mod.rs`
- `src/lib.rs`

## Quick Start

### Build

```bash
cargo build -p wrikka-caching
```

### Test

```bash
cargo test -p wrikka-caching
```

### Run

```bash
cargo run -p wrikka-caching
```

### Lint

```bash
cargo clippy -p wrikka-caching
```

### Documentation

```bash
cargo doc -p wrikka-caching --no-deps
```

## Environment

| Field | Value |
| --- | --- |
| Edition | `2021` |
| Rust Version | `>= 1.70` |

## README

> ![Status](https://img.shields.io/badge/status-in_development-red)

# wrikka-caching

High-performance concurrent caching with KV cache compression — thread-safe caching with multiple eviction policies and async support, following Clean Architecture principles.

[![Rust](https://img.shields.io/badge/Rust-1.75%2B-orange)](https://www.rust-lang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

```text
┌─────────────────────────────────────────────────────────────────┐
│                       wrikka-caching                            │
├──────────────┬──────────────────────────────────────────────────┤
│  domain      │  Models · Operations · Validators                │
├──────────────┼──────────────────────────────────────────────────┤
│  application │  Services · Use cases                            │
├──────────────┼──────────────────────────────────────────────────┤
│  infra       │  Adapters · Implementations                      │
└──────────────┴──────────────────────────────────────────────────┘
```

## Get Started

1. Add to your `Cargo.toml`

   ```toml
   [dependencies]
   wrikka-caching = { path = "packages/infra/caching" }
   ```

2. Use the library — `Rust`

   ```rust
   use wrikka_caching::application::services::*;
   ```

## Features

| Icon | Feature | Description |
|:---:|---------|-------------|
| ![icon](https://api.iconify.design/mdi:lightning-bolt.svg?color=%231976d2&width=16) | Concurrent Caching | Fast, thread-safe cache access |
| ![icon](https://api.iconify.design/mdi:zip-box.svg?color=%23388e3c&width=16) | KV Compression | Compressed key-value storage |
| ![icon](https://api.iconify.design/mdi:swap-horizontal.svg?color=%23f57c00&width=16) | Eviction Policies | Multiple eviction strategies |
| ![icon](https://api.iconify.design/mdi:sync.svg?color=%237b1fa2&width=16) | Async Support | Non-blocking cache operations |

## License

MIT License - see [LICENSE](../../../LICENSE) for details.

## Links

- Repository: <https://github.com/wrikka/opensource-wrikka-com>
- Homepage: <https://github.com/wrikka/opensource-wrikka-com>
- Source: <https://github.com/wrikka/opensource-wrikka-com/blob/main/packages/infra/caching/Cargo.toml>
