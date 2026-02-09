/**
 * Communication Email SendGrid Options Response: Represents SendGrid-specific email delivery configuration.
 * @export
 * @interface CommunicationEmailSendGridOptions
 */
export interface CommunicationEmailSendGridOptions {
  /**
   * SendGrid API key used to authenticate requests to the SendGrid service.
   * @type {string}
   * @memberof CommunicationEmailSendGridOptions
   */
  api_key: string;
  /**
   * The email address used as the sender for outgoing emails.
   * @type {string}
   * @memberof CommunicationEmailSendGridOptions
   */
  from_email: string;
  /**
   * The display name used as the sender for outgoing emails.
   * @type {string}
   * @memberof CommunicationEmailSendGridOptions
   */
  from_name?: string | null;
}
