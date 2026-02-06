import { GroupTypes } from './group-types';

/**
 * Group: Represents a group used to organize users and client assignments.
 * @export
 * @interface Group
 */
export interface Group {
  /**
   * The unique identifier of the group.
   * @type {string}
   * @memberof Group
   */
  group_id: string;
  /**
   * Specifies whether the group is system-defined or user-managed.
   * @type {GroupTypes}
   * @memberof Group
   */
  type: GroupTypes;
  /**
   * The display name of the group.
   * @type {string}
   * @memberof Group
   */
  name: string;
  /**
   * Description that explains the purpose or role of the group.
   * @type {string}
   * @memberof Group
   */
  description?: string | null;
  /**
   * Indicates whether users are automatically added to this group upon sign-up.
   * @type {boolean}
   * @memberof Group
   */
  is_auto_assigned: boolean;
  /**
   * The number of users currently assigned to the group.
   * @type {number}
   * @memberof Group
   */
  users_assigned: number;
  /**
   * The number of client applications associated with the group.
   * @type {number}
   * @memberof Group
   */
  clients_assigned: number;
  /**
   * Specifies the time at which the group was created (in Epoch).
   * @type {number}
   * @memberof Group
   */
  creation_time: number;
  /**
   * Specifies the time at which the group was last updated (in Epoch).
   * @type {number}
   * @memberof Group
   */
  last_updated: number;
  /**
   * Specifies the time of the most recent user or client assignment to the group (in Epoch).
   * @type {number}
   * @memberof Group
   */
  last_assigned: number;
}
