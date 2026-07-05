import { BearerMethods } from './bearer-methods';
import { SigningAlgorithms } from './signing-algorithms';

/**
 * OAuth 2.0 Protected Resource Metadata (RFC 9728) configuration for an API resource. These settings drive the `/.well-known/oauth-protected-resource` document that the resource server hosts on its own origin, and the resource identifier advertised in the authorization server\'s `protected_resources` metadata.
 * @export
 * @interface ProtectedResourceMetadata
 */
export interface ProtectedResourceMetadata {
  /**
   * Enables Protected Resource Metadata for this API resource. When enabled, a metadata document can be generated for the resource server to host and the resource identifier can be advertised by the authorization server.
   * @type {boolean}
   * @memberof ProtectedResourceMetadata
   */
  enabled: boolean;
  /**
   * Human-readable name of the protected resource (RFC 9728 `resource_name`), displayed to end users during authorization.
   * @type {string}
   * @memberof ProtectedResourceMetadata
   */
  resource_name?: string | null;
  /**
   * Localized human-readable names of the protected resource, keyed by language tag. Each entry is emitted as a language-tagged `resource_name#&lt;lang&gt;` field (RFC 9728 §2) alongside the default `resource_name`.
   * @type {object}
   * @memberof ProtectedResourceMetadata
   */
  resource_name_translations?: object | null;
  /**
   * URL of human-readable documentation for developers using the protected resource (RFC 9728 `resource_documentation`).
   * @type {string}
   * @memberof ProtectedResourceMetadata
   */
  resource_documentation?: string | null;
  /**
   * URL of a page describing the protected resource\'s data-usage policy (RFC 9728 `resource_policy_uri`).
   * @type {string}
   * @memberof ProtectedResourceMetadata
   */
  resource_policy_uri?: string | null;
  /**
   * URL of the protected resource\'s terms of service (RFC 9728 `resource_tos_uri`).
   * @type {string}
   * @memberof ProtectedResourceMetadata
   */
  resource_tos_uri?: string | null;
  /**
   * URL of the protected resource\'s own JWK Set, used when the resource signs its responses (RFC 9728 `jwks_uri`). This is distinct from the authorization server\'s JWKS.
   * @type {string}
   * @memberof ProtectedResourceMetadata
   */
  jwks_uri?: string | null;
  /**
   * The methods the protected resource supports for receiving bearer access tokens (RFC 9728 `bearer_methods_supported`). Defaults to the `Authorization` header, which is the recommended method.
   * @type {BearerMethods[]}
   * @memberof ProtectedResourceMetadata
   */
  bearer_methods_supported: BearerMethods[];
  /**
   * JWS algorithms the protected resource uses to sign its responses (RFC 9728 `resource_signing_alg_values_supported`). The value `none` is never permitted.
   * @type {SigningAlgorithms[]}
   * @memberof ProtectedResourceMetadata
   */
  resource_signing_alg_values_supported: SigningAlgorithms[];
  /**
   * Authorization details type identifiers the protected resource supports (RFC 9396 / RFC 9728 `authorization_details_types_supported`).
   * @type {string[]}
   * @memberof ProtectedResourceMetadata
   */
  authorization_details_types_supported: string[];
  /**
   * Indicates whether the protected resource requires DPoP-bound access tokens (RFC 9449 `dpop_bound_access_tokens_required`). When unset, the field is omitted from the generated metadata document.
   * @note DPoP enforcement is configured per client; this advertises the resource\'s requirement to clients.
   * @type {boolean}
   * @memberof ProtectedResourceMetadata
   */
  dpop_bound_access_tokens_required?: boolean | null;
  /**
   * JWS algorithms the protected resource accepts for DPoP proofs (RFC 9449 `dpop_signing_alg_values_supported`).
   * @type {SigningAlgorithms[]}
   * @memberof ProtectedResourceMetadata
   */
  dpop_signing_alg_values_supported: SigningAlgorithms[];
  /**
   * Optional custom well-known path suffix at which the resource hosts its metadata document. Defaults to `oauth-protected-resource` when unset.
   * @type {string}
   * @memberof ProtectedResourceMetadata
   */
  well_known_suffix?: string | null;
  /**
   * Suggested `Cache-Control` max-age (in seconds) for the hosted metadata document (RFC 9728 §7.10).
   * @type {number}
   * @memberof ProtectedResourceMetadata
   */
  cache_max_age?: number | null;
  /**
   * Indicates whether the generated metadata document should additionally be issued as a signed JWS (RFC 9728 `signed_metadata`), using the tenant\'s signing key.
   * @note Signed metadata generation is not yet available and this flag is reserved for a future release.
   * @type {boolean}
   * @memberof ProtectedResourceMetadata
   */
  signed_metadata_enabled: boolean;
}
