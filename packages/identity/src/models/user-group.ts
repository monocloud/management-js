/**
 * User Group: Represents the membership of a user in a group.
 * @export
 * @interface UserGroup
 */
export interface UserGroup {
  /**
   * The unique identifier of the group.
   * @type {string}
   * @memberof UserGroup
   */
  group_id: string;
  /**
   * The unique identifier of the user.
   * @type {string}
   * @memberof UserGroup
   */
  user_id: string;
  /**
   * Specifies the time at which the user was added to the group (in Epoch).
   * @type {number}
   * @memberof UserGroup
   */
  creation_time: number;
  /**
   * The name of the group.
   * @type {string}
   * @memberof UserGroup
   */
  group_name: string;
}
