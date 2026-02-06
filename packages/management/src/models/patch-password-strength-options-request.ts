/**
 * Patch Password Strength Options Request: Used to partially update password complexity and strength requirements.
 * @export
 * @interface PatchPasswordStrengthOptionsRequest
 */
export interface PatchPasswordStrengthOptionsRequest {
  /**
   * Specifies the minimum number of characters required for a password.
   * @type {number}
   * @memberof PatchPasswordStrengthOptionsRequest
   */
  minimum_length?: number;
  /**
   * Specifies whether at least one non-alphanumeric character is required in the password.
   * @type {boolean}
   * @memberof PatchPasswordStrengthOptionsRequest
   */
  require_non_alphanumeric_character?: boolean;
  /**
   * Specifies whether at least one numeric digit is required in the password.
   * @type {boolean}
   * @memberof PatchPasswordStrengthOptionsRequest
   */
  require_digit?: boolean;
  /**
   * Specifies whether at least one lowercase letter is required in the password.
   * @type {boolean}
   * @memberof PatchPasswordStrengthOptionsRequest
   */
  require_lowercase_character?: boolean;
  /**
   * Specifies whether at least one uppercase letter is required in the password.
   * @type {boolean}
   * @memberof PatchPasswordStrengthOptionsRequest
   */
  require_uppercase_character?: boolean;
  /**
   * Specifies the minimum number of unique characters required in the password.
   * @type {number}
   * @memberof PatchPasswordStrengthOptionsRequest
   */
  required_unique_characters_count?: number;
}
