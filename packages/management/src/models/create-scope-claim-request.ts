/**
 * Create Scope Claim Request: Creates a user claim that can be included in ID tokens and the `UserInfo` endpoint when the scope is granted.
 * @export
 * @interface CreateScopeClaimRequest
 */
export interface CreateScopeClaimRequest {
  /**
   * The name of the user claim granted by this scope.
   * @type {string}
   * @memberof CreateScopeClaimRequest
   */
  claim: string;
  /**
   * Indicates whether this claim is included in the issued ID token when the scope is granted.
   * @type {boolean}
   * @memberof CreateScopeClaimRequest
   */
  include_in_identity_token?: boolean;
  /**
   * Indicates whether this claim is returned by the `UserInfo` endpoint when the scope is granted.
   * @type {boolean}
   * @memberof CreateScopeClaimRequest
   */
  include_in_user_info?: boolean;
}
