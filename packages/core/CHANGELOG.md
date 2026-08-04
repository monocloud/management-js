# @monocloud/management-core

## 0.3.0

### Minor Changes

- ca97c89: Exposed the error code the api reports as `errorCode` on the exceptions of the statuses that carry one (400, 402, 403, 404, 409), through a new `MonoCloudCodedException` base, typed `error_code` and `trace_id` on `ProblemDetails`, and added an overridable `throwProblem` seam to `MonoCloudClientBase` so an sdk can throw its own exception for the errors its api declares

## 0.2.11

## 0.2.10

### Patch Changes

- fe10e58: Updated SDKs to latest APIs

## 0.2.9

### Patch Changes

- 49e0579: CI fix release

## 0.2.8

## 0.2.7

## 0.2.6

## 0.2.5

## 0.2.4

## 0.2.3

## 0.2.2

## 0.2.1

### Patch Changes

- dee26f6: Fix exception handling for 403 status code by using MonoCloudForbiddenException

## 0.2.0

### Minor Changes

- 656b183: Version bump

## 0.1.5

### Patch Changes

- 3a40217: Version bump

## 0.1.4

## 0.1.3

### Patch Changes

- 23d39e4: Added Unused Imports Plugin for ESLint
- 10c4b1c: Admin - Added New Fields
- b6e9fbb: Identity - Added New Fields & Updated Descriptions

## 0.1.2

### Patch Changes

- 4d39fec: Changed Repository Url

## 0.1.1

### Patch Changes

- 9051170: Initial Release of the MonoCloud Management SDKs
