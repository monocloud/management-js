import { HttpUserAddressRequest } from './http-user-address-request';

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
  /**
   * Preferred username for the user which may be display purposes.
   * @type {string}
   * @memberof UpdateClaimsRequest
   */
  preferred_username?: string | null;
  /**
   * URL of the user\'s profile page.
   * @type {string}
   * @memberof UpdateClaimsRequest
   */
  profile?: string | null;
  /**
   * User\'s birth date in ISO 8601 format (YYYY-MM-DD).
   * @type {string}
   * @memberof UpdateClaimsRequest
   */
  birthdate?: string | null;
  /**
   * URL of the user\'s personal or professional website.
   * @type {string}
   * @memberof UpdateClaimsRequest
   */
  website?: string | null;
  /**
   * User\'s gender.
   * @type {string}
   * @memberof UpdateClaimsRequest
   */
  gender?: string | null;
  /**
   * Time zone associated with the user\'s location expressed using a IANA time zone name.
   * @type {string}
   * @memberof UpdateClaimsRequest
   */
  zoneinfo?: string | null;
  /**
   * Preferred locale of the user expressed using a BCP 47 language tag.
   * @type {string}
   * @memberof UpdateClaimsRequest
   */
  locale?: string | null;
  /**
   * Physical or residential address associated with the user.
   * @type {HttpUserAddressRequest}
   * @memberof UpdateClaimsRequest
   */
  address?: HttpUserAddressRequest | null;
  /**
   * Allows bypassing profile conformance checks enforced by sign-up policies.
   * @type {boolean}
   * @memberof UpdateClaimsRequest
   */
  skip_conformance_checks?: boolean;
}
