/**
 * User MFA Passkey: Represents a passkey / security key enrolled by the user as a second factor.
 * @export
 * @interface UserMfaPasskey
 */
export interface UserMfaPasskey {
  /**
   * The unique identifier of the MFA passkey.
   * @type {string}
   * @memberof UserMfaPasskey
   */
  id: string;
  /**
   * Human-readable name assigned to the passkey.
   * @type {string}
   * @memberof UserMfaPasskey
   */
  name?: string | null;
  /**
   * Unique identifier of the passkey as provided by the authenticator.
   * @type {string}
   * @memberof UserMfaPasskey
   */
  passkey_id: string;
  /**
   * Public key material associated with the passkey.
   * @type {string}
   * @memberof UserMfaPasskey
   */
  public_key: string;
  /**
   * Authenticator Attestation GUID (AAGUID) identifying the authenticator model.
   * @type {string}
   * @memberof UserMfaPasskey
   */
  aa_guid: string;
  /**
   * Indicates whether the passkey is currently backed up by the authenticator.
   * @type {boolean}
   * @memberof UserMfaPasskey
   */
  backup_state: boolean;
  /**
   * Indicates whether the passkey is eligible for backup and multi-device use.
   * @type {boolean}
   * @memberof UserMfaPasskey
   */
  backup_eligibility: boolean;
  /**
   * Indicates whether user presence was verified during passkey registration.
   * @type {boolean}
   * @memberof UserMfaPasskey
   */
  user_present: boolean;
  /**
   * Indicates whether user verification (such as biometrics or PIN) was performed during registration.
   * @type {boolean}
   * @memberof UserMfaPasskey
   */
  user_verified: boolean;
  /**
   * User agent of the device used to register the passkey.
   * @type {string}
   * @memberof UserMfaPasskey
   */
  user_agent: string;
  /**
   * Specifies the creation time of the passkey (in Epoch).
   * @type {number}
   * @memberof UserMfaPasskey
   */
  creation_time: number;
  /**
   * Specifies the time the passkey was last used (in Epoch).
   * @type {number}
   * @memberof UserMfaPasskey
   */
  last_used?: number | null;
}
