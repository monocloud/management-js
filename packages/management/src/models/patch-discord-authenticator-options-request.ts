/**
 * Patch Discord Authenticator Options Request: Used to partially update Sign in with Discord configuration and behavior.
 * @export
 * @interface PatchDiscordAuthenticatorOptionsRequest
 */
export interface PatchDiscordAuthenticatorOptionsRequest {
  /**
   * Specifies whether users can sign in using this external identity provider.
   * @type {boolean}
   * @memberof PatchDiscordAuthenticatorOptionsRequest
   */
  enable_sign_in?: boolean;
  /**
   * Specifies whether new users can sign up using this external identity provider.
   * @type {boolean}
   * @memberof PatchDiscordAuthenticatorOptionsRequest
   */
  enable_sign_up?: boolean;
  /**
   * Specifies whether MonoCloud-managed client credentials should be used to authenticate with the external identity provider.
   * @type {boolean}
   * @memberof PatchDiscordAuthenticatorOptionsRequest
   */
  use_internal_keys?: boolean;
  /**
   * Specifies whether the user profile should be synchronized from the external provider on each successful sign-in.
   * @type {boolean}
   * @memberof PatchDiscordAuthenticatorOptionsRequest
   */
  sync_user_profile_always?: boolean;
  /**
   * The client identifier issued by the external identity provider.
   * @type {string}
   * @memberof PatchDiscordAuthenticatorOptionsRequest
   */
  client_id?: string | null;
  /**
   * The client secret issued by the external identity provider.
   * @type {string}
   * @memberof PatchDiscordAuthenticatorOptionsRequest
   */
  client_secret?: string | null;
  /**
   * The set of scopes requested from the external identity provider during authentication.
   * @type {string[]}
   * @memberof PatchDiscordAuthenticatorOptionsRequest
   */
  scopes?: string[];
  /**
   * Specifies whether the `email_verified` claim from Discord is trusted.
   * @note When enabled, MonoCloud skips email verification if Discord reports the email as verified.
   * @type {boolean}
   * @memberof PatchDiscordAuthenticatorOptionsRequest
   */
  trust_email_verified_scope?: boolean;
}
