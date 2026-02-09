/**
 * Client Group Response: Represents the association between a client and a group.
 * @export
 * @interface ClientGroup
 */
export interface ClientGroup {
  /**
   * The unique identifier of the client.
   * @type {string}
   * @memberof ClientGroup
   */
  client_id: string;
  /**
   * The unique identifier of the group.
   * @type {string}
   * @memberof ClientGroup
   */
  group_id: string;
  /**
   * The name of the group.
   * @type {string}
   * @memberof ClientGroup
   */
  group_name: string;
  /**
   * Specifies the time at which the group was associated with the client (in Epoch).
   * @type {number}
   * @memberof ClientGroup
   */
  creation_time: number;
}
