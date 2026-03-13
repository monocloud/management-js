import { PasswordAlgorithms } from './password-algorithms';

/**
 * Change Password Request: Used to change a user\'s password, with support for plaintext or pre-hashed values.
 * @export
 * @interface ChangePasswordRequest
 */
export interface ChangePasswordRequest {
  /**
   * The new plain-text password to assign to the user.
   * @type {string}
   * @memberof ChangePasswordRequest
   */
  new_password?: string | null;
  /**
   * A pre-computed password hash for the new password.
   * @warning When provided, password validation and password policy requirements are not enforced. The hash is stored as-is.
   * @type {string}
   * @memberof ChangePasswordRequest
   */
  new_password_hash?: string | null;
  /**
   * Hashing algorithm used for the provided password hash.
   * @type {PasswordAlgorithms}
   * @memberof ChangePasswordRequest
   */
  new_password_hash_algorithm?: PasswordAlgorithms;
  /**
   * The user\'s current plain-text password used for verification.
   * @type {string}
   * @memberof ChangePasswordRequest
   */
  old_password: string;
  /**
   * A flag to indicate whether all active user sessions should be revoked when the password is updated.
   * @type {boolean}
   * @memberof ChangePasswordRequest
   */
  revoke_sessions?: boolean;
}
