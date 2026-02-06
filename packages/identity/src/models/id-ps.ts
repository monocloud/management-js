/**
 * The identity provider.
 * @export
 * @enum {string}
 */

export const IdPs = {
  /**
   * MonoCloud native identity provider
   */
  Monocloud: 'monocloud',

  /**
   * Google identity provider
   */
  Google: 'google',

  /**
   * Apple identity provider
   */
  Apple: 'apple',

  /**
   * Facebook identity provider
   */
  Facebook: 'facebook',

  /**
   * Microsoft identity provider
   */
  Microsoft: 'microsoft',

  /**
   * GitHub identity provider
   */
  Github: 'github',

  /**
   * GitLab identity provider
   */
  Gitlab: 'gitlab',

  /**
   * Discord identity provider
   */
  Discord: 'discord',

  /**
   * Twitter identity provider
   */
  Twitter: 'twitter',

  /**
   * LinkedIn identity provider
   */
  Linkedin: 'linkedin',

  /**
   * Xero identity provider
   */
  Xero: 'xero',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type IdPs = (typeof IdPs)[keyof typeof IdPs];
