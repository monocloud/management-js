---
"@monocloud/management-core": minor
"@monocloud/management": patch
---

Add cancellable server-sent event iteration to the shared client runtime. Events preserve their names, text payloads, and IDs. Aborting the supplied signal or breaking the loop closes the stream, and server EOF ends iteration without reconnecting. Streaming requests reuse existing HTTP error mapping and do not inherit the ordinary JSON request timeout.

Preserve request headers and caller-provided cancellation signals in the default fetcher so streaming requests work through the existing transport abstraction.

Update development dependencies across both packages, upgrade pnpm to 12.6.0, and migrate the TypeScript 6 configuration to Node16 module resolution.
