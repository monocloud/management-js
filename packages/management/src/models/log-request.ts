import { LogIpDetails } from './log-ip-details';
import { LogLocation } from './log-location';

/**
 * Log Request Response: Represents request-level metadata associated with the log entry.
 * @export
 * @interface LogRequest
 */
export interface LogRequest {
  /**
   * The trace identifier of the request.
   * @type {string}
   * @memberof LogRequest
   */
  trace_id?: string | null;
  /**
   * The user agent associated with the request.
   * @type {string}
   * @memberof LogRequest
   */
  user_agent?: string | null;
  /**
   * The remote IP address of the request.
   * @type {LogIpDetails}
   * @memberof LogRequest
   */
  remote_ip?: LogIpDetails | null;
  /**
   * The geographical location from which the request was made.
   * @type {LogLocation}
   * @memberof LogRequest
   */
  location?: LogLocation | null;
}
