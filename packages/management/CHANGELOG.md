# @monocloud/management

## 0.2.5

### Patch Changes

- 6c4d62e: Update management SDK models with consent settings and subscription tier notes
  - Add enable_consent field to Application, CreateApplicationRequest, and PatchApplicationRequest
  - Document subscription tier requirements (Secure+, Pro, ScaleX) across consent, PAR, channel logout, sign-up restrictions, and removeApplicationFromGroup
  - Remove immutable identifier fields from PATCH requests: audience (PatchApiResourceRequest) and name (PatchApiScopeRequest, PatchScopeRequest, PatchClaimResourceRequest)
  - @monocloud/management-core@0.2.5

## 0.2.4

### Patch Changes

- 4d4ff73: Refactored clients API
  - @monocloud/management-core@0.2.4

## 0.2.3

### Patch Changes

- 6184bbc: Add change password endpoint
  - @monocloud/management-core@0.2.3

## 0.2.2

### Patch Changes

- 9d5b5b6: - Refactor terminology: replace 'blacklist' with 'blocklist' and 'whitelist' with 'allowlist'
  - Added 'UsageThresholdReached' event code
  - Added IsSessionBound property
  - @monocloud/management-core@0.2.2

## 0.2.1

### Patch Changes

- Updated dependencies [dee26f6]
  - @monocloud/management-core@0.2.1

## 0.2.0

### Minor Changes

- 656b183: Version bump

### Patch Changes

- Updated dependencies [656b183]
  - @monocloud/management-core@0.2.0

## 0.1.5

### Patch Changes

- 3a40217: Version bump
- Updated dependencies [3a40217]
  - @monocloud/management-core@0.1.5

## 0.1.4

### Patch Changes

- 9d6da52: Combined Admin and Identity SDK
  - @monocloud/management-core@0.1.4
