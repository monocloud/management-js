import { AccountProtectionUserUnblockOptions } from './account-protection-user-unblock-options';
import { UserLockoutTypes } from './user-lockout-types';

/**
 * Account Protection User Lockout Options Response: Represents configuration for locking user accounts after repeated failed authentication attempts.
 * @export
 * @interface AccountProtectionUserLockoutOptions
 */
export interface AccountProtectionUserLockoutOptions {
  /**
   * Enables user lockout protection.
   * @type {boolean}
   * @memberof AccountProtectionUserLockoutOptions
   */
  enabled: boolean;
  /**
   * Maximum failed sign-in attempts allowed before lockout (inclusive).
   * @type {number}
   * @memberof AccountProtectionUserLockoutOptions
   */
  max_failed_access_attempts: number;
  /**
   * User account lockout duration (in minutes).
   * @type {number}
   * @memberof AccountProtectionUserLockoutOptions
   */
  user_lockout_time_span: number;
  /**
   * IP lockout duration (in minutes).
   * @type {number}
   * @memberof AccountProtectionUserLockoutOptions
   */
  ip_lockout_time_span: number;
  /**
   * Allowlisted IP addresses that are exempt from lockout enforcement.
   * @type {string[]}
   * @memberof AccountProtectionUserLockoutOptions
   */
  allowed_ips: string[];
  /**
   * The lockout enforcement mode (IP-based or user-account-based).
   * @type {UserLockoutTypes}
   * @memberof AccountProtectionUserLockoutOptions
   */
  lockout_type: UserLockoutTypes;
  /**
   * The user unblock configuration.
   * @type {AccountProtectionUserUnblockOptions}
   * @memberof AccountProtectionUserLockoutOptions
   */
  user_unblock: AccountProtectionUserUnblockOptions;
}
