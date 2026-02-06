/**
 * Create Claim Resource Request: Creates a claim that defines how claim values are resolved from the identity context.
 * @export
 * @interface CreateClaimResourceRequest
 */
export interface CreateClaimResourceRequest {
  /**
   * Human-readable display name for the resource.
   * @type {string}
   * @memberof CreateClaimResourceRequest
   */
  display_name?: string | null;
  /**
   * Description that explains the purpose of the resource.
   * @type {string}
   * @memberof CreateClaimResourceRequest
   */
  description?: string | null;
  /**
   * Indicates whether this resource is advertised via the discovery document.
   * @type {boolean}
   * @memberof CreateClaimResourceRequest
   */
  show_in_discovery_document?: boolean;
  /**
   * The unique name of the claim.
   * @type {string}
   * @memberof CreateClaimResourceRequest
   */
  name: string;
  /**
   * Specifies the expression or attribute path used to derive the claim value from the user profile or identity context.
   * @type {string}
   * @memberof CreateClaimResourceRequest
   */
  source: string;
}
