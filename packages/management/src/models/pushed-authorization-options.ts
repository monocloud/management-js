/**
 * Pushed Authorization Options Response: Represents the tenant-wide Pushed Authorization Request (PAR) configuration.
 * @export
 * @interface PushedAuthorizationOptions
 */
export interface PushedAuthorizationOptions {
  /**
   * Specifies whether Pushed Authorization Requests (PAR) are enabled for the tenant.
   * @type {boolean}
   * @memberof PushedAuthorizationOptions
   */
  enable_pushed_authorization_requests: boolean;
  /**
   * Specifies whether Pushed Authorization Requests (PAR) are required tenant-wide for all authorization requests.
   * @note When enabled, this setting overrides any client-specific PAR configuration and enforces PAR usage for all clients within the tenant.
   * @type {boolean}
   * @memberof PushedAuthorizationOptions
   */
  require_pushed_authorization_requests: boolean;
}
