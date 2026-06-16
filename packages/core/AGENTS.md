# AGENTS.md — `@monocloud/management-core`

Scope: `packages/core`. Read the repo-root [AGENTS.md](../../AGENTS.md) first for build/style/release basics.

## What this package is

The shared, **hand-written** plumbing that the MonoCloud Management JS SDK is built on: the HTTP base client, the request/response models, the exception hierarchy + handler, and config. Package name `@monocloud/management-core`.

Unlike `packages/management`'s `models/` and `clients/`, **this package is not generated** — edit it directly and carefully, since changes here affect the entire SDK surface. Everything public is exported from `src/index.ts`; `@monocloud/management` re-exports a curated subset of it.

## Layout

```
src/
  base/
    monocloud-client-base.ts → abstract base for every resource client (fetch + processRequest)
    monocloud-config.ts      → MonoCloudConfig interface ({ domain, apiKey, config?: { timeout? } })
  models/
    monocloud-response.ts      → MonoCloudResponse (result / status / headers)
    monocloud-page-response.ts → MonoCloudPageResponse (+ pageData)
    page-model.ts              → pagination metadata (snake_case fields)
    monocloud-request.ts       → MonoCloudRequest (url / method / queryParams / body)
    fetcher.ts                 → Fetcher type — injectable HTTP transport
    problem-details.ts, identity-error.ts, *-problem-details.ts → RFC7807 error bodies
  exceptions/
    monocloud-exception.ts          → base (extends Error)
    monocloud-*-exception.ts        → one subclass per HTTP status
    monocloud-exception-handler.ts  → maps status → exception subclass
    validation-exception-types.ts
  index.ts → the package's public surface
```

## Key types and how they fit together

- **`MonoCloudClientBase`** (abstract) — base for every resource client. The constructor builds a default **`Fetcher`** from `MonoCloudConfig` (sets the `X-API-KEY` + `Content-Type: application/json` headers, a `{domain}/api/` base URL, and an `AbortSignal.timeout` defaulting to **10000 ms**), or accepts an injected `Fetcher` (this is the seam tests use). All requests go through `processRequest<T>` or `processPaginatedRequest<T>`, which build the URL, `JSON.stringify` the body, route non-2xx responses to the exception handler, and read the `x-pagination` header into `pageData`.
- **`Fetcher`** — `(input, init?) => Promise<Response>`. The default uses global `fetch`; injecting one lets tests/consumers swap the transport. Requires a `fetch`-capable runtime.
- **`MonoCloudResponse<T>`** (`result` / `status` / `headers`) and **`MonoCloudPageResponse<T>`** (adds `pageData`). The body property is **`result`**, status is **`status`** — keep these names; consumers and the skill depend on them.
- **Exceptions** — `MonoCloudException extends Error` is the base; `MonoCloudRequestException` carries `.response` (`ProblemDetails`). `MonoCloudExceptionHandler` has two paths: `ThrowProblemErr` (used for `application/problem+json` bodies) maps status → subclass and fans 422 out to identity-validation vs key-validation by the concrete `ProblemDetails` subtype; `ThrowErr` (used otherwise) maps status → subclass and produces `MonoCloudModelStateException` for 422. There is intentionally **no** `statusCode` field on the exceptions — branch on the subclass or read `.response?.status`.

## Constraints when editing

- Relies on global **`fetch`** / **`AbortSignal.timeout`** — don't introduce a Node-specific HTTP client; keep the `Fetcher` seam intact so transport stays injectable.
- `strict` TypeScript, `target: ES6`. Keep the public exports in `src/index.ts` stable — `@monocloud/management` imports from here, and consumers reach core types through that re-export (they shouldn't depend on `@monocloud/management-core` directly).
- Match the existing 2-space / single-quote / Prettier style; run `pnpm lint` before committing.
