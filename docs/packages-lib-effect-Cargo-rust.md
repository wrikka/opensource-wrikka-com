# wrikka-effect

## Overview

Merged effect system - core, HTTP and CLI bindings

## Metadata

| Field | Value |
| --- | --- |
| Type | RUST |
| Category | Foundation |
| Path | `packages/lib/effect/Cargo.toml` |
| Version | `0.1.0` |
| Edition | `2021` |
| Rust Version | `>= 1.70` |
| License | `MIT` |
| Repository | <https://github.com/wrikka/opensource-wrikka-com> |
| Authors | Wrikka Team |
| Keywords | effect, async, composition, cli, http |

## Directory Structure

- 📄 `Cargo.toml`
- 📁 `src`
- 📁 `src/effect_cli`
- 📁 `src/effect_core`
- 📁 `src/effect_http`
- 📄 `src/lib.rs`

## Source Files

- `src/effect_cli/mod.rs`
- `src/effect_cli/presentation/cli/commands.rs`
- `src/effect_cli/presentation/cli/handler.rs`
- `src/effect_cli/presentation/cli/mod.rs`
- `src/effect_cli/presentation/cli/results.rs`
- `src/effect_cli/presentation/events/events.rs`
- `src/effect_cli/presentation/events/handlers.rs`
- `src/effect_cli/presentation/events/mod.rs`
- `src/effect_cli/presentation/events/publisher.rs`
- `src/effect_cli/presentation/events/store.rs`
- `src/effect_cli/presentation/http/mod.rs`
- `src/effect_cli/presentation/mod.rs`
- `src/effect_core/application/mod.rs`
- `src/effect_core/application/use_cases/batch.rs`
- `src/effect_core/application/use_cases/cache.rs`
- `src/effect_core/application/use_cases/composition.rs`
- `src/effect_core/application/use_cases/configuration.rs`
- `src/effect_core/application/use_cases/execution.rs`
- `src/effect_core/application/use_cases/manage.rs`
- `src/effect_core/application/use_cases/mod.rs`
- `src/effect_core/application/use_cases/monitor.rs`
- `src/effect_core/application/use_cases/retry.rs`
- `src/effect_core/domain/errors/error_classifications.rs`
- `src/effect_core/domain/errors/error_context.rs`
- `src/effect_core/domain/errors/error_metrics.rs`
- `src/effect_core/domain/errors/error_types.rs`
- `src/effect_core/domain/errors/mod.rs`
- `src/effect_core/domain/mod.rs`
- `src/effect_core/domain/modules/batch/mod.rs`
- `src/effect_core/domain/modules/batch/models.rs`
- `src/effect_core/domain/modules/batch/operations.rs`
- `src/effect_core/domain/modules/batch/validators/batch_validators.rs`
- `src/effect_core/domain/modules/batch/validators/dependency_validators.rs`
- `src/effect_core/domain/modules/batch/validators/execution_validators.rs`
- `src/effect_core/domain/modules/batch/validators/mod.rs`
- `src/effect_core/domain/modules/batch/validators/parallel_validators.rs`
- `src/effect_core/domain/modules/batch/validators/resource_validators.rs`
- `src/effect_core/domain/modules/batch/validators/strategy_validators.rs`
- `src/effect_core/domain/modules/composition/mod.rs`
- `src/effect_core/domain/modules/composition/models.rs`

## Quick Start

### Build

```bash
cargo build -p wrikka-effect
```

### Test

```bash
cargo test -p wrikka-effect
```

### Run

```bash
cargo run -p wrikka-effect
```

### Lint

```bash
cargo clippy -p wrikka-effect
```

### Documentation

```bash
cargo doc -p wrikka-effect --no-deps
```

## Environment

| Field | Value |
| --- | --- |
| Edition | `2021` |
| Rust Version | `>= 1.70` |

## README

> This workspace does not have a `README.md` yet. Consider adding one to improve documentation.

## Links

- Repository: <https://github.com/wrikka/opensource-wrikka-com>
- Source: <https://github.com/wrikka/opensource-wrikka-com/blob/main/packages/lib/effect/Cargo.toml>
