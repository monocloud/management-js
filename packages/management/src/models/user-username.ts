/**
 * Username: Represents a username associated with the user account.
 * @export
 * @interface UserUsername
 */
export interface UserUsername {
  /**
   * Unique identifier of the user\'s username.
   * @type {string}
   * @memberof UserUsername
   */
  id: string;
  /**
   * The username used to identify the user.
   * @type {string}
   * @memberof UserUsername
   */
  username: string;
  /**
   * Source from which the username was originally collected.
   * @type {string}
   * @memberof UserUsername
   */
  source?: string | null;
}
