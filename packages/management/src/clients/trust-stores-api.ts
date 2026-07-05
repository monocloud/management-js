import {
  MonoCloudClientBase,
  MonoCloudResponse,
  MonoCloudPageResponse,
  MonoCloudRequest,
} from '@monocloud/management-core';
import {
  AddCertificateRevocationRequest,
  BanTrustStoreCertificateRequest,
  BanTrustStoreSvidRequest,
  BannedCertificate,
  BannedSvid,
  CreatePkiTrustStoreRequest,
  CreateSpiffeTrustStoreRequest,
  ICertificateRevocation,
  PatchPkiTrustStoreRequest,
  PatchSpiffeTrustStoreRequest,
  PkiTrustStore,
  PkiTrustStoreSummary,
  RevocationGrouped,
  SpiffeTrustStore,
  SpiffeTrustStoreSummary,
} from '../models';

export class TrustStoresClient extends MonoCloudClientBase {
  /**
   * @summary List PKI trust stores
   * @description Retrieves a paginated list of PKI trust stores. Optional query parameters allow sorting of the results.
   * @param {number} [page] The page number to retrieve.
   * @param {number} [size] The number of trust stores to return per page.
   * @param {string} [sort] Sort expression in the format `field:direction`, where direction is `1` for ascending or `-1` for descending. Supported fields include - `name`, `creation_time` and `last_updated`
   * @returns PkiTrustStoreSummary[] - The trust stores were retrieved successfully
   * @throws {MonoCloudException}
   * @memberof TrustStoresClient
   */
  public getAllPkiTrustStores(
    page?: number,
    size?: number,
    sort?: string
  ): Promise<MonoCloudPageResponse<PkiTrustStoreSummary[]>> {
    const url = `/truststores/pki`;

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

    return this.processPaginatedRequest<PkiTrustStoreSummary[]>(request);
  }

  /**
   * @summary Create a PKI trust store
   * @description Creates a new PKI trust store used to manage trusted certificate authorities and certificate validation settings for mTLS authentication.
   * @param {CreatePkiTrustStoreRequest} createPkiTrustStoreRequest The request payload used to create a trust store.
   * @returns PkiTrustStore - The trust store was created successfully
   * @throws {MonoCloudException}
   * @memberof TrustStoresClient
   */
  public createPkiTrustStore(
    createPkiTrustStoreRequest: CreatePkiTrustStoreRequest
  ): Promise<MonoCloudResponse<PkiTrustStore>> {
    const url = `/truststores/pki`;

    const request: MonoCloudRequest = { method: 'POST', url };

    request.body = createPkiTrustStoreRequest;

    return this.processRequest<PkiTrustStore>(request);
  }

  /**
   * @summary Retrieve a PKI trust store
   * @description Retrieves detailed information for the specified PKI trust store.
   * @param {string} trustStoreId The unique identifier of the trust store.
   * @returns PkiTrustStore - The trust store was retrieved successfully
   * @throws {MonoCloudException}
   * @memberof TrustStoresClient
   */
  public findPkiTrustStoreById(
    trustStoreId: string
  ): Promise<MonoCloudResponse<PkiTrustStore>> {
    const url = `/truststores/pki/{trust_store_id}`.replace(
      `{${'trust_store_id'}}`,
      encodeURIComponent(String(trustStoreId))
    );

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<PkiTrustStore>(request);
  }

  /**
   * @summary Update a PKI trust store
   * @description Applies a partial update to the specified PKI trust store. Only fields included in the request are updated.
   * @param {string} trustStoreId The unique identifier of the trust store.
   * @param {PatchPkiTrustStoreRequest} patchPkiTrustStoreRequest The request payload used to update a trust store.
   * @returns PkiTrustStore - The trust store was updated successfully
   * @throws {MonoCloudException}
   * @memberof TrustStoresClient
   */
  public patchPkiTrustStore(
    trustStoreId: string,
    patchPkiTrustStoreRequest: PatchPkiTrustStoreRequest
  ): Promise<MonoCloudResponse<PkiTrustStore>> {
    const url = `/truststores/pki/{trust_store_id}`.replace(
      `{${'trust_store_id'}}`,
      encodeURIComponent(String(trustStoreId))
    );

    const request: MonoCloudRequest = { method: 'PATCH', url };

    request.body = patchPkiTrustStoreRequest;

    return this.processRequest<PkiTrustStore>(request);
  }

  /**
   * @summary Delete a PKI trust store
   * @description Permanently deletes the specified PKI trust store.
   * @warning This operation is irreversible. Any client applications relying on this trust store for mTLS authentication will immediately fail certificate validation.
   * @param {string} trustStoreId The unique identifier of the trust store.
   * @returns The trust store was deleted successfully
   * @throws {MonoCloudException}
   * @memberof TrustStoresClient
   */
  public deletePkiTrustStore(
    trustStoreId: string
  ): Promise<MonoCloudResponse<null>> {
    const url = `/truststores/pki/{trust_store_id}`.replace(
      `{${'trust_store_id'}}`,
      encodeURIComponent(String(trustStoreId))
    );

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }

  /**
   * @summary Set a PKI trust store as the default
   * @description Marks the specified trust store as the default for mTLS authentication. This default is used when no explicit trust store is selected for an mTLS endpoint.
   * @param {string} trustStoreId The unique identifier of the trust store.
   * @returns PkiTrustStore - The trust store was set as the default successfully
   * @throws {MonoCloudException}
   * @memberof TrustStoresClient
   */
  public setPkiTrustStoreDefault(
    trustStoreId: string
  ): Promise<MonoCloudResponse<PkiTrustStore>> {
    const url = `/truststores/pki/{trust_store_id}/default`.replace(
      `{${'trust_store_id'}}`,
      encodeURIComponent(String(trustStoreId))
    );

    const request: MonoCloudRequest = { method: 'POST', url };

    return this.processRequest<PkiTrustStore>(request);
  }

  /**
   * @summary List certificate revocations
   * @description Retrieves a paginated list of certificate revocations (offline CRLs) configured for the specified trust store. Optional query parameters allow sorting of the results.
   * @param {string} trustStoreId The unique identifier of the trust store.
   * @param {number} [page] The page number to retrieve.
   * @param {number} [size] The number of revocations to return per page.
   * @param {string} [sort] Sort expression in the format `field:direction`, where direction is `1` for ascending or `-1` for descending. Supported fields include - `creation_time` and `issued_at`
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
    const url = `/truststores/pki/{trust_store_id}/revocations`.replace(
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
   * @returns ICertificateRevocation - The certificate revocation list was added successfully
   * @throws {MonoCloudException}
   * @memberof TrustStoresClient
   */
  public addCertificateRevocation(
    trustStoreId: string,
    addCertificateRevocationRequest: AddCertificateRevocationRequest
  ): Promise<MonoCloudResponse<ICertificateRevocation>> {
    const url = `/truststores/pki/{trust_store_id}/revocations`.replace(
      `{${'trust_store_id'}}`,
      encodeURIComponent(String(trustStoreId))
    );

    const request: MonoCloudRequest = { method: 'POST', url };

    request.body = addCertificateRevocationRequest;

    return this.processRequest<ICertificateRevocation>(request);
  }

  /**
   * @summary Retrieve a certificate revocation
   * @description Retrieves detailed information for the specified certificate revocation (CRL) within the trust store.
   * @param {string} trustStoreId The unique identifier of the trust store.
   * @param {string} revocationId The unique identifier of the certificate revocation.
   * @returns ICertificateRevocation - The certificate revocation was retrieved successfully
   * @throws {MonoCloudException}
   * @memberof TrustStoresClient
   */
  public findCertificateRevocation(
    trustStoreId: string,
    revocationId: string
  ): Promise<MonoCloudResponse<ICertificateRevocation>> {
    const url = `/truststores/pki/{trust_store_id}/revocations/{revocation_id}`
      .replace(
        `{${'trust_store_id'}}`,
        encodeURIComponent(String(trustStoreId))
      )
      .replace(
        `{${'revocation_id'}}`,
        encodeURIComponent(String(revocationId))
      );

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<ICertificateRevocation>(request);
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
    const url = `/truststores/pki/{trust_store_id}/revocations/{revocation_id}`
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
   * @summary List PKI banned certificates
   * @description Retrieves the list of client certificates that are explicitly banned for the specified PKI trust store.
   * @param {string} trustStoreId The unique identifier of the trust store.
   * @returns BannedCertificate[] - The banned certificates were retrieved successfully
   * @throws {MonoCloudException}
   * @memberof TrustStoresClient
   */
  public getAllPkiBannedCertificates(
    trustStoreId: string
  ): Promise<MonoCloudResponse<BannedCertificate[]>> {
    const url = `/truststores/pki/{trust_store_id}/banned_certificates`.replace(
      `{${'trust_store_id'}}`,
      encodeURIComponent(String(trustStoreId))
    );

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<BannedCertificate[]>(request);
  }

  /**
   * @summary Ban a PKI certificate
   * @description Creates a banned certificate entry in the specified PKI trust store, preventing certificates matching the provided identifier from being trusted during mTLS authentication.
   * @param {string} trustStoreId The unique identifier of the trust store.
   * @param {BanTrustStoreCertificateRequest} banTrustStoreCertificateRequest The request payload used to ban a certificate.
   * @returns BannedCertificate - The certificate was banned successfully
   * @throws {MonoCloudException}
   * @memberof TrustStoresClient
   */
  public banPkiTrustStoreCertificate(
    trustStoreId: string,
    banTrustStoreCertificateRequest: BanTrustStoreCertificateRequest
  ): Promise<MonoCloudResponse<BannedCertificate>> {
    const url = `/truststores/pki/{trust_store_id}/banned_certificates`.replace(
      `{${'trust_store_id'}}`,
      encodeURIComponent(String(trustStoreId))
    );

    const request: MonoCloudRequest = { method: 'POST', url };

    request.body = banTrustStoreCertificateRequest;

    return this.processRequest<BannedCertificate>(request);
  }

  /**
   * @summary Unban a PKI certificate
   * @description Removes a banned-certificate entry from the trust store, allowing matching certificates to be trusted again.
   * @param {string} trustStoreId The unique identifier of the trust store.
   * @param {string} banId The unique identifier of the banned certificate entry.
   * @returns The certificate ban was removed successfully
   * @throws {MonoCloudException}
   * @memberof TrustStoresClient
   */
  public unbanPkiTrustStoreCertificate(
    trustStoreId: string,
    banId: string
  ): Promise<MonoCloudResponse<null>> {
    const url = `/truststores/pki/{trust_store_id}/banned_certificates/{ban_id}`
      .replace(
        `{${'trust_store_id'}}`,
        encodeURIComponent(String(trustStoreId))
      )
      .replace(`{${'ban_id'}}`, encodeURIComponent(String(banId)));

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }

  /**
   * @summary List SPIFFE trust stores
   * @description Retrieves a paginated list of SPIFFE trust stores. Optional query parameters allow sorting of the results.
   * @param {number} [page] The page number to retrieve.
   * @param {number} [size] The number of trust stores to return per page.
   * @param {string} [sort] Sort expression in the format `field:direction`, where direction is `1` for ascending or `-1` for descending. Supported fields include - `name`, `creation_time` and `last_updated`
   * @returns SpiffeTrustStoreSummary[] - The trust stores were retrieved successfully
   * @throws {MonoCloudException}
   * @memberof TrustStoresClient
   */
  public getAllSpiffeTrustStores(
    page?: number,
    size?: number,
    sort?: string
  ): Promise<MonoCloudPageResponse<SpiffeTrustStoreSummary[]>> {
    const url = `/truststores/spiffe`;

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

    return this.processPaginatedRequest<SpiffeTrustStoreSummary[]>(request);
  }

  /**
   * @summary Create a SPIFFE trust store
   * @description Creates a new SPIFFE trust store for a federated SPIFFE trust domain and its workload identities.
   * @param {CreateSpiffeTrustStoreRequest} createSpiffeTrustStoreRequest The request payload used to create a trust store.
   * @returns SpiffeTrustStore - The trust store was created successfully
   * @throws {MonoCloudException}
   * @memberof TrustStoresClient
   */
  public createSpiffeTrustStore(
    createSpiffeTrustStoreRequest: CreateSpiffeTrustStoreRequest
  ): Promise<MonoCloudResponse<SpiffeTrustStore>> {
    const url = `/truststores/spiffe`;

    const request: MonoCloudRequest = { method: 'POST', url };

    request.body = createSpiffeTrustStoreRequest;

    return this.processRequest<SpiffeTrustStore>(request);
  }

  /**
   * @summary Retrieve a SPIFFE trust store
   * @description Retrieves detailed information for the specified SPIFFE trust store.
   * @param {string} trustStoreId The unique identifier of the trust store.
   * @returns SpiffeTrustStore - The trust store was retrieved successfully
   * @throws {MonoCloudException}
   * @memberof TrustStoresClient
   */
  public findSpiffeTrustStoreById(
    trustStoreId: string
  ): Promise<MonoCloudResponse<SpiffeTrustStore>> {
    const url = `/truststores/spiffe/{trust_store_id}`.replace(
      `{${'trust_store_id'}}`,
      encodeURIComponent(String(trustStoreId))
    );

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<SpiffeTrustStore>(request);
  }

  /**
   * @summary Update a SPIFFE trust store
   * @description Applies a partial update to the specified SPIFFE trust store. Only fields included in the request are updated.
   * @param {string} trustStoreId The unique identifier of the trust store.
   * @param {PatchSpiffeTrustStoreRequest} patchSpiffeTrustStoreRequest The request payload used to update a trust store.
   * @returns SpiffeTrustStore - The trust store was updated successfully
   * @throws {MonoCloudException}
   * @memberof TrustStoresClient
   */
  public patchSpiffeTrustStore(
    trustStoreId: string,
    patchSpiffeTrustStoreRequest: PatchSpiffeTrustStoreRequest
  ): Promise<MonoCloudResponse<SpiffeTrustStore>> {
    const url = `/truststores/spiffe/{trust_store_id}`.replace(
      `{${'trust_store_id'}}`,
      encodeURIComponent(String(trustStoreId))
    );

    const request: MonoCloudRequest = { method: 'PATCH', url };

    request.body = patchSpiffeTrustStoreRequest;

    return this.processRequest<SpiffeTrustStore>(request);
  }

  /**
   * @summary Delete a SPIFFE trust store
   * @description Permanently deletes the specified SPIFFE trust store.
   * @warning This operation is irreversible. Any client applications relying on this trust store for authentication will immediately fail validation.
   * @param {string} trustStoreId The unique identifier of the trust store.
   * @returns The trust store was deleted successfully
   * @throws {MonoCloudException}
   * @memberof TrustStoresClient
   */
  public deleteSpiffeTrustStore(
    trustStoreId: string
  ): Promise<MonoCloudResponse<null>> {
    const url = `/truststores/spiffe/{trust_store_id}`.replace(
      `{${'trust_store_id'}}`,
      encodeURIComponent(String(trustStoreId))
    );

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }

  /**
   * @summary Set a SPIFFE trust store as the default
   * @description Marks the specified trust store as the default for mTLS authentication. This default is used when no explicit trust store is selected for an mTLS endpoint.
   * @param {string} trustStoreId The unique identifier of the trust store.
   * @returns SpiffeTrustStore - The trust store was set as the default successfully
   * @throws {MonoCloudException}
   * @memberof TrustStoresClient
   */
  public setSpiffeTrustStoreDefault(
    trustStoreId: string
  ): Promise<MonoCloudResponse<SpiffeTrustStore>> {
    const url = `/truststores/spiffe/{trust_store_id}/default`.replace(
      `{${'trust_store_id'}}`,
      encodeURIComponent(String(trustStoreId))
    );

    const request: MonoCloudRequest = { method: 'POST', url };

    return this.processRequest<SpiffeTrustStore>(request);
  }

  /**
   * @summary List banned SVIDs
   * @description Retrieves the list of SVIDs that are explicitly banned for the specified SPIFFE trust store.
   * @param {string} trustStoreId The unique identifier of the trust store.
   * @returns BannedSvid[] - The banned SVIDs were retrieved successfully
   * @throws {MonoCloudException}
   * @memberof TrustStoresClient
   */
  public getAllSpiffeBannedSvids(
    trustStoreId: string
  ): Promise<MonoCloudResponse<BannedSvid[]>> {
    const url = `/truststores/spiffe/{trust_store_id}/banned_svids`.replace(
      `{${'trust_store_id'}}`,
      encodeURIComponent(String(trustStoreId))
    );

    const request: MonoCloudRequest = { method: 'GET', url };

    return this.processRequest<BannedSvid[]>(request);
  }

  /**
   * @summary Ban a SVID
   * @description Creates a banned SVID entry in the specified SPIFFE trust store, preventing SVIDs matching the provided identifier from being trusted during authentication.
   * @param {string} trustStoreId The unique identifier of the trust store.
   * @param {BanTrustStoreSvidRequest} banTrustStoreSvidRequest The request payload used to ban a SVID.
   * @returns BannedSvid - The SVID was banned successfully
   * @throws {MonoCloudException}
   * @memberof TrustStoresClient
   */
  public banSpiffeTrustStoreSvid(
    trustStoreId: string,
    banTrustStoreSvidRequest: BanTrustStoreSvidRequest
  ): Promise<MonoCloudResponse<BannedSvid>> {
    const url = `/truststores/spiffe/{trust_store_id}/banned_svids`.replace(
      `{${'trust_store_id'}}`,
      encodeURIComponent(String(trustStoreId))
    );

    const request: MonoCloudRequest = { method: 'POST', url };

    request.body = banTrustStoreSvidRequest;

    return this.processRequest<BannedSvid>(request);
  }

  /**
   * @summary Unban a SVID
   * @description Removes a banned-SVID entry from the trust store, allowing matching SVIDs to be trusted again.
   * @param {string} trustStoreId The unique identifier of the trust store.
   * @param {string} banId The unique identifier of the banned SVID entry.
   * @returns The SVID ban was removed successfully
   * @throws {MonoCloudException}
   * @memberof TrustStoresClient
   */
  public unbanSpiffeTrustStoreSvid(
    trustStoreId: string,
    banId: string
  ): Promise<MonoCloudResponse<null>> {
    const url = `/truststores/spiffe/{trust_store_id}/banned_svids/{ban_id}`
      .replace(
        `{${'trust_store_id'}}`,
        encodeURIComponent(String(trustStoreId))
      )
      .replace(`{${'ban_id'}}`, encodeURIComponent(String(banId)));

    const request: MonoCloudRequest = { method: 'DELETE', url };

    return this.processRequest<null>(request);
  }
}
