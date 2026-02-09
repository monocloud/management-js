/**
 * Patch Username Identifier Options Request: Used to update username sign-in and sign-up settings.
 * @export
 * @interface PatchUsernameIdentifierOptionsRequest
 */
export interface PatchUsernameIdentifierOptionsRequest {
  /**
   * Specifies whether users can sign in using a username.
   * @type {boolean}
   * @memberof PatchUsernameIdentifierOptionsRequest
   */
  enable_sign_in?: boolean;
  /**
   * Specifies whether a username can be collected during sign-up.
   * @type {boolean}
   * @memberof PatchUsernameIdentifierOptionsRequest
   */
  show_at_sign_up?: boolean;
  /**
   * Specifies whether a username is required during sign-up.
   * @type {boolean}
   * @memberof PatchUsernameIdentifierOptionsRequest
   */
  required_at_sign_up?: boolean;
  /**
   * Specifies the minimum length required for the username.
   * @type {number}
   * @memberof PatchUsernameIdentifierOptionsRequest
   */
  minimum_length?: number;
}
