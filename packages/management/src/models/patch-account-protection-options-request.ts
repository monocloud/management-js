import { PatchAccountProtectionUserLockoutOptionsRequest } from './patch-account-protection-user-lockout-options-request';

/**
 * Patch Account Protection Options Request: Used to update user account protection settings.
 * @export
 * @interface PatchAccountProtectionOptionsRequest
 */
export interface PatchAccountProtectionOptionsRequest {
  /**
   * User account protection settings used to safeguard accounts from abuse.
   * @type {PatchAccountProtectionUserLockoutOptionsRequest}
   * @memberof PatchAccountProtectionOptionsRequest
   */
  user_lockout?: PatchAccountProtectionUserLockoutOptionsRequest;
}
