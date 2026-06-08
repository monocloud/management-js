/**
 * S3 Source Response: Configuration and fetch metadata for an S3-backed trust store.
 * @export
 * @interface S3Source
 */
export interface S3Source {
  /**
   * The AWS region of the bucket(s) that contain the certificate chain and any CRLs.
   * @type {string}
   * @memberof S3Source
   */
  region: string;
  /**
   * The ARN of the IAM role MonoCloud should assume to read the objects. The role must trust MonoCloud\'s workload role and require the `ExternalId` from `/truststores/s3/setup-token`.
   * @type {string}
   * @memberof S3Source
   */
  role_arn: string;
  /**
   * S3 URI of the PEM-encoded certificate chain.
   * @type {string}
   * @memberof S3Source
   */
  chain_object_uri: string;
  /**
   * The time MonoCloud last attempted to fetch from S3 (in Epoch). Updated by create, patch, and purge-cache.
   * @type {number}
   * @memberof S3Source
   */
  last_fetched_at?: number | null;
  /**
   * The error returned by the most recent fetch attempt, if it failed. Cleared on success.
   * @type {string}
   * @memberof S3Source
   */
  last_fetch_error?: string | null;
}
