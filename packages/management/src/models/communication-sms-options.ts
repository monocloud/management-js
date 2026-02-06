import { CommunicationSmsTwilioOptions } from './communication-sms-twilio-options';
import { SmsProviders } from './sms-providers';

/**
 * Communication SMS Options Response: Represents SMS delivery configuration.
 * @export
 * @interface CommunicationSmsOptions
 */
export interface CommunicationSmsOptions {
  /**
   * Configuration options for Twilio SMS delivery.
   * @type {CommunicationSmsTwilioOptions}
   * @memberof CommunicationSmsOptions
   */
  twilio?: CommunicationSmsTwilioOptions | null;
  /**
   * The SMS provider used for sending messages.
   * @type {SmsProviders}
   * @memberof CommunicationSmsOptions
   */
  provider: SmsProviders;
}
