/**
 * Reset Password Request: Defines the options used to initiate a password reset flow for a user.
 * @export
 * @interface ResetPasswordRequest
 */
export interface ResetPasswordRequest {
  /**
   * A flag indicating whether the password reset link should be automatically delivered to the user\'s email address.
   * @type {boolean}
   * @memberof ResetPasswordRequest
   */
  send_email?: boolean;
  /**
   * Lifetime of the password reset link (in seconds). Defaults to the system configuration when omitted.
   * @type {number}
   * @memberof ResetPasswordRequest
   */
  expiry?: number | null;
}
