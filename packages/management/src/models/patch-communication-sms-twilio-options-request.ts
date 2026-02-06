/**
 * Patch Communication SMS Twilio Options Request: Used to update Twilio-specific SMS delivery configuration.
 * @export
 * @interface PatchCommunicationSmsTwilioOptionsRequest
 */
export interface PatchCommunicationSmsTwilioOptionsRequest {
  /**
   * The Twilio Account SID.
   * @type {string}
   * @memberof PatchCommunicationSmsTwilioOptionsRequest
   */
  sid?: string;
  /**
   * The Twilio Auth Token associated with the account.
   * @type {string}
   * @memberof PatchCommunicationSmsTwilioOptionsRequest
   */
  auth_token?: string;
  /**
   * The Twilio Messaging Service SID used to send SMS messages.
   * @type {string}
   * @memberof PatchCommunicationSmsTwilioOptionsRequest
   */
  messaging_sid?: string | null;
  /**
   * The sender phone number or alphanumeric sender ID used for SMS messages.
   * @type {string}
   * @memberof PatchCommunicationSmsTwilioOptionsRequest
   */
  from?: string | null;
}
