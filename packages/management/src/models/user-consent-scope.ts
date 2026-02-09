/**
 * User Consent Scope: Represents a scope granted by the user as part of a consent.
 * @export
 * @interface UserConsentScope
 */
export interface UserConsentScope {
  /**
   * The name of the scope for which consent was granted.
   * @type {string}
   * @memberof UserConsentScope
   */
  scope: string;
  /**
   * Specifies the time at which consent for the scope was granted (in Epoch).
   * @type {number}
   * @memberof UserConsentScope
   */
  granted_on: number;
  /**
   * Specifies the time at which the granted consent expires (in Epoch).
   * @type {number}
   * @memberof UserConsentScope
   */
  expiration?: number | null;
}
