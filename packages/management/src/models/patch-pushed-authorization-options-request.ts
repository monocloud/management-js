/**
 * Patch Pushed Authorization Options Request: Used to update tenant-wide Pushed Authorization Request (PAR) configuration.
 * @export
 * @interface PatchPushedAuthorizationOptionsRequest
 */
export interface PatchPushedAuthorizationOptionsRequest {
  /**
   * Specifies whether Pushed Authorization Requests (PAR) are enabled for the tenant.
   * @type {boolean}
   * @memberof PatchPushedAuthorizationOptionsRequest
   */
  enable_pushed_authorization_requests?: boolean;
  /**
   * Specifies whether Pushed Authorization Requests (PAR) are required tenant-wide for all authorization requests.
   * @note When enabled, this setting overrides any client-specific PAR configuration and enforces PAR usage for all clients within the tenant.
   * @type {boolean}
   * @memberof PatchPushedAuthorizationOptionsRequest
   */
  require_pushed_authorization_requests?: boolean;
}
