/**
 * Verify Email Request: Used to generate an email verification link.
 * @export
 * @interface VerifyEmailRequest
 */
export interface VerifyEmailRequest {
  /**
   * Lifetime of the verification link (in seconds). Defaults to the system configuration when omitted.
   * @type {number}
   * @memberof VerifyEmailRequest
   */
  expiry?: number | null;
}
