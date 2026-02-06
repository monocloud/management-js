/**
 * The secret type.
 * @export
 * @enum {string}
 */

export const SecretTypes = {
  /**
   * A shared symmetric secret value.
   */
  SharedSecret: 'shared_secret',

  /**
   * An X.509 certificate identified by its thumbprint.
   */
  X509Thumbprint: 'x509_thumbprint',

  /**
   * An X.509 certificate identified by its subject name.
   */
  X509Name: 'x509_name',

  /**
   * An X.509 certificate identified by its issuer name.
   */
  X509IssuerName: 'x509_issuer_name',

  /**
   * A base64-encoded X.509 certificate.
   */
  X509CertificateBase64: 'x509_certificate_base64',

  /**
   * A JSON Web Key (JWK).
   */
  Jwk: 'jwk',

  /**
   * A shared secret used for JWT-based client assertion authentication.
   */
  JwtAssertionSharedSecret: 'jwt_assertion_shared_secret',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type SecretTypes = (typeof SecretTypes)[keyof typeof SecretTypes];
