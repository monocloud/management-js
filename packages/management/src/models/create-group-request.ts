/**
 * Create Group Request: Used to create a new group.
 * @export
 * @interface CreateGroupRequest
 */
export interface CreateGroupRequest {
  /**
   * The display name of the group.
   * @type {string}
   * @memberof CreateGroupRequest
   */
  name: string;
  /**
   * Description that explains the purpose or role of the group.
   * @type {string}
   * @memberof CreateGroupRequest
   */
  description?: string | null;
  /**
   * Indicates whether users are automatically added to this group upon sign-up.
   * @type {boolean}
   * @memberof CreateGroupRequest
   */
  is_auto_assigned?: boolean;
}
