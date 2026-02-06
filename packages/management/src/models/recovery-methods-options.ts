import { RecoveryMethodsEmailOptions } from './recovery-methods-email-options';
import { RecoveryMethodsPhoneOptions } from './recovery-methods-phone-options';

/**
 * Recovery Methods Options Response: Represents the configuration for account and password recovery.
 * @export
 * @interface RecoveryMethodsOptions
 */
export interface RecoveryMethodsOptions {
  /**
   * Recovery Methods Email Options
   * @type {RecoveryMethodsEmailOptions}
   * @memberof RecoveryMethodsOptions
   */
  email: RecoveryMethodsEmailOptions;
  /**
   * Recovery Methods Phone Options
   * @type {RecoveryMethodsPhoneOptions}
   * @memberof RecoveryMethodsOptions
   */
  phone: RecoveryMethodsPhoneOptions;
}
