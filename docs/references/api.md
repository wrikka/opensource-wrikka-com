---
title: API Reference
description: oRPC procedures exposed by the Worker — src/server/router.ts
---

# API Reference

All procedures live under `docs.*` in `src/server/router.ts`, served at `/rpc/*` by `src/worker.ts`. Client: `src/lib/orpc.ts` (typed, end-to-end). All inputs are `zod`-validated; errors are `ORPCError`s (`NOT_FOUND`, `INTERNAL_SERVER_ERROR`, `PRECONDITION_FAILED`).

## Procedures

| No. | Procedure | Input | Returns | Errors |
|-----|-----------|-------|---------|--------|
| 1 | `docs.collections` | — | `CollectionMeta[]` (id, label, icon, description, repoUrl) | `INTERNAL_SERVER_ERROR` (manifest fetch) |
| 2 | `docs.list` | `{ collection: string }` | `DocEntry[]` (id, label, category, description, path, type) | `INTERNAL_SERVER_ERROR` |
| 3 | `docs.get` | `{ collection, id }` | `{ id, label, content }` — markdown text | `NOT_FOUND` (missing doc or asset) |
| 4 | `docs.search` | `{ q: string (1–200), collection? }` | `SearchResult[]` (≤20, score-sorted) | `INTERNAL_SERVER_ERROR` (no index) |
| 5 | `docs.ask` | `{ collection, id, question (1–2000) }` | `{ answer: string }` | `PRECONDITION_FAILED` (no `AI` binding), `NOT_FOUND` |

## Types

```ts
interface CollectionMeta { id; label; icon; description; repoUrl? }
interface DocEntry { id; label; category; description; path; type: "rust" | "npm" }
interface SearchResult { collection; id; title; snippet; score }
```

## Implementation Notes

- `manifest.json` is fetched once per isolate via `assets.fetch` and cached (`manifestPromise`) — reset on failure
- `docs.search` reads `search-index.json` and scores: exact title +20, title includes +10, headings +4, body count ≤5 per term
- `docs.ask` truncates the doc to 24 000 chars and calls `@cf/meta/llama-3.3-70b-instruct-fp8-fast` with a doc-only system prompt, `max_tokens: 1024`
