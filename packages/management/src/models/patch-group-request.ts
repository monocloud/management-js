/**
 * Patch Group Request: Used to update one or more properties of an existing group.
 * @export
 * @interface PatchGroupRequest
 */
export interface PatchGroupRequest {
  /**
   * The display name of the group.
   * @type {string}
   * @memberof PatchGroupRequest
   */
  name?: string;
  /**
   * Description that explains the purpose or role of the group.
   * @type {string}
   * @memberof PatchGroupRequest
   */
  description?: string | null;
  /**
   * Indicates whether users are automatically added to this group upon sign-up.
   * @type {boolean}
   * @memberof PatchGroupRequest
   */
  is_auto_assigned?: boolean;
}
