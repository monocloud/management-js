import {
  MonoCloudClientBase,
  MonoCloudResponse,
  MonoCloudPageResponse,
  MonoCloudRequest,
} from '@monocloud/management-core';
import {
  CreateIpNetworkZoneRequest,
  CreateRegionalNetworkZoneRequest,
  INetworkZone,
  IpNetworkZone,
  PatchIpNetworkZoneRequest,
  PatchRegionalNetworkZoneRequest,
  RegionalNetworkZone,
} from '../models';

export class NetworkZonesClient extends MonoCloudClientBase {
  /**
   * @summary List network zones
   * @description Retrieves a paginated list of network zones across all types (IP and regional). Each item is discriminated by its `type` field. Optional query parameters may be used to search, filter, and sort the results.
   * @param {number} [page] The page number to retrieve.
   * @param {number} [size] The number of zones to return per page.
   * @param {string} [filter] Optional Lucene-style filter expression used to search by attributes.
   * @param {string} [sort] Sort expression in the format `field:direction`, where direction is `1` for ascending or `-1` for descending. Supported fields include - `name`, `category`, `operator`, `type`, `creation_time` and `last_updated`
   * @returns INetworkZone[] - The network zones were retrieved successfully
   * @throws {MonoCloudException}
   * @memberof NetworkZonesClient
   */
  public getAllNetworkZones(
    page?: number,
    size?: number,
    filter?: string,
    sort?: string
  ): Promise<MonoCloudPageResponse<INetworkZone[]>> {
    const url = `/network_zones`;

    const request: MonoCloudRequest = { method: 'GET', url };

    request.queryParams = {};

    if (page !== undefined && page !== null) {
      request.queryParams.page = String(page);
    }

    if (size !== undefined && size !== null) {
      request.queryParams.size = String(size);
    }

    if (filter !== undefined && filter !== null) {
      request.queryParams.filter = String(filter);
    }

    if (sort !== undefined && sort !== null) {
      request.queryParams.sort = String(sort);
    }

    return this.processPaginatedRequest<INetworkZone[]>(request);
  }

  /**
   * @summary Create an IP network zone
   * @description Creates a new IP network zone containing IP address ranges that can be referenced by policies to allow or restrict access.
   * @note Access to this endpoint requires an active ScaleX subscription.
   * @param {CreateIpNetworkZoneRequest} createIpNetworkZoneRequest The request payload used to create the IP network zone.
   * @returns IpNetworkZone - The IP network zone was created successfully
   * @throws {MonoCloudException}
   * @memberof NetworkZonesClient
   */
  public createIpNetworkZone(
    createIpNetworkZoneRequest: CreateIpNetworkZoneRequest
  ): Promise<MonoCloudResponse<IpNetworkZone>> {
    const url = `/network_zones/ip`;

    const request: MonoCloudRequest = { method: 'POST', url };

    request.body = createIpNetworkZoneRequest;

    return this.processRequest<IpNetworkZone>(request);
  }

  /**
   * @summary Retrieve an IP network zone
   * @description Retrieves detailed information for the specified IP network zone.
   * @param {string} zoneId The unique identifier of the IP network zone.
   * @returns IpNetworkZone - The IP network zone was retrieved successfully
   * @throws {MonoCloudException}
   * @memberof NetworkZonesClient
   */
  public findIpNetworkZoneById(
    zoneId: string
  ): Promise<MonoCloudResponse<IpNetworkZone>> {
    const url = `/network_zones/ip/{zone_id}`.replace(
      `{${'zone_id'}}`,
      encodeURIComponent(String(zoneId))
    );

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<IpNetworkZone>(request);
  }

  /**
   * @summary Update an IP network zone
   * @description Applies a partial update to the specified IP network zone. Only fields included in the request are updated.
   * @note Access to this endpoint requires an active ScaleX subscription.
   * @param {string} zoneId The unique identifier of the IP network zone.
   * @param {PatchIpNetworkZoneRequest} patchIpNetworkZoneRequest The request payload used to update an IP network zone.
   * @returns IpNetworkZone - The IP network zone was updated successfully
   * @throws {MonoCloudException}
   * @memberof NetworkZonesClient
   */
  public patchIpNetworkZone(
    zoneId: string,
    patchIpNetworkZoneRequest: PatchIpNetworkZoneRequest
  ): Promise<MonoCloudResponse<IpNetworkZone>> {
    const url = `/network_zones/ip/{zone_id}`.replace(
      `{${'zone_id'}}`,
      encodeURIComponent(String(zoneId))
    );

    const request: MonoCloudRequest = { method: 'PATCH', url };

    request.body = patchIpNetworkZoneRequest;

    return this.processRequest<IpNetworkZone>(request);
  }

  /**
   * @summary Delete an IP network zone
   * @description Permanently deletes the specified IP network zone.
   * @warning This operation is irreversible.
   * @param {string} zoneId The unique identifier of the IP network zone.
   * @returns The IP network zone was deleted successfully
   * @throws {MonoCloudException}
   * @memberof NetworkZonesClient
   */
  public deleteIpNetworkZone(zoneId: string): Promise<MonoCloudResponse<null>> {
    const url = `/network_zones/ip/{zone_id}`.replace(
      `{${'zone_id'}}`,
      encodeURIComponent(String(zoneId))
    );

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }

  /**
   * @summary Create a regional network zone
   * @description Creates a new regional network zone containing countries that can be referenced by policies to allow or restrict access.
   * @note Access to this endpoint requires an active ScaleX subscription.
   * @param {CreateRegionalNetworkZoneRequest} createRegionalNetworkZoneRequest The request payload used to create the regional network zone.
   * @returns RegionalNetworkZone - The regional network zone was created successfully
   * @throws {MonoCloudException}
   * @memberof NetworkZonesClient
   */
  public createRegionalNetworkZone(
    createRegionalNetworkZoneRequest: CreateRegionalNetworkZoneRequest
  ): Promise<MonoCloudResponse<RegionalNetworkZone>> {
    const url = `/network_zones/regional`;

    const request: MonoCloudRequest = { method: 'POST', url };

    request.body = createRegionalNetworkZoneRequest;

    return this.processRequest<RegionalNetworkZone>(request);
  }

  /**
   * @summary Retrieve a regional network zone
   * @description Retrieves detailed information for the specified regional network zone.
   * @param {string} zoneId The unique identifier of the regional network zone.
   * @returns RegionalNetworkZone - The regional network zone was retrieved successfully
   * @throws {MonoCloudException}
   * @memberof NetworkZonesClient
   */
  public findRegionalNetworkZoneById(
    zoneId: string
  ): Promise<MonoCloudResponse<RegionalNetworkZone>> {
    const url = `/network_zones/regional/{zone_id}`.replace(
      `{${'zone_id'}}`,
      encodeURIComponent(String(zoneId))
    );

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<RegionalNetworkZone>(request);
  }

  /**
   * @summary Update a regional network zone
   * @description Applies a partial update to the specified regional network zone. Only fields included in the request are updated.
   * @note Access to this endpoint requires an active ScaleX subscription.
   * @param {string} zoneId The unique identifier of the regional network zone.
   * @param {PatchRegionalNetworkZoneRequest} patchRegionalNetworkZoneRequest The request payload used to update a regional network zone.
   * @returns RegionalNetworkZone - The regional network zone was updated successfully
   * @throws {MonoCloudException}
   * @memberof NetworkZonesClient
   */
  public patchRegionalNetworkZone(
    zoneId: string,
    patchRegionalNetworkZoneRequest: PatchRegionalNetworkZoneRequest
  ): Promise<MonoCloudResponse<RegionalNetworkZone>> {
    const url = `/network_zones/regional/{zone_id}`.replace(
      `{${'zone_id'}}`,
      encodeURIComponent(String(zoneId))
    );

    const request: MonoCloudRequest = { method: 'PATCH', url };

    request.body = patchRegionalNetworkZoneRequest;

    return this.processRequest<RegionalNetworkZone>(request);
  }

  /**
   * @summary Delete a regional network zone
   * @description Permanently deletes the specified regional network zone.
   * @warning This operation is irreversible.
   * @param {string} zoneId The unique identifier of the regional network zone.
   * @returns The regional network zone was deleted successfully
   * @throws {MonoCloudException}
   * @memberof NetworkZonesClient
   */
  public deleteRegionalNetworkZone(
    zoneId: string
  ): Promise<MonoCloudResponse<null>> {
    const url = `/network_zones/regional/{zone_id}`.replace(
      `{${'zone_id'}}`,
      encodeURIComponent(String(zoneId))
    );

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }
}
