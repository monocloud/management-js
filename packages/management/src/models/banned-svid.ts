/**
 * Banned SVID Response: Represents a SVID that has been explicitly banned within a trust store.
 * @export
 * @interface BannedSvid
 */
export interface BannedSvid {
  /**
   * The unique identifier of the banned SVID entry.
   * @type {string}
   * @memberof BannedSvid
   */
  id: string;
  /**
   * The identifier value used for banning.
   * @type {string}
   * @memberof BannedSvid
   */
  value: string;
  /**
   * The reason explaining why the SVID was banned.
   * @type {string}
   * @memberof BannedSvid
   */
  reason?: string | null;
  /**
   * Specifies the time at which the SVID was banned (in Epoch).
   * @type {number}
   * @memberof BannedSvid
   */
  creation_time: number;
}
