/**
 * S3 Setup Token: Values the customer needs to configure an IAM role in their AWS account before creating an S3-backed trust store. The returned `external_id` must be supplied verbatim to `POST /truststores` in the `s3_source` payload.
 * @export
 * @interface S3SetupToken
 */
export interface S3SetupToken {
  /**
   * The external id MonoCloud will present when assuming the customer role. Customers must set this as the `sts:ExternalId` condition on their IAM role\'s trust policy.
   * @type {string}
   * @memberof S3SetupToken
   */
  external_id: string;
  /**
   * MonoCloud workload IAM principal that the customer\'s role must trust.
   * @type {string}
   * @memberof S3SetupToken
   */
  principal_arn: string;
  /**
   * A ready-to-paste IAM trust policy JSON document. Customers attach this to the role they want MonoCloud to assume.
   * @type {string}
   * @memberof S3SetupToken
   */
  trust_policy_template: string;
}
