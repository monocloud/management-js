import { PasswordAlgorithms } from './password-algorithms';

/**
 * Create User Request: Fields used to create a new user and optionally set identifiers, credentials, and profile attributes.
 * @export
 * @interface CreateUserRequest
 */
export interface CreateUserRequest {
  /**
   * Username to assign to the user. Must satisfy username policy and be unique.
   * @type {string}
   * @memberof CreateUserRequest
   */
  username?: string | null;
  /**
   * Email address to add to the user account.
   * @type {string}
   * @memberof CreateUserRequest
   */
  email?: string | null;
  /**
   * Marks the email as verified. Users cannot sign in with this email until it is verified.
   * @type {boolean}
   * @memberof CreateUserRequest
   */
  email_verified?: boolean | null;
  /**
   * Phone number to add to the user account in E.164 format.
   * @type {string}
   * @memberof CreateUserRequest
   */
  phone_number?: string | null;
  /**
   * Marks the phone number as verified. Users cannot sign in with this phone number until it is verified.
   * @type {boolean}
   * @memberof CreateUserRequest
   */
  phone_number_verified?: boolean | null;
  /**
   * Initial plain-text password for the user.
   * @type {string}
   * @memberof CreateUserRequest
   */
  password?: string | null;
  /**
   * A pre-hashed password value. Useful during migrations to avoid forcing a password reset.
   * @type {string}
   * @memberof CreateUserRequest
   */
  password_hash?: string | null;
  /**
   * Hashing algorithm used for the provided password hash.
   * @type {PasswordAlgorithms}
   * @memberof CreateUserRequest
   */
  password_hash_algorithm?: PasswordAlgorithms;
  /**
   * Indicates whether the provided password is temporary. If true, the user must reset their password at their next sign-in.
   * @type {boolean}
   * @memberof CreateUserRequest
   */
  is_temporary_password?: boolean;
  /**
   * Full name of the user.
   * @type {string}
   * @memberof CreateUserRequest
   */
  name?: string | null;
  /**
   * Given (first) name of the user.
   * @type {string}
   * @memberof CreateUserRequest
   */
  given_name?: string | null;
  /**
   * Middle name or initial of the user.
   * @type {string}
   * @memberof CreateUserRequest
   */
  middle_name?: string | null;
  /**
   * Family (last) name of the user.
   * @type {string}
   * @memberof CreateUserRequest
   */
  family_name?: string | null;
  /**
   * Preferred nickname for the user.
   * @type {string}
   * @memberof CreateUserRequest
   */
  nickname?: string | null;
  /**
   * URL of the user\'s profile image.
   * @type {string}
   * @memberof CreateUserRequest
   */
  picture?: string | null;
  /**
   * Allows bypassing configured password policy checks.
   * @type {boolean}
   * @memberof CreateUserRequest
   */
  skip_password_policy_checks?: boolean;
  /**
   * Allows bypassing blacklist validation for the provided identifiers.
   * @type {boolean}
   * @memberof CreateUserRequest
   */
  skip_identifier_restriction_checks?: boolean;
  /**
   * Allows bypassing profile conformance checks enforced by sign-up policies.
   * @type {boolean}
   * @memberof CreateUserRequest
   */
  skip_conformance_checks?: boolean;
}
