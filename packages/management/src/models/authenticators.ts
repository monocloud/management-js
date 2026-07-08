/**
 * The authenticator.
 * @export
 * @enum {string}
 */

export const Authenticators = {
  /**
   * Username / password based authentication
   */
  Password: 'password',

  /**
   * Passkey (FIDO2 / WebAuthn) based authentication
   */
  Passkey: 'passkey',

  /**
   * Email-based authentication (magic links or OTP)
   */
  Email: 'email',

  /**
   * Phone-based authentication using SMS OTP
   */
  Phone: 'phone',

  /**
   * Sign in with Google
   */
  Google: 'google',

  /**
   * Sign in with Apple
   */
  Apple: 'apple',

  /**
   * Sign in with Facebook
   */
  Facebook: 'facebook',

  /**
   * Sign in with Microsoft
   */
  Microsoft: 'microsoft',

  /**
   * Sign in with GitHub
   */
  Github: 'github',

  /**
   * Sign in with GitLab
   */
  Gitlab: 'gitlab',

  /**
   * Sign in with Discord
   */
  Discord: 'discord',

  /**
   * Sign in with Twitter
   */
  Twitter: 'twitter',

  /**
   * Sign in with LinkedIn
   */
  Linkedin: 'linkedin',

  /**
   * Sign in with Xero
   */
  Xero: 'xero',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type Authenticators =
  (typeof Authenticators)[keyof typeof Authenticators];
