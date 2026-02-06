/**
 * Authorization Code: Represents a short-lived authorization code issued to a client.
 * @export
 * @interface AuthorizationCode
 */
export interface AuthorizationCode {
  /**
   * The unique identifier of the grant.
   * @type {string}
   * @memberof AuthorizationCode
   */
  id: string;
  /**
   * The unique identifier of the client to which the grant was issued.
   * @type {string}
   * @memberof AuthorizationCode
   */
  client_id: string;
  /**
   * Specifies the time at which the grant was issued (in Epoch).
   * @type {number}
   * @memberof AuthorizationCode
   */
  creation_time: number;
  /**
   * The unique identifier of the user session associated with this authorization code.
   * @type {string}
   * @memberof AuthorizationCode
   */
  session_id?: string | null;
  /**
   * The scopes authorized by the user and associated with this authorization code.
   * @type {string[]}
   * @memberof AuthorizationCode
   */
  authorized_scopes: string[];
  /**
   * Specifies the time at which the authorization code expires (in Epoch).
   * @type {number}
   * @memberof AuthorizationCode
   */
  expiration?: number | null;
}
