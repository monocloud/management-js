/**
 * Create API Resource Request: Creates a protected backend or service.
 * @export
 * @interface CreateApiResourceRequest
 */
export interface CreateApiResourceRequest {
  /**
   * Indicates whether the resource is enabled.
   * @type {boolean}
   * @memberof CreateApiResourceRequest
   */
  enabled?: boolean;
  /**
   * Human-readable display name for the resource.
   * @type {string}
   * @memberof CreateApiResourceRequest
   */
  display_name?: string | null;
  /**
   * Description that explains the purpose of the resource.
   * @type {string}
   * @memberof CreateApiResourceRequest
   */
  description?: string | null;
  /**
   * Audience value that will be included in issued access tokens for this API resource.
   * @type {string}
   * @memberof CreateApiResourceRequest
   */
  audience: string;
  /**
   * Specifies whether access tokens issued for this resource must be exclusive and not shared with other API resources.
   * @type {boolean}
   * @memberof CreateApiResourceRequest
   */
  require_exclusive_token?: boolean;
  /**
   * Specifies whether access tokens issued for this resource may include identity scopes, allowing them to be used with identity-related endpoints such as `UserInfo`.
   * @type {boolean}
   * @memberof CreateApiResourceRequest
   */
  enable_identity_access?: boolean;
  /**
   * List of user claim types that will be embedded into access tokens issued for this API resource.
   * @type {string[]}
   * @memberof CreateApiResourceRequest
   */
  user_claims?: string[];
  /**
   * Automatically generates a secure secret when the API resource is created. This secret is used by the resource to authenticate when performing token introspection.
   * @note ScaleX subscription required to generate API secrets.
   * @type {boolean}
   * @memberof CreateApiResourceRequest
   */
  auto_generate_secret?: boolean;
}
