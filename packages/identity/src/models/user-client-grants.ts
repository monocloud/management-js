/**
 * User Client Grants: Represents issued grants for a user-client relationship.
 * @export
 * @interface UserClientGrants
 */
export interface UserClientGrants {
  /**
   * The unique identifier of the client for which grants were issued.
   * @type {string}
   * @memberof UserClientGrants
   */
  client_id: string;
  /**
   * Indicates whether the user has granted consent for one or more scopes to this client.
   * @type {boolean}
   * @memberof UserClientGrants
   */
  consented: boolean;
  /**
   * The number of active refresh tokens issued for this client.
   * @type {number}
   * @memberof UserClientGrants
   */
  refresh_tokens: number;
  /**
   * The number of active reference (opaque) access tokens issued for this client.
   * @type {number}
   * @memberof UserClientGrants
   */
  reference_tokens: number;
  /**
   * The number of active authorization codes issued for this client.
   * @type {number}
   * @memberof UserClientGrants
   */
  authorization_codes: number;
}
