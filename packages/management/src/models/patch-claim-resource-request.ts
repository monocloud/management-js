/**
 * Patch Claim Request: Used to update one or more properties of an existing claim.
 * @export
 * @interface PatchClaimResourceRequest
 */
export interface PatchClaimResourceRequest {
  /**
   * Human-readable display name for the resource.
   * @type {string}
   * @memberof PatchClaimResourceRequest
   */
  display_name?: string | null;
  /**
   * Description that explains the purpose of the resource.
   * @type {string}
   * @memberof PatchClaimResourceRequest
   */
  description?: string | null;
  /**
   * Indicates whether this resource is advertised via the discovery document.
   * @type {boolean}
   * @memberof PatchClaimResourceRequest
   */
  show_in_discovery_document?: boolean;
  /**
   * The unique name of the claim.
   * @type {string}
   * @memberof PatchClaimResourceRequest
   */
  name?: string;
  /**
   * Specifies the expression or attribute path used to derive the claim value from the user profile or identity context.
   * @type {string}
   * @memberof PatchClaimResourceRequest
   */
  source?: string;
}
