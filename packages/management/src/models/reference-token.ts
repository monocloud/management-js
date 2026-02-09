/**
 * Reference Token: Represents an opaque access token issued to a client.
 * @export
 * @interface ReferenceToken
 */
export interface ReferenceToken {
  /**
   * The unique identifier of the grant.
   * @type {string}
   * @memberof ReferenceToken
   */
  id: string;
  /**
   * The unique identifier of the client to which the grant was issued.
   * @type {string}
   * @memberof ReferenceToken
   */
  client_id: string;
  /**
   * Specifies the time at which the grant was issued (in Epoch).
   * @type {number}
   * @memberof ReferenceToken
   */
  creation_time: number;
  /**
   * The unique identifier of the user session associated with this token.
   * @type {string}
   * @memberof ReferenceToken
   */
  session_id?: string | null;
  /**
   * The scopes granted to this token.
   * @type {string[]}
   * @memberof ReferenceToken
   */
  scopes: string[];
  /**
   * Specifies the time at which the token expires (in Epoch).
   * @type {number}
   * @memberof ReferenceToken
   */
  expiration?: number | null;
  /**
   * The intended audiences for which this token is valid.
   * @type {string[]}
   * @memberof ReferenceToken
   */
  audiences: string[];
  /**
   * The issuer that generated this token.
   * @type {string}
   * @memberof ReferenceToken
   */
  issuer?: string | null;
}
