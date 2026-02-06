/**
 * User Passkey: Represents a registered passkey used for passwordless authentication by the user.
 * @export
 * @interface UserPasskey
 */
export interface UserPasskey {
  /**
   * Human-readable name assigned to the passkey.
   * @type {string}
   * @memberof UserPasskey
   */
  name?: string | null;
  /**
   * Unique identifier of the passkey as provided by the authenticator.
   * @type {string}
   * @memberof UserPasskey
   */
  passkey_id: string;
  /**
   * Public key material associated with the passkey.
   * @type {string}
   * @memberof UserPasskey
   */
  public_key: string;
  /**
   * Authenticator Attestation GUID (AAGUID) identifying the authenticator model.
   * @type {string}
   * @memberof UserPasskey
   */
  aa_guid: string;
  /**
   * Indicates whether the passkey is currently backed up by the authenticator.
   * @type {boolean}
   * @memberof UserPasskey
   */
  backup_state: boolean;
  /**
   * Indicates whether the passkey is eligible for backup and multi-device use.
   * @type {boolean}
   * @memberof UserPasskey
   */
  backup_eligibility: boolean;
  /**
   * Indicates whether user presence was verified during passkey authentication.
   * @type {boolean}
   * @memberof UserPasskey
   */
  user_present: boolean;
  /**
   * Indicates whether user verification (such as biometrics or PIN) was performed during authentication.
   * @type {boolean}
   * @memberof UserPasskey
   */
  user_verified: boolean;
  /**
   * User agent of the device used to register the passkey.
   * @type {string}
   * @memberof UserPasskey
   */
  user_agent: string;
}
