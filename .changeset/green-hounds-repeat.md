---
'@monocloud/management-core': minor
---

Exposed the error code the api reports as `errorCode` on the exceptions of the statuses that carry one (400, 402, 403, 404, 409), through a new `MonoCloudCodedException` base, typed `error_code` and `trace_id` on `ProblemDetails`, and added an overridable `throwProblem` seam to `MonoCloudClientBase` so an sdk can throw its own exception for the errors its api declares
