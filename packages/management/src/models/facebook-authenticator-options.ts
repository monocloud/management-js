/**
 * Facebook Authenticator Options Response: Represents the Sign in with Facebook authentication configuration.
 * @export
 * @interface FacebookAuthenticatorOptions
 */
export interface FacebookAuthenticatorOptions {
  /**
   * Specifies whether users can sign in using this external identity provider.
   * @type {boolean}
   * @memberof FacebookAuthenticatorOptions
   */
  enable_sign_in: boolean;
  /**
   * Specifies whether new users can sign up using this external identity provider.
   * @type {boolean}
   * @memberof FacebookAuthenticatorOptions
   */
  enable_sign_up: boolean;
  /**
   * Specifies whether MonoCloud-managed client credentials should be used to authenticate with the external identity provider.
   * @type {boolean}
   * @memberof FacebookAuthenticatorOptions
   */
  use_internal_keys: boolean;
  /**
   * Specifies whether the user profile should be synchronized from the external provider on each successful sign-in.
   * @type {boolean}
   * @memberof FacebookAuthenticatorOptions
   */
  sync_user_profile_always: boolean;
  /**
   * The client identifier issued by the external identity provider.
   * @type {string}
   * @memberof FacebookAuthenticatorOptions
   */
  client_id?: string | null;
  /**
   * The client secret issued by the external identity provider.
   * @type {string}
   * @memberof FacebookAuthenticatorOptions
   */
  client_secret?: string | null;
  /**
   * The set of scopes requested from the external identity provider during authentication.
   * @type {string[]}
   * @memberof FacebookAuthenticatorOptions
   */
  scopes: string[];
  /**
   * Specifies whether email addresses returned by Facebook should be treated as verified.
   * @note Facebook does not provide an explicit email verification claim. When enabled, MonoCloud treats the email provided by Facebook as verified and skips additional email verification.
   * @type {boolean}
   * @memberof FacebookAuthenticatorOptions
   */
  treat_email_as_verified: boolean;
}
