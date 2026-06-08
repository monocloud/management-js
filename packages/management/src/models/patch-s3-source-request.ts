/**
 * Patch S3 Source Request: Update one or more S3 fetch fields on an existing S3 trust store.
 * @export
 * @interface PatchS3SourceRequest
 */
export interface PatchS3SourceRequest {
  /**
   * The AWS region of the bucket(s).
   * @type {string}
   * @memberof PatchS3SourceRequest
   */
  region?: string;
  /**
   * The ARN of the IAM role MonoCloud should assume to read the objects.
   * @type {string}
   * @memberof PatchS3SourceRequest
   */
  role_arn?: string;
  /**
   * S3 URI of the PEM-encoded certificate chain.
   * @type {string}
   * @memberof PatchS3SourceRequest
   */
  chain_object_uri?: string;
  /**
   * Replaces the full list of CRL S3 URIs.
   * @type {string[]}
   * @memberof PatchS3SourceRequest
   */
  crl_object_uris?: string[];
}
