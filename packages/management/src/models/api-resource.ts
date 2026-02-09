/**
 * API Resource Response: Represents a protected API resource and its access-token issuance configuration.
 * @export
 * @interface ApiResource
 */
export interface ApiResource {
  /**
   * The unique identifier of the resource.
   * @type {string}
   * @memberof ApiResource
   */
  id: string;
  /**
   * Indicates whether the resource is enabled.
   * @type {boolean}
   * @memberof ApiResource
   */
  enabled: boolean;
  /**
   * Human-readable display name for the resource.
   * @type {string}
   * @memberof ApiResource
   */
  display_name?: string | null;
  /**
   * Description that explains the purpose of the resource.
   * @type {string}
   * @memberof ApiResource
   */
  description?: string | null;
  /**
   * Specifies the creation time of the resource (in Epoch).
   * @type {number}
   * @memberof ApiResource
   */
  creation_time: number;
  /**
   * Specifies the last update time of the resource (in Epoch).
   * @type {number}
   * @memberof ApiResource
   */
  last_updated: number;
  /**
   * Audience value that will be included in issued access tokens for this API resource.
   * @type {string}
   * @memberof ApiResource
   */
  audience: string;
  /**
   * Specifies whether access tokens issued for this resource must be exclusive and not shared with other API resources.
   * @type {boolean}
   * @memberof ApiResource
   */
  require_exclusive_token: boolean;
  /**
   * Specifies whether access tokens issued for this resource may include identity scopes, allowing them to be used with identity-related endpoints such as `UserInfo`.
   * @type {boolean}
   * @memberof ApiResource
   */
  enable_identity_access: boolean;
  /**
   * List of user claim types that will be embedded into access tokens issued for this API resource.
   * @type {string[]}
   * @memberof ApiResource
   */
  user_claims: string[];
}
