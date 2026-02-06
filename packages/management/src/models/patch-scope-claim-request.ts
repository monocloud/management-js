/**
 * Patch Scope Claim Request: Used to update a user claim that can be included in ID tokens and the `UserInfo` endpoint when the scope is granted.
 * @export
 * @interface PatchScopeClaimRequest
 */
export interface PatchScopeClaimRequest {
  /**
   * The name of the user claim granted by this scope.
   * @type {string}
   * @memberof PatchScopeClaimRequest
   */
  claim: string;
  /**
   * Indicates whether this claim is included in the issued ID token when the scope is granted.
   * @type {boolean}
   * @memberof PatchScopeClaimRequest
   */
  include_in_identity_token?: boolean;
  /**
   * Indicates whether this claim is returned by the `UserInfo` endpoint when the scope is granted.
   * @type {boolean}
   * @memberof PatchScopeClaimRequest
   */
  include_in_user_info?: boolean;
}
