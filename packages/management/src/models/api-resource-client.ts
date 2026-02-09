/**
 * API Resource Client Response: Represents a client’s authorized access to an API resource.
 * @export
 * @interface ApiResourceClient
 */
export interface ApiResourceClient {
  /**
   * The unique identifier of the API resource.
   * @type {string}
   * @memberof ApiResourceClient
   */
  resource_id: string;
  /**
   * The unique identifier of the client application.
   * @type {string}
   * @memberof ApiResourceClient
   */
  client_id: string;
  /**
   * List of API scopes the client is explicitly allowed to access. When empty, the client is permitted to access all scopes defined for the API resource.
   * @type {string[]}
   * @memberof ApiResourceClient
   */
  restricted_scopes: string[];
  /**
   * Specifies the creation time of the client–API resource association (in Epoch).
   * @type {number}
   * @memberof ApiResourceClient
   */
  creation_time: number;
  /**
   * Specifies the last update time of the client–API resource association (in Epoch).
   * @type {number}
   * @memberof ApiResourceClient
   */
  last_updated: number;
}
