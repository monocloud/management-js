/**
 * Create S3 Source Request: Bucket, key and IAM role MonoCloud should use to fetch the certificate chain.
 * @export
 * @interface CreateS3SourceRequest
 */
export interface CreateS3SourceRequest {
  /**
   * The AWS region of the bucket(s) that contain the certificate chain and any CRLs.
   * @type {string}
   * @memberof CreateS3SourceRequest
   */
  region: string;
  /**
   * The ARN of the IAM role MonoCloud should assume to read the objects. The role must trust MonoCloud\'s workload role and require the `ExternalId` from `/truststores/s3/setup-token`.
   * @type {string}
   * @memberof CreateS3SourceRequest
   */
  role_arn: string;
  /**
   * S3 URI of the PEM-encoded certificate chain.
   * @type {string}
   * @memberof CreateS3SourceRequest
   */
  chain_object_uri: string;
}
