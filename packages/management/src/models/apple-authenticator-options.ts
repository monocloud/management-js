/**
 * Apple Authenticator Options Response: Represents the Sign in with Apple authentication configuration.
 * @export
 * @interface AppleAuthenticatorOptions
 */
export interface AppleAuthenticatorOptions {
  /**
   * Specifies whether users can sign in using this external identity provider.
   * @type {boolean}
   * @memberof AppleAuthenticatorOptions
   */
  enable_sign_in: boolean;
  /**
   * Specifies whether new users can sign up using this external identity provider.
   * @type {boolean}
   * @memberof AppleAuthenticatorOptions
   */
  enable_sign_up: boolean;
  /**
   * Specifies whether MonoCloud-managed client credentials should be used to authenticate with the external identity provider.
   * @type {boolean}
   * @memberof AppleAuthenticatorOptions
   */
  use_internal_keys: boolean;
  /**
   * Specifies whether the user profile should be synchronized from the external provider on each successful sign-in.
   * @type {boolean}
   * @memberof AppleAuthenticatorOptions
   */
  sync_user_profile_always: boolean;
  /**
   * The client identifier issued by the external identity provider.
   * @type {string}
   * @memberof AppleAuthenticatorOptions
   */
  client_id?: string | null;
  /**
   * The client secret issued by the external identity provider.
   * @type {string}
   * @memberof AppleAuthenticatorOptions
   */
  client_secret?: string | null;
  /**
   * The set of scopes requested from the external identity provider during authentication.
   * @type {string[]}
   * @memberof AppleAuthenticatorOptions
   */
  scopes: string[];
  /**
   * Specifies whether the `email_verified` claim from Apple is trusted.
   * @note When enabled, MonoCloud skips email verification if Apple reports the email as verified.
   * @type {boolean}
   * @memberof AppleAuthenticatorOptions
   */
  trust_email_verified_scope: boolean;
  /**
   * The Apple Developer Team ID associated with the Sign in with Apple configuration.
   * @type {string}
   * @memberof AppleAuthenticatorOptions
   */
  team_id?: string | null;
  /**
   * The Apple Key ID used to sign the client secret for Sign in with Apple.
   * @type {string}
   * @memberof AppleAuthenticatorOptions
   */
  key_id?: string | null;
}
