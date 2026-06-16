# AGENTS.md — `@monocloud/management`

Scope: `packages/management`. Read the repo-root [AGENTS.md](../../AGENTS.md) and [packages/core/AGENTS.md](../core/AGENTS.md) first.

## What this package is

The **public SDK** consumers install (`@monocloud/management`). It composes the resource clients into one entry point (`MonoCloudManagementClient`) and re-exports the core types. Built on `@monocloud/management-core` (`workspace:*`).

## Layout

```
src/
  monocloud-management-client.ts → entry point: one property per resource client + static init() (hand-written)
  index.ts                       → public barrel; re-exports core types, clients, models (hand-written)
  clients/
    index.ts                     → barrel: export * from each *-api (hand-written)
    *-api.ts                     → one *Client per resource area              (GENERATED — see below)
  models/
    index.ts                     → barrel over every model (hand-written)
    *.ts                         → request/response/enum interfaces & types   (GENERATED — see below)
tests/sdk.spec.ts                → jest + nock
```

## Generated code — handle with care

`clients/*.ts` and `models/*.ts` are **generated from the MonoCloud Management API spec** and maintained upstream — not by hand in this repo.

- Don't hand-tune these for style/naming — changes get overwritten on regen. Fix the upstream spec/generator instead.
- Naming mirrors the API and is intentional: file `users-api.ts` → class `UsersClient`; `.clients` exposes `*Application*` methods; model fields are snake_case (`user_id`, not `id`). Don't "fix" these.
- The hand-written, safe-to-edit files are `monocloud-management-client.ts`, the three barrel `index.ts` files, and the tests.

## Conventions (so generated and hand-written code stay consistent)

- Every resource client `extends MonoCloudClientBase` and is constructed `(config, fetcher?)`.
- Each method builds a `MonoCloudRequest` (`{ method, url, queryParams?, body? }`) and returns `this.processRequest<T>(…)` → `Promise<MonoCloudResponse<T>>`, or `this.processPaginatedRequest<T>(…)` → `Promise<MonoCloudPageResponse<T>>` for lists.
- List methods share the `(page?, size?, filter?, sort?)` shape; each param is appended to `queryParams` only when defined.
- **Patch merge semantics** come from plain optional fields + `JSON.stringify`: a `Patch*`/`Update*` request interface marks every field optional (`field?: T | null`). Omit a key → not sent (server leaves it alone); set it → updated; set to `null` → removed. (There's no `Optional<T>` wrapper like the .NET SDK — `undefined` keys simply drop out of the JSON body.)

## Entry point & configuration — `MonoCloudManagementClient.init()`

The constructor is private; consumers call the static `init(options?, fetcher?)`. `init` merges explicit `options` over environment variables (options win):

| Env var                        | Option           | Notes                                  |
| ------------------------------ | ---------------- | -------------------------------------- |
| `MONOCLOUD_MANAGEMENT_DOMAIN`  | `domain`         | bare tenant URL (SDK appends `/api/`)  |
| `MONOCLOUD_MANAGEMENT_API_KEY` | `apiKey`         | management API key                     |
| `MONOCLOUD_MANAGEMENT_TIMEOUT` | `config.timeout` | per-request timeout in **milliseconds**|

An optional `fetcher` is threaded into every resource client — that's the test seam (and lets consumers swap the transport).

## Wiring a new resource client

If a new `clients/<area>-api.ts` (class `<Area>Client`) appears, hook it into:
1. `clients/index.ts` — add `export * from './<area>-api';` (keep alphabetical).
2. `monocloud-management-client.ts` — add a `public readonly <area>: <Area>Client;` property and initialize it in the constructor (passing `(options, fetcher)`), matching the existing alphabetical order.

It's then re-exported automatically via `export * from './clients'` in `src/index.ts`. New model files are picked up the same way through `models/index.ts`.

## Tests

- **jest** + **ts-jest**, with **nock** intercepting HTTP (no live calls). The package `test` script is `eslint tests && jest`. Run:
  ```bash
  pnpm --filter @monocloud/management test
  # or from the package dir: pnpm test
  ```
- `sdk.spec.ts` builds a client via `MonoCloudManagementClient.init({ domain, apiKey })` and sets up `nock('https://example.com')` expectations. It asserts serialization behavior (create sends only set fields, patch sends an explicit `null`, enum casing), `x-pagination` parsing, no-content/empty-body handling, and typed-exception mapping for problem+json responses. Add tests for new serialization/error behavior in this style; `nock`'s body matcher is how "only set fields are sent" is verified.

## Subscription-tier gotchas

Many endpoints and request fields work only on certain MonoCloud plans and return `MonoCloudForbiddenException` otherwise. The generated code annotates these with `@note …subscription…` JSDoc tags — **those notes are the source of truth; check them rather than trusting a hand-maintained list.** Examples:

- **ScaleX** — all `networkZones` endpoints, group↔application assignment (`assignGroupToApplication` / `removeGroupFromApplication`), API-secret creation, and feature fields such as session binding, multi-audience tokens, reference tokens, and extended refresh-token lifetimes.
- **Secure+** — consents (`enable_consent`), PAR, JAR, back-channel logout, and the `users` grant/token-management endpoints.
