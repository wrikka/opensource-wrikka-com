---
title: Changelog
description: Notable changes, summarized from git history
---

# Changelog

## Unreleased

- docs: project documentation in `docs/` (index, overview, features, guides, API, deployment, troubleshooting, FAQ) + `README.md`

## v0.2.x

- `chore` bump `@wrikka/create-docs` to 0.2.4 — home page 404 fix
- `chore` bump `@wrikka/create-docs` to 0.2.3 — lint + a11y fixes
- `feat` pull `rust-packages` docs, i18n folder merge, real translate pipeline (`translate.yml`)
- `feat` search page, translate UX, plugin catalog (create-docs 0.2.1)
- `deps` consume `@wrikka/create-docs` from npm (`^0.2.0`)

## Earlier

- `ci` deploy workflow (`deploy.yml`), `create-docs` source switch, bun-packages local path
- `refactor` pull docs from GitHub sources at build time via generic data source
- `feat` favicon assets, bundle chunking, DocContent id/label

> Generated from `git log` — see `git log --oneline` for the full history.
