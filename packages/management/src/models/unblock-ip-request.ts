/**
 * Unblock IP Request: Used to remove an IP-based lockout for a user.
 * @export
 * @interface UnblockIpRequest
 */
export interface UnblockIpRequest {
  /**
   * The IP address to unblock. Use `all` to reset blocks for all IP addresses associated with the user.
   * @type {string}
   * @memberof UnblockIpRequest
   */
  ip_address: string;
}
