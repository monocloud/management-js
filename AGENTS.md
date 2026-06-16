# AGENTS.md

Guidance for AI coding agents working on this repository. Human contributors may find it useful too.

## What this repo is

`management-js` is the **MonoCloud Management SDK for JavaScript / TypeScript** — a typed client for the MonoCloud Management API used to programmatically manage applications, users, groups, API resources, sign-in options, branding, logs, keys, trust stores, and network zones.

It's a **pnpm + Turborepo monorepo** publishing two npm packages:

| Package                       | Location             | Role                                                              |
| ----------------------------- | -------------------- | ----------------------------------------------------------------- |
| `@monocloud/management`       | `packages/management`| The public SDK consumers install.                                 |
| `@monocloud/management-core`  | `packages/core`      | Shared HTTP/serialization/exception plumbing the SDK is built on. |

`@monocloud/management` depends on `@monocloud/management-core` via `workspace:*`.

> This repo *produces* the SDK. For guidance on *consuming* it in an app, see the `monocloud-management-js` skill in [monocloud/agent-skills](https://github.com/monocloud/agent-skills) — don't duplicate consumer docs here. (The .NET sibling lives in `management-dotnet`.)

## Repository layout

```
packages/
  core/         → @monocloud/management-core (hand-written plumbing).  See packages/core/AGENTS.md
  management/   → @monocloud/management (public SDK).                  See packages/management/AGENTS.md
docs/ , docs-gen/   → TypeDoc API reference (generated; docs-gen/typedoc.mjs)
.changeset/         → Changesets release config (core + management are a `fixed` group)
turbo.json          → Turborepo task graph (build / lint:es / lint:ts / test)
pnpm-workspace.yaml → workspace globs (packages/*)
eslint.config.mjs, .prettierrc, .editorconfig → lint/format config
```

## Generated vs hand-written — read before editing `packages/management`

The bulk of `packages/management/src/models/*.ts` and `packages/management/src/clients/*.ts` is **generated from the MonoCloud Management API specification**, and is maintained upstream rather than by hand in this repo.

Implications:
- Treat `models/` and `clients/` as generated artifacts. Hand-edits there risk being overwritten on the next regeneration — prefer fixing the upstream spec/generator.
- The **hand-written** surface is: everything in `packages/core/src`, plus `monocloud-management-client.ts`, the barrel files (`src/index.ts`, `src/clients/index.ts`, `src/models/index.ts`), and the tests.
- Naming that looks "wrong" usually mirrors the API spec and must **not** be "corrected": file `users-api.ts` defines class `UsersClient`; the `.clients` property exposes `*Application*` methods (`getAllApplications`, …); model fields are **snake_case** (`user_id`, not `id`/`userId`) because they are the wire format.

## Common commands

Run from the repo root (Turborepo fans out to each package):

```bash
pnpm install
pnpm build        # turbo → tsdown per package (emits ESM + CJS + .d.ts into dist/)
pnpm test         # turbo → jest (+ eslint of tests) in @monocloud/management
pnpm lint         # turbo run lint:es -- --fix  &&  turbo run lint:ts (eslint, then tsc type-check)
pnpm gen:docs     # rimraf docs && typedoc → docs/
```

Target a single package with `pnpm --filter @monocloud/management <script>`. CI (`.github/workflows/build.yml`) builds on Node 22, then runs `pnpm lint` and the tests in parallel (both depend only on the build job); **run `pnpm lint` before committing** (it includes `--fix`, so commit any changes it makes).

## Toolchain

- **pnpm** `10.29.2` (`packageManager`); **Node** declared `>= 11` (`engines`), CI uses **Node 22**. The HTTP layer relies on a global `fetch` / `AbortSignal.timeout`, so a modern Node runtime is required at run time.
- **TypeScript** `5.9`, `strict` (plus `noUnusedLocals`/`noUnusedParameters`/`noImplicitReturns`/…), `target: ES6`, `module: commonjs`, `noEmit` — type-checking only; bundling is **tsdown**.
- **tsdown** builds each package to `dist/` as ESM (`.mjs`) + CJS (`.cjs`) + declarations. Dev resolves packages to `src/index.ts`; `publishConfig`/`main` point to `dist` for the published artifact.
- **jest** + **ts-jest** for tests, **nock** for HTTP mocking; **eslint** + **prettier** (+ `eslint-plugin-import`, `unused-imports`); **typedoc** for docs; **turbo** orchestrates.

## Code style

`.editorconfig` + Prettier + ESLint (enforced by `pnpm lint`):
- **2-space** indent, LF line endings, UTF-8, final newline, trim trailing whitespace.
- Prettier: **single quotes**, semicolons, `printWidth: 80`, `trailingComma: es5`, `arrowParens: avoid`.
- Model/request/response **fields are snake_case** to match the API wire format — keep them as-is.

## Versioning & release (Changesets)

- Every user-facing change needs a changeset: `pnpm changeset`.
- `@monocloud/management-core` and `@monocloud/management` are a **`fixed` group** — they always bump and publish together at the same version.
- Merging to `main` opens/updates a `changeset-release/main` PR; merging **that** PR builds and runs `changeset publish` to **npm** (public), then cuts a GitHub release with a combined core + management changelog.
- Commenting `!snapshot` on a PR publishes a `canary`-tagged build to npm.
- Don't bump versions by hand — Changesets owns `package.json` versions.

## Where to look next

- `packages/core/AGENTS.md` — the plumbing layer (what you actually edit by hand).
- `packages/management/AGENTS.md` — the public SDK: client/model conventions, the `init()` factory, adding endpoints, tests.
