/**
 * User Session Metadata: Returns contextual and device information associated with a user session.
 * @export
 * @interface UserSessionMetadata
 */
export interface UserSessionMetadata {
  /**
   * The city recorded during the most recent session activity.
   * @type {string}
   * @memberof UserSessionMetadata
   */
  city?: string | null;
  /**
   * The country recorded during the most recent session activity.
   * @type {string}
   * @memberof UserSessionMetadata
   */
  country?: string | null;
  /**
   * The geographic region recorded during the most recent session activity.
   * @type {string}
   * @memberof UserSessionMetadata
   */
  region?: string | null;
  /**
   * The latitude recorded during the most recent session activity.
   * @type {string}
   * @memberof UserSessionMetadata
   */
  latitude?: string | null;
  /**
   * The longitude recorded during the most recent session activity.
   * @type {string}
   * @memberof UserSessionMetadata
   */
  longitude?: string | null;
  /**
   * The IP address recorded during the most recent session activity.
   * @type {string}
   * @memberof UserSessionMetadata
   */
  ip_address?: string | null;
  /**
   * The user agent recorded during the most recent session activity.
   * @type {string}
   * @memberof UserSessionMetadata
   */
  user_agent?: string | null;
}
