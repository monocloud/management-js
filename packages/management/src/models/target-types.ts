/**
 * The log event target type.
 * @export
 * @enum {string}
 */

export const TargetTypes = {
  /**
   * A user account.
   */
  User: 'user',

  /**
   * A tenant.
   */
  Tenant: 'tenant',

  /**
   * A tenant-level key.
   */
  TenantKey: 'tenant_key',

  /**
   * A subscription.
   */
  Subscription: 'subscription',

  /**
   * A client application.
   */
  Client: 'client',

  /**
   * A client secret.
   */
  ClientSecret: 'client_secret',

  /**
   * A group.
   */
  Group: 'group',

  /**
   * A user consent record.
   */
  UserConsent: 'user_consent',

  /**
   * A user identifier.
   */
  UserIdentifier: 'user_identifier',

  /**
   * An authenticator.
   */
  Authenticator: 'authenticator',

  /**
   * An IP address.
   */
  IpAddress: 'ip_address',

  /**
   * A user session.
   */
  UserSession: 'user_session',

  /**
   * A user grant.
   */
  UserGrants: 'user_grants',

  /**
   * A trust store.
   */
  TrustStore: 'trust_store',

  /**
   * An API resource.
   */
  ApiResource: 'api_resource',

  /**
   * An API resource secret.
   */
  ApiResourceSecret: 'api_resource_secret',

  /**
   * A claim.
   */
  ClaimResource: 'claim_resource',

  /**
   * A scope.
   */
  Scope: 'scope',

  /**
   * An API scope.
   */
  ApiScope: 'api_scope',

  /**
   * A cryptographic key material.
   */
  KeyMaterial: 'key_material',

  /**
   * The system.
   */
  System: 'system',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type TargetTypes = (typeof TargetTypes)[keyof typeof TargetTypes];
