/**
 * User Phone: Represents a phone number associated with the user account.
 * @export
 * @interface UserPhone
 */
export interface UserPhone {
  /**
   * Unique identifier of the user\'s phone.
   * @type {string}
   * @memberof UserPhone
   */
  id: string;
  /**
   * Indicates whether this is the primary phone number for the user.
   * @type {boolean}
   * @memberof UserPhone
   */
  primary: boolean;
  /**
   * Indicates whether the phone number has been verified.
   * @type {boolean}
   * @memberof UserPhone
   */
  verified: boolean;
  /**
   * Source from which the phone number was originally collected.
   * @type {string}
   * @memberof UserPhone
   */
  source?: string | null;
  /**
   * Identity provider or service that verified the phone number.
   * @type {string}
   * @memberof UserPhone
   */
  verification_source?: string | null;
  /**
   * The phone number.
   * @type {string}
   * @memberof UserPhone
   */
  phone: string;
}
