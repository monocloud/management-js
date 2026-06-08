import { AccessTokenTypes } from './access-token-types';

/**
 * API Resource Response: Represents a protected API resource and its access-token issuance configuration.
 * @export
 * @interface ApiResource
 */
export interface ApiResource {
  /**
   * The unique identifier of the resource.
   * @type {string}
   * @memberof ApiResource
   */
  id: string;
  /**
   * Indicates whether the resource is enabled.
   * @type {boolean}
   * @memberof ApiResource
   */
  enabled: boolean;
  /**
   * Human-readable display name for the resource.
   * @type {string}
   * @memberof ApiResource
   */
  display_name?: string | null;
  /**
   * Description that explains the purpose of the resource.
   * @type {string}
   * @memberof ApiResource
   */
  description?: string | null;
  /**
   * Specifies the creation time of the resource (in Epoch).
   * @type {number}
   * @memberof ApiResource
   */
  creation_time: number;
  /**
   * Specifies the last update time of the resource (in Epoch).
   * @type {number}
   * @memberof ApiResource
   */
  last_updated: number;
  /**
   * Audience value that will be included in issued access tokens for this API resource.
   * @type {string}
   * @memberof ApiResource
   */
  audience: string;
  /**
   * Default value for whether access tokens issued for this API resource may carry additional audiences beyond this resource. Used when no matching API access policy provides an override.
   * @note ScaleX subscription required to allow multi-audience tokens.
   * @type {boolean}
   * @memberof ApiResource
   */
  allow_multi_audience: boolean;
  /**
   * Default value for whether access tokens issued for this API resource may include identity scopes, allowing them to be used with identity-related endpoints such as `UserInfo`. Used when no matching API access policy provides an override.
   * @note ScaleX subscription required to allow UserInfo access.
   * @type {boolean}
   * @memberof ApiResource
   */
  allow_user_info_access: boolean;
  /**
   * Default access token type for this API resource. Used when no matching API access policy provides an override.
   * @type {AccessTokenTypes}
   * @memberof ApiResource
   */
  access_token_type: AccessTokenTypes;
  /**
   * Default access token lifetime (in seconds) for this API resource. Used when no matching API access policy provides an override.
   * @type {number}
   * @memberof ApiResource
   */
  access_token_lifetime: number;
  /**
   * Default value for whether access tokens issued for this API resource are bound to the user session, causing them to be revoked when the session ends. Used when no matching API access policy provides an override.
   * @note ScaleX subscription required to use session binding.
   * @type {boolean}
   * @memberof ApiResource
   */
  bind_tokens_to_session: boolean;
  /**
   * Determines whether access tokens issued for this API resource include a unique token identifier (jti).
   * @note Recommended for auditing, correlation, and replay-detection.
   * @type {boolean}
   * @memberof ApiResource
   */
  include_jwt_id: boolean;
  /**
   * List of user claim types that will be embedded into access tokens issued for this API resource.
   * @type {string[]}
   * @memberof ApiResource
   */
  user_claims: string[];
}
