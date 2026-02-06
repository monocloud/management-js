/**
 * Patch Logout Options Request: Used to update logout behavior configuration.
 * @export
 * @interface PatchLogoutOptionsRequest
 */
export interface PatchLogoutOptionsRequest {
  /**
   * Specifies whether the user is automatically redirected to the client’s configured post-logout redirect URL after signing out.
   * @type {boolean}
   * @memberof PatchLogoutOptionsRequest
   */
  automatic_redirect_after_logout?: boolean;
  /**
   * Specifies whether the user is prompted for confirmation before signing out.
   * @type {boolean}
   * @memberof PatchLogoutOptionsRequest
   */
  show_logout_prompt?: boolean;
}
