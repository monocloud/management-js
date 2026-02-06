import { CommunicationEmailOptions } from './communication-email-options';
import { CommunicationSmsOptions } from './communication-sms-options';

/**
 * Communication Options Response: Represents the current email and SMS delivery configuration.
 * @export
 * @interface CommunicationOptions
 */
export interface CommunicationOptions {
  /**
   * Configuration options for email delivery.
   * @type {CommunicationEmailOptions}
   * @memberof CommunicationOptions
   */
  email: CommunicationEmailOptions;
  /**
   * Configuration options for SMS delivery.
   * @type {CommunicationSmsOptions}
   * @memberof CommunicationOptions
   */
  sms: CommunicationSmsOptions;
}
