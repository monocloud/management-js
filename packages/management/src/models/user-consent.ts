import { UserConsentScope } from './user-consent-scope';

/**
 * User Consent: Represents a consent grant issued by a user to a specific client.
 * @export
 * @interface UserConsent
 */
export interface UserConsent {
  /**
   * The unique identifier of the grant.
   * @type {string}
   * @memberof UserConsent
   */
  id: string;
  /**
   * The unique identifier of the client to which the grant was issued.
   * @type {string}
   * @memberof UserConsent
   */
  client_id: string;
  /**
   * Specifies the time at which the grant was issued (in Epoch).
   * @type {number}
   * @memberof UserConsent
   */
  creation_time: number;
  /**
   * The consented scopes.
   * @type {UserConsentScope[]}
   * @memberof UserConsent
   */
  scopes: UserConsentScope[];
}
