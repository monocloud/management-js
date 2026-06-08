import { AccessTokenTypes } from './access-token-types';

/**
 * Patch API Resource Request: Used to update one or more properties of an existing API resource.
 * @export
 * @interface PatchApiResourceRequest
 */
export interface PatchApiResourceRequest {
  /**
   * Indicates whether the resource is enabled.
   * @type {boolean}
   * @memberof PatchApiResourceRequest
   */
  enabled?: boolean;
  /**
   * Human-readable display name for the resource.
   * @type {string}
   * @memberof PatchApiResourceRequest
   */
  display_name?: string | null;
  /**
   * Description that explains the purpose of the resource.
   * @type {string}
   * @memberof PatchApiResourceRequest
   */
  description?: string | null;
  /**
   * Specifies whether access tokens issued for this resource may carry additional audiences beyond this resource.
   * @note ScaleX subscription required to allow multi-audience tokens.
   * @type {boolean}
   * @memberof PatchApiResourceRequest
   */
  allow_multi_audience?: boolean;
  /**
   * Specifies whether access tokens issued for this resource may include identity scopes, allowing them to be used with identity-related endpoints such as `UserInfo`.
   * @note ScaleX subscription required to allow UserInfo access.
   * @type {boolean}
   * @memberof PatchApiResourceRequest
   */
  allow_user_info_access?: boolean;
  /**
   * List of user claim types that will be embedded into access tokens issued for this API resource.
   * @type {string[]}
   * @memberof PatchApiResourceRequest
   */
  user_claims?: string[];
  /**
   * Default access token type for this API resource. Used when no matching API access policy provides an override.
   * @note ScaleX subscription required to use reference tokens. Reference tokens improve revocation control and reduce exposure risk, but require token introspection by protected resources.
   * @type {AccessTokenTypes}
   * @memberof PatchApiResourceRequest
   */
  access_token_type?: AccessTokenTypes;
  /**
   * Default access token lifetime (in seconds) for this API resource. Used when no matching API access policy provides an override.
   * @type {number}
   * @memberof PatchApiResourceRequest
   */
  access_token_lifetime?: number;
  /**
   * Default value for whether access tokens issued for this API resource are bound to the user session, causing them to be revoked when the session ends. Used when no matching API access policy provides an override.
   * @note ScaleX subscription required to use session binding.
   * @type {boolean}
   * @memberof PatchApiResourceRequest
   */
  bind_tokens_to_session?: boolean;
  /**
   * Determines whether access tokens issued for this API resource include a unique token identifier (jti).
   * @note Recommended for auditing, correlation, and replay-detection.
   * @type {boolean}
   * @memberof PatchApiResourceRequest
   */
  include_jwt_id?: boolean;
}
