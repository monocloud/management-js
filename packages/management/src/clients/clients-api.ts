import {
  MonoCloudClientBase,
  MonoCloudResponse,
  MonoCloudPageResponse,
  MonoCloudRequest,
} from '@monocloud/management-core';
import {
  Application,
  ApplicationGroup,
  CreateApplicationRequest,
  CreateSecretRequest,
  PatchApplicationRequest,
  Secret,
} from '../models';

export class ClientsClient extends MonoCloudClientBase {
  /**
   * @summary List applications
   * @description Retrieves a paginated list of applications. Optional query parameters allow searching, filtering, and sorting the results.
   * @param {number} [page] The page number to retrieve.
   * @param {number} [size] The number of client applications to return per page.
   * @param {string} [filter] Optional Lucene-style filter expression used to search by attributes.
   * @param {string} [sort] Sort expression in the format `field:direction`, where direction is `1` for ascending or `-1` for descending. Supported fields include - `client_name` and `creation_time`
   * @returns Application[] - The applications were retrieved successfully
   * @throws {MonoCloudException}
   * @memberof ClientsClient
   */
  public getAllApplications(
    page?: number,
    size?: number,
    filter?: string,
    sort?: string
  ): Promise<MonoCloudPageResponse<Application[]>> {
    const url = `/applications`;

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

    return this.processPaginatedRequest<Application[]>(request);
  }

  /**
   * @summary Create a application
   * @description Creates a new application application with the specified configuration, including redirect URIs, authentication flows, and access settings.
   * @param {CreateApplicationRequest} createApplicationRequest The request payload used to create a application.
   * @returns Application - The application was created successfully
   * @throws {MonoCloudException}
   * @memberof ClientsClient
   */
  public createApplication(
    createApplicationRequest: CreateApplicationRequest
  ): Promise<MonoCloudResponse<Application>> {
    const url = `/applications`;

    const request: MonoCloudRequest = { method: 'POST', url };

    request.body = createApplicationRequest;

    return this.processRequest<Application>(request);
  }

  /**
   * @summary Retrieve a application
   * @description Retrieves detailed information for the specified application.
   * @param {string} clientId The unique identifier of the application.
   * @returns Application - The application was retrieved successfully
   * @throws {MonoCloudException}
   * @memberof ClientsClient
   */
  public findApplicationById(
    clientId: string
  ): Promise<MonoCloudResponse<Application>> {
    const url = `/applications/{client_id}`.replace(
      `{${'client_id'}}`,
      encodeURIComponent(String(clientId))
    );

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<Application>(request);
  }

  /**
   * @summary Update a application
   * @description Applies a partial update to the specified application. Only fields included in the request are updated.
   * @param {string} clientId The unique identifier of the application.
   * @param {PatchApplicationRequest} patchApplicationRequest The request payload used to update a application.
   * @returns Application - The application was updated successfully
   * @throws {MonoCloudException}
   * @memberof ClientsClient
   */
  public patchApplication(
    clientId: string,
    patchApplicationRequest: PatchApplicationRequest
  ): Promise<MonoCloudResponse<Application>> {
    const url = `/applications/{client_id}`.replace(
      `{${'client_id'}}`,
      encodeURIComponent(String(clientId))
    );

    const request: MonoCloudRequest = { method: 'PATCH', url };

    request.body = patchApplicationRequest;

    return this.processRequest<Application>(request);
  }

  /**
   * @summary Delete a application
   * @description Permanently deletes the specified application.
   * @warning This operation is irreversible.
   * @param {string} clientId The unique identifier of the application.
   * @returns The application was deleted successfully
   * @throws {MonoCloudException}
   * @memberof ClientsClient
   */
  public deleteApplication(clientId: string): Promise<MonoCloudResponse<null>> {
    const url = `/applications/{client_id}`.replace(
      `{${'client_id'}}`,
      encodeURIComponent(String(clientId))
    );

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }

  /**
   * @summary List application secrets
   * @description Retrieves a list of secrets associated with the application.
   * @param {string} clientId The unique identifier of the application.
   * @returns Secret[] - The application secrets were retrieved successfully
   * @throws {MonoCloudException}
   * @memberof ClientsClient
   */
  public getAllApplicationSecrets(
    clientId: string
  ): Promise<MonoCloudResponse<Secret[]>> {
    const url = `/applications/{client_id}/secrets`.replace(
      `{${'client_id'}}`,
      encodeURIComponent(String(clientId))
    );

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<Secret[]>(request);
  }

  /**
   * @summary Create a application secret
   * @description Creates a new secret credential for the specified application, which can be used to authenticate the application when requesting tokens.
   * @param {string} clientId The unique identifier of the application.
   * @param {CreateSecretRequest} createSecretRequest The request payload used to create a application secret.
   * @returns Secret - The application secret was created successfully
   * @throws {MonoCloudException}
   * @memberof ClientsClient
   */
  public createApplicationSecret(
    clientId: string,
    createSecretRequest: CreateSecretRequest
  ): Promise<MonoCloudResponse<Secret>> {
    const url = `/applications/{client_id}/secrets`.replace(
      `{${'client_id'}}`,
      encodeURIComponent(String(clientId))
    );

    const request: MonoCloudRequest = { method: 'POST', url };

    request.body = createSecretRequest;

    return this.processRequest<Secret>(request);
  }

  /**
   * @summary Retrieve a application secret
   * @description Retrieves detailed information for the specified application secret.
   * @param {string} clientId The unique identifier of the application.
   * @param {string} secretId The unique identifier of the application secret.
   * @returns Secret - The application secret was retrieved successfully
   * @throws {MonoCloudException}
   * @memberof ClientsClient
   */
  public findApplicationSecretById(
    clientId: string,
    secretId: string
  ): Promise<MonoCloudResponse<Secret>> {
    const url = `/applications/{client_id}/secrets/{secret_id}`
      .replace(`{${'client_id'}}`, encodeURIComponent(String(clientId)))
      .replace(`{${'secret_id'}}`, encodeURIComponent(String(secretId)));

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<Secret>(request);
  }

  /**
   * @summary Delete a application secret
   * @description Permanently deletes the specified application secret.
   * @warning This operation is irreversible. Any applications using this secret will immediately fail authentication.
   * @param {string} clientId The unique identifier of the application.
   * @param {string} secretId The unique identifier of the application secret.
   * @returns The application secret was deleted successfully
   * @throws {MonoCloudException}
   * @memberof ClientsClient
   */
  public deleteApplicationSecret(
    clientId: string,
    secretId: string
  ): Promise<MonoCloudResponse<null>> {
    const url = `/applications/{client_id}/secrets/{secret_id}`
      .replace(`{${'client_id'}}`, encodeURIComponent(String(clientId)))
      .replace(`{${'secret_id'}}`, encodeURIComponent(String(secretId)));

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }

  /**
   * @summary List application\'s groups
   * @description Retrieves a paginated list of groups associated with the application. Optional query parameters allow sorting of the results.
   * @param {string} clientId The unique identifier of the application.
   * @param {number} [page] The page number to retrieve.
   * @param {number} [size] The number of groups to return per page.
   * @param {string} [sort] Sort expression in the format `field:direction`, where direction is `1` for ascending or `-1` for descending. Supported fields include - `creation_time`.
   * @returns ApplicationGroup[] - The application\&#39;s group associations were retrieved successfully
   * @throws {MonoCloudException}
   * @memberof ClientsClient
   */
  public getAllApplicationGroups(
    clientId: string,
    page?: number,
    size?: number,
    sort?: string
  ): Promise<MonoCloudPageResponse<ApplicationGroup[]>> {
    const url = `/applications/{client_id}/groups`.replace(
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

    return this.processPaginatedRequest<ApplicationGroup[]>(request);
  }

  /**
   * @summary Retrieve a application group
   * @description Retrieves information about the specified group and its association with the application.
   * @param {string} clientId The unique identifier of the application.
   * @param {string} groupId The unique identifier of the group.
   * @returns ApplicationGroup - The application\&#39;s group association was retrieved successfully
   * @throws {MonoCloudException}
   * @memberof ClientsClient
   */
  public findApplicationGroup(
    clientId: string,
    groupId: string
  ): Promise<MonoCloudResponse<ApplicationGroup>> {
    const url = `/applications/{client_id}/groups/{group_id}`
      .replace(`{${'client_id'}}`, encodeURIComponent(String(clientId)))
      .replace(`{${'group_id'}}`, encodeURIComponent(String(groupId)));

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<ApplicationGroup>(request);
  }

  /**
   * @summary Assign a group to a application
   * @description Associates a group with the application and enforces group-based access control — only members of this group are permitted to access the application.
   * @note Access to this endpoint requires an active ScaleX subscription.
   * @param {string} clientId The unique identifier of the application.
   * @param {string} groupId The unique identifier of the group.
   * @returns The group was assigned to the application successfully
   * @throws {MonoCloudException}
   * @memberof ClientsClient
   */
  public assignGroupToApplication(
    clientId: string,
    groupId: string
  ): Promise<MonoCloudResponse<null>> {
    const url = `/applications/{client_id}/groups/{group_id}`
      .replace(`{${'client_id'}}`, encodeURIComponent(String(clientId)))
      .replace(`{${'group_id'}}`, encodeURIComponent(String(groupId)));

    const request: MonoCloudRequest = { method: 'POST', url };

    return this.processRequest<null>(request);
  }

  /**
   * @summary Remove a application from a group
   * @description Removes the specified application from the group. After removal, the group will no longer grant access or permissions to this application.
   * @param {string} clientId The unique identifier of the application.
   * @param {string} groupId The unique identifier of the group.
   * @returns The application was removed from the group successfully
   * @throws {MonoCloudException}
   * @memberof ClientsClient
   */
  public removeGroupFromApplication(
    clientId: string,
    groupId: string
  ): Promise<MonoCloudResponse<null>> {
    const url = `/applications/{client_id}/groups/{group_id}`
      .replace(`{${'client_id'}}`, encodeURIComponent(String(clientId)))
      .replace(`{${'group_id'}}`, encodeURIComponent(String(groupId)));

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }

  /**
   * @summary List applications in group
   * @description Retrieves a paginated list of applications that are assigned to the specified group. Optional query parameters allow searching, filtering, and sorting the results.
   * @param {string} groupId The unique identifier of the group.
   * @param {number} [page] The page number to retrieve.
   * @param {number} [size] The number of client applications to return per page.
   * @param {string} [filter] Optional Lucene-style filter expression used to search by attributes.
   * @param {string} [sort] Sort expression in the format `field:direction`, where direction is `1` for ascending or `-1` for descending. Supported fields include - `client_name` and `creation_time`
   * @returns Application[] - The applications assigned to the group were retrieved successfully
   * @throws {MonoCloudException}
   * @memberof ClientsClient
   */
  public getAllGroupAssignedApplications(
    groupId: string,
    page?: number,
    size?: number,
    filter?: string,
    sort?: string
  ): Promise<MonoCloudPageResponse<Application[]>> {
    const url = `/applications/groups/{group_id}/assigned`.replace(
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

    return this.processPaginatedRequest<Application[]>(request);
  }
}
