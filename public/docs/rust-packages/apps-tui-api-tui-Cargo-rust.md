# api-tui

## Overview

API client TUI app with clean architecture

## Metadata

| Field | Value |
| --- | --- |
| Type | RUST |
| Category | TUI Apps |
| Path | `apps/tui/api-tui/Cargo.toml` |
| Version | `0.1.0` |
| Edition | `2021` |
| Rust Version | `>= 1.70` |
| License | `MIT` |
| Repository | <https://github.com/newkub/api-tui> |
| Homepage | <https://github.com/newkub/api-tui> |
| Authors | Wrikka Team |
| Keywords | tui, api, client, http |

## Directory Structure

- 📄 `Cargo.toml`
- 📄 `moon.yml`
- 📄 `README.md`
- 📁 `src`
- 📁 `src/adapters`
- 📄 `src/lib.rs`
- 📄 `src/main.rs`
- 📁 `src/modules`
- 📁 `src/presentation`
- 📁 `src/shared`

## Source Files

- `src/adapters/http_client.rs`
- `src/adapters/mod.rs`
- `src/lib.rs`
- `src/main.rs`
- `src/modules/api/application/mod.rs`
- `src/modules/api/application/usecase.rs`
- `src/modules/api/domain/mod.rs`
- `src/modules/api/domain/models/mod.rs`
- `src/modules/api/domain/models/request.rs`
- `src/modules/api/domain/operations/mod.rs`
- `src/modules/api/domain/operations/request.rs`
- `src/modules/api/mod.rs`
- `src/modules/mod.rs`
- `src/presentation/mod.rs`
- `src/presentation/tui/app.rs`
- `src/presentation/tui/mod.rs`
- `src/shared/kernel/errors.rs`
- `src/shared/kernel/mod.rs`
- `src/shared/kernel/types.rs`
- `src/shared/mod.rs`

## Binaries

- `api-tui`

## Quick Start

### Build

```bash
cargo build -p api-tui
```

### Test

```bash
cargo test -p api-tui
```

### Run

```bash
cargo run -p api-tui
```

### Lint

```bash
cargo clippy -p api-tui
```

### Documentation

```bash
cargo doc -p api-tui --no-deps
```

## Environment

| Field | Value |
| --- | --- |
| Edition | `2021` |
| Rust Version | `>= 1.70` |

## README

> ![Status](https://img.shields.io/badge/status-in_development-red)

# api-tui

API client TUI app with clean architecture — explore and test APIs from the terminal.

[![Rust](https://img.shields.io/badge/Rust-1.75%2B-orange)](https://www.rust-lang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

```text
┌─────────────────────────────────────────────────────────────────┐
│                           api-tui                               │
├──────────────┬──────────────────────────────────────────────────┤
│  modules     │  Domain modules                                  │
├──────────────┼──────────────────────────────────────────────────┤
│  adapters    │  External adapters                               │
├──────────────┼──────────────────────────────────────────────────┤
│  presentation│  TUI app (ApiTuiApp)                             │
├──────────────┼──────────────────────────────────────────────────┤
│  shared      │  Shared kernel                                   │
└──────────────┴──────────────────────────────────────────────────┘
```

## Get Started

1. Build the app

   ```bash
   cargo build -p api-tui
   ```

2. Run the TUI

   ```bash
   cargo run -p api-tui
   ```

## Features

| Icon | Feature | Description |
|:---:|---------|-------------|
| ![icon](https://api.iconify.design/mdi:api.svg?color=%231976d2&width=16) | API Client | Explore and call APIs from the terminal |
| ![icon](https://api.iconify.design/mdi:keyboard.svg?color=%23388e3c&width=16) | TUI Interface | Keyboard-driven terminal UI |
| ![icon](https://api.iconify.design/mdi:layers.svg?color=%23f57c00&width=16) | Clean Architecture | Domain, adapters, presentation layers |

## License

MIT License - see [LICENSE](../../../LICENSE) for details.

## Links

- Repository: <https://github.com/newkub/api-tui>
- Homepage: <https://github.com/newkub/api-tui>
- Source: <https://github.com/newkub/api-tui/blob/main/apps/tui/api-tui/Cargo.toml>
