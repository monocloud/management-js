import { AccessTokenTypes } from './access-token-types';

/**
 * Patch API Access Policy Actions Request: Used to partially update action settings for an API access policy.
 * @export
 * @interface PatchApiAccessPolicyActionsRequest
 */
export interface PatchApiAccessPolicyActionsRequest {
  /**
   * Overrides whether access tokens are issued as self-contained JWTs or opaque reference tokens. When unset, the API resource default is used.
   * @note ScaleX subscription required to use reference tokens. Reference tokens improve revocation control and reduce token exposure, but require protected resources to use token introspection.
   * @type {AccessTokenTypes}
   * @memberof PatchApiAccessPolicyActionsRequest
   */
  access_token_type?: AccessTokenTypes | null;
  /**
   * Overrides the access token lifetime (in seconds). When unset, the API resource default is used.
   * @type {number}
   * @memberof PatchApiAccessPolicyActionsRequest
   */
  access_token_lifetime?: number | null;
  /**
   * Overrides whether access tokens issued for this resource may include additional audiences. When unset, the API resource default is used.
   * @note ScaleX subscription required to allow multi-audience tokens.
   * @type {boolean}
   * @memberof PatchApiAccessPolicyActionsRequest
   */
  allow_multi_audience?: boolean | null;
  /**
   * Overrides whether access tokens issued for this resource may include identity scopes and be used with identity endpoints such as UserInfo. When unset, the API resource default is used.
   * @note ScaleX subscription required to allow UserInfo access.
   * @type {boolean}
   * @memberof PatchApiAccessPolicyActionsRequest
   */
  allow_user_info_access?: boolean | null;
  /**
   * Overrides whether access tokens issued for this resource are bound to the user session and revoked when the session ends. When unset, the API resource default is used.
   * @note ScaleX subscription required to use session binding.
   * @type {boolean}
   * @memberof PatchApiAccessPolicyActionsRequest
   */
  bind_tokens_to_session?: boolean | null;
}
