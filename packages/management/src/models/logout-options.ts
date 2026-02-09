/**
 * Logout Options Response: Represents the current logout behavior configuration.
 * @export
 * @interface LogoutOptions
 */
export interface LogoutOptions {
  /**
   * Specifies whether the user is automatically redirected to the client’s configured post-logout redirect URL after signing out.
   * @type {boolean}
   * @memberof LogoutOptions
   */
  automatic_redirect_after_logout: boolean;
  /**
   * Specifies whether the user is prompted for confirmation before signing out.
   * @type {boolean}
   * @memberof LogoutOptions
   */
  show_logout_prompt: boolean;
}
