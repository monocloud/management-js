import { AccountProtectionUserUnblockEmailOptions } from './account-protection-user-unblock-email-options';

/**
 * Account Protection User Unblock Options Response: Represents configuration that controls how locked user accounts can be unblocked.
 * @export
 * @interface AccountProtectionUserUnblockOptions
 */
export interface AccountProtectionUserUnblockOptions {
  /**
   * Email-based user unblock configuration.
   * @type {AccountProtectionUserUnblockEmailOptions}
   * @memberof AccountProtectionUserUnblockOptions
   */
  email: AccountProtectionUserUnblockEmailOptions;
}
