import { KeyMaterialUses } from './key-material-uses';
import { SigningAlgorithms } from './signing-algorithms';

/**
 * Key Material Response: Represents a cryptographic key managed by the platform.
 * @export
 * @interface KeyMaterial
 */
export interface KeyMaterial {
  /**
   * The unique identifier of the key material.
   * @type {string}
   * @memberof KeyMaterial
   */
  id: string;
  /**
   * Specifies the cryptographic algorithm of the key material used for signing operations.
   * @type {SigningAlgorithms}
   * @memberof KeyMaterial
   */
  signing_algorithm: SigningAlgorithms;
  /**
   * Indicates whether this key is the current default key used for signing operations.
   * @type {boolean}
   * @memberof KeyMaterial
   */
  is_current: boolean;
  /**
   * Specifies the operational use of the key, defining whether it is currently permitted for token signing or limited to signature validation only.
   * @type {KeyMaterialUses}
   * @memberof KeyMaterial
   */
  use: KeyMaterialUses;
  /**
   * Specifies the creation time of the key (in Epoch).
   * @type {number}
   * @memberof KeyMaterial
   */
  creation_time: number;
  /**
   * Specifies the time from which the key material is considered valid (in Epoch).
   * @type {number}
   * @memberof KeyMaterial
   */
  valid_from: number;
  /**
   * Specifies the time until which the key material remains valid (in Epoch).
   * @type {number}
   * @memberof KeyMaterial
   */
  valid_to?: number | null;
  /**
   * Specifies the time at which the key material was revoked (in Epoch).
   * @type {number}
   * @memberof KeyMaterial
   */
  revocation_date?: number | null;
  /**
   * Specifies the time at which the key material was rotated (in Epoch).
   * @type {number}
   * @memberof KeyMaterial
   */
  rotation_date?: number | null;
}
