/**
 * The application type.
 * @export
 * @enum {string}
 */

export const ApplicationTypes = {
  /**
   * General-purpose or custom application type
   */
  Custom: 'custom',

  /**
   * Single Page Application (browser-based, running entirely in the user’s browser)
   */
  Spa: 'spa',

  /**
   * Traditional web application with a backend server
   */
  WebApp: 'web_app',

  /**
   * Native desktop or mobile application
   */
  Native: 'native',

  /**
   * Machine-to-machine or backend service
   */
  M2m: 'm2m',

  /**
   * Device or console that authenticates using the device authorization flow
   */
  Device: 'device',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type ApplicationTypes =
  (typeof ApplicationTypes)[keyof typeof ApplicationTypes];
