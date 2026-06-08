import { NetworkZoneCategory } from './network-zone-category';
import { NetworkZoneOperator } from './network-zone-operator';

/**
 * Regional Network Zone Response: Represents a Regional Network Zone.
 * @export
 * @interface RegionalNetworkZone
 */
export interface RegionalNetworkZone {
  /**
   * The unique identifier of the network zone.
   * @type {string}
   * @memberof RegionalNetworkZone
   */
  id: string;
  /**
   * Indicates whether the zone is enabled.
   * @type {boolean}
   * @memberof RegionalNetworkZone
   */
  enabled: boolean;
  /**
   * Human-readable name for the zone.
   * @type {string}
   * @memberof RegionalNetworkZone
   */
  name: string;
  /**
   * Description that explains the zone.
   * @type {string}
   * @memberof RegionalNetworkZone
   */
  description?: string | null;
  /**
   * The category the zone belongs to.
   * @type {NetworkZoneCategory}
   * @memberof RegionalNetworkZone
   */
  category: NetworkZoneCategory;
  /**
   * Specifies the creation time of the zone (in Epoch).
   * @type {number}
   * @memberof RegionalNetworkZone
   */
  creation_time: number;
  /**
   * Specifies the last update time of the zone (in Epoch).
   * @type {number}
   * @memberof RegionalNetworkZone
   */
  last_updated: number;
  /**
   * The evaluation operator for the network zone.
   * @type {NetworkZoneOperator}
   * @memberof RegionalNetworkZone
   */
  operator: NetworkZoneOperator;
  /**
   * @type {string}
   * @memberof RegionalNetworkZone
   */
  type: string;
  /**
   * List of 3166-1 alpha-2 country codes.
   * @type {string[]}
   * @memberof RegionalNetworkZone
   */
  countries: string[];
}
