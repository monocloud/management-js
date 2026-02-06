/**
 * User Email: Represents an email address associated with the user account.
 * @export
 * @interface UserEmail
 */
export interface UserEmail {
  /**
   * Unique identifier of the user\'s email.
   * @type {string}
   * @memberof UserEmail
   */
  id: string;
  /**
   * Indicates whether this is the primary email address for the user.
   * @type {boolean}
   * @memberof UserEmail
   */
  primary: boolean;
  /**
   * Indicates whether the email address has been verified.
   * @type {boolean}
   * @memberof UserEmail
   */
  verified: boolean;
  /**
   * Source from which the email address was originally collected.
   * @type {string}
   * @memberof UserEmail
   */
  source?: string | null;
  /**
   * Identity provider or service that verified the email address.
   * @type {string}
   * @memberof UserEmail
   */
  verification_source?: string | null;
  /**
   * The email address.
   * @type {string}
   * @memberof UserEmail
   */
  email: string;
}
