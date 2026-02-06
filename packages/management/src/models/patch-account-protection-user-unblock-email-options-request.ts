/**
 * Patch Account Protection User Unblock Email Options Request: Used to update email-based user unblock configuration.
 * @export
 * @interface PatchAccountProtectionUserUnblockEmailOptionsRequest
 */
export interface PatchAccountProtectionUserUnblockEmailOptionsRequest {
  /**
   * Specifies the validity period of the unblock email link (in seconds).
   * @type {number}
   * @memberof PatchAccountProtectionUserUnblockEmailOptionsRequest
   */
  expiry?: number;
}
