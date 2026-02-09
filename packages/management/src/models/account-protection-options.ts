import { AccountProtectionUserLockoutOptions } from './account-protection-user-lockout-options';

/**
 * Account Protection Options Response: Represents configuration used to protect user accounts from abuse.
 * @export
 * @interface AccountProtectionOptions
 */
export interface AccountProtectionOptions {
  /**
   * User account protection settings used to safeguard accounts from abuse.
   * @type {AccountProtectionUserLockoutOptions}
   * @memberof AccountProtectionOptions
   */
  user_lockout: AccountProtectionUserLockoutOptions;
}
