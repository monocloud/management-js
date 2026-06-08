import { NetworkZoneCategory } from './network-zone-category';
import { NetworkZoneOperator } from './network-zone-operator';

/**
 * Patch IP Network Zone Request: Used to partially update an IP network zone.
 * @export
 * @interface PatchIpNetworkZoneRequest
 */
export interface PatchIpNetworkZoneRequest {
  /**
   * Indicates whether the zone is enabled.
   * @type {boolean}
   * @memberof PatchIpNetworkZoneRequest
   */
  enabled?: boolean;
  /**
   * Human-readable name for the zone.
   * @type {string}
   * @memberof PatchIpNetworkZoneRequest
   */
  name?: string;
  /**
   * Description that explains the zone.
   * @type {string}
   * @memberof PatchIpNetworkZoneRequest
   */
  description?: string | null;
  /**
   * The category the zone belongs to.
   * @type {NetworkZoneCategory}
   * @memberof PatchIpNetworkZoneRequest
   */
  category?: NetworkZoneCategory;
  /**
   * The evaluation operator for the network zone.
   * @type {NetworkZoneOperator}
   * @memberof PatchIpNetworkZoneRequest
   */
  operator?: NetworkZoneOperator;
  /**
   * List of IPv4/IPv6 addresses or CIDR ranges.
   * @type {string[]}
   * @memberof PatchIpNetworkZoneRequest
   */
  ip_ranges?: string[];
}
