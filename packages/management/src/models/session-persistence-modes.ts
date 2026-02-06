/**
 * The session persistence mode.
 * @export
 * @enum {string}
 */

export const SessionPersistenceModes = {
  /**
   * The session is always persisted in accordance with the configured expiration type.
   */
  Persistent: 'persistent',

  /**
   * The session expires when the browser is closed.
   */
  NonPersistent: 'non_persistent',

  /**
   * The session is persisted only if the user chooses to remember the session; otherwise, it expires when the browser is closed.
   */
  UserSelected: 'user_selected',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type SessionPersistenceModes =
  (typeof SessionPersistenceModes)[keyof typeof SessionPersistenceModes];
