---
title: Quickstart
description: From clone to running site in under five minutes
---

# Quickstart

```bash
git clone git@github.com:wrikka/opensource-wrikka-com.git
cd opensource-wrikka-com
bun install
bun run pull-docs   # sibling checkouts under D:\newkub work without GITHUB_TOKEN
bun run dev         # http://localhost:5173
```

Done. Next: [Usage](usage.md) for deploy/search/translate, [Configuration](../references/configuration.md) for env vars.
