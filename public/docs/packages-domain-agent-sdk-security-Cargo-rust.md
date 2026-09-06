# agent-sdk-security

## Overview

Security module for agent-sdk: audit log, crypto, RBAC, rate limiting

## Metadata

| Field | Value |
| --- | --- |
| Type | RUST |
| Category | Domain |
| Path | `packages/sdk/agents-sdk/security/Cargo.toml` |
| Version | `0.1.0` |
| Edition | `2021` |
| License | `MIT` |
| Repository | <https://github.com/wrikka/opensource-wrikka-com> |
| Keywords | security, rbac, audit, crypto, rate-limiting |

## Directory Structure

- 📄 `Cargo.toml`
- 📄 `README.md`
- 📁 `src`
- 📄 `src/audit.rs`
- 📄 `src/crypto.rs`
- 📄 `src/lib.rs`
- 📄 `src/rate_limit.rs`
- 📁 `src/rbac`

## Source Files

- `src/audit.rs`
- `src/crypto.rs`
- `src/lib.rs`
- `src/rate_limit.rs`
- `src/rbac/application/mod.rs`
- `src/rbac/application/usecases/mod.rs`
- `src/rbac/application/workflows/mod.rs`
- `src/rbac/domain/events/mod.rs`
- `src/rbac/domain/mod.rs`
- `src/rbac/domain/models/access_control.rs`
- `src/rbac/domain/models/context.rs`
- `src/rbac/domain/models/mod.rs`
- `src/rbac/domain/models/permission.rs`
- `src/rbac/domain/models/resource.rs`
- `src/rbac/domain/models/role.rs`
- `src/rbac/domain/models/system_role.rs`
- `src/rbac/domain/operations/mod.rs`
- `src/rbac/domain/validators/mod.rs`
- `src/rbac/middleware.rs`
- `src/rbac/mod.rs`
- `src/rbac/ports/mod.rs`
- `src/rbac/types/access.rs`
- `src/rbac/types/ids.rs`
- `src/rbac/types/mod.rs`

## Quick Start

### Build

```bash
cargo build -p agent-sdk-security
```

### Test

```bash
cargo test -p agent-sdk-security
```

### Run

```bash
cargo run -p agent-sdk-security
```

### Lint

```bash
cargo clippy -p agent-sdk-security
```

### Documentation

```bash
cargo doc -p agent-sdk-security --no-deps
```

## Environment

| Field | Value |
| --- | --- |
| Edition | `2021` |

## README

> ![Status](https://img.shields.io/badge/status-in_development-red)

# agent-sdk-security

Security module for agent-sdk — audit log, crypto/encryption, RBAC middleware, and rate limiting.

[![Rust](https://img.shields.io/badge/Rust-1.75%2B-orange)](https://www.rust-lang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

```text
┌─────────────────────────────────────────────────────────────────┐
│                      agent-sdk-security                         │
├──────────────┬──────────────────────────────────────────────────┤
│  audit       │  Audit logging                                   │
├──────────────┼──────────────────────────────────────────────────┤
│  crypto      │  Crypto · encryption                             │
├──────────────┼──────────────────────────────────────────────────┤
│  rbac        │  RBAC middleware                                 │
├──────────────┼──────────────────────────────────────────────────┤
│  rate_limit  │  Rate limiting                                   │
└──────────────┴──────────────────────────────────────────────────┘
```

## Get Started

1. Add to your `Cargo.toml`

   ```toml
   [dependencies]
   agent-sdk-security = { path = "packages/sdk/agents-sdk/security" }
   ```

2. Use the library — `Rust`

   ```rust
   use agent_sdk_security::*;
   ```

## Features

| Icon | Feature | Description |
|:---:|---------|-------------|
| ![icon](https://api.iconify.design/mdi:clipboard-list.svg?color=%231976d2&width=16) | Audit Log | Security audit logging |
| ![icon](https://api.iconify.design/mdi:lock.svg?color=%23388e3c&width=16) | Crypto | Encryption and crypto utilities |
| ![icon](https://api.iconify.design/mdi:account-key.svg?color=%23f57c00&width=16) | RBAC | Role-based access control middleware |
| ![icon](https://api.iconify.design/mdi:speedometer.svg?color=%237b1fa2&width=16) | Rate Limiting | Request rate limiting |

## License

MIT License - see [LICENSE](../../../../LICENSE) for details.

## Links

- Repository: <https://github.com/wrikka/opensource-wrikka-com>
- Source: <https://github.com/wrikka/opensource-wrikka-com/blob/main/packages/sdk/agents-sdk/security/Cargo.toml>
