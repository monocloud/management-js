import { AccessTokenTypes } from './access-token-types';

/**
 * Create API Access Policy Actions Request: Action settings for an API Access Policy rule.
 * @export
 * @interface CreateApiAccessPolicyActionsRequest
 */
export interface CreateApiAccessPolicyActionsRequest {
  /**
   * Overrides whether access tokens are issued as self-contained JWTs or opaque reference tokens. When unset, the API resource default is used.
   * @type {AccessTokenTypes}
   * @memberof CreateApiAccessPolicyActionsRequest
   */
  access_token_type?: AccessTokenTypes | null;
  /**
   * Overrides the access token lifetime (in seconds). When unset, the API resource default is used.
   * @type {number}
   * @memberof CreateApiAccessPolicyActionsRequest
   */
  access_token_lifetime?: number | null;
  /**
   * Overrides whether access tokens issued for this resource may include additional audiences. When unset, the API resource default is used.
   * @note ScaleX subscription required to allow multi-audience tokens.
   * @type {boolean}
   * @memberof CreateApiAccessPolicyActionsRequest
   */
  allow_multi_audience?: boolean | null;
  /**
   * Overrides whether access tokens issued for this resource may include identity scopes and be used with identity endpoints such as UserInfo. When unset, the API resource default is used.
   * @note ScaleX subscription required to allow UserInfo access.
   * @type {boolean}
   * @memberof CreateApiAccessPolicyActionsRequest
   */
  allow_user_info_access?: boolean | null;
  /**
   * Overrides whether access tokens issued for this resource are bound to the user session and revoked when the session ends. When unset, the API resource default is used.
   * @note ScaleX subscription required to use session binding.
   * @type {boolean}
   * @memberof CreateApiAccessPolicyActionsRequest
   */
  bind_tokens_to_session?: boolean | null;
}
