/**
 * Update Username Request: Used to add a new username or update the existing one for a user account.
 * @export
 * @interface UpdateUsernameRequest
 */
export interface UpdateUsernameRequest {
  /**
   * The username to assign to the user. Must comply with the configured username policy, including format and uniqueness requirements.
   * @type {string}
   * @memberof UpdateUsernameRequest
   */
  username: string;
}
