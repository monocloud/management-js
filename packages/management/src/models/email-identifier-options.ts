import { EmailIdentifierVerificationOptions } from './email-identifier-verification-options';

/**
 * Email Identifier Options Response: Represents email sign-in, sign-up, and verification configuration.
 * @export
 * @interface EmailIdentifierOptions
 */
export interface EmailIdentifierOptions {
  /**
   * Specifies whether users can sign in using an email address.
   * @type {boolean}
   * @memberof EmailIdentifierOptions
   */
  enable_sign_in: boolean;
  /**
   * Specifies whether an email address can be collected during sign-up.
   * @type {boolean}
   * @memberof EmailIdentifierOptions
   */
  show_at_sign_up: boolean;
  /**
   * Specifies whether an email address is required during sign-up.
   * @type {boolean}
   * @memberof EmailIdentifierOptions
   */
  required_at_sign_up: boolean;
  /**
   * Email verification configuration applied during sign-up.
   * @type {EmailIdentifierVerificationOptions}
   * @memberof EmailIdentifierOptions
   */
  verification: EmailIdentifierVerificationOptions;
}
