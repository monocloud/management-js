/**
 * MFA Options Response: Represents the tenant\'s multi-factor authentication configuration.
 * @export
 * @interface MfaOptions
 */
export interface MfaOptions {
  /**
   * Indicates whether multi-factor authentication is enabled for the tenant. When enabled, users who have enrolled a factor are challenged during sign-in.
   * @type {boolean}
   * @memberof MfaOptions
   */
  enabled: boolean;
  /**
   * Indicates whether multi-factor authentication is required for all users. When required, users without a factor are forced to enroll one during sign-in.
   * @type {boolean}
   * @memberof MfaOptions
   */
  required: boolean;
  /**
   * Indicates whether authenticator apps (TOTP) can be used as a second factor.
   * @type {boolean}
   * @memberof MfaOptions
   */
  totp_enabled: boolean;
  /**
   * The issuer name shown in authenticator apps. When not set, the project name is used.
   * @type {string}
   * @memberof MfaOptions
   */
  totp_issuer?: string | null;
  /**
   * Indicates whether passkeys / security keys can be enrolled as a second factor.
   * @type {boolean}
   * @memberof MfaOptions
   */
  passkey_enabled: boolean;
  /**
   * Indicates whether one-time recovery codes are issued when a user enrolls their first factor.
   * @type {boolean}
   * @memberof MfaOptions
   */
  recovery_codes_enabled: boolean;
  /**
   * Indicates whether users can mark a browser as trusted to skip the multi-factor challenge for a period of time.
   * @type {boolean}
   * @memberof MfaOptions
   */
  remember_browser_enabled: boolean;
  /**
   * The number of days a trusted browser skips the multi-factor challenge.
   * @type {number}
   * @memberof MfaOptions
   */
  remember_browser_duration_days: number;
}
