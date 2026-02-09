import { PatchAccountProtectionUserUnblockEmailOptionsRequest } from './patch-account-protection-user-unblock-email-options-request';

/**
 * Patch Account Protection User Unblock Options Request: Used to update user account unblock configuration.
 * @export
 * @interface PatchAccountProtectionUserUnblockOptionsRequest
 */
export interface PatchAccountProtectionUserUnblockOptionsRequest {
  /**
   * Email-based user unblock configuration.
   * @type {PatchAccountProtectionUserUnblockEmailOptionsRequest}
   * @memberof PatchAccountProtectionUserUnblockOptionsRequest
   */
  email?: PatchAccountProtectionUserUnblockEmailOptionsRequest;
}
