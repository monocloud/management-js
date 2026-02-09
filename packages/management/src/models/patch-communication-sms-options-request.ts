import { PatchCommunicationSmsTwilioOptionsRequest } from './patch-communication-sms-twilio-options-request';
import { SmsProviders } from './sms-providers';

/**
 * Patch Communication SMS Options Request: Used to update the SMS delivery configuration.
 * @export
 * @interface PatchCommunicationSmsOptionsRequest
 */
export interface PatchCommunicationSmsOptionsRequest {
  /**
   * The SMS provider used for sending messages.
   * @type {SmsProviders}
   * @memberof PatchCommunicationSmsOptionsRequest
   */
  provider?: SmsProviders;
  /**
   * Configuration options for Twilio SMS delivery.
   * @type {PatchCommunicationSmsTwilioOptionsRequest}
   * @memberof PatchCommunicationSmsOptionsRequest
   */
  twilio?: PatchCommunicationSmsTwilioOptionsRequest | null;
}
