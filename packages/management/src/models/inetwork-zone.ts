import { IpNetworkZone } from './ip-network-zone';
import { RegionalNetworkZone } from './regional-network-zone';

/**
 * @type INetworkZone
 * Network Zone Response: Represents a Network Zone (IP or Regional).
 */
export type INetworkZone =
  | ({ type: 'ip' } & IpNetworkZone)
  | ({ type: 'regional' } & RegionalNetworkZone);
