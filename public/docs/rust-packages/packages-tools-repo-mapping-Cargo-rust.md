# wrikka-repo-mapping

## Overview

Repository map generation and analysis

## Metadata

| Field | Value |
| --- | --- |
| Type | RUST |
| Category | Tools |
| Path | `packages/tools/repo-mapping/Cargo.toml` |
| Version | `0.1.0` |
| Edition | `2021` |

## Directory Structure

- 📄 `Cargo.toml`
- 📄 `README.md`
- 📁 `src`
- 📁 `src/git`
- 📁 `src/infrastructure`
- 📄 `src/lib.rs`
- 📁 `src/modules`

## Source Files

- `src/git/git/mod.rs`
- `src/git/mod.rs`
- `src/infrastructure/entities/mod.rs`
- `src/infrastructure/entities/repo_map_entity.rs`
- `src/infrastructure/mod.rs`
- `src/lib.rs`
- `src/modules/repo_mapping/mod.rs`
- `src/modules/repo_mapping/models/mod.rs`
- `src/modules/repo_mapping/operations/mod.rs`
- `src/modules/repo_mapping/scanners/mod.rs`

## Quick Start

### Build

```bash
cargo build -p wrikka-repo-mapping
```

### Test

```bash
cargo test -p wrikka-repo-mapping
```

### Run

```bash
cargo run -p wrikka-repo-mapping
```

### Lint

```bash
cargo clippy -p wrikka-repo-mapping
```

### Documentation

```bash
cargo doc -p wrikka-repo-mapping --no-deps
```

## Environment

| Field | Value |
| --- | --- |
| Edition | `2021` |

## README

> ![Status](https://img.shields.io/badge/status-in_development-red)

# wrikka-repo-mapping

Repository map generation and analysis — repository structure scanning plus Git integration.

[![Rust](https://img.shields.io/badge/Rust-1.75%2B-orange)](https://www.rust-lang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

```text
┌─────────────────────────────────────────────────────────────────┐
│                     wrikka-repo-mapping                         │
├──────────────┬──────────────────────────────────────────────────┤
│  modules     │  Repo mapping models · operations · scanners     │
├──────────────┼──────────────────────────────────────────────────┤
│  git         │  Git adapter (moved from infra/core)             │
├──────────────┼──────────────────────────────────────────────────┤
│  infra       │  Entities · infrastructure                       │
├──────────────┼──────────────────────────────────────────────────┤
│  shared      │  Shared kernel · types                           │
└──────────────┴──────────────────────────────────────────────────┘
```

## Get Started

1. Add to your `Cargo.toml`

   ```toml
   [dependencies]
   wrikka-repo-mapping = { path = "packages/tools/repo-mapping" }
   ```

2. Use the library — `Rust`

   ```rust
   use wrikka_repo_mapping::*;
   ```

## Features

| Icon | Feature | Description |
|:---:|---------|-------------|
| ![icon](https://api.iconify.design/mdi:map.svg?color=%231976d2&width=16) | Repo Mapping | Generate repository structure maps |
| ![icon](https://api.iconify.design/mdi:source-branch.svg?color=%23388e3c&width=16) | Git Integration | Git operations adapter |
| ![icon](https://api.iconify.design/mdi:file-search.svg?color=%23f57c00&width=16) | Scanning | Repository scanners and analysis |

## License

MIT License - see [LICENSE](../../../LICENSE) for details.
