import { NetworkZoneCategory } from './network-zone-category';
import { NetworkZoneOperator } from './network-zone-operator';

/**
 * Create Regional Network Zone Request: Used to create a regional network zone.
 * @export
 * @interface CreateRegionalNetworkZoneRequest
 */
export interface CreateRegionalNetworkZoneRequest {
  /**
   * Indicates whether the zone is enabled.
   * @type {boolean}
   * @memberof CreateRegionalNetworkZoneRequest
   */
  enabled?: boolean;
  /**
   * Human-readable name for the zone.
   * @type {string}
   * @memberof CreateRegionalNetworkZoneRequest
   */
  name: string;
  /**
   * Description that explains the zone.
   * @type {string}
   * @memberof CreateRegionalNetworkZoneRequest
   */
  description?: string | null;
  /**
   * The category the zone belongs to.
   * @type {NetworkZoneCategory}
   * @memberof CreateRegionalNetworkZoneRequest
   */
  category: NetworkZoneCategory;
  /**
   * The evaluation operator for the network zone.
   * @type {NetworkZoneOperator}
   * @memberof CreateRegionalNetworkZoneRequest
   */
  operator: NetworkZoneOperator;
  /**
   * List of 3166-1 alpha-2 country codes.
   * @type {string[]}
   * @memberof CreateRegionalNetworkZoneRequest
   */
  countries?: string[];
}
