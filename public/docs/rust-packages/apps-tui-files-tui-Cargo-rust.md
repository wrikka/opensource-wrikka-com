# files-tui

## Overview

File explorer TUI app with clean architecture

## Metadata

| Field | Value |
| --- | --- |
| Type | RUST |
| Category | TUI Apps |
| Path | `apps/tui/files-tui/Cargo.toml` |
| Version | `0.1.0` |
| Edition | `2021` |
| Rust Version | `>= 1.70` |
| License | `MIT` |
| Repository | <https://github.com/newkub/files-tui> |
| Homepage | <https://github.com/newkub/files-tui> |
| Authors | Wrikka Team |
| Keywords | tui, files, explorer, manager |

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

- `src/adapters/filesystem/extract.rs`
- `src/adapters/filesystem/local.rs`
- `src/adapters/filesystem/mod.rs`
- `src/adapters/mod.rs`
- `src/adapters/port.rs`
- `src/adapters/remote/filesystem.rs`
- `src/adapters/remote/mod.rs`
- `src/adapters/remote/ops.rs`
- `src/lib.rs`
- `src/main.rs`
- `src/modules/files/application/mod.rs`
- `src/modules/files/application/usecase/bookmarks.rs`
- `src/modules/files/application/usecase/browser.rs`
- `src/modules/files/application/usecase/mod.rs`
- `src/modules/files/application/usecase/ops.rs`
- `src/modules/files/application/usecase/preview.rs`
- `src/modules/files/application/usecase/tests.rs`
- `src/modules/files/domain/mod.rs`
- `src/modules/files/domain/models/file.rs`
- `src/modules/files/domain/models/mod.rs`
- `src/modules/files/domain/operations/file/tests.rs`
- `src/modules/files/domain/operations/file.rs`
- `src/modules/files/domain/operations/mod.rs`
- `src/modules/files/mod.rs`
- `src/modules/mod.rs`
- `src/presentation/mod.rs`
- `src/presentation/tui/app.rs`
- `src/presentation/tui/events/browser.rs`
- `src/presentation/tui/events/fuzzy.rs`
- `src/presentation/tui/events/input.rs`
- `src/presentation/tui/events/mod.rs`
- `src/presentation/tui/events/mouse.rs`
- `src/presentation/tui/events/popups.rs`
- `src/presentation/tui/keymap.rs`
- `src/presentation/tui/mod.rs`
- `src/presentation/tui/state/mod.rs`
- `src/presentation/tui/state/right_pane.rs`
- `src/presentation/tui/state/transfer.rs`
- `src/presentation/tui/ui/browser.rs`
- `src/presentation/tui/ui/file_row.rs`

## Binaries

- `files-tui`

## Quick Start

### Build

```bash
cargo build -p files-tui
```

### Test

```bash
cargo test -p files-tui
```

### Run

```bash
cargo run -p files-tui
```

### Lint

```bash
cargo clippy -p files-tui
```

### Documentation

```bash
cargo doc -p files-tui --no-deps
```

## Environment

| Field | Value |
| --- | --- |
| Edition | `2021` |
| Rust Version | `>= 1.70` |

## README

> ![Status](https://img.shields.io/badge/status-in_development-red)

# files-tui

File explorer TUI app with clean architecture — navigate and manage files from the terminal.

[![Rust](https://img.shields.io/badge/Rust-1.75%2B-orange)](https://www.rust-lang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

```text
┌─────────────────────────────────────────────────────────────────┐
│                          files-tui                              │
├──────────────┬──────────────────────────────────────────────────┤
│  modules     │  Domain modules                                  │
├──────────────┼──────────────────────────────────────────────────┤
│  adapters    │  External adapters                               │
├──────────────┼──────────────────────────────────────────────────┤
│  presentation│  TUI app (FilesTuiApp)                           │
├──────────────┼──────────────────────────────────────────────────┤
│  shared      │  Shared kernel                                   │
└──────────────┴──────────────────────────────────────────────────┘
```

## Get Started

1. Build the app

   ```bash
   cargo build -p files-tui
   ```

2. Run the TUI

   ```bash
   cargo run -p files-tui
   ```

## Features

| Icon | Feature | Description |
|:---:|---------|-------------|
| ![icon](https://api.iconify.design/mdi:folder.svg?color=%231976d2&width=16) | File Explorer | Navigate files and directories |
| ![icon](https://api.iconify.design/mdi:keyboard.svg?color=%23388e3c&width=16) | TUI Interface | Keyboard-driven terminal UI |
| ![icon](https://api.iconify.design/mdi:layers.svg?color=%23f57c00&width=16) | Clean Architecture | Domain, adapters, presentation layers |

## License

MIT License - see [LICENSE](../../../LICENSE) for details.

## Links

- Repository: <https://github.com/newkub/files-tui>
- Homepage: <https://github.com/newkub/files-tui>
- Source: <https://github.com/newkub/files-tui/blob/main/apps/tui/files-tui/Cargo.toml>
