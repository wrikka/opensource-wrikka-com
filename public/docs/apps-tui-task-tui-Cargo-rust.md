# task-tui

## Overview

Tasks manager TUI app with clean architecture

## Metadata

| Field | Value |
| --- | --- |
| Type | RUST |
| Category | TUI Apps |
| Path | `apps/tui/task-tui/Cargo.toml` |
| Version | `0.1.0` |
| Edition | `2021` |
| Rust Version | `>= 1.70` |
| License | `MIT` |
| Repository | <https://github.com/newkub/task-tui> |
| Homepage | <https://github.com/newkub/task-tui> |
| Authors | Wrikka Team |
| Keywords | tui, tasks, manager, productivity |

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
- `src/adapters/storage.rs`
- `src/lib.rs`
- `src/main.rs`
- `src/modules/mod.rs`
- `src/modules/task/application/mod.rs`
- `src/modules/task/application/usecase.rs`
- `src/modules/task/domain/mod.rs`
- `src/modules/task/domain/models/mod.rs`
- `src/modules/task/domain/models/task.rs`
- `src/modules/task/domain/operations/mod.rs`
- `src/modules/task/domain/operations/task.rs`
- `src/modules/task/mod.rs`
- `src/modules/task_manager/adapters/id/mod.rs`
- `src/modules/task_manager/adapters/mod.rs`
- `src/modules/task_manager/adapters/storage/json_storage.rs`
- `src/modules/task_manager/adapters/storage/mod.rs`
- `src/modules/task_manager/adapters/storage/path.rs`
- `src/modules/task_manager/application/hierarchy_ops.rs`
- `src/modules/task_manager/application/mod.rs`
- `src/modules/task_manager/application/subtask_ops.rs`
- `src/modules/task_manager/application/task_ops.rs`
- `src/modules/task_manager/application/usecase.rs`
- `src/modules/task_manager/application/usecase_flat_api.rs`
- `src/modules/task_manager/application/usecase_task_impl.rs`
- `src/modules/task_manager/application/usecase_tests.rs`
- `src/modules/task_manager/domain/mod.rs`
- `src/modules/task_manager/domain/models/list.rs`
- `src/modules/task_manager/domain/models/mod.rs`
- `src/modules/task_manager/domain/models/space.rs`
- `src/modules/task_manager/domain/models/subtask.rs`
- `src/modules/task_manager/domain/models/task.rs`
- `src/modules/task_manager/domain/models/tree.rs`
- `src/modules/task_manager/domain/models/workspace.rs`
- `src/modules/task_manager/domain/operations.rs`
- `src/modules/task_manager/domain/validators.rs`
- `src/modules/task_manager/mod.rs`
- `src/modules/task_manager/ports.rs`
- `src/modules/task_manager/shared/constants.rs`
- `src/modules/task_manager/shared/errors.rs`

## Binaries

- `task-tui`

## Quick Start

### Build

```bash
cargo build -p task-tui
```

### Test

```bash
cargo test -p task-tui
```

### Run

```bash
cargo run -p task-tui
```

### Lint

```bash
cargo clippy -p task-tui
```

### Documentation

```bash
cargo doc -p task-tui --no-deps
```

## Environment

| Field | Value |
| --- | --- |
| Edition | `2021` |
| Rust Version | `>= 1.70` |

## README

> ![Status](https://img.shields.io/badge/status-in_development-red)

# task-tui

Tasks manager TUI app with clean architecture — manage tasks from the terminal.

[![Rust](https://img.shields.io/badge/Rust-1.75%2B-orange)](https://www.rust-lang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

```text
┌─────────────────────────────────────────────────────────────────┐
│                          task-tui                               │
├──────────────┬──────────────────────────────────────────────────┤
│  modules     │  Domain modules                                  │
├──────────────┼──────────────────────────────────────────────────┤
│  adapters    │  External adapters                               │
├──────────────┼──────────────────────────────────────────────────┤
│  presentation│  TUI app (TasksTuiApp)                           │
├──────────────┼──────────────────────────────────────────────────┤
│  shared      │  Shared kernel                                   │
└──────────────┴──────────────────────────────────────────────────┘
```

## Get Started

1. Build the app

   ```bash
   cargo build -p task-tui
   ```

2. Run the TUI

   ```bash
   cargo run -p task-tui
   ```

## Features

| Icon | Feature | Description |
|:---:|---------|-------------|
| ![icon](https://api.iconify.design/mdi:checkbox-marked.svg?color=%231976d2&width=16) | Task Manager | Manage tasks from the terminal |
| ![icon](https://api.iconify.design/mdi:keyboard.svg?color=%23388e3c&width=16) | TUI Interface | Keyboard-driven terminal UI |
| ![icon](https://api.iconify.design/mdi:layers.svg?color=%23f57c00&width=16) | Clean Architecture | Domain, adapters, presentation layers |

## License

MIT License - see [LICENSE](../../../LICENSE) for details.

## Links

- Repository: <https://github.com/newkub/task-tui>
- Homepage: <https://github.com/newkub/task-tui>
- Source: <https://github.com/newkub/task-tui/blob/main/apps/tui/task-tui/Cargo.toml>
