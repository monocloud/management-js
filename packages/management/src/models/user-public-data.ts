/**
 * User Public Data: Returns public data stored for a user.
 * @export
 * @interface UserPublicData
 */
export interface UserPublicData {
  /**
   * The public data associated with the user\'s account.
   * @type {{ [key: string]: any; }}
   * @memberof UserPublicData
   */
  public_data: Record<string, any>;
}
