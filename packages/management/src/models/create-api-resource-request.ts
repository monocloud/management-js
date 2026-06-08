import { AccessTokenTypes } from './access-token-types';

/**
 * Create API Resource Request: Creates a protected backend or service.
 * @export
 * @interface CreateApiResourceRequest
 */
export interface CreateApiResourceRequest {
  /**
   * Indicates whether the resource is enabled.
   * @type {boolean}
   * @memberof CreateApiResourceRequest
   */
  enabled?: boolean;
  /**
   * Human-readable display name for the resource.
   * @type {string}
   * @memberof CreateApiResourceRequest
   */
  display_name?: string | null;
  /**
   * Description that explains the purpose of the resource.
   * @type {string}
   * @memberof CreateApiResourceRequest
   */
  description?: string | null;
  /**
   * Audience value that will be included in issued access tokens for this API resource.
   * @type {string}
   * @memberof CreateApiResourceRequest
   */
  audience: string;
  /**
   * Default value for whether access tokens issued for this API resource may carry additional audiences beyond this resource. Used when no matching API access policy provides an override.
   * @note ScaleX subscription required to allow multi-audience tokens.
   * @type {boolean}
   * @memberof CreateApiResourceRequest
   */
  allow_multi_audience?: boolean;
  /**
   * Default value for whether access tokens issued for this API resource may include identity scopes, allowing them to be used with identity-related endpoints such as `UserInfo`. Used when no matching API access policy provides an override.
   * @note ScaleX subscription required to allow UserInfo access.
   * @type {boolean}
   * @memberof CreateApiResourceRequest
   */
  allow_user_info_access?: boolean;
  /**
   * Default access token type for this API resource. Used when no matching API access policy provides an override.
   * @type {AccessTokenTypes}
   * @memberof CreateApiResourceRequest
   */
  access_token_type?: AccessTokenTypes;
  /**
   * Default access token lifetime (in seconds) for this API resource. Used when no matching API access policy provides an override.
   * @type {number}
   * @memberof CreateApiResourceRequest
   */
  access_token_lifetime?: number;
  /**
   * Default value for whether access tokens issued for this API resource are bound to the user session, causing them to be revoked when the session ends. Used when no matching API access policy provides an override.
   * @note ScaleX subscription required to use session binding.
   * @type {boolean}
   * @memberof CreateApiResourceRequest
   */
  bind_tokens_to_session?: boolean;
  /**
   * Determines whether access tokens issued for this API resource include a unique token identifier (jti).
   * @note Recommended for auditing, correlation, and replay-detection.
   * @type {boolean}
   * @memberof CreateApiResourceRequest
   */
  include_jwt_id?: boolean;
  /**
   * List of user claim types that will be embedded into access tokens issued for this API resource.
   * @type {string[]}
   * @memberof CreateApiResourceRequest
   */
  user_claims?: string[];
  /**
   * Automatically generates a secure secret when the API resource is created. This secret is used by the resource to authenticate when performing token introspection.
   * @note ScaleX subscription required to generate API secrets.
   * @type {boolean}
   * @memberof CreateApiResourceRequest
   */
  auto_generate_secret?: boolean;
}
