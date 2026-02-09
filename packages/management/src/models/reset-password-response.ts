/**
 * Reset Password Response: Returns the delivery status of the password reset email.
 * @export
 * @interface ResetPasswordResponse
 */
export interface ResetPasswordResponse {
  /**
   * The generated password reset link that can be used to complete the reset flow.
   * @type {string}
   * @memberof ResetPasswordResponse
   */
  link: string;
  /**
   * Specifies the expiry time for the password reset link (in Epoch).
   * @type {number}
   * @memberof ResetPasswordResponse
   */
  expires_at: number;
  /**
   * Indicates whether the password reset email was sent to the user.
   * @type {boolean}
   * @memberof ResetPasswordResponse
   */
  email_sent: boolean;
}
