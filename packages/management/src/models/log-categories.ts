/**
 * The log event category.
 * @export
 * @enum {string}
 */

export const LogCategories = {
  /**
   * Events related to user authentication and sign-in flows.
   */
  Authentication: 'authentication',

  /**
   * Events related to token issuance, refresh, and validation.
   */
  Tokens: 'tokens',

  /**
   * Events related to user consent and permission approval.
   */
  Consent: 'consent',

  /**
   * Events related to security blocks and enforcement actions.
   */
  Blocks: 'blocks',

  /**
   * Events related to user lifecycle and profile changes.
   */
  Users: 'users',

  /**
   * Events related to user session creation, termination, and activity.
   */
  UserSessions: 'user_sessions',

  /**
   * Events related to notifications and message delivery.
   */
  Notifications: 'notifications',

  /**
   * Events related to identity resources, API resources, and protected backend services.
   */
  Resources: 'resources',

  /**
   * Events related to mTLS trust stores and certificate validation.
   */
  TrustStore: 'trust_store',

  /**
   * Events related to OAuth and OIDC client configuration.
   */
  Clients: 'clients',

  /**
   * Events related to group management and membership changes.
   */
  Groups: 'groups',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type LogCategories = (typeof LogCategories)[keyof typeof LogCategories];
