import { LogIpDetails } from './log-ip-details';

/**
 * Log System Response: Represents the system or application instance that generated the log entry.
 * @export
 * @interface LogSystem
 */
export interface LogSystem {
  /**
   * The activity identifier associated with the request.
   * @type {string}
   * @memberof LogSystem
   */
  activity_id?: string | null;
  /**
   * The process identifier of the executing service.
   * @type {number}
   * @memberof LogSystem
   */
  process_id: number;
  /**
   * The local IP address details of the service handling the request.
   * @type {LogIpDetails}
   * @memberof LogSystem
   */
  local_ip: LogIpDetails;
}
