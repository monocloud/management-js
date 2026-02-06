/**
 * Patch Communication Email SendGrid Options Request: Used to update SendGrid-specific email delivery configuration.
 * @export
 * @interface PatchCommunicationEmailSendGridOptionsRequest
 */
export interface PatchCommunicationEmailSendGridOptionsRequest {
  /**
   * SendGrid API key used to authenticate requests to the SendGrid service.
   * @type {string}
   * @memberof PatchCommunicationEmailSendGridOptionsRequest
   */
  api_key?: string;
  /**
   * The email address used as the sender for outgoing emails.
   * @type {string}
   * @memberof PatchCommunicationEmailSendGridOptionsRequest
   */
  from_email?: string;
  /**
   * The display name used as the sender for outgoing emails.
   * @type {string}
   * @memberof PatchCommunicationEmailSendGridOptionsRequest
   */
  from_name?: string | null;
}
