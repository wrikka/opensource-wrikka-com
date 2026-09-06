# system-tui

## Overview

System monitor TUI app with clean architecture

## Metadata

| Field | Value |
| --- | --- |
| Type | RUST |
| Category | TUI Apps |
| Path | `apps/tui/system-tui/Cargo.toml` |
| Version | `0.1.0` |
| Edition | `2021` |
| Rust Version | `>= 1.70` |
| License | `MIT` |
| Repository | <https://github.com/newkub/system-tui> |
| Homepage | <https://github.com/newkub/system-tui> |
| Authors | Wrikka Team |
| Keywords | tui, system, monitor, metrics |

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

- `src/adapters/mod.rs`
- `src/adapters/sysinfo_adapter.rs`
- `src/lib.rs`
- `src/main.rs`
- `src/modules/mod.rs`
- `src/modules/system/application/mod.rs`
- `src/modules/system/application/usecase.rs`
- `src/modules/system/domain/mod.rs`
- `src/modules/system/domain/models/metric.rs`
- `src/modules/system/domain/models/mod.rs`
- `src/modules/system/domain/operations/metric.rs`
- `src/modules/system/domain/operations/mod.rs`
- `src/modules/system/mod.rs`
- `src/presentation/mod.rs`
- `src/presentation/tui/app.rs`
- `src/presentation/tui/mod.rs`
- `src/shared/kernel/errors.rs`
- `src/shared/kernel/mod.rs`
- `src/shared/kernel/types.rs`
- `src/shared/mod.rs`

## Binaries

- `system-tui`

## Quick Start

### Build

```bash
cargo build -p system-tui
```

### Test

```bash
cargo test -p system-tui
```

### Run

```bash
cargo run -p system-tui
```

### Lint

```bash
cargo clippy -p system-tui
```

### Documentation

```bash
cargo doc -p system-tui --no-deps
```

## Environment

| Field | Value |
| --- | --- |
| Edition | `2021` |
| Rust Version | `>= 1.70` |

## README

> ![Status](https://img.shields.io/badge/status-in_development-red)

# system-tui

System monitor TUI app with clean architecture — monitor system resources from the terminal.

[![Rust](https://img.shields.io/badge/Rust-1.75%2B-orange)](https://www.rust-lang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

```text
┌─────────────────────────────────────────────────────────────────┐
│                         system-tui                              │
├──────────────┬──────────────────────────────────────────────────┤
│  modules     │  Domain modules                                  │
├──────────────┼──────────────────────────────────────────────────┤
│  adapters    │  External adapters                               │
├──────────────┼──────────────────────────────────────────────────┤
│  presentation│  TUI app (SystemTuiApp)                          │
├──────────────┼──────────────────────────────────────────────────┤
│  shared      │  Shared kernel                                   │
└──────────────┴──────────────────────────────────────────────────┘
```

## Get Started

1. Build the app

   ```bash
   cargo build -p system-tui
   ```

2. Run the TUI

   ```bash
   cargo run -p system-tui
   ```

## Features

| Icon | Feature | Description |
|:---:|---------|-------------|
| ![icon](https://api.iconify.design/mdi:monitor-dashboard.svg?color=%231976d2&width=16) | System Monitor | Monitor system resources |
| ![icon](https://api.iconify.design/mdi:keyboard.svg?color=%23388e3c&width=16) | TUI Interface | Keyboard-driven terminal UI |
| ![icon](https://api.iconify.design/mdi:layers.svg?color=%23f57c00&width=16) | Clean Architecture | Domain, adapters, presentation layers |

## License

MIT License - see [LICENSE](../../../LICENSE) for details.

## Links

- Repository: <https://github.com/newkub/system-tui>
- Homepage: <https://github.com/newkub/system-tui>
- Source: <https://github.com/newkub/system-tui/blob/main/apps/tui/system-tui/Cargo.toml>
