/**
 * Username Identifier Options Response: Represents username sign-in and sign-up configuration.
 * @export
 * @interface UsernameIdentifierOptions
 */
export interface UsernameIdentifierOptions {
  /**
   * Specifies whether users can sign in using a username.
   * @type {boolean}
   * @memberof UsernameIdentifierOptions
   */
  enable_sign_in: boolean;
  /**
   * Specifies whether a username can be collected during sign-up.
   * @type {boolean}
   * @memberof UsernameIdentifierOptions
   */
  show_at_sign_up: boolean;
  /**
   * Specifies whether a username is required during sign-up.
   * @type {boolean}
   * @memberof UsernameIdentifierOptions
   */
  required_at_sign_up: boolean;
  /**
   * Specifies the minimum length required for the username.
   * @type {number}
   * @memberof UsernameIdentifierOptions
   */
  minimum_length: number;
}
