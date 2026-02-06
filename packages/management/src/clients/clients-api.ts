import {
  MonoCloudClientBase,
  MonoCloudResponse,
  MonoCloudPageResponse,
  MonoCloudRequest,
} from '@monocloud/api-core';
import {
  Client,
  ClientGroup,
  CreateClientRequest,
  CreateSecretRequest,
  PatchClientRequest,
  Secret,
} from '../models';

export class ClientsClient extends MonoCloudClientBase {
  /**
   * @summary List clients
   * @description Retrieves a paginated list of clients. Optional query parameters allow searching, filtering, and sorting the results.
   * @param {number} [page] The page number to retrieve.
   * @param {number} [size] The number of client applications to return per page.
   * @param {string} [filter] Optional Lucene-style filter expression used to search by attributes.
   * @param {string} [sort] Sort expression in the format `field:direction`, where direction is `1` for ascending or `-1` for descending. Supported fields include - `client_name` and `creation_time`
   * @returns Client[] - The clients were retrieved successfully
   * @throws {MonoCloudException}
   * @memberof ClientsClient
   */
  public getAllClients(
    page?: number,
    size?: number,
    filter?: string,
    sort?: string
  ): Promise<MonoCloudPageResponse<Client[]>> {
    const url = `/clients`;

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

    return this.processPaginatedRequest<Client[]>(request);
  }

  /**
   * @summary Create a client
   * @description Creates a new client application with the specified configuration, including redirect URIs, authentication flows, and access settings.
   * @param {CreateClientRequest} createClientRequest The request payload used to create a client.
   * @returns Client - The client was created successfully
   * @throws {MonoCloudException}
   * @memberof ClientsClient
   */
  public createClient(
    createClientRequest: CreateClientRequest
  ): Promise<MonoCloudResponse<Client>> {
    const url = `/clients`;

    const request: MonoCloudRequest = { method: 'POST', url };

    request.body = createClientRequest;

    return this.processRequest<Client>(request);
  }

  /**
   * @summary Retrieve a client
   * @description Retrieves detailed information for the specified client.
   * @param {string} clientId The unique identifier of the client.
   * @returns Client - The client was retrieved successfully
   * @throws {MonoCloudException}
   * @memberof ClientsClient
   */
  public findClientById(clientId: string): Promise<MonoCloudResponse<Client>> {
    const url = `/clients/{client_id}`.replace(
      `{${'client_id'}}`,
      encodeURIComponent(String(clientId))
    );

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<Client>(request);
  }

  /**
   * @summary Update a client
   * @description Applies a partial update to the specified client. Only fields included in the request are updated.
   * @param {string} clientId The unique identifier of the client.
   * @param {PatchClientRequest} patchClientRequest The request payload used to update a client.
   * @returns Client - The client was updated successfully
   * @throws {MonoCloudException}
   * @memberof ClientsClient
   */
  public patchClient(
    clientId: string,
    patchClientRequest: PatchClientRequest
  ): Promise<MonoCloudResponse<Client>> {
    const url = `/clients/{client_id}`.replace(
      `{${'client_id'}}`,
      encodeURIComponent(String(clientId))
    );

    const request: MonoCloudRequest = { method: 'PATCH', url };

    request.body = patchClientRequest;

    return this.processRequest<Client>(request);
  }

  /**
   * @summary Delete a client
   * @description Permanently deletes the specified client.
   * @warning This operation is irreversible.
   * @param {string} clientId The unique identifier of the client.
   * @returns The client was deleted successfully
   * @throws {MonoCloudException}
   * @memberof ClientsClient
   */
  public deleteClient(clientId: string): Promise<MonoCloudResponse<null>> {
    const url = `/clients/{client_id}`.replace(
      `{${'client_id'}}`,
      encodeURIComponent(String(clientId))
    );

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }

  /**
   * @summary List client secrets
   * @description Retrieves a list of secrets associated with the client.
   * @param {string} clientId The unique identifier of the client.
   * @returns Secret[] - The client secrets were retrieved successfully
   * @throws {MonoCloudException}
   * @memberof ClientsClient
   */
  public getAllClientSecrets(
    clientId: string
  ): Promise<MonoCloudResponse<Secret[]>> {
    const url = `/clients/{client_id}/secrets`.replace(
      `{${'client_id'}}`,
      encodeURIComponent(String(clientId))
    );

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<Secret[]>(request);
  }

  /**
   * @summary Create a client secret
   * @description Creates a new secret credential for the specified client, which can be used to authenticate the client when requesting tokens.
   * @param {string} clientId The unique identifier of the client.
   * @param {CreateSecretRequest} createSecretRequest The request payload used to create a client secret.
   * @returns Secret - The client secret was created successfully
   * @throws {MonoCloudException}
   * @memberof ClientsClient
   */
  public createClientSecret(
    clientId: string,
    createSecretRequest: CreateSecretRequest
  ): Promise<MonoCloudResponse<Secret>> {
    const url = `/clients/{client_id}/secrets`.replace(
      `{${'client_id'}}`,
      encodeURIComponent(String(clientId))
    );

    const request: MonoCloudRequest = { method: 'POST', url };

    request.body = createSecretRequest;

    return this.processRequest<Secret>(request);
  }

  /**
   * @summary Retrieve a client secret
   * @description Retrieves detailed information for the specified client secret.
   * @param {string} clientId The unique identifier of the client.
   * @param {string} secretId The unique identifier of the client secret.
   * @returns Secret - The client secret was retrieved successfully
   * @throws {MonoCloudException}
   * @memberof ClientsClient
   */
  public findClientSecretById(
    clientId: string,
    secretId: string
  ): Promise<MonoCloudResponse<Secret>> {
    const url = `/clients/{client_id}/secrets/{secret_id}`
      .replace(`{${'client_id'}}`, encodeURIComponent(String(clientId)))
      .replace(`{${'secret_id'}}`, encodeURIComponent(String(secretId)));

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<Secret>(request);
  }

  /**
   * @summary Delete a client secret
   * @description Permanently deletes the specified client secret.
   * @warning This operation is irreversible. Any applications using this secret will immediately fail authentication.
   * @param {string} clientId The unique identifier of the client.
   * @param {string} secretId The unique identifier of the client secret.
   * @returns The client secret was deleted successfully
   * @throws {MonoCloudException}
   * @memberof ClientsClient
   */
  public deleteClientSecret(
    clientId: string,
    secretId: string
  ): Promise<MonoCloudResponse<null>> {
    const url = `/clients/{client_id}/secrets/{secret_id}`
      .replace(`{${'client_id'}}`, encodeURIComponent(String(clientId)))
      .replace(`{${'secret_id'}}`, encodeURIComponent(String(secretId)));

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }

  /**
   * @summary List client\'s groups
   * @description Retrieves a paginated list of groups associated with the client. Optional query parameters allow sorting of the results.
   * @param {string} clientId The unique identifier of the client.
   * @param {number} [page] The page number to retrieve.
   * @param {number} [size] The number of groups to return per page.
   * @param {string} [sort] Sort expression in the format `field:direction`, where direction is `1` for ascending or `-1` for descending. Supported fields include - `creation_time`.
   * @returns ClientGroup[] - The client\&#39;s group associations were retrieved successfully
   * @throws {MonoCloudException}
   * @memberof ClientsClient
   */
  public getAllClientGroups(
    clientId: string,
    page?: number,
    size?: number,
    sort?: string
  ): Promise<MonoCloudPageResponse<ClientGroup[]>> {
    const url = `/clients/{client_id}/groups`.replace(
      `{${'client_id'}}`,
      encodeURIComponent(String(clientId))
    );

    const request: MonoCloudRequest = { method: 'GET', url };

    request.queryParams = {};

    if (page !== undefined && page !== null) {
      request.queryParams.page = String(page);
    }

    if (size !== undefined && size !== null) {
      request.queryParams.size = String(size);
    }

    if (sort !== undefined && sort !== null) {
      request.queryParams.sort = String(sort);
    }

    return this.processPaginatedRequest<ClientGroup[]>(request);
  }

  /**
   * @summary Retrieve a client group
   * @description Retrieves information about the specified group and its association with the client.
   * @param {string} clientId The unique identifier of the client.
   * @param {string} groupId The unique identifier of the group.
   * @returns ClientGroup - The client\&#39;s group association was retrieved successfully
   * @throws {MonoCloudException}
   * @memberof ClientsClient
   */
  public findClientGroup(
    clientId: string,
    groupId: string
  ): Promise<MonoCloudResponse<ClientGroup>> {
    const url = `/clients/{client_id}/groups/{group_id}`
      .replace(`{${'client_id'}}`, encodeURIComponent(String(clientId)))
      .replace(`{${'group_id'}}`, encodeURIComponent(String(groupId)));

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<ClientGroup>(request);
  }

  /**
   * @summary Assign a group to a client
   * @description Associates a group with the client and enforces group-based access control — only members of this group are permitted to access the application.
   * @note Access to this endpoint requires an active ScaleX subscription.
   * @param {string} clientId The unique identifier of the client.
   * @param {string} groupId The unique identifier of the group.
   * @returns The group was assigned to the client successfully
   * @throws {MonoCloudException}
   * @memberof ClientsClient
   */
  public assignGroupToClient(
    clientId: string,
    groupId: string
  ): Promise<MonoCloudResponse<null>> {
    const url = `/clients/{client_id}/groups/{group_id}`
      .replace(`{${'client_id'}}`, encodeURIComponent(String(clientId)))
      .replace(`{${'group_id'}}`, encodeURIComponent(String(groupId)));

    const request: MonoCloudRequest = { method: 'POST', url };

    return this.processRequest<null>(request);
  }

  /**
   * @summary Remove a client from a group
   * @description Removes the specified client from the group. After removal, the group will no longer grant access or permissions to this client.
   * @param {string} clientId The unique identifier of the client.
   * @param {string} groupId The unique identifier of the group.
   * @returns The client was removed from the group successfully
   * @throws {MonoCloudException}
   * @memberof ClientsClient
   */
  public removeGroupFromClient(
    clientId: string,
    groupId: string
  ): Promise<MonoCloudResponse<null>> {
    const url = `/clients/{client_id}/groups/{group_id}`
      .replace(`{${'client_id'}}`, encodeURIComponent(String(clientId)))
      .replace(`{${'group_id'}}`, encodeURIComponent(String(groupId)));

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }

  /**
   * @summary List clients in group
   * @description Retrieves a paginated list of clients that are assigned to the specified group. Optional query parameters allow searching, filtering, and sorting the results.
   * @param {string} groupId The unique identifier of the group.
   * @param {number} [page] The page number to retrieve.
   * @param {number} [size] The number of client applications to return per page.
   * @param {string} [filter] Optional Lucene-style filter expression used to search by attributes.
   * @param {string} [sort] Sort expression in the format `field:direction`, where direction is `1` for ascending or `-1` for descending. Supported fields include - `client_name` and `creation_time`
   * @returns Client[] - The clients assigned to the group were retrieved successfully
   * @throws {MonoCloudException}
   * @memberof ClientsClient
   */
  public getAllGroupAssignedClients(
    groupId: string,
    page?: number,
    size?: number,
    filter?: string,
    sort?: string
  ): Promise<MonoCloudPageResponse<Client[]>> {
    const url = `/clients/groups/{group_id}/assigned`.replace(
      `{${'group_id'}}`,
      encodeURIComponent(String(groupId))
    );

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

    return this.processPaginatedRequest<Client[]>(request);
  }
}
