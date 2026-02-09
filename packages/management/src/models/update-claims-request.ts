/**
 * Update Claims Request: Updates standard profile claims associated with a user account.
 * @export
 * @interface UpdateClaimsRequest
 */
export interface UpdateClaimsRequest {
  /**
   * Full name of the user.
   * @type {string}
   * @memberof UpdateClaimsRequest
   */
  name?: string | null;
  /**
   * Given (first) name of the user.
   * @type {string}
   * @memberof UpdateClaimsRequest
   */
  given_name?: string | null;
  /**
   * Middle name or initial of the user.
   * @type {string}
   * @memberof UpdateClaimsRequest
   */
  middle_name?: string | null;
  /**
   * Family (last) name of the user.
   * @type {string}
   * @memberof UpdateClaimsRequest
   */
  family_name?: string | null;
  /**
   * Preferred nickname for the user.
   * @type {string}
   * @memberof UpdateClaimsRequest
   */
  nickname?: string | null;
  /**
   * URL of the user\'s profile image.
   * @type {string}
   * @memberof UpdateClaimsRequest
   */
  picture?: string | null;
}
