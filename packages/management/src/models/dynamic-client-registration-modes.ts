/**
 * Controls how the dynamic client registration endpoint accepts requests.
 * @export
 * @enum {string}
 */

export const DynamicClientRegistrationModes = {
  /**
   * Dynamic client registration is turned off. The registration endpoint is not exposed.
   */
  Disabled: 'disabled',

  /**
   * Anyone can register a client without presenting credentials (anonymous registration).
   */
  Open: 'open',

  /**
   * Registration requires a bearer initial access token with the configured scope.
   */
  InitialAccessToken: 'initial_access_token',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type DynamicClientRegistrationModes =
  (typeof DynamicClientRegistrationModes)[keyof typeof DynamicClientRegistrationModes];
