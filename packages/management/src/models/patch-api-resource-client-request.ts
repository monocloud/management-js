/**
 * Patch API Resource Client Request: Used to update a client’s access configuration for an API resource.
 * @export
 * @interface PatchApiResourceClientRequest
 */
export interface PatchApiResourceClientRequest {
  /**
   * List of API scopes the client is explicitly allowed to access. When empty, the client is permitted to access all scopes defined for the API resource.
   * @type {string[]}
   * @memberof PatchApiResourceClientRequest
   */
  restricted_scopes?: string[];
}
