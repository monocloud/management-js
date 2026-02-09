/**
 * Verify Email Response: Returns the delivery status of the verification email.
 * @export
 * @interface VerifyEmailResponse
 */
export interface VerifyEmailResponse {
  /**
   * The expiry time for the verification link (in Epoch).
   * @type {number}
   * @memberof VerifyEmailResponse
   */
  expires_at: number;
  /**
   * Specifies whether the verification email was sent to the user.
   * @type {boolean}
   * @memberof VerifyEmailResponse
   */
  email_sent: boolean;
}
