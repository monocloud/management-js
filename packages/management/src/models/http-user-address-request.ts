/**
 *
 * @export
 * @interface HttpUserAddressRequest
 */
export interface HttpUserAddressRequest {
  /**
   * Single string combining various components of the address, such as street address, locality, region, postal code, and country.
   * @type {string}
   * @memberof HttpUserAddressRequest
   */
  formatted?: string | null;
  /**
   * The street part of the address, typically including house/building number and street name.
   * @type {string}
   * @memberof HttpUserAddressRequest
   */
  street_address?: string | null;
  /**
   * The city or town of the address.
   * @type {string}
   * @memberof HttpUserAddressRequest
   */
  locality?: string | null;
  /**
   * The state, province, or administrative region associated with the address.
   * @type {string}
   * @memberof HttpUserAddressRequest
   */
  region?: string | null;
  /**
   * Postal code of the address.
   * @type {string}
   * @memberof HttpUserAddressRequest
   */
  postal_code?: string | null;
  /**
   * The name of the country associated with the address.
   * @type {string}
   * @memberof HttpUserAddressRequest
   */
  country?: string | null;
}
