import { UserConnection } from './user-connection';
import { UserEmail } from './user-email';
import { UserExternalProvider } from './user-external-provider';
import { UserPasskey } from './user-passkey';
import { UserPhone } from './user-phone';
import { UserUsername } from './user-username';

/**
 * User: Represents a user account returned by the operation.
 * @export
 * @interface User
 */
export interface User {
  /**
   * The unique identifier of the user.
   * @type {string}
   * @memberof User
   */
  user_id: string;
  /**
   * Indicates whether the account has been disabled.
   * @type {boolean}
   * @memberof User
   */
  disabled: boolean;
  /**
   * Connections linked to this user.
   * @type {UserConnection[]}
   * @memberof User
   */
  connections: UserConnection[];
  /**
   * Claims associated with the user.
   * @type {{ [key: string]: any; }}
   * @memberof User
   */
  claims: Record<string, any>;
  /**
   * The public data associated with the user\'s account.
   * @type {{ [key: string]: any; }}
   * @memberof User
   */
  public_data: Record<string, any>;
  /**
   * The private data associated with the user\'s account.
   * @type {{ [key: string]: any; }}
   * @memberof User
   */
  private_data: Record<string, any>;
  /**
   * List of registered emails of the user.
   * @type {UserEmail[]}
   * @memberof User
   */
  emails: UserEmail[];
  /**
   * List of registered phones of the user.
   * @type {UserPhone[]}
   * @memberof User
   */
  phone_numbers: UserPhone[];
  /**
   * List of registered passkeys of the user.
   * @type {UserPasskey[]}
   * @memberof User
   */
  passkeys: UserPasskey[];
  /**
   * A flag indicating whether the user must change their password on next sign-in.
   * @type {boolean}
   * @memberof User
   */
  force_password_reset: boolean;
  /**
   * External provider profiles linked to this user.
   * @type {UserExternalProvider[]}
   * @memberof User
   */
  external_providers: UserExternalProvider[];
  /**
   * Specifies the creation time of the user (in Epoch).
   * @type {number}
   * @memberof User
   */
  creation_time: number;
  /**
   * Specifies the last update time of the user (in Epoch).
   * @type {number}
   * @memberof User
   */
  last_updated: number;
  /**
   * Registered username for the user.
   * @type {UserUsername}
   * @memberof User
   */
  username?: UserUsername | null;
  /**
   * Indicates whether the user has a password set.
   * @type {boolean}
   * @memberof User
   */
  has_password: boolean;
  /**
   * Specifies the time of the last password update (in Epoch).
   * @type {number}
   * @memberof User
   */
  password_updated_at?: number | null;
  /**
   * Specifies the time at which the user will be unblocked (in Epoch).
   * @type {number}
   * @memberof User
   */
  block_until?: number | null;
  /**
   * Consecutive sign-in failures since the last successful sign-in.
   * @type {number}
   * @memberof User
   */
  failure_count: number;
  /**
   * Total sign-in attempts recorded for the user.
   * @type {number}
   * @memberof User
   */
  sign_in_attempts_count: number;
  /**
   * Specifies the time of the last sign-in attempt (in Epoch).
   * @type {number}
   * @memberof User
   */
  last_sign_in_attempt?: number | null;
  /**
   * IP address of the last sign-in attempt.
   * @type {string}
   * @memberof User
   */
  last_sign_in_attempt_ip?: string | null;
  /**
   * Total successful sign-ins recorded for the user.
   * @type {number}
   * @memberof User
   */
  sign_in_success_count: number;
  /**
   * Specifies the time of the last successful sign-in (in Epoch).
   * @type {number}
   * @memberof User
   */
  last_sign_in_success?: number | null;
  /**
   * IP address of the last successful sign-in.
   * @type {string}
   * @memberof User
   */
  last_sign_in_success_ip?: string | null;
  /**
   * Specifies the time of the last recorded user activity (in Epoch).
   * @type {number}
   * @memberof User
   */
  last_activity?: number | null;
  /**
   * Last recorded city for the user.
   * @type {string}
   * @memberof User
   */
  last_known_city?: string | null;
  /**
   * Last recorded country for the user.
   * @type {string}
   * @memberof User
   */
  last_known_country?: string | null;
  /**
   * Last recorded region for the user.
   * @type {string}
   * @memberof User
   */
  last_known_region?: string | null;
}
