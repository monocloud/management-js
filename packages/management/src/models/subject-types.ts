/**
 * The OIDC subject identifier type used when issuing the `sub` claim to a client.
 * @export
 * @enum {string}
 */

export const SubjectTypes = {
  /**
   * The same sub value is returned to every client (the user's real subject id).
   */
  Public: 'public',

  /**
   * A pseudonymous, per-sector sub value is returned so the same user is seen as a different subject across sectors.
   */
  Pairwise: 'pairwise',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type SubjectTypes = (typeof SubjectTypes)[keyof typeof SubjectTypes];
