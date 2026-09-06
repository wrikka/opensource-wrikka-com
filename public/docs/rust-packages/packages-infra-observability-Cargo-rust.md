# wrikka-observability

## Overview

Monitoring and telemetry tools with Clean Architecture

## Metadata

| Field | Value |
| --- | --- |
| Type | RUST |
| Category | Infra |
| Path | `packages/infra/observability/Cargo.toml` |
| Version | `0.1.0` |
| Edition | `2021` |
| Rust Version | `>= 1.70` |
| License | `MIT` |
| Repository | <https://github.com/wrikka/opensource-wrikka-com> |
| Homepage | <https://github.com/wrikka/opensource-wrikka-com> |
| Authors | Wrikka Team |
| Keywords | observability, logging, metrics, tracing |

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
- `src/domain/config_types.rs`
- `src/domain/data_types.rs`
- `src/domain/entities/attributes.rs`
- `src/domain/entities/config.rs`
- `src/domain/entities/context.rs`
- `src/domain/entities/data/instrumentation.rs`
- `src/domain/entities/data/mod.rs`
- `src/domain/entities/data/trace.rs`
- `src/domain/entities/enums.rs`
- `src/domain/entities/error.rs`
- `src/domain/entities/mod.rs`
- `src/domain/entities/resource.rs`
- `src/domain/entities/types.rs`
- `src/domain/errors/mod.rs`
- `src/domain/events/log_events.rs`
- `src/domain/events/metric_events.rs`
- `src/domain/events/mod.rs`
- `src/domain/interfaces/core_traits.rs`
- `src/domain/interfaces/data_traits.rs`
- `src/domain/interfaces/health_traits.rs`
- `src/domain/interfaces/lifecycle_traits.rs`
- `src/domain/interfaces/mod.rs`
- `src/domain/interfaces/processing_traits.rs`
- `src/domain/interfaces/registry_traits.rs`
- `src/domain/interfaces/traits.rs`
- `src/domain/mod.rs`
- `src/domain/models/entities.rs`
- `src/domain/models/mod.rs`
- `src/domain/models/value_objects.rs`
- `src/domain/operations/log_operations.rs`
- `src/domain/operations/metric_operations.rs`
- `src/domain/operations/mod.rs`
- `src/domain/services/context.rs`
- `src/domain/services/convert.rs`
- `src/domain/services/correlation.rs`
- `src/domain/services/filter.rs`
- `src/domain/services/format.rs`
- `src/domain/services/id.rs`

## Quick Start

### Build

```bash
cargo build -p wrikka-observability
```

### Test

```bash
cargo test -p wrikka-observability
```

### Run

```bash
cargo run -p wrikka-observability
```

### Lint

```bash
cargo clippy -p wrikka-observability
```

### Documentation

```bash
cargo doc -p wrikka-observability --no-deps
```

## Environment

| Field | Value |
| --- | --- |
| Edition | `2021` |
| Rust Version | `>= 1.70` |

## README

> ![Status](https://img.shields.io/badge/status-in_development-red)

# wrikka-observability

Monitoring and telemetry tools with Clean Architecture — logging, tracing, and metrics for applications.

[![Rust](https://img.shields.io/badge/Rust-1.75%2B-orange)](https://www.rust-lang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

```text
┌─────────────────────────────────────────────────────────────────┐
│                     wrikka-observability                        │
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
   wrikka-observability = { path = "packages/infra/observability" }
   ```

2. Use the library — `Rust`

   ```rust
   use wrikka_observability::application::services::*;
   ```

## Features

| Icon | Feature | Description |
|:---:|---------|-------------|
| ![icon](https://api.iconify.design/mdi:math-log.svg?color=%231976d2&width=16) | Logging | Structured logging support |
| ![icon](https://api.iconify.design/mdi:chart-timeline.svg?color=%23388e3c&width=16) | Tracing | Distributed tracing instrumentation |
| ![icon](https://api.iconify.design/mdi:chart-bar.svg?color=%23f57c00&width=16) | Metrics | Application metrics collection |
| ![icon](https://api.iconify.design/mdi:layers.svg?color=%237b1fa2&width=16) | Clean Architecture | Domain, application, and adapter layers |

## License

MIT License - see [LICENSE](../../../LICENSE) for details.

## Links

- Repository: <https://github.com/wrikka/opensource-wrikka-com>
- Homepage: <https://github.com/wrikka/opensource-wrikka-com>
- Source: <https://github.com/wrikka/opensource-wrikka-com/blob/main/packages/infra/observability/Cargo.toml>
