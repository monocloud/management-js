/**
 * Password Strength Options Response: Represents the configuration for password complexity and strength requirements.
 * @export
 * @interface PasswordStrengthOptions
 */
export interface PasswordStrengthOptions {
  /**
   * Specifies the minimum number of characters required for a password.
   * @type {number}
   * @memberof PasswordStrengthOptions
   */
  minimum_length: number;
  /**
   * Specifies whether at least one non-alphanumeric character is required in the password.
   * @type {boolean}
   * @memberof PasswordStrengthOptions
   */
  require_non_alphanumeric_character: boolean;
  /**
   * Specifies whether at least one numeric digit is required in the password.
   * @type {boolean}
   * @memberof PasswordStrengthOptions
   */
  require_digit: boolean;
  /**
   * Specifies whether at least one lowercase letter is required in the password.
   * @type {boolean}
   * @memberof PasswordStrengthOptions
   */
  require_lowercase_character: boolean;
  /**
   * Specifies whether at least one uppercase letter is required in the password.
   * @type {boolean}
   * @memberof PasswordStrengthOptions
   */
  require_uppercase_character: boolean;
  /**
   * Specifies the minimum number of unique characters required in the password.
   * @type {number}
   * @memberof PasswordStrengthOptions
   */
  required_unique_characters_count: number;
}
