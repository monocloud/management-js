import { PasswordAlgorithms } from './password-algorithms';

/**
 * Set Password Request: Used to set or update a user\'s password, with support for plaintext or pre-hashed values.
 * @export
 * @interface SetPasswordRequest
 */
export interface SetPasswordRequest {
  /**
   * Plain-text password to assign to the user.
   * @type {string}
   * @memberof SetPasswordRequest
   */
  password?: string | null;
  /**
   * A pre-hashed password value. Useful during migrations to avoid forcing a password reset.
   * @type {string}
   * @memberof SetPasswordRequest
   */
  password_hash?: string | null;
  /**
   * Hashing algorithm used for the provided password hash.
   * @type {PasswordAlgorithms}
   * @memberof SetPasswordRequest
   */
  password_hash_algorithm?: PasswordAlgorithms;
  /**
   * Indicates whether the provided password is temporary. If true, the user must reset their password at their next sign-in.
   * @type {boolean}
   * @memberof SetPasswordRequest
   */
  is_temporary_password?: boolean;
  /**
   * Allows bypassing configured password policy checks.
   * @type {boolean}
   * @memberof SetPasswordRequest
   */
  skip_password_policy_checks?: boolean;
  /**
   * A flag to indicate whether all active user sessions should be revoked when the password is updated.
   * @type {boolean}
   * @memberof SetPasswordRequest
   */
  revoke_sessions?: boolean;
}
