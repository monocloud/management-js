/**
 * The log event actor type.
 * @export
 * @enum {string}
 */

export const ActorTypes = {
  /**
   * The actor could not be determined.
   */
  Unknown: 'unknown',

  /**
   * The platform or internal system.
   */
  System: 'system',

  /**
   * An API key.
   */
  ApiKey: 'api_key',

  /**
   * A private API key.
   */
  PrivateApiKey: 'private_api_key',

  /**
   * A public API key.
   */
  PublicApiKey: 'public_api_key',

  /**
   * An end user.
   */
  User: 'user',

  /**
   * An administrative user.
   */
  AdminUser: 'admin_user',

  /**
   * An API or protected service.
   */
  Api: 'api',

  /**
   * A client application.
   */
  Client: 'client',

  /**
   * An X.509 certificate.
   */
  Certificate: 'certificate',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type ActorTypes = (typeof ActorTypes)[keyof typeof ActorTypes];
