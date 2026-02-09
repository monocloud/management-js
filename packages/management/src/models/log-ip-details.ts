/**
 * Log IP Details Response: Represents the IP address details associated with the log entry.
 * @export
 * @interface LogIpDetails
 */
export interface LogIpDetails {
  /**
   * The IP address.
   * @type {string}
   * @memberof LogIpDetails
   */
  ip: string;
  /**
   * The IP address version.
   * @type {string}
   * @memberof LogIpDetails
   */
  version: string;
}
