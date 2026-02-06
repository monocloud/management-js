import { PatchEmailIdentifierVerificationOptionsRequest } from './patch-email-identifier-verification-options-request';

/**
 * Patch Email Identifier Options Request: Used to update email sign-in, sign-up, and verification settings.
 * @export
 * @interface PatchEmailIdentifierOptionsRequest
 */
export interface PatchEmailIdentifierOptionsRequest {
  /**
   * Specifies whether users can sign in using an email address.
   * @type {boolean}
   * @memberof PatchEmailIdentifierOptionsRequest
   */
  enable_sign_in?: boolean;
  /**
   * Specifies whether an email address can be collected during sign-up.
   * @type {boolean}
   * @memberof PatchEmailIdentifierOptionsRequest
   */
  show_at_sign_up?: boolean;
  /**
   * Specifies whether an email address is required during sign-up.
   * @type {boolean}
   * @memberof PatchEmailIdentifierOptionsRequest
   */
  required_at_sign_up?: boolean;
  /**
   * Email verification configuration applied during sign-up.
   * @type {PatchEmailIdentifierVerificationOptionsRequest}
   * @memberof PatchEmailIdentifierOptionsRequest
   */
  verification?: PatchEmailIdentifierVerificationOptionsRequest;
}
