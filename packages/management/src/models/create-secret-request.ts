import { SecretTypes } from './secret-types';

/**
 * Create Secret Request: Represents a request to create a credential used by a client or API resource.
 * @export
 * @interface CreateSecretRequest
 */
export interface CreateSecretRequest {
  /**
   * Description that explains the purpose of the secret.
   * @type {string}
   * @memberof CreateSecretRequest
   */
  description?: string | null;
  /**
   * Specifies the time at which the secret expires (in Epoch).
   * @type {number}
   * @memberof CreateSecretRequest
   */
  expiration?: number | null;
  /**
   * Specifies the type of secret.
   * @type {SecretTypes}
   * @memberof CreateSecretRequest
   */
  type?: SecretTypes;
  /**
   * The secret value used to authenticate the client or API resource.
   * @type {string}
   * @memberof CreateSecretRequest
   */
  secret_value?: string | null;
}
