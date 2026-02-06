/**
 * Claim Response: Represents a claim that may be included in identity tokens, access tokens, or `UserInfo` responses.
 * @export
 * @interface ClaimResource
 */
export interface ClaimResource {
  /**
   * The unique identifier of the resource.
   * @type {string}
   * @memberof ClaimResource
   */
  id: string;
  /**
   * Human-readable display name for the resource.
   * @type {string}
   * @memberof ClaimResource
   */
  display_name?: string | null;
  /**
   * Description that explains the purpose of the resource.
   * @type {string}
   * @memberof ClaimResource
   */
  description?: string | null;
  /**
   * Indicates whether this resource is advertised via the discovery document.
   * @type {boolean}
   * @memberof ClaimResource
   */
  show_in_discovery_document: boolean;
  /**
   * Specifies the creation time of the resource (in Epoch).
   * @type {number}
   * @memberof ClaimResource
   */
  creation_time: number;
  /**
   * Specifies the last update time of the resource (in Epoch).
   * @type {number}
   * @memberof ClaimResource
   */
  last_updated: number;
  /**
   * The unique name of the claim.
   * @type {string}
   * @memberof ClaimResource
   */
  name: string;
  /**
   * Specifies the expression or attribute path used to derive the claim value from the user profile or identity context.
   * @type {string}
   * @memberof ClaimResource
   */
  source: string;
  /**
   * Indicates whether this claim is a built-in (system-defined) claim.
   * @type {boolean}
   * @memberof ClaimResource
   */
  is_default: boolean;
}
