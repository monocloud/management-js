/**
 * Scope Claim Response: Represents a user claim granted by a scope and included in the ID token or `UserInfo` endpoint.
 * @export
 * @interface ScopeClaim
 */
export interface ScopeClaim {
  /**
   * The name of the user claim granted by this scope.
   * @type {string}
   * @memberof ScopeClaim
   */
  claim: string;
  /**
   * Indicates whether this claim is included in the issued ID token when the scope is granted.
   * @type {boolean}
   * @memberof ScopeClaim
   */
  include_in_identity_token: boolean;
  /**
   * Indicates whether this claim is returned by the `UserInfo` endpoint when the scope is granted.
   * @type {boolean}
   * @memberof ScopeClaim
   */
  include_in_user_info: boolean;
}
