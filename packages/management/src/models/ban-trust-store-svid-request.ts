/**
 * Ban Trust Store SVID Request: Defines a SPIFFE SVID that is blocked from authentication within a trust store.
 * @export
 * @interface BanTrustStoreSvidRequest
 */
export interface BanTrustStoreSvidRequest {
  /**
   * The identifier value used for banning.
   * @type {string}
   * @memberof BanTrustStoreSvidRequest
   */
  value: string;
  /**
   * The reason explaining why the SVID was banned.
   * @type {string}
   * @memberof BanTrustStoreSvidRequest
   */
  reason?: string | null;
}
