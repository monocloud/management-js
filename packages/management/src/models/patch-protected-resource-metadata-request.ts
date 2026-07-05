import { BearerMethods } from './bearer-methods';
import { SigningAlgorithms } from './signing-algorithms';

/**
 * Request body for updating the OAuth 2.0 Protected Resource Metadata (RFC 9728) configuration of an API resource. When supplied, the entire configuration object is replaced.
 * @export
 * @interface PatchProtectedResourceMetadataRequest
 */
export interface PatchProtectedResourceMetadataRequest {
  /**
   * Enables Protected Resource Metadata for this API resource. When enabled, a metadata document can be generated for the resource server to host and the resource identifier can be advertised by the authorization server.
   * @type {boolean}
   * @memberof PatchProtectedResourceMetadataRequest
   */
  enabled?: boolean;
  /**
   * Human-readable name of the protected resource (RFC 9728 `resource_name`), displayed to end users during authorization.
   * @type {string}
   * @memberof PatchProtectedResourceMetadataRequest
   */
  resource_name?: string | null;
  /**
   * Localized human-readable names of the protected resource, keyed by language tag. Each entry is emitted as a language-tagged `resource_name#&lt;lang&gt;` field (RFC 9728 §2) alongside the default `resource_name`.
   * @type {object}
   * @memberof PatchProtectedResourceMetadataRequest
   */
  resource_name_translations?: object | null;
  /**
   * URL of human-readable documentation for developers using the protected resource (RFC 9728 `resource_documentation`).
   * @type {string}
   * @memberof PatchProtectedResourceMetadataRequest
   */
  resource_documentation?: string | null;
  /**
   * URL of a page describing the protected resource\'s data-usage policy (RFC 9728 `resource_policy_uri`).
   * @type {string}
   * @memberof PatchProtectedResourceMetadataRequest
   */
  resource_policy_uri?: string | null;
  /**
   * URL of the protected resource\'s terms of service (RFC 9728 `resource_tos_uri`).
   * @type {string}
   * @memberof PatchProtectedResourceMetadataRequest
   */
  resource_tos_uri?: string | null;
  /**
   * URL of the protected resource\'s own JWK Set, used when the resource signs its responses (RFC 9728 `jwks_uri`). This is distinct from the authorization server\'s JWKS.
   * @type {string}
   * @memberof PatchProtectedResourceMetadataRequest
   */
  jwks_uri?: string | null;
  /**
   * The methods the protected resource supports for receiving bearer access tokens (RFC 9728 `bearer_methods_supported`). Defaults to the `Authorization` header, which is the recommended method.
   * @type {BearerMethods[]}
   * @memberof PatchProtectedResourceMetadataRequest
   */
  bearer_methods_supported?: BearerMethods[];
  /**
   * JWS algorithms the protected resource uses to sign its responses (RFC 9728 `resource_signing_alg_values_supported`). The value `none` is never permitted.
   * @type {SigningAlgorithms[]}
   * @memberof PatchProtectedResourceMetadataRequest
   */
  resource_signing_alg_values_supported?: SigningAlgorithms[];
  /**
   * Authorization details type identifiers the protected resource supports (RFC 9396 / RFC 9728 `authorization_details_types_supported`).
   * @type {string[]}
   * @memberof PatchProtectedResourceMetadataRequest
   */
  authorization_details_types_supported?: string[];
  /**
   * Indicates whether the protected resource requires DPoP-bound access tokens (RFC 9449 `dpop_bound_access_tokens_required`). When unset, the field is omitted from the generated metadata document.
   * @note DPoP enforcement is configured per client; this advertises the resource\'s requirement to clients.
   * @type {boolean}
   * @memberof PatchProtectedResourceMetadataRequest
   */
  dpop_bound_access_tokens_required?: boolean | null;
  /**
   * JWS algorithms the protected resource accepts for DPoP proofs (RFC 9449 `dpop_signing_alg_values_supported`).
   * @type {SigningAlgorithms[]}
   * @memberof PatchProtectedResourceMetadataRequest
   */
  dpop_signing_alg_values_supported?: SigningAlgorithms[];
  /**
   * Optional custom well-known path suffix at which the resource hosts its metadata document. Defaults to `oauth-protected-resource` when unset.
   * @type {string}
   * @memberof PatchProtectedResourceMetadataRequest
   */
  well_known_suffix?: string | null;
  /**
   * Suggested `Cache-Control` max-age (in seconds) for the hosted metadata document (RFC 9728 §7.10).
   * @type {number}
   * @memberof PatchProtectedResourceMetadataRequest
   */
  cache_max_age?: number | null;
  /**
   * Indicates whether the generated metadata document should additionally be issued as a signed JWS (RFC 9728 `signed_metadata`), using the tenant\'s signing key.
   * @note Signed metadata generation is not yet available and this flag is reserved for a future release.
   * @type {boolean}
   * @memberof PatchProtectedResourceMetadataRequest
   */
  signed_metadata_enabled?: boolean;
}
