# terminal-tui

## Overview

Terminal emulator TUI app with clean architecture

## Metadata

| Field | Value |
| --- | --- |
| Type | RUST |
| Category | TUI Apps |
| Path | `apps/tui/terminal-tui/Cargo.toml` |
| Version | `0.1.0` |
| Edition | `2021` |
| Rust Version | `>= 1.70` |
| License | `MIT` |
| Repository | <https://github.com/newkub/terminal-tui> |
| Homepage | <https://github.com/newkub/terminal-tui> |
| Authors | Wrikka Team |
| Keywords | tui, terminal, emulator, cli |

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
- `src/adapters/pty.rs`
- `src/lib.rs`
- `src/main.rs`
- `src/modules/mod.rs`
- `src/modules/terminal/application/mod.rs`
- `src/modules/terminal/application/usecase.rs`
- `src/modules/terminal/domain/mod.rs`
- `src/modules/terminal/domain/models/command.rs`
- `src/modules/terminal/domain/models/mod.rs`
- `src/modules/terminal/domain/operations/command.rs`
- `src/modules/terminal/domain/operations/mod.rs`
- `src/modules/terminal/mod.rs`
- `src/presentation/mod.rs`
- `src/presentation/tui/app.rs`
- `src/presentation/tui/mod.rs`
- `src/shared/kernel/errors.rs`
- `src/shared/kernel/mod.rs`
- `src/shared/kernel/types.rs`
- `src/shared/mod.rs`

## Binaries

- `terminal-tui`

## Quick Start

### Build

```bash
cargo build -p terminal-tui
```

### Test

```bash
cargo test -p terminal-tui
```

### Run

```bash
cargo run -p terminal-tui
```

### Lint

```bash
cargo clippy -p terminal-tui
```

### Documentation

```bash
cargo doc -p terminal-tui --no-deps
```

## Environment

| Field | Value |
| --- | --- |
| Edition | `2021` |
| Rust Version | `>= 1.70` |

## README

> ![Status](https://img.shields.io/badge/status-in_development-red)

# terminal-tui

Terminal emulator TUI app with clean architecture — uses the shared `wrikka-terminal-sdk` domain core.

[![Rust](https://img.shields.io/badge/Rust-1.75%2B-orange)](https://www.rust-lang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

```text
┌─────────────────────────────────────────────────────────────────┐
│                        terminal-tui                             │
├──────────────┬──────────────────────────────────────────────────┤
│  modules     │  Domain modules                                  │
├──────────────┼──────────────────────────────────────────────────┤
│  adapters    │  External adapters                               │
├──────────────┼──────────────────────────────────────────────────┤
│  presentation│  TUI app (TerminalTuiApp)                        │
├──────────────┼──────────────────────────────────────────────────┤
│  shared      │  Shared kernel                                   │
└──────────────┴──────────────────────────────────────────────────┘
```

## Get Started

1. Build the app

   ```bash
   cargo build -p terminal-tui
   ```

2. Run the TUI

   ```bash
   cargo run -p terminal-tui
   ```

## Features

| Icon | Feature | Description |
|:---:|---------|-------------|
| ![icon](https://api.iconify.design/mdi:console.svg?color=%231976d2&width=16) | Terminal Emulator | Terminal emulation in a TUI |
| ![icon](https://api.iconify.design/mdi:keyboard.svg?color=%23388e3c&width=16) | TUI Interface | Keyboard-driven terminal UI |
| ![icon](https://api.iconify.design/mdi:layers.svg?color=%23f57c00&width=16) | Clean Architecture | Domain, adapters, presentation layers |

## License

MIT License - see [LICENSE](../../../LICENSE) for details.

## Links

- Repository: <https://github.com/newkub/terminal-tui>
- Homepage: <https://github.com/newkub/terminal-tui>
- Source: <https://github.com/newkub/terminal-tui/blob/main/apps/tui/terminal-tui/Cargo.toml>
