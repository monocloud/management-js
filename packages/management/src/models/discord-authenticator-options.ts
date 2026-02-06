/**
 * Discord Authenticator Options Response: Represents the Sign in with Discord authentication configuration.
 * @export
 * @interface DiscordAuthenticatorOptions
 */
export interface DiscordAuthenticatorOptions {
  /**
   * Specifies whether users can sign in using this external identity provider.
   * @type {boolean}
   * @memberof DiscordAuthenticatorOptions
   */
  enable_sign_in: boolean;
  /**
   * Specifies whether new users can sign up using this external identity provider.
   * @type {boolean}
   * @memberof DiscordAuthenticatorOptions
   */
  enable_sign_up: boolean;
  /**
   * Specifies whether MonoCloud-managed client credentials should be used to authenticate with the external identity provider.
   * @type {boolean}
   * @memberof DiscordAuthenticatorOptions
   */
  use_internal_keys: boolean;
  /**
   * Specifies whether the user profile should be synchronized from the external provider on each successful sign-in.
   * @type {boolean}
   * @memberof DiscordAuthenticatorOptions
   */
  sync_user_profile_always: boolean;
  /**
   * The client identifier issued by the external identity provider.
   * @type {string}
   * @memberof DiscordAuthenticatorOptions
   */
  client_id?: string | null;
  /**
   * The client secret issued by the external identity provider.
   * @type {string}
   * @memberof DiscordAuthenticatorOptions
   */
  client_secret?: string | null;
  /**
   * The set of scopes requested from the external identity provider during authentication.
   * @type {string[]}
   * @memberof DiscordAuthenticatorOptions
   */
  scopes: string[];
  /**
   * Specifies whether the `email_verified` claim from Discord is trusted.
   * @note When enabled, MonoCloud skips email verification if Discord reports the email as verified.
   * @type {boolean}
   * @memberof DiscordAuthenticatorOptions
   */
  trust_email_verified_scope: boolean;
}
