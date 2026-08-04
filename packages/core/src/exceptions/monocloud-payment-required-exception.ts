import { ProblemDetails } from '../models/problem-details';
import { MonoCloudCodedException } from './monocloud-coded-exception';

/**
 * The MonoCloud Payment Required Exception
 * @export
 * @class MonoCloudPaymentRequiredException
 */
export class MonoCloudPaymentRequiredException extends MonoCloudCodedException {
  /**
   * Initializes the MonoCloudPaymentRequiredException Class
   * @param response - The problem details returned from the server.
   */
  constructor(response: ProblemDetails);

  /**
   * Initializes the MonoCloudPaymentRequiredException Class
   * @param message - The error message.
   */
  constructor(message: string);

  constructor(arg: ProblemDetails | string) {
    if (typeof arg === 'string') {
      super(arg);
    } else {
      super(arg);
    }
  }
}
