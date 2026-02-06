/**
 * Refresh Token: Represents a long-lived refresh token issued to a client.
 * @export
 * @interface RefreshToken
 */
export interface RefreshToken {
  /**
   * The unique identifier of the grant.
   * @type {string}
   * @memberof RefreshToken
   */
  id: string;
  /**
   * The unique identifier of the client to which the grant was issued.
   * @type {string}
   * @memberof RefreshToken
   */
  client_id: string;
  /**
   * Specifies the time at which the grant was issued (in Epoch).
   * @type {number}
   * @memberof RefreshToken
   */
  creation_time: number;
  /**
   * The unique identifier of the user session associated with this token.
   * @type {string}
   * @memberof RefreshToken
   */
  session_id?: string | null;
  /**
   * The scopes granted to this token.
   * @type {string[]}
   * @memberof RefreshToken
   */
  scopes: string[];
  /**
   * Specifies the time at which the token expires (in Epoch).
   * @type {number}
   * @memberof RefreshToken
   */
  expiration?: number | null;
  /**
   * The intended audiences for which access tokens may be issued using this refresh token.
   * @type {string[]}
   * @memberof RefreshToken
   */
  audiences: string[];
  /**
   * The issuer that generated this token.
   * @type {string}
   * @memberof RefreshToken
   */
  issuer?: string | null;
}
