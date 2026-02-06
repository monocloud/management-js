/**
 * Create API Resource Client Request: Creates an entry that authorizes client access to an API resource.
 * @export
 * @interface CreateApiResourceClientRequest
 */
export interface CreateApiResourceClientRequest {
  /**
   * List of API scopes the client is explicitly allowed to access. When empty, the client is permitted to access all scopes defined for the API resource.
   * @type {string[]}
   * @memberof CreateApiResourceClientRequest
   */
  restricted_scopes?: string[];
}
