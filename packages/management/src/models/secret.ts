import { SecretTypes } from './secret-types';

/**
 * Secret Response: Represents a credential used by a client or API resource.
 * @export
 * @interface Secret
 */
export interface Secret {
  /**
   * The unique identifier of the secret.
   * @type {string}
   * @memberof Secret
   */
  id: string;
  /**
   * Description that explains the purpose of the secret.
   * @type {string}
   * @memberof Secret
   */
  description?: string | null;
  /**
   * Specifies the time at which the secret expires (in Epoch).
   * @type {number}
   * @memberof Secret
   */
  expiration?: number | null;
  /**
   * Specifies the type of secret.
   * @type {SecretTypes}
   * @memberof Secret
   */
  type: SecretTypes;
  /**
   * Specifies the creation time of the secret (in Epoch).
   * @type {number}
   * @memberof Secret
   */
  creation_time: number;
  /**
   * Specifies the last update time of the secret (in Epoch).
   * @type {number}
   * @memberof Secret
   */
  last_updated: number;
  /**
   * The secret value used to authenticate the client or API resource.
   * @type {string}
   * @memberof Secret
   */
  secret_value: string;
}
