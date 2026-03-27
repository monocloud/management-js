/**
 * Application Group Response: Represents the association between an application and a group.
 * @export
 * @interface ApplicationGroup
 */
export interface ApplicationGroup {
  /**
   * The unique identifier of the group.
   * @type {string}
   * @memberof ApplicationGroup
   */
  group_id: string;
  /**
   * The name of the group.
   * @type {string}
   * @memberof ApplicationGroup
   */
  group_name: string;
  /**
   * Specifies the time at which the group was associated with the client (in Epoch).
   * @type {number}
   * @memberof ApplicationGroup
   */
  creation_time: number;
}
