# opensource-wrikka-com

SolidJS documentation site for the wrikka open-source monorepo — catalogs every workspace and renders generated markdown docs. Deployed on Cloudflare Workers at [opensource.wrikka.com](https://opensource.wrikka.com).

## Quick Start

```bash
bun install
bun run pull-docs   # fetch doc collections
bun run dev         # vite dev server
```

## Docs

Project documentation lives in [`docs/`](docs/index.md) — [overview](docs/project/overview.md), [features](docs/project/features.md), [architecture](docs/development/architecture.md), [configuration](docs/references/configuration.md).

> `docs/<collection>/`, `manifest.json`, and `sources.json` are **generated** by `bun run pull-docs` — never edit them directly; fix content in the source repos.
