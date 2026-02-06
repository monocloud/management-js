import {
  MonoCloudClientBase,
  MonoCloudResponse,
  MonoCloudPageResponse,
  MonoCloudRequest,
} from '@monocloud/api-core';
import { KeyMaterial } from '../models';

export class KeysClient extends MonoCloudClientBase {
  /**
   * @summary List key materials
   * @description Retrieves a paginated list of active cryptographic key materials managed by the tenant. These keys may be used for signing, encryption, token issuance, or other security-related operations.
   * @param {number} [page] The page number to retrieve.
   * @param {number} [size] The number of keys to return per page.
   * @returns KeyMaterial[] - The key materials were retrieved successfully
   * @throws {MonoCloudException}
   * @memberof KeysClient
   */
  public getAllKeyMaterials(
    page?: number,
    size?: number
  ): Promise<MonoCloudPageResponse<KeyMaterial[]>> {
    const url = `/keys`;

    const request: MonoCloudRequest = { method: 'GET', url };

    request.queryParams = {};

    if (page !== undefined && page !== null) {
      request.queryParams.page = String(page);
    }

    if (size !== undefined && size !== null) {
      request.queryParams.size = String(size);
    }

    return this.processPaginatedRequest<KeyMaterial[]>(request);
  }

  /**
   * @summary Rotate a key
   * @description Rotates the specified cryptographic key by generating a new key version and promoting it as the active signing key. The previous key is retained for validation to ensure continuity for previously issued tokens.
   * @warning This operation is irreversible.
   * @param {string} keyId The unique identifier of the key.
   * @returns The key was rotated successfully
   * @throws {MonoCloudException}
   * @memberof KeysClient
   */
  public rotateKey(keyId: string): Promise<MonoCloudResponse<null>> {
    const url = `/keys/{key_id}/rotate`.replace(
      `{${'key_id'}}`,
      encodeURIComponent(String(keyId))
    );

    const request: MonoCloudRequest = { method: 'PUT', url };

    return this.processRequest<null>(request);
  }

  /**
   * @summary Revoke a key
   * @description Revokes the specified cryptographic key, marking it as untrusted and immediately preventing it from being used for token signing or validation.
   * @warning This operation is irreversible. Previously issued tokens that rely on this key may no longer be considered valid, depending on the validation strategy.
   * @param {string} keyId The unique identifier of the key.
   * @returns The key was revoked successfully
   * @throws {MonoCloudException}
   * @memberof KeysClient
   */
  public revokeKey(keyId: string): Promise<MonoCloudResponse<null>> {
    const url = `/keys/{key_id}/revoke`.replace(
      `{${'key_id'}}`,
      encodeURIComponent(String(keyId))
    );

    const request: MonoCloudRequest = { method: 'PUT', url };

    return this.processRequest<null>(request);
  }
}
