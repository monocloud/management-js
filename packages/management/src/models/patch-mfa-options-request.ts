/**
 * Patch MFA Options Request: Used to update the tenant\'s multi-factor authentication configuration.
 * @export
 * @interface PatchMfaOptionsRequest
 */
export interface PatchMfaOptionsRequest {
  /**
   * Indicates whether multi-factor authentication is enabled for the tenant. <note>Pro plan required to enable.</note>
   * @type {boolean}
   * @memberof PatchMfaOptionsRequest
   */
  enabled?: boolean;
  /**
   * Indicates whether multi-factor authentication is required for all users. <note>Pro plan required to enable.</note>
   * @type {boolean}
   * @memberof PatchMfaOptionsRequest
   */
  required?: boolean;
  /**
   * Indicates whether authenticator apps (TOTP) can be used as a second factor.
   * @type {boolean}
   * @memberof PatchMfaOptionsRequest
   */
  totp_enabled?: boolean;
  /**
   * The issuer name shown in authenticator apps. When not set, the project name is used.
   * @type {string}
   * @memberof PatchMfaOptionsRequest
   */
  totp_issuer?: string | null;
  /**
   * Indicates whether passkeys / security keys can be enrolled as a second factor.
   * @type {boolean}
   * @memberof PatchMfaOptionsRequest
   */
  passkey_enabled?: boolean;
  /**
   * Indicates whether one-time recovery codes are issued when a user enrolls their first factor.
   * @type {boolean}
   * @memberof PatchMfaOptionsRequest
   */
  recovery_codes_enabled?: boolean;
  /**
   * Indicates whether users can mark a browser as trusted to skip the multi-factor challenge for a period of time.
   * @type {boolean}
   * @memberof PatchMfaOptionsRequest
   */
  remember_browser_enabled?: boolean;
  /**
   * The number of days a trusted browser skips the multi-factor challenge.
   * @type {number}
   * @memberof PatchMfaOptionsRequest
   */
  remember_browser_duration_days?: number;
}
