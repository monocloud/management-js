import { MonoCloudRequestException } from './monocloud-request-exception';

/**
 * The base of the exceptions the api reports a machine-readable error code with. The statuses that carry one are
 * 400, 402, 403, 404 and 409 — the others (401, 422, 429, 500) report what went wrong without a code, so they
 * extend {@link MonoCloudRequestException} directly and have no `errorCode` to read.
 * @export
 * @class MonoCloudCodedException
 * @hideconstructor
 */
export abstract class MonoCloudCodedException extends MonoCloudRequestException {
  /**
   * The machine-readable code identifying the error. Undefined when the operation reported this status without
   * one, so a code being absent is not on its own a sign that anything is wrong.
   * @type {string}
   * @memberof MonoCloudCodedException
   */
  get errorCode(): string | undefined {
    return this.response?.error_code;
  }
}
