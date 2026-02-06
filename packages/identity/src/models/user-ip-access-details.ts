/**
 * User IP Access Details: Returns sign-in activity for a specific IP address.
 * @export
 * @interface UserIpAccessDetails
 */
export interface UserIpAccessDetails {
  /**
   * Consecutive sign-in failures from this IP address since the last successful sign-in.
   * @type {number}
   * @memberof UserIpAccessDetails
   */
  failure_count: number;
  /**
   * Specifies the time until which sign-in attempts from this IP address are blocked (in Epoch).
   * @type {number}
   * @memberof UserIpAccessDetails
   */
  block_until?: number | null;
  /**
   * Total number of sign-in attempts from this IP address.
   * @type {number}
   * @memberof UserIpAccessDetails
   */
  sign_in_attempts_count: number;
  /**
   * The IP address from which sign-in attempts were made.
   * @type {string}
   * @memberof UserIpAccessDetails
   */
  ip: string;
  /**
   * Specifies the time of the most recent sign-in attempt from this IP address (in Epoch).
   * @type {number}
   * @memberof UserIpAccessDetails
   */
  last_sign_in_attempt: number;
}
