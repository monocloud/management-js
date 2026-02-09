/**
 * The OAuth2 / OIDC grant type.
 * @export
 * @enum {string}
 */

export const GrantTypes = {
  /**
   * A legacy flow for browser-based applications in which tokens are returned directly from the authorization endpoint.
   * @note Prefer Authorization Code with PKCE for modern applications.
   */
  Implicit: 'implicit',

  /**
   * Combines elements of the implicit and authorization code flows, allowing the client to receive both tokens and an authorization code.
   */
  Hybrid: 'hybrid',

  /**
   * Obtains tokens through a secure back-channel exchange and supports client authentication and PKCE.
   */
  AuthorizationCode: 'authorization_code',

  /**
   * Used for machine-to-machine scenarios where tokens are issued to the client itself rather than an end user.
   */
  ClientCredentials: 'client_credentials',

  /**
   * A legacy flow that issues tokens using a user’s credentials sent directly to the token endpoint.
   * @note Prefer Authorization Code with PKCE whenever possible.
   */
  Password: 'password',

  /**
   * Supports devices with limited input capabilities (TVs, consoles, CLI tools) by allowing users to authenticate on a separate device while the client polls for approval.
   */
  DeviceCode: 'device_code',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type GrantTypes = (typeof GrantTypes)[keyof typeof GrantTypes];
