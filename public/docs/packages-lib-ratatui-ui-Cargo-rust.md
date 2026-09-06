# ratatui-ui

## Overview

A shadcn/ui-style design system for ratatui TUI apps

## Metadata

| Field | Value |
| --- | --- |
| Type | RUST |
| Category | TUI Lib |
| Path | `packages/lib/ratatui-ui/Cargo.toml` |
| Version | `0.1.0` |
| Edition | `2021` |
| Rust Version | `>= 1.70` |
| License | `MIT` |
| Repository | <https://github.com/wrikka/rust-packages> |
| Homepage | <https://github.com/wrikka/rust-packages> |
| Authors | Wrikka Team |
| Keywords | tui, ratatui, design-system, widgets, terminal |

## Directory Structure

- 📄 `Cargo.toml`
- 📄 `README.md`
- 📁 `src`
- 📄 `src/autocomplete.rs`
- 📄 `src/breadcrumbs.rs`
- 📄 `src/command_palette.rs`
- 📄 `src/confirm_dialog.rs`
- 📄 `src/diff_view.rs`
- 📄 `src/file_list_item.rs`
- 📄 `src/file_tree.rs`
- 📄 `src/footer.rs`
- 📄 `src/fuzzy_finder.rs`
- 📄 `src/gauge.rs`
- 📄 `src/header.rs`
- 📄 `src/help_modal.rs`
- 📄 `src/hover_tooltip.rs`
- 📄 `src/input.rs`
- 📄 `src/lib.rs`
- 📄 `src/list.rs`
- 📄 `src/loading_state.rs`
- 📄 `src/markdown_block.rs`
- 📄 `src/multi_column.rs`
- 📄 `src/panel.rs`
- 📄 `src/peek.rs`
- 📄 `src/popup.rs`
- 📄 `src/scrollable_text.rs`
- 📄 `src/sidebar.rs`
- 📄 `src/status_bar.rs`
- 📄 `src/status_line.rs`
- 📄 `src/table.rs`

## Source Files

- `src/autocomplete.rs`
- `src/breadcrumbs.rs`
- `src/command_palette.rs`
- `src/confirm_dialog.rs`
- `src/diff_view.rs`
- `src/file_list_item.rs`
- `src/file_tree.rs`
- `src/footer.rs`
- `src/fuzzy_finder.rs`
- `src/gauge.rs`
- `src/header.rs`
- `src/help_modal.rs`
- `src/hover_tooltip.rs`
- `src/input.rs`
- `src/lib.rs`
- `src/list.rs`
- `src/loading_state.rs`
- `src/markdown_block.rs`
- `src/multi_column.rs`
- `src/panel.rs`
- `src/peek.rs`
- `src/popup.rs`
- `src/scrollable_text.rs`
- `src/sidebar.rs`
- `src/status_bar.rs`
- `src/status_line.rs`
- `src/table.rs`
- `src/tabs.rs`
- `src/tab_bar.rs`
- `src/terminal_view.rs`
- `src/text.rs`
- `src/theme.rs`
- `src/toast.rs`
- `src/toast_manager.rs`

## Quick Start

### Build

```bash
cargo build -p ratatui-ui
```

### Test

```bash
cargo test -p ratatui-ui
```

### Run

```bash
cargo run -p ratatui-ui
```

### Lint

```bash
cargo clippy -p ratatui-ui
```

### Documentation

```bash
cargo doc -p ratatui-ui --no-deps
```

## Environment

| Field | Value |
| --- | --- |
| Edition | `2021` |
| Rust Version | `>= 1.70` |

## README

> ![Status](https://img.shields.io/badge/status-in_development-red)

# ratatui-ui

A `shadcn/ui`-style design system for [`ratatui`](https://github.com/ratatui/ratatui) terminal applications — reusable, theme-aware widgets: panels, text, lists, tabs, inputs, popups, toasts, tables, gauges, and more.

[![Rust](https://img.shields.io/badge/Rust-1.75%2B-orange)](https://www.rust-lang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

```text
┌─────────────────────────────────────────────────────────────────┐
│                         ratatui-ui                              │
├──────────────┬──────────────────────────────────────────────────┤
│  widgets     │  panel · list · tabs · table · gauge · input     │
├──────────────┼──────────────────────────────────────────────────┤
│  overlays    │  popup · toast · help_modal · confirm_dialog     │
├──────────────┼──────────────────────────────────────────────────┤
│  navigation  │  sidebar · breadcrumbs · command_palette         │
├──────────────┼──────────────────────────────────────────────────┤
│  theme       │  Theme-aware styling across all widgets          │
└──────────────┴──────────────────────────────────────────────────┘
```

## Get Started

1. Add to your `Cargo.toml`

   ```toml
   [dependencies]
   ratatui-ui = { path = "packages/lib/ratatui-ui" }
   ```

2. Use a widget — `Rust`

   ```rust
   use ratatui_ui::{Panel, CommandPalette, CommandItem};
   ```

## Features

| Icon | Feature | Description |
|:---:|---------|-------------|
| ![icon](https://api.iconify.design/mdi:widgets.svg?color=%231976d2&width=16) | 20+ Widgets | Panels, lists, tables, gauges, inputs, and more |
| ![icon](https://api.iconify.design/mdi:palette.svg?color=%237b1fa2&width=16) | Theme-Aware | Consistent theming across every widget |
| ![icon](https://api.iconify.design/mdi:layers-triple.svg?color=%23388e3c&width=16) | Overlays | Popups, toasts, help modals, confirm dialogs |
| ![icon](https://api.iconify.design/mdi:file-tree.svg?color=%23f57c00&width=16) | Navigation | Sidebar, breadcrumbs, file tree, fuzzy finder |
| ![icon](https://api.iconify.design/mdi:console.svg?color=%230097a7&width=16) | Terminal View | Embedded terminal view widget |

## License

MIT License - see [LICENSE](../../../LICENSE) for details.

## Links

- Repository: <https://github.com/wrikka/rust-packages>
- Homepage: <https://github.com/wrikka/rust-packages>
- Source: <https://github.com/wrikka/rust-packages/blob/main/packages/lib/ratatui-ui/Cargo.toml>
