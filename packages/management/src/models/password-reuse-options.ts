import { PasswordRestrictionModes } from './password-restriction-modes';

/**
 * Password Reuse Options Response: Represents the configuration for password reuse restrictions.
 * @export
 * @interface PasswordReuseOptions
 */
export interface PasswordReuseOptions {
  /**
   * Specifies the password reuse control policy, defining whether reuse is limited by time, count, both, or unrestricted.
   * @type {PasswordRestrictionModes}
   * @memberof PasswordReuseOptions
   */
  restriction_mode: PasswordRestrictionModes;
  /**
   * Specifies the time period during which previously used passwords are blocked from reuse (in minutes).
   * @type {number}
   * @memberof PasswordReuseOptions
   */
  restriction_period: number;
  /**
   * Defines the number of historical passwords that are disallowed for reuse under count-based enforcement.
   * @type {number}
   * @memberof PasswordReuseOptions
   */
  restriction_count: number;
}
