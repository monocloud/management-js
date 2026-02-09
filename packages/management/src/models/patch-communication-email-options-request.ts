import { EmailProviders } from './email-providers';
import { PatchCommunicationEmailSendGridOptionsRequest } from './patch-communication-email-send-grid-options-request';

/**
 * Patch Communication Email Options Request: Used to update the email delivery configuration.
 * @export
 * @interface PatchCommunicationEmailOptionsRequest
 */
export interface PatchCommunicationEmailOptionsRequest {
  /**
   * The email provider used for sending messages.
   * @type {EmailProviders}
   * @memberof PatchCommunicationEmailOptionsRequest
   */
  provider?: EmailProviders;
  /**
   * Configuration options for SendGrid email delivery.
   * @type {PatchCommunicationEmailSendGridOptionsRequest}
   * @memberof PatchCommunicationEmailOptionsRequest
   */
  send_grid?: PatchCommunicationEmailSendGridOptionsRequest | null;
}
