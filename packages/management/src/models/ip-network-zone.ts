import { NetworkZoneCategory } from './network-zone-category';
import { NetworkZoneOperator } from './network-zone-operator';

/**
 * IP Network Zone Response: Represents a IP Network Zone.
 * @export
 * @interface IpNetworkZone
 */
export interface IpNetworkZone {
  /**
   * The unique identifier of the network zone.
   * @type {string}
   * @memberof IpNetworkZone
   */
  id: string;
  /**
   * Indicates whether the zone is enabled.
   * @type {boolean}
   * @memberof IpNetworkZone
   */
  enabled: boolean;
  /**
   * Human-readable name for the zone.
   * @type {string}
   * @memberof IpNetworkZone
   */
  name: string;
  /**
   * Description that explains the zone.
   * @type {string}
   * @memberof IpNetworkZone
   */
  description?: string | null;
  /**
   * The category the zone belongs to.
   * @type {NetworkZoneCategory}
   * @memberof IpNetworkZone
   */
  category: NetworkZoneCategory;
  /**
   * Specifies the creation time of the zone (in Epoch).
   * @type {number}
   * @memberof IpNetworkZone
   */
  creation_time: number;
  /**
   * Specifies the last update time of the zone (in Epoch).
   * @type {number}
   * @memberof IpNetworkZone
   */
  last_updated: number;
  /**
   * The evaluation operator for the network zone.
   * @type {NetworkZoneOperator}
   * @memberof IpNetworkZone
   */
  operator: NetworkZoneOperator;
  /**
   * @type {string}
   * @memberof IpNetworkZone
   */
  type: string;
  /**
   * List of IPv4/IPv6 addresses or CIDR ranges.
   * @type {string[]}
   * @memberof IpNetworkZone
   */
  ip_ranges: string[];
}
