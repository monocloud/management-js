/**
 * The Patch Api Resource class
 * @export
 * @interface PatchApiResourceRequest
 */
export interface PatchApiResourceRequest {
  /**
   * Specifies if the resource is enabled.
   * @type {boolean}
   * @memberof PatchApiResourceRequest
   */
  enabled?: boolean;
  /**
   * Display Name for the Resource
   * @type {string}
   * @memberof PatchApiResourceRequest
   */
  display_name?: string | null;
  /**
   * A brief description about the Resource
   * @type {string}
   * @memberof PatchApiResourceRequest
   */
  description?: string | null;
  /**
   * The audience that will be added to the outgoing access token.
   * @type {string}
   * @memberof PatchApiResourceRequest
   */
  audience?: string;
  /**
   * Specifies whether the resource requires an exclusive access token.
   * @type {boolean}
   * @memberof PatchApiResourceRequest
   */
  require_exclusive_token?: boolean;
  /**
   * Specifies whether the access token for the resource can be used at the userinfo endpoint.
   * @type {boolean}
   * @memberof PatchApiResourceRequest
   */
  enable_identity_access?: boolean;
  /**
   * List of associated user claim types that should be included in the Access token.
   * @type {string[]}
   * @memberof PatchApiResourceRequest
   */
  user_claims?: string[];
}
