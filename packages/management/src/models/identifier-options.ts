import { EmailIdentifierOptions } from './email-identifier-options';
import { PhoneIdentifierOptions } from './phone-identifier-options';
import { UsernameIdentifierOptions } from './username-identifier-options';

/**
 * Identifier Options Response: Represents email, phone, and username identifier configuration.
 * @export
 * @interface IdentifierOptions
 */
export interface IdentifierOptions {
  /**
   * Email Identifier Options
   * @type {EmailIdentifierOptions}
   * @memberof IdentifierOptions
   */
  email: EmailIdentifierOptions;
  /**
   * Phone Identifier Options
   * @type {PhoneIdentifierOptions}
   * @memberof IdentifierOptions
   */
  phone: PhoneIdentifierOptions;
  /**
   * Username Identifier Options
   * @type {UsernameIdentifierOptions}
   * @memberof IdentifierOptions
   */
  username: UsernameIdentifierOptions;
}
