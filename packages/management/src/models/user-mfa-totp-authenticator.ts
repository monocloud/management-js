/**
 * User MFA TOTP Authenticator: Represents a TOTP authenticator enrolled by the user as a second factor.
 * @export
 * @interface UserMfaTotpAuthenticator
 */
export interface UserMfaTotpAuthenticator {
  /**
   * The unique identifier of the TOTP authenticator.
   * @type {string}
   * @memberof UserMfaTotpAuthenticator
   */
  id: string;
  /**
   * Human-readable name assigned to the authenticator.
   * @type {string}
   * @memberof UserMfaTotpAuthenticator
   */
  name?: string | null;
  /**
   * Specifies the creation time of the authenticator (in Epoch).
   * @type {number}
   * @memberof UserMfaTotpAuthenticator
   */
  creation_time: number;
  /**
   * Specifies the time the authenticator was last used (in Epoch).
   * @type {number}
   * @memberof UserMfaTotpAuthenticator
   */
  last_used?: number | null;
}
