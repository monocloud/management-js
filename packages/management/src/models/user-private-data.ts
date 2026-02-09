/**
 * User Private Data: Returns private data stored for a user.
 * @export
 * @interface UserPrivateData
 */
export interface UserPrivateData {
  /**
   * The private data associated with the user\'s account.
   * @type {{ [key: string]: any; }}
   * @memberof UserPrivateData
   */
  private_data: Record<string, any>;
}
