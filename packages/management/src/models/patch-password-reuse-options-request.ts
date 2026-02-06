import { PasswordRestrictionModes } from './password-restriction-modes';

/**
 * Patch Password Reuse Options Request: Used to partially update password reuse enforcement settings.
 * @export
 * @interface PatchPasswordReuseOptionsRequest
 */
export interface PatchPasswordReuseOptionsRequest {
  /**
   * Specifies the password reuse control policy, defining whether reuse is limited by time, count, both, or unrestricted.
   * @note Pro plan required to configure password reuse options.
   * @type {PasswordRestrictionModes}
   * @memberof PatchPasswordReuseOptionsRequest
   */
  restriction_mode?: PasswordRestrictionModes;
  /**
   * Specifies the time period during which previously used passwords are blocked from reuse (in minutes).
   * @type {number}
   * @memberof PatchPasswordReuseOptionsRequest
   */
  restriction_period?: number;
  /**
   * Defines the number of historical passwords that are disallowed for reuse under count-based enforcement.
   * @type {number}
   * @memberof PatchPasswordReuseOptionsRequest
   */
  restriction_count?: number;
}
