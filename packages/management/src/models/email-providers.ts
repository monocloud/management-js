/**
 * The email provider.
 * @export
 * @enum {string}
 */

export const EmailProviders = {
  /**
   * The platform default email provider managed by MonoCloud.
   */
  Monocloud: 'monocloud',

  /**
   * SendGrid email delivery service.
   */
  SendGrid: 'send_grid',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type EmailProviders =
  (typeof EmailProviders)[keyof typeof EmailProviders];
