import {
  MonoCloudClientBase,
  MonoCloudResponse,
  MonoCloudPageResponse,
  MonoCloudRequest,
} from '@monocloud/management-core';
import {
  AddCertificateRevocationRequest,
  BanTrustStoreCertificateRequest,
  BannedCertificate,
  CertificateRevocation,
  CreateTrustStoreRequest,
  PatchTrustStoreRequest,
  RevocationGrouped,
  TrustStore,
  TrustStoreSummary,
} from '../models';

export class TrustStoresClient extends MonoCloudClientBase {
  /**
   * @summary List trust stores
   * @description Retrieves a paginated list of trust stores. Optional query parameters allow sorting of the results.
   * @param {number} [page] The page number to retrieve.
   * @param {number} [size] The number of trust stores to return per page.
   * @param {string} [sort] Sort expression in the format `field:direction`, where direction is `1` for ascending or `-1` for descending. Supported fields include - `name`, `creation_time` and `last_updated`
   * @returns TrustStoreSummary[] - The trust stores were retrieved successfully
   * @throws {MonoCloudException}
   * @memberof TrustStoresClient
   */
  public getAllTrustStores(
    page?: number,
    size?: number,
    sort?: string
  ): Promise<MonoCloudPageResponse<TrustStoreSummary[]>> {
    const url = `/truststores`;

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

    return this.processPaginatedRequest<TrustStoreSummary[]>(request);
  }

  /**
   * @summary Create a trust store
   * @description Creates a new trust store used to manage trusted certificate authorities and certificate validation settings for mTLS authentication.
   * @param {CreateTrustStoreRequest} createTrustStoreRequest The request payload used to create a trust store.
   * @returns TrustStore - The trust store was created successfully
   * @throws {MonoCloudException}
   * @memberof TrustStoresClient
   */
  public createTrustStore(
    createTrustStoreRequest: CreateTrustStoreRequest
  ): Promise<MonoCloudResponse<TrustStore>> {
    const url = `/truststores`;

    const request: MonoCloudRequest = { method: 'POST', url };

    request.body = createTrustStoreRequest;

    return this.processRequest<TrustStore>(request);
  }

  /**
   * @summary Retrieve a trust store
   * @description Retrieves detailed information for the specified trust store.
   * @param {string} trustStoreId The unique identifier of the trust store.
   * @returns TrustStore - The trust store was retrieved successfully
   * @throws {MonoCloudException}
   * @memberof TrustStoresClient
   */
  public findTrustStoreById(
    trustStoreId: string
  ): Promise<MonoCloudResponse<TrustStore>> {
    const url = `/truststores/{trust_store_id}`.replace(
      `{${'trust_store_id'}}`,
      encodeURIComponent(String(trustStoreId))
    );

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<TrustStore>(request);
  }

  /**
   * @summary Update a trust store
   * @description Applies a partial update to the specified trust store. Only fields included in the request are updated.
   * @param {string} trustStoreId The unique identifier of the trust store.
   * @param {PatchTrustStoreRequest} patchTrustStoreRequest The request payload used to update a trust store.
   * @returns TrustStore - The trust store was updated successfully
   * @throws {MonoCloudException}
   * @memberof TrustStoresClient
   */
  public patchTrustStore(
    trustStoreId: string,
    patchTrustStoreRequest: PatchTrustStoreRequest
  ): Promise<MonoCloudResponse<TrustStore>> {
    const url = `/truststores/{trust_store_id}`.replace(
      `{${'trust_store_id'}}`,
      encodeURIComponent(String(trustStoreId))
    );

    const request: MonoCloudRequest = { method: 'PATCH', url };

    request.body = patchTrustStoreRequest;

    return this.processRequest<TrustStore>(request);
  }

  /**
   * @summary Delete a trust store
   * @description Permanently deletes the specified trust store.
   * @warning This operation is irreversible. Any client applications relying on this trust store for mTLS authentication will immediately fail certificate validation.
   * @param {string} trustStoreId The unique identifier of the trust store.
   * @returns The trust store was deleted successfully
   * @throws {MonoCloudException}
   * @memberof TrustStoresClient
   */
  public deleteTrustStore(
    trustStoreId: string
  ): Promise<MonoCloudResponse<null>> {
    const url = `/truststores/{trust_store_id}`.replace(
      `{${'trust_store_id'}}`,
      encodeURIComponent(String(trustStoreId))
    );

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }

  /**
   * @summary Set a trust store as the default
   * @description Marks the specified trust store as the default for mTLS authentication. This default is used when no explicit trust store is selected for an mTLS endpoint.
   * @param {string} trustStoreId The unique identifier of the trust store.
   * @returns TrustStore - The trust store was set as the default successfully
   * @throws {MonoCloudException}
   * @memberof TrustStoresClient
   */
  public setTrustStoreDefault(
    trustStoreId: string
  ): Promise<MonoCloudResponse<TrustStore>> {
    const url = `/truststores/{trust_store_id}/default`.replace(
      `{${'trust_store_id'}}`,
      encodeURIComponent(String(trustStoreId))
    );

    const request: MonoCloudRequest = { method: 'POST', url };

    return this.processRequest<TrustStore>(request);
  }

  /**
   * @summary List certificate revocations
   * @description Retrieves a paginated list of certificate revocations (offline CRLs) configured for the specified trust store. Optional query parameters allow sorting of the results.
   * @param {string} trustStoreId The unique identifier of the trust store.
   * @param {number} [page] The page number to retrieve.
   * @param {number} [size] The number of revocations to return per page.
   * @param {string} [sort] Sort expression in the format `field:direction`, where direction is `1` for ascending or `-1` for descending. Supported fields include - `creation_time`
   * @returns RevocationGrouped[] - The certificate revocations were retrieved successfully
   * @throws {MonoCloudException}
   * @memberof TrustStoresClient
   */
  public getAllRevocations(
    trustStoreId: string,
    page?: number,
    size?: number,
    sort?: string
  ): Promise<MonoCloudPageResponse<RevocationGrouped[]>> {
    const url = `/truststores/{trust_store_id}/revocations`.replace(
      `{${'trust_store_id'}}`,
      encodeURIComponent(String(trustStoreId))
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

    return this.processPaginatedRequest<RevocationGrouped[]>(request);
  }

  /**
   * @summary Create a certificate revocation
   * @description Uploads and registers an offline Certificate Revocation List (CRL) for the specified trust store. The CRL is used for offline revocation checking when the trust store is configured with `RevocationMode` set to `Offline`.
   * @param {string} trustStoreId The unique identifier of the trust store.
   * @param {AddCertificateRevocationRequest} addCertificateRevocationRequest The request payload defining the certificate revocation list (CRL) to add to the trust store.
   * @returns CertificateRevocation - The certificate revocation list was added successfully
   * @throws {MonoCloudException}
   * @memberof TrustStoresClient
   */
  public addCertificateRevocation(
    trustStoreId: string,
    addCertificateRevocationRequest: AddCertificateRevocationRequest
  ): Promise<MonoCloudResponse<CertificateRevocation>> {
    const url = `/truststores/{trust_store_id}/revocations`.replace(
      `{${'trust_store_id'}}`,
      encodeURIComponent(String(trustStoreId))
    );

    const request: MonoCloudRequest = { method: 'POST', url };

    request.body = addCertificateRevocationRequest;

    return this.processRequest<CertificateRevocation>(request);
  }

  /**
   * @summary Retrieve a certificate revocation
   * @description Retrieves detailed information for the specified certificate revocation (CRL) within the trust store.
   * @param {string} trustStoreId The unique identifier of the trust store.
   * @param {string} revocationId The unique identifier of the certificate revocation.
   * @returns CertificateRevocation - The certificate revocation was retrieved successfully
   * @throws {MonoCloudException}
   * @memberof TrustStoresClient
   */
  public findCertificateRevocation(
    trustStoreId: string,
    revocationId: string
  ): Promise<MonoCloudResponse<CertificateRevocation>> {
    const url = `/truststores/{trust_store_id}/revocations/{revocation_id}`
      .replace(
        `{${'trust_store_id'}}`,
        encodeURIComponent(String(trustStoreId))
      )
      .replace(
        `{${'revocation_id'}}`,
        encodeURIComponent(String(revocationId))
      );

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<CertificateRevocation>(request);
  }

  /**
   * @summary Delete a certificate revocation
   * @description Permanently removes the specified certificate revocation (CRL) from the trust store.
   * @warning This operation is irreversible. Revocation checks will no longer include this CRL.
   * @param {string} trustStoreId The unique identifier of the trust store.
   * @param {string} revocationId The unique identifier of the certificate revocation.
   * @returns The certificate revocation was deleted successfully
   * @throws {MonoCloudException}
   * @memberof TrustStoresClient
   */
  public removeCertificateRevocation(
    trustStoreId: string,
    revocationId: string
  ): Promise<MonoCloudResponse<null>> {
    const url = `/truststores/{trust_store_id}/revocations/{revocation_id}`
      .replace(
        `{${'trust_store_id'}}`,
        encodeURIComponent(String(trustStoreId))
      )
      .replace(
        `{${'revocation_id'}}`,
        encodeURIComponent(String(revocationId))
      );

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }

  /**
   * @summary List banned certificates
   * @description Retrieves the list of client certificates that are explicitly banned for the specified trust store.
   * @param {string} trustStoreId The unique identifier of the trust store.
   * @returns BannedCertificate[] - The banned certificates were retrieved successfully
   * @throws {MonoCloudException}
   * @memberof TrustStoresClient
   */
  public getAllBannedCertificates(
    trustStoreId: string
  ): Promise<MonoCloudResponse<BannedCertificate[]>> {
    const url = `/truststores/{trust_store_id}/banned_certificates`.replace(
      `{${'trust_store_id'}}`,
      encodeURIComponent(String(trustStoreId))
    );

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<BannedCertificate[]>(request);
  }

  /**
   * @summary Ban a certificate
   * @description Creates a banned certificate entry in the specified trust store, preventing certificates matching the provided identifier from being trusted during mTLS authentication.
   * @param {string} trustStoreId The unique identifier of the trust store.
   * @param {BanTrustStoreCertificateRequest} banTrustStoreCertificateRequest The request payload used to ban a certificate.
   * @returns BannedCertificate - The certificate was banned successfully
   * @throws {MonoCloudException}
   * @memberof TrustStoresClient
   */
  public banTrustStoreCertificate(
    trustStoreId: string,
    banTrustStoreCertificateRequest: BanTrustStoreCertificateRequest
  ): Promise<MonoCloudResponse<BannedCertificate>> {
    const url = `/truststores/{trust_store_id}/banned_certificates`.replace(
      `{${'trust_store_id'}}`,
      encodeURIComponent(String(trustStoreId))
    );

    const request: MonoCloudRequest = { method: 'POST', url };

    request.body = banTrustStoreCertificateRequest;

    return this.processRequest<BannedCertificate>(request);
  }

  /**
   * @summary Unban a certificate
   * @description Removes a banned-certificate entry from the trust store, allowing matching certificates to be trusted again.
   * @param {string} trustStoreId The unique identifier of the trust store.
   * @param {string} banId The unique identifier of the banned certificate entry.
   * @returns The certificate ban was removed successfully
   * @throws {MonoCloudException}
   * @memberof TrustStoresClient
   */
  public unbanTrustStoreCertificate(
    trustStoreId: string,
    banId: string
  ): Promise<MonoCloudResponse<null>> {
    const url = `/truststores/{trust_store_id}/banned_certificates/{ban_id}`
      .replace(
        `{${'trust_store_id'}}`,
        encodeURIComponent(String(trustStoreId))
      )
      .replace(`{${'ban_id'}}`, encodeURIComponent(String(banId)));

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }
}
