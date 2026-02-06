/**
 * The SMS provider.
 * @export
 * @enum {string}
 */

export const SmsProviders = {
  /**
   * The platform default SMS provider managed by MonoCloud.
   */
  Monocloud: 'monocloud',

  /**
   * Twilio SMS delivery service.
   */
  Twilio: 'twilio',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type SmsProviders = (typeof SmsProviders)[keyof typeof SmsProviders];
