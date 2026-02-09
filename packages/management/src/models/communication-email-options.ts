import { CommunicationEmailSendGridOptions } from './communication-email-send-grid-options';
import { EmailProviders } from './email-providers';

/**
 * Communication Email Options Response: Represents the email delivery configuration.
 * @export
 * @interface CommunicationEmailOptions
 */
export interface CommunicationEmailOptions {
  /**
   * Configuration options for SendGrid email delivery.
   * @type {CommunicationEmailSendGridOptions}
   * @memberof CommunicationEmailOptions
   */
  send_grid?: CommunicationEmailSendGridOptions | null;
  /**
   * The email provider used for sending messages.
   * @type {EmailProviders}
   * @memberof CommunicationEmailOptions
   */
  provider: EmailProviders;
  /**
   * The tenant-specific sender email address.
   * @type {string}
   * @memberof CommunicationEmailOptions
   */
  default_from_email: string;
}
