# agent-sdk-channels

## Overview

Communication channels for agent-sdk: Slack, WhatsApp, Email, reconnection

## Metadata

| Field | Value |
| --- | --- |
| Type | RUST |
| Category | Domain |
| Path | `packages/sdk/agents-sdk/channels/Cargo.toml` |
| Version | `0.1.0` |
| Edition | `2021` |
| License | `MIT` |
| Repository | <https://github.com/wrikka/opensource-wrikka-com> |
| Keywords | channels, slack, whatsapp, email, messaging |

## Directory Structure

- 📄 `Cargo.toml`
- 📄 `README.md`
- 📁 `src`
- 📁 `src/channel`
- 📄 `src/email.rs`
- 📄 `src/lib.rs`
- 📁 `src/modules`
- 📄 `src/slack.rs`
- 📄 `src/whatsapp.rs`

## Source Files

- `src/channel/mod.rs`
- `src/channel/reconnection.rs`
- `src/channel/types.rs`
- `src/email.rs`
- `src/lib.rs`
- `src/modules/channel/mod.rs`
- `src/modules/channel/reconnection.rs`
- `src/modules/channel/types.rs`
- `src/modules/discord/application/mod.rs`
- `src/modules/discord/domain/mod.rs`
- `src/modules/discord/mod.rs`
- `src/modules/discord/ports/mod.rs`
- `src/modules/email.rs`
- `src/modules/line/mod.rs`
- `src/modules/line/provider.rs`
- `src/modules/line/tests.rs`
- `src/modules/line/types.rs`
- `src/modules/mod.rs`
- `src/modules/slack.rs`
- `src/modules/sms/mod.rs`
- `src/modules/sms/provider.rs`
- `src/modules/sms/tests.rs`
- `src/modules/sms/types.rs`
- `src/modules/sms/webhook.rs`
- `src/modules/teams/mod.rs`
- `src/modules/teams/provider.rs`
- `src/modules/teams/tests.rs`
- `src/modules/teams/types.rs`
- `src/modules/telegram/application/mod.rs`
- `src/modules/telegram/domain/mod.rs`
- `src/modules/telegram/mod.rs`
- `src/modules/telegram/ports/mod.rs`
- `src/modules/webchat/mod.rs`
- `src/modules/webchat/provider.rs`
- `src/modules/webchat/tests.rs`
- `src/modules/webchat/types.rs`
- `src/modules/whatsapp.rs`
- `src/slack.rs`
- `src/whatsapp.rs`

## Quick Start

### Build

```bash
cargo build -p agent-sdk-channels
```

### Test

```bash
cargo test -p agent-sdk-channels
```

### Run

```bash
cargo run -p agent-sdk-channels
```

### Lint

```bash
cargo clippy -p agent-sdk-channels
```

### Documentation

```bash
cargo doc -p agent-sdk-channels --no-deps
```

## Environment

| Field | Value |
| --- | --- |
| Edition | `2021` |

## README

> ![Status](https://img.shields.io/badge/status-in_development-red)

# agent-sdk-channels

Communication channels for agent-sdk — channel abstraction with reconnection logic, Slack, WhatsApp, and Email channels.

[![Rust](https://img.shields.io/badge/Rust-1.75%2B-orange)](https://www.rust-lang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

```text
┌─────────────────────────────────────────────────────────────────┐
│                      agent-sdk-channels                         │
├──────────────┬──────────────────────────────────────────────────┤
│  channel     │  Channel abstraction · reconnection              │
├──────────────┼──────────────────────────────────────────────────┤
│  slack       │  Slack channel                                   │
├──────────────┼──────────────────────────────────────────────────┤
│  whatsapp    │  WhatsApp channel                                │
├──────────────┼──────────────────────────────────────────────────┤
│  email       │  Email channel                                   │
└──────────────┴──────────────────────────────────────────────────┘
```

## Get Started

1. Add to your `Cargo.toml`

   ```toml
   [dependencies]
   agent-sdk-channels = { path = "packages/sdk/agents-sdk/channels" }
   ```

2. Use the library — `Rust`

   ```rust
   use agent_sdk_channels::*;
   ```

## Features

| Icon | Feature | Description |
|:---:|---------|-------------|
| ![icon](https://api.iconify.design/mdi:slack.svg?color=%231976d2&width=16) | Slack | Slack channel integration |
| ![icon](https://api.iconify.design/mdi:whatsapp.svg?color=%23388e3c&width=16) | WhatsApp | WhatsApp channel integration |
| ![icon](https://api.iconify.design/mdi:email.svg?color=%23f57c00&width=16) | Email | Email channel integration |
| ![icon](https://api.iconify.design/mdi:refresh.svg?color=%237b1fa2&width=16) | Reconnection | Automatic channel reconnection |

## License

MIT License - see [LICENSE](../../../../LICENSE) for details.

## Links

- Repository: <https://github.com/wrikka/opensource-wrikka-com>
- Source: <https://github.com/wrikka/opensource-wrikka-com/blob/main/packages/sdk/agents-sdk/channels/Cargo.toml>
