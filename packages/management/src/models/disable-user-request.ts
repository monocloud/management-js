/**
 * Disable User Request: Defines the options used to disable an existing user account.
 * @export
 * @interface DisableUserRequest
 */
export interface DisableUserRequest {
  /**
   * A flag to indicate whether all active user sessions should be revoked when the account is disabled.
   * @type {boolean}
   * @memberof DisableUserRequest
   */
  revoke_sessions?: boolean;
}
