import { PatchAccountProtectionUserUnblockOptionsRequest } from './patch-account-protection-user-unblock-options-request';
import { UserLockoutTypes } from './user-lockout-types';

/**
 * Patch Account Protection User Lockout Options Request: Used to update user lockout behavior and thresholds.
 * @export
 * @interface PatchAccountProtectionUserLockoutOptionsRequest
 */
export interface PatchAccountProtectionUserLockoutOptionsRequest {
  /**
   * Enables user lockout protection.
   * @type {boolean}
   * @memberof PatchAccountProtectionUserLockoutOptionsRequest
   */
  enabled?: boolean;
  /**
   * Maximum failed sign-in attempts allowed before lockout (inclusive).
   * @type {number}
   * @memberof PatchAccountProtectionUserLockoutOptionsRequest
   */
  max_failed_access_attempts?: number;
  /**
   * User account lockout duration (in minutes).
   * @type {number}
   * @memberof PatchAccountProtectionUserLockoutOptionsRequest
   */
  user_lockout_time_span?: number;
  /**
   * IP lockout duration (in minutes).
   * @type {number}
   * @memberof PatchAccountProtectionUserLockoutOptionsRequest
   */
  ip_lockout_time_span?: number;
  /**
   * Allowlisted IP addresses that are exempt from lockout enforcement.
   * @type {string[]}
   * @memberof PatchAccountProtectionUserLockoutOptionsRequest
   */
  allowed_ips?: string[];
  /**
   * The lockout enforcement mode (IP-based or user-account-based).
   * @type {UserLockoutTypes}
   * @memberof PatchAccountProtectionUserLockoutOptionsRequest
   */
  lockout_type?: UserLockoutTypes;
  /**
   * The user unblock configuration.
   * @type {PatchAccountProtectionUserUnblockOptionsRequest}
   * @memberof PatchAccountProtectionUserLockoutOptionsRequest
   */
  user_unblock?: PatchAccountProtectionUserUnblockOptionsRequest;
}
