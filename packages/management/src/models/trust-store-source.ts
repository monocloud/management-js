/**
 * The source from which a trust store\'s certificate chain is loaded.
 * @export
 * @enum {string}
 */

export const TrustStoreSource = {
  /**
   * Certificate chain is uploaded directly through the API and stored alongside the trust store.
   */
  Database: 'database',

  /**
   * Certificate chain is fetched from a customer-owned S3 object using a cross-account IAM role.
   */
  S3: 's3',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type TrustStoreSource =
  (typeof TrustStoreSource)[keyof typeof TrustStoreSource];
