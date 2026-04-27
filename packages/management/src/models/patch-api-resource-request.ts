/**
 * Patch API Resource Request: Used to update one or more properties of an existing API resource.
 * @export
 * @interface PatchApiResourceRequest
 */
export interface PatchApiResourceRequest {
  /**
   * Indicates whether the resource is enabled.
   * @type {boolean}
   * @memberof PatchApiResourceRequest
   */
  enabled?: boolean;
  /**
   * Human-readable display name for the resource.
   * @type {string}
   * @memberof PatchApiResourceRequest
   */
  display_name?: string | null;
  /**
   * Description that explains the purpose of the resource.
   * @type {string}
   * @memberof PatchApiResourceRequest
   */
  description?: string | null;
  /**
   * Specifies whether access tokens issued for this resource must be exclusive and not shared with other API resources.
   * @note ScaleX subscription required to use resource isolation.
   * @type {boolean}
   * @memberof PatchApiResourceRequest
   */
  require_exclusive_token?: boolean;
  /**
   * Specifies whether access tokens issued for this resource may include identity scopes, allowing them to be used with identity-related endpoints such as `UserInfo`.
   * @note ScaleX subscription required to use resource isolation.
   * @type {boolean}
   * @memberof PatchApiResourceRequest
   */
  enable_identity_access?: boolean;
  /**
   * List of user claim types that will be embedded into access tokens issued for this API resource.
   * @type {string[]}
   * @memberof PatchApiResourceRequest
   */
  user_claims?: string[];
}
