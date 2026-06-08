import { AccessTokenTypes } from './access-token-types';

/**
 * API Access Policy Actions Response: Represents the action settings applied when an API access policy rule matches.
 * @export
 * @interface ApiAccessPolicyActions
 */
export interface ApiAccessPolicyActions {
  /**
   * Overrides whether access tokens are issued as self-contained JWTs or opaque reference tokens. When unset, the API resource default is used.
   * @type {AccessTokenTypes}
   * @memberof ApiAccessPolicyActions
   */
  access_token_type?: AccessTokenTypes | null;
  /**
   * Overrides the access token lifetime (in seconds). When unset, the API resource default is used.
   * @type {number}
   * @memberof ApiAccessPolicyActions
   */
  access_token_lifetime?: number | null;
  /**
   * Overrides whether access tokens issued for this resource may include additional audiences. When unset, the API resource default is used.
   * @note ScaleX subscription required to allow multi-audience tokens.
   * @type {boolean}
   * @memberof ApiAccessPolicyActions
   */
  allow_multi_audience?: boolean | null;
  /**
   * Overrides whether access tokens issued for this resource may include identity scopes and be used with identity endpoints such as UserInfo. When unset, the API resource default is used.
   * @note ScaleX subscription required to allow UserInfo access.
   * @type {boolean}
   * @memberof ApiAccessPolicyActions
   */
  allow_user_info_access?: boolean | null;
  /**
   * Overrides whether access tokens issued for this resource are bound to the user session and revoked when the session ends. When unset, the API resource default is used.
   * @note ScaleX subscription required to use session binding.
   * @type {boolean}
   * @memberof ApiAccessPolicyActions
   */
  bind_tokens_to_session?: boolean | null;
}
