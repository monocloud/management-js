import {
  MonoCloudClientBase,
  MonoCloudResponse,
  MonoCloudPageResponse,
  MonoCloudRequest,
} from '@monocloud/api-core';
import {
  ApiResource,
  ApiResourceClient,
  ApiScope,
  ClaimResource,
  CreateApiResourceClientRequest,
  CreateApiResourceRequest,
  CreateApiScopeRequest,
  CreateClaimResourceRequest,
  CreateScopeRequest,
  CreateSecretRequest,
  PatchApiResourceClientRequest,
  PatchApiResourceRequest,
  PatchApiScopeRequest,
  PatchClaimResourceRequest,
  PatchScopeRequest,
  Scope,
  Secret,
} from '../models';

export class ResourcesClient extends MonoCloudClientBase {
  /**
   * @summary List API resources
   * @description Retrieves a paginated list of API resources. Optional query parameters allow searching, filtering, and sorting the results.
   * @param {number} [page] The page number to retrieve.
   * @param {number} [size] The number of resources to return per page.
   * @param {string} [filter] Optional Lucene-style filter expression used to search by attributes.
   * @param {string} [sort] Sort expression in the format `field:direction`, where direction is `1` for ascending or `-1` for descending. Supported fields include - `name`, `display_name`, and `creation_time`
   * @returns ApiResource[] - The API resources were retrieved successfully
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   */
  public getAllApiResources(
    page?: number,
    size?: number,
    filter?: string,
    sort?: string
  ): Promise<MonoCloudPageResponse<ApiResource[]>> {
    const url = `/resources/api_resources`;

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

    return this.processPaginatedRequest<ApiResource[]>(request);
  }

  /**
   * @summary Create an API resource
   * @description Creates a new API resource that represents a protected backend or service and can be referenced by clients to request access tokens.
   * @param {CreateApiResourceRequest} createApiResourceRequest The request payload used to create an API resource.
   * @returns ApiResource - The API resource was created successfully
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   */
  public createApiResource(
    createApiResourceRequest: CreateApiResourceRequest
  ): Promise<MonoCloudResponse<ApiResource>> {
    const url = `/resources/api_resources`;

    const request: MonoCloudRequest = { method: 'POST', url };

    request.body = createApiResourceRequest;

    return this.processRequest<ApiResource>(request);
  }

  /**
   * @summary Retrieve an API resource
   * @description Retrieves detailed information for the specified API resource.
   * @param {string} apiId The unique identifier of the API resource.
   * @returns ApiResource - The API resource was retrieved successfully
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   */
  public findApiResourceById(
    apiId: string
  ): Promise<MonoCloudResponse<ApiResource>> {
    const url = `/resources/api_resources/{api_id}`.replace(
      `{${'api_id'}}`,
      encodeURIComponent(String(apiId))
    );

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<ApiResource>(request);
  }

  /**
   * @summary Update an API resource
   * @description Applies a partial update to the specified API resource. Only fields included in the request are updated.
   * @param {string} apiId The unique identifier of the API resource.
   * @param {PatchApiResourceRequest} patchApiResourceRequest The request payload used to update an API resource.
   * @returns ApiResource - The API resource was updated successfully
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   */
  public patchApiResource(
    apiId: string,
    patchApiResourceRequest: PatchApiResourceRequest
  ): Promise<MonoCloudResponse<ApiResource>> {
    const url = `/resources/api_resources/{api_id}`.replace(
      `{${'api_id'}}`,
      encodeURIComponent(String(apiId))
    );

    const request: MonoCloudRequest = { method: 'PATCH', url };

    request.body = patchApiResourceRequest;

    return this.processRequest<ApiResource>(request);
  }

  /**
   * @summary Delete an API resource
   * @description Permanently deletes the specified API resource and all API scopes defined for it.
   * @warning This operation is irreversible.
   * @param {string} apiId The unique identifier of the API resource.
   * @returns The API resource was deleted successfully
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   */
  public deleteApiResource(apiId: string): Promise<MonoCloudResponse<null>> {
    const url = `/resources/api_resources/{api_id}`.replace(
      `{${'api_id'}}`,
      encodeURIComponent(String(apiId))
    );

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }

  /**
   * @summary List API resource secrets
   * @description Retrieves a list of secrets associated with the API resource.
   * @param {string} apiId The unique identifier of the API resource.
   * @returns Secret[] - The API resource secrets were retrieved successfully
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   */
  public getAllApiResourceSecrets(
    apiId: string
  ): Promise<MonoCloudResponse<Secret[]>> {
    const url = `/resources/api_resources/{api_id}/secrets`.replace(
      `{${'api_id'}}`,
      encodeURIComponent(String(apiId))
    );

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<Secret[]>(request);
  }

  /**
   * @summary Create an API resource secret
   * @description Creates a new secret credential for the API resource, used to authenticate the resource during token introspection.
   * @note Access to the API secret creation endpoint requires an active ScaleX subscription.
   * @param {string} apiId The unique identifier of the API resource.
   * @param {CreateSecretRequest} createSecretRequest The request payload used to create an API resource secret.
   * @returns Secret - The API resource secret was created successfully
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   */
  public createApiResourceSecret(
    apiId: string,
    createSecretRequest: CreateSecretRequest
  ): Promise<MonoCloudResponse<Secret>> {
    const url = `/resources/api_resources/{api_id}/secrets`.replace(
      `{${'api_id'}}`,
      encodeURIComponent(String(apiId))
    );

    const request: MonoCloudRequest = { method: 'POST', url };

    request.body = createSecretRequest;

    return this.processRequest<Secret>(request);
  }

  /**
   * @summary Retrieve an API resource secret
   * @description Retrieves detailed information for the specified API resource secret.
   * @param {string} secretId The unique identifier of the API resource secret.
   * @param {string} apiId The unique identifier of the API resource.
   * @returns Secret - The API resource secret was retrieved successfully
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   */
  public findApiResourceSecretById(
    secretId: string,
    apiId: string
  ): Promise<MonoCloudResponse<Secret>> {
    const url = `/resources/api_resources/{api_id}/secrets/{secret_id}`
      .replace(`{${'secret_id'}}`, encodeURIComponent(String(secretId)))
      .replace(`{${'api_id'}}`, encodeURIComponent(String(apiId)));

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<Secret>(request);
  }

  /**
   * @summary Delete an API resource secret
   * @description Permanently deletes the specified API resource secret.
   * @warning This operation is irreversible. Tokens presented to this API resource can no longer be introspected using this secret.
   * @param {string} apiId The unique identifier of the API resource.
   * @param {string} secretId The unique identifier of the API resource secret.
   * @returns The API resource secret was deleted successfully
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   */
  public deleteApiResourceSecret(
    apiId: string,
    secretId: string
  ): Promise<MonoCloudResponse<null>> {
    const url = `/resources/api_resources/{api_id}/secrets/{secret_id}`
      .replace(`{${'api_id'}}`, encodeURIComponent(String(apiId)))
      .replace(`{${'secret_id'}}`, encodeURIComponent(String(secretId)));

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }

  /**
   * @summary List API scopes
   * @description Retrieves a paginated list of API scopes for the specified API resource. Optional query parameters allow searching, filtering, and sorting the results.
   * @param {string} apiId The unique identifier of the API resource.
   * @param {number} [page] The page number to retrieve.
   * @param {number} [size] The number of resources to return per page.
   * @param {string} [filter] Optional Lucene-style filter expression used to search by attributes.
   * @param {string} [sort] Sort expression in the format `field:direction`, where direction is `1` for ascending or `-1` for descending. Supported fields include - `name`, `display_name`, and `creation_time`
   * @returns ApiScope[] - The API scopes were retrieved successfully
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   */
  public getAllApiScopes(
    apiId: string,
    page?: number,
    size?: number,
    filter?: string,
    sort?: string
  ): Promise<MonoCloudPageResponse<ApiScope[]>> {
    const url = `/resources/api_resources/{api_id}/scopes`.replace(
      `{${'api_id'}}`,
      encodeURIComponent(String(apiId))
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

    return this.processPaginatedRequest<ApiScope[]>(request);
  }

  /**
   * @summary Create an API scope
   * @description Creates a new API scope for the specified API resource. An API scope represents a permission that clients may request and that determines the claims and access level included in issued access tokens.
   * @param {string} apiId The unique identifier of the API resource.
   * @param {CreateApiScopeRequest} createApiScopeRequest The request payload used to create an API scope.
   * @returns ApiScope - The API scope was created successfully
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   */
  public createApiScope(
    apiId: string,
    createApiScopeRequest: CreateApiScopeRequest
  ): Promise<MonoCloudResponse<ApiScope>> {
    const url = `/resources/api_resources/{api_id}/scopes`.replace(
      `{${'api_id'}}`,
      encodeURIComponent(String(apiId))
    );

    const request: MonoCloudRequest = { method: 'POST', url };

    request.body = createApiScopeRequest;

    return this.processRequest<ApiScope>(request);
  }

  /**
   * @summary Retrieve an API scope
   * @description Retrieves detailed information for the specified API scope.
   * @param {string} scopeId The unique identifier of the API scope.
   * @param {string} apiId The unique identifier of the API resource.
   * @returns ApiScope - The API scope was retrieved successfully
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   */
  public findApiScopeById(
    scopeId: string,
    apiId: string
  ): Promise<MonoCloudResponse<ApiScope>> {
    const url = `/resources/api_resources/{api_id}/scopes/{scope_id}`
      .replace(`{${'scope_id'}}`, encodeURIComponent(String(scopeId)))
      .replace(`{${'api_id'}}`, encodeURIComponent(String(apiId)));

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<ApiScope>(request);
  }

  /**
   * @summary Update an API scope
   * @description Applies a partial update to the specified API scope. Only fields included in the request are updated.
   * @param {string} scopeId The unique identifier of the API scope.
   * @param {string} apiId The unique identifier of the API resource.
   * @param {PatchApiScopeRequest} patchApiScopeRequest The request payload used to update an API scope.
   * @returns ApiScope - The API scope was updated successfully
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   */
  public patchApiScope(
    scopeId: string,
    apiId: string,
    patchApiScopeRequest: PatchApiScopeRequest
  ): Promise<MonoCloudResponse<ApiScope>> {
    const url = `/resources/api_resources/{api_id}/scopes/{scope_id}`
      .replace(`{${'scope_id'}}`, encodeURIComponent(String(scopeId)))
      .replace(`{${'api_id'}}`, encodeURIComponent(String(apiId)));

    const request: MonoCloudRequest = { method: 'PATCH', url };

    request.body = patchApiScopeRequest;

    return this.processRequest<ApiScope>(request);
  }

  /**
   * @summary Delete an API scope
   * @description Permanently deletes the specified API scope from the API resource.
   * @warning This operation is irreversible. Once deleted, clients will no longer be able to request or obtain access tokens containing this scope.
   * @param {string} scopeId The unique identifier of the API scope.
   * @param {string} apiId The unique identifier of the API resource.
   * @returns The API scope was deleted successfully
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   */
  public deleteApiScope(
    scopeId: string,
    apiId: string
  ): Promise<MonoCloudResponse<null>> {
    const url = `/resources/api_resources/{api_id}/scopes/{scope_id}`
      .replace(`{${'scope_id'}}`, encodeURIComponent(String(scopeId)))
      .replace(`{${'api_id'}}`, encodeURIComponent(String(apiId)));

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }

  /**
   * @summary List API resource client access
   * @description Retrieves a paginated list of client access entries for the specified API resource. Optional query parameters allow sorting of the results.
   * @param {string} apiId The unique identifier of the API resource.
   * @param {number} [page] The page number to retrieve.
   * @param {number} [size] The number of API–client access entries to return per page.
   * @param {string} [sort] Sort expression in the format `field:direction`, where direction is `1` for ascending or `-1` for descending. Supported fields include - `client_id`, `creation_time` and `last_updated`
   * @returns ApiResourceClient[] - The API resource client access entries were retrieved successfully
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   */
  public getAllApiResourceClients(
    apiId: string,
    page?: number,
    size?: number,
    sort?: string
  ): Promise<MonoCloudPageResponse<ApiResourceClient[]>> {
    const url = `/resources/api_resources/{api_id}/clients`.replace(
      `{${'api_id'}}`,
      encodeURIComponent(String(apiId))
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

    return this.processPaginatedRequest<ApiResourceClient[]>(request);
  }

  /**
   * @summary List API resource access for a client
   * @description Retrieves a paginated list of API resource access entries associated with the specified client. Optional query parameters allow sorting of the results.
   * @param {string} clientId The unique identifier of the client.
   * @param {number} [page] The page number to retrieve.
   * @param {number} [size] The number of API–client access entries to return per page.
   * @param {string} [sort] Sort expression in the format `field:direction`, where direction is `1` for ascending or `-1` for descending. Supported fields include - `client_id`, `creation_time` and `last_updated`
   * @returns ApiResourceClient[] - The client API resource access entries were retrieved successfully
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   */
  public getAllClientApiResources(
    clientId: string,
    page?: number,
    size?: number,
    sort?: string
  ): Promise<MonoCloudPageResponse<ApiResourceClient[]>> {
    const url = `/resources/api_resources/clients/{client_id}`.replace(
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

    return this.processPaginatedRequest<ApiResourceClient[]>(request);
  }

  /**
   * @summary Create API resource client access
   * @description Creates an access entry between a client and an API resource, authorizing the client to request access tokens for the resource.
   * @param {string} apiId The unique identifier of the API resource.
   * @param {string} clientId The unique identifier of the client.
   * @param {CreateApiResourceClientRequest} createApiResourceClientRequest The request payload used to create an access entry authorizing the client for the API resource.
   * @returns ApiResourceClient - The API resource client access entry was created successfully
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   */
  public createApiResourceClient(
    apiId: string,
    clientId: string,
    createApiResourceClientRequest: CreateApiResourceClientRequest
  ): Promise<MonoCloudResponse<ApiResourceClient>> {
    const url = `/resources/api_resources/{api_id}/clients/{client_id}`
      .replace(`{${'api_id'}}`, encodeURIComponent(String(apiId)))
      .replace(`{${'client_id'}}`, encodeURIComponent(String(clientId)));

    const request: MonoCloudRequest = { method: 'POST', url };

    request.body = createApiResourceClientRequest;

    return this.processRequest<ApiResourceClient>(request);
  }

  /**
   * @summary Retrieve an API resource client access entry
   * @description Retrieves detailed information for an access entry that authorizes a specific client for the specified API resource.
   * @param {string} apiId The unique identifier of the API resource.
   * @param {string} clientId The unique identifier of the client.
   * @returns ApiResourceClient - The API resource client access entry was retrieved successfully
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   */
  public findApiResourceClient(
    apiId: string,
    clientId: string
  ): Promise<MonoCloudResponse<ApiResourceClient>> {
    const url = `/resources/api_resources/{api_id}/clients/{client_id}`
      .replace(`{${'api_id'}}`, encodeURIComponent(String(apiId)))
      .replace(`{${'client_id'}}`, encodeURIComponent(String(clientId)));

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<ApiResourceClient>(request);
  }

  /**
   * @summary Update an API resource client access entry
   * @description Updates the scope restrictions for an existing client access entry.
   * @param {string} apiId The unique identifier of the API resource.
   * @param {string} clientId The unique identifier of the client.
   * @param {PatchApiResourceClientRequest} patchApiResourceClientRequest The request payload used to update the client access configuration.
   * @returns ApiResourceClient - The API resource client access entry was updated successfully
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   */
  public patchApiResourceClient(
    apiId: string,
    clientId: string,
    patchApiResourceClientRequest: PatchApiResourceClientRequest
  ): Promise<MonoCloudResponse<ApiResourceClient>> {
    const url = `/resources/api_resources/{api_id}/clients/{client_id}`
      .replace(`{${'api_id'}}`, encodeURIComponent(String(apiId)))
      .replace(`{${'client_id'}}`, encodeURIComponent(String(clientId)));

    const request: MonoCloudRequest = { method: 'PATCH', url };

    request.body = patchApiResourceClientRequest;

    return this.processRequest<ApiResourceClient>(request);
  }

  /**
   * @summary Remove an API resource client access entry
   * @description Removes the access entry that authorizes the specified client to request tokens for the API resource. After removal, the client will no longer be permitted to access this API resource.
   * @param {string} apiId The unique identifier of the API resource.
   * @param {string} clientId The unique identifier of the client.
   * @returns The API resource client access entry was removed successfully
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   */
  public removeApiResourceClient(
    apiId: string,
    clientId: string
  ): Promise<MonoCloudResponse<null>> {
    const url = `/resources/api_resources/{api_id}/clients/{client_id}`
      .replace(`{${'api_id'}}`, encodeURIComponent(String(apiId)))
      .replace(`{${'client_id'}}`, encodeURIComponent(String(clientId)));

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }

  /**
   * @summary List scopes
   * @description Retrieves a paginated list of identity scopes. Optional query parameters allow searching, filtering, and sorting the results.
   * @param {number} [page] The page number to retrieve.
   * @param {number} [size] The number of resources to return per page.
   * @param {string} [filter] Optional Lucene-style filter expression used to search by attributes.
   * @param {string} [sort] Sort expression in the format `field:direction`, where direction is `1` for ascending or `-1` for descending. Supported fields include - `name`, `display_name`, and `creation_time`
   * @returns Scope[] - The scopes were retrieved successfully
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   */
  public getAllScopes(
    page?: number,
    size?: number,
    filter?: string,
    sort?: string
  ): Promise<MonoCloudPageResponse<Scope[]>> {
    const url = `/resources/scopes`;

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

    return this.processPaginatedRequest<Scope[]>(request);
  }

  /**
   * @summary Create a scope
   * @description Creates a new identity scope that defines a permission clients can request to receive specific user claims.
   * @param {CreateScopeRequest} createScopeRequest The request payload used to create a new scope.
   * @returns Scope - The scope was created successfully
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   */
  public createScope(
    createScopeRequest: CreateScopeRequest
  ): Promise<MonoCloudResponse<Scope>> {
    const url = `/resources/scopes`;

    const request: MonoCloudRequest = { method: 'POST', url };

    request.body = createScopeRequest;

    return this.processRequest<Scope>(request);
  }

  /**
   * @summary Retrieve a scope
   * @description Retrieves detailed information for the specified identity scope.
   * @param {string} scopeId The unique identifier of the scope.
   * @returns Scope - The scope was retrieved successfully
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   */
  public findScopeById(scopeId: string): Promise<MonoCloudResponse<Scope>> {
    const url = `/resources/scopes/{scope_id}`.replace(
      `{${'scope_id'}}`,
      encodeURIComponent(String(scopeId))
    );

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<Scope>(request);
  }

  /**
   * @summary Update a scope
   * @description Applies a partial update to the specified identity scope. Only fields included in the request are updated.
   * @param {string} scopeId The unique identifier of the scope.
   * @param {PatchScopeRequest} patchScopeRequest The request payload used to update a scope.
   * @returns Scope - The scope was updated successfully
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   */
  public patchScope(
    scopeId: string,
    patchScopeRequest: PatchScopeRequest
  ): Promise<MonoCloudResponse<Scope>> {
    const url = `/resources/scopes/{scope_id}`.replace(
      `{${'scope_id'}}`,
      encodeURIComponent(String(scopeId))
    );

    const request: MonoCloudRequest = { method: 'PATCH', url };

    request.body = patchScopeRequest;

    return this.processRequest<Scope>(request);
  }

  /**
   * @summary Delete a scope
   * @description Permanently deletes the specified identity scope.
   * @warning This operation is irreversible.
   * @param {string} scopeId The unique identifier of the scope.
   * @returns The scope was deleted successfully
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   */
  public deleteScope(scopeId: string): Promise<MonoCloudResponse<null>> {
    const url = `/resources/scopes/{scope_id}`.replace(
      `{${'scope_id'}}`,
      encodeURIComponent(String(scopeId))
    );

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }

  /**
   * @summary List claims
   * @description Retrieves a paginated list of claims. Optional query parameters allow searching, filtering, and sorting the results.
   * @param {number} [page] The page number to retrieve.
   * @param {number} [size] The number of resources to return per page.
   * @param {string} [filter] Optional Lucene-style filter expression used to search by attributes.
   * @param {string} [sort] Sort expression in the format `field:direction`, where direction is `1` for ascending or `-1` for descending. Supported fields include - `name`, `display_name`, and `creation_time`
   * @returns ClaimResource[] - The claims were retrieved successfully
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   */
  public getAllClaimResources(
    page?: number,
    size?: number,
    filter?: string,
    sort?: string
  ): Promise<MonoCloudPageResponse<ClaimResource[]>> {
    const url = `/resources/claim_resources`;

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

    return this.processPaginatedRequest<ClaimResource[]>(request);
  }

  /**
   * @summary Create a claim
   * @description Creates a new claim that may be referenced by identity scopes to control inclusion in tokens and `UserInfo` responses.
   * @param {CreateClaimResourceRequest} createClaimResourceRequest The request payload used to create a claim.
   * @returns ClaimResource - The claim was created successfully
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   */
  public createClaimResource(
    createClaimResourceRequest: CreateClaimResourceRequest
  ): Promise<MonoCloudResponse<ClaimResource>> {
    const url = `/resources/claim_resources`;

    const request: MonoCloudRequest = { method: 'POST', url };

    request.body = createClaimResourceRequest;

    return this.processRequest<ClaimResource>(request);
  }

  /**
   * @summary Retrieve a claim
   * @description Retrieves detailed information for the specified claim.
   * @param {string} claimId The unique identifier of the claim.
   * @returns ClaimResource - The claim was retrieved successfully
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   */
  public findClaimResourceById(
    claimId: string
  ): Promise<MonoCloudResponse<ClaimResource>> {
    const url = `/resources/claim_resources/{claim_id}`.replace(
      `{${'claim_id'}}`,
      encodeURIComponent(String(claimId))
    );

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<ClaimResource>(request);
  }

  /**
   * @summary Update a claim
   * @description Applies a partial update to the specified claim. Only fields included in the request are updated.
   * @note This operation applies only to custom claims. Built-in claims cannot be modified in order to preserve OpenID Connect compliance.
   * @param {string} claimId The unique identifier of the claim.
   * @param {PatchClaimResourceRequest} patchClaimResourceRequest The request payload used to update a claim.
   * @returns ClaimResource - The claim was updated successfully
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   */
  public patchClaimResource(
    claimId: string,
    patchClaimResourceRequest: PatchClaimResourceRequest
  ): Promise<MonoCloudResponse<ClaimResource>> {
    const url = `/resources/claim_resources/{claim_id}`.replace(
      `{${'claim_id'}}`,
      encodeURIComponent(String(claimId))
    );

    const request: MonoCloudRequest = { method: 'PATCH', url };

    request.body = patchClaimResourceRequest;

    return this.processRequest<ClaimResource>(request);
  }

  /**
   * @summary Delete a claim
   * @description Permanently deletes the specified claim.
   * @warning This operation is irreversible.
   * @param {string} claimId The unique identifier of the claim.
   * @returns The claim was deleted successfully
   * @throws {MonoCloudException}
   * @memberof ResourcesClient
   */
  public deleteClaimResource(
    claimId: string
  ): Promise<MonoCloudResponse<null>> {
    const url = `/resources/claim_resources/{claim_id}`.replace(
      `{${'claim_id'}}`,
      encodeURIComponent(String(claimId))
    );

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }
}
