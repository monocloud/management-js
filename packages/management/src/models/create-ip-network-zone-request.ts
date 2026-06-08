import { NetworkZoneCategory } from './network-zone-category';
import { NetworkZoneOperator } from './network-zone-operator';

/**
 * Create IP Network Zone Request: Used to create an IP network zone.
 * @export
 * @interface CreateIpNetworkZoneRequest
 */
export interface CreateIpNetworkZoneRequest {
  /**
   * Indicates whether the zone is enabled.
   * @type {boolean}
   * @memberof CreateIpNetworkZoneRequest
   */
  enabled?: boolean;
  /**
   * Human-readable name for the zone.
   * @type {string}
   * @memberof CreateIpNetworkZoneRequest
   */
  name: string;
  /**
   * Description that explains the zone.
   * @type {string}
   * @memberof CreateIpNetworkZoneRequest
   */
  description?: string | null;
  /**
   * The category the zone belongs to.
   * @type {NetworkZoneCategory}
   * @memberof CreateIpNetworkZoneRequest
   */
  category: NetworkZoneCategory;
  /**
   * The evaluation operator for the network zone.
   * @type {NetworkZoneOperator}
   * @memberof CreateIpNetworkZoneRequest
   */
  operator: NetworkZoneOperator;
  /**
   * List of IPv4/IPv6 addresses or CIDR ranges.
   * @type {string[]}
   * @memberof CreateIpNetworkZoneRequest
   */
  ip_ranges?: string[];
}
