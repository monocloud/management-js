import { NetworkZoneCategory } from './network-zone-category';
import { NetworkZoneOperator } from './network-zone-operator';

/**
 * Patch Regional Network Zone Request: Used to partially update a regional network zone.
 * @export
 * @interface PatchRegionalNetworkZoneRequest
 */
export interface PatchRegionalNetworkZoneRequest {
  /**
   * Indicates whether the zone is enabled.
   * @type {boolean}
   * @memberof PatchRegionalNetworkZoneRequest
   */
  enabled?: boolean;
  /**
   * Human-readable name for the zone.
   * @type {string}
   * @memberof PatchRegionalNetworkZoneRequest
   */
  name?: string;
  /**
   * Description that explains the zone.
   * @type {string}
   * @memberof PatchRegionalNetworkZoneRequest
   */
  description?: string | null;
  /**
   * The category the zone belongs to.
   * @type {NetworkZoneCategory}
   * @memberof PatchRegionalNetworkZoneRequest
   */
  category?: NetworkZoneCategory;
  /**
   * The evaluation operator for the network zone.
   * @type {NetworkZoneOperator}
   * @memberof PatchRegionalNetworkZoneRequest
   */
  operator?: NetworkZoneOperator;
  /**
   * List of 3166-1 alpha-2 country codes.
   * @type {string[]}
   * @memberof PatchRegionalNetworkZoneRequest
   */
  countries?: string[];
}
