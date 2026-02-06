import { IdPs } from './id-ps';

/**
 * User Connection: Represents the association between a user account and an identity provider.
 * @export
 * @interface UserConnection
 */
export interface UserConnection {
  /**
   * The identity provider this user account is connected to.
   * @type {IdPs}
   * @memberof UserConnection
   */
  idp: IdPs;
  /**
   * Unique identifier of the user account within the connected identity provider.
   * @type {string}
   * @memberof UserConnection
   */
  connection_id: string;
}
