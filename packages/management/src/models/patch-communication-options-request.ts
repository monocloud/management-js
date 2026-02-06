import { PatchCommunicationEmailOptionsRequest } from './patch-communication-email-options-request';
import { PatchCommunicationSmsOptionsRequest } from './patch-communication-sms-options-request';

/**
 * Patch Communication Options Request: Used to update email and SMS delivery configuration.
 * @export
 * @interface PatchCommunicationOptionsRequest
 */
export interface PatchCommunicationOptionsRequest {
  /**
   * Configuration options for email delivery.
   * @type {PatchCommunicationEmailOptionsRequest}
   * @memberof PatchCommunicationOptionsRequest
   */
  email?: PatchCommunicationEmailOptionsRequest;
  /**
   * Configuration options for SMS delivery.
   * @type {PatchCommunicationSmsOptionsRequest}
   * @memberof PatchCommunicationOptionsRequest
   */
  sms?: PatchCommunicationSmsOptionsRequest;
}
