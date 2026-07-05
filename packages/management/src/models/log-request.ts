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
  /**
   * Specifies whether the request was a mTLS request.
   * @type {boolean}
   * @memberof LogRequest
   */
  is_mtls: boolean;
  /**
   * Specifies whether the request was authenticated with a SPIFFE SVID.
   * @type {boolean}
   * @memberof LogRequest
   */
  is_spiffe: boolean;
  /**
   * The id of the trust store used to authenticate the request.
   * @type {string}
   * @memberof LogRequest
   */
  trust_store_id?: string | null;
  /**
   * The subject of the client certificate used in the request.
   * @type {string}
   * @memberof LogRequest
   */
  certificate_subject?: string | null;
  /**
   * The issuer of the client certificate used in the request.
   * @type {string}
   * @memberof LogRequest
   */
  certificate_issuer?: string | null;
  /**
   * The SAN URIs of the client certificate used in the request.
   * @type {string[]}
   * @memberof LogRequest
   */
  san_uris?: string[] | null;
  /**
   * The SPIFFE ID of the SVID (X.509-SVID or JWT-SVID) that authenticated the request.
   * @type {string}
   * @memberof LogRequest
   */
  spiffe_id?: string | null;
}
