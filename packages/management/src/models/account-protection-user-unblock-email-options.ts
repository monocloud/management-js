/**
 * Account Protection User Unblock Email Options Response: Represents email-based configuration for allowing users to unblock their accounts after a lockout.
 * @export
 * @interface AccountProtectionUserUnblockEmailOptions
 */
export interface AccountProtectionUserUnblockEmailOptions {
  /**
   * Specifies the validity period of the unblock email link (in seconds).
   * @type {number}
   * @memberof AccountProtectionUserUnblockEmailOptions
   */
  expiry: number;
}
