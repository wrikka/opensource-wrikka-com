# database-tui

## Overview

Database explorer TUI app with clean architecture

## Metadata

| Field | Value |
| --- | --- |
| Type | RUST |
| Category | TUI Apps |
| Path | `apps/tui/database-tui/Cargo.toml` |
| Version | `0.1.0` |
| Edition | `2021` |
| Rust Version | `>= 1.70` |
| License | `MIT` |
| Repository | <https://github.com/newkub/database-tui> |
| Homepage | <https://github.com/newkub/database-tui> |
| Authors | Wrikka Team |
| Keywords | tui, database, sql, explorer |

## Directory Structure

- 📄 `Cargo.lock`
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
- 📁 `tests`
- 📄 `tests/db_integration.rs`

## Source Files

- `src/adapters/db.rs`
- `src/adapters/mod.rs`
- `src/lib.rs`
- `src/main.rs`
- `src/modules/database/application/mod.rs`
- `src/modules/database/application/usecase.rs`
- `src/modules/database/domain/mod.rs`
- `src/modules/database/domain/models/mod.rs`
- `src/modules/database/domain/models/query.rs`
- `src/modules/database/domain/operations/mod.rs`
- `src/modules/database/domain/operations/query.rs`
- `src/modules/database/domain/ports.rs`
- `src/modules/database/mod.rs`
- `src/modules/mod.rs`
- `src/presentation/mod.rs`
- `src/presentation/tui/app.rs`
- `src/presentation/tui/mod.rs`
- `src/shared/kernel/errors.rs`
- `src/shared/kernel/mod.rs`
- `src/shared/kernel/types.rs`
- `src/shared/mod.rs`

## Binaries

- `database-tui`

## Quick Start

### Build

```bash
cargo build -p database-tui
```

### Test

```bash
cargo test -p database-tui
```

### Run

```bash
cargo run -p database-tui
```

### Lint

```bash
cargo clippy -p database-tui
```

### Documentation

```bash
cargo doc -p database-tui --no-deps
```

## Environment

| Field | Value |
| --- | --- |
| Edition | `2021` |
| Rust Version | `>= 1.70` |

## README

> ![Status](https://img.shields.io/badge/status-in_development-red)

# database-tui

Database explorer TUI app with clean architecture — browse and query databases from the terminal.

[![Rust](https://img.shields.io/badge/Rust-1.75%2B-orange)](https://www.rust-lang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

```text
┌─────────────────────────────────────────────────────────────────┐
│                         database-tui                            │
├──────────────┬──────────────────────────────────────────────────┤
│  modules     │  Domain modules                                  │
├──────────────┼──────────────────────────────────────────────────┤
│  adapters    │  External adapters                               │
├──────────────┼──────────────────────────────────────────────────┤
│  presentation│  TUI app (DatabaseTuiApp)                        │
├──────────────┼──────────────────────────────────────────────────┤
│  shared      │  Shared kernel (ConnectionConfig)                │
└──────────────┴──────────────────────────────────────────────────┘
```

## Get Started

1. Configure the connection — loads `.env` if present

   ```bash
   export DATABASE_URL="postgres://user:pass@localhost:5432/db"
   export DATABASE_NAME="db"
   ```

2. Run the TUI

   ```bash
   cargo run -p database-tui
   ```

## Features

| Icon | Feature | Description |
|:---:|---------|-------------|
| ![icon](https://api.iconify.design/mdi:database.svg?color=%231976d2&width=16) | Database Explorer | Browse databases from the terminal |
| ![icon](https://api.iconify.design/mdi:cog.svg?color=%23388e3c&width=16) | Env Config | `DATABASE_URL` / `DATABASE_NAME` configuration |
| ![icon](https://api.iconify.design/mdi:layers.svg?color=%23f57c00&width=16) | Clean Architecture | Domain, adapters, presentation layers |

## License

MIT License - see [LICENSE](../../../LICENSE) for details.

## Links

- Repository: <https://github.com/newkub/database-tui>
- Homepage: <https://github.com/newkub/database-tui>
- Source: <https://github.com/newkub/database-tui/blob/main/apps/tui/database-tui/Cargo.toml>
