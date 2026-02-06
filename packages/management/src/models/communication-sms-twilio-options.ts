/**
 * Communication SMS Twilio Options Response: Represents Twilio-specific SMS delivery configuration.
 * @export
 * @interface CommunicationSmsTwilioOptions
 */
export interface CommunicationSmsTwilioOptions {
  /**
   * The Twilio Account SID.
   * @type {string}
   * @memberof CommunicationSmsTwilioOptions
   */
  sid: string;
  /**
   * The Twilio Auth Token associated with the account.
   * @type {string}
   * @memberof CommunicationSmsTwilioOptions
   */
  auth_token: string;
  /**
   * The Twilio Messaging Service SID used to send SMS messages.
   * @type {string}
   * @memberof CommunicationSmsTwilioOptions
   */
  messaging_sid?: string | null;
  /**
   * The sender phone number or alphanumeric sender ID used for SMS messages.
   * @type {string}
   * @memberof CommunicationSmsTwilioOptions
   */
  from?: string | null;
}
