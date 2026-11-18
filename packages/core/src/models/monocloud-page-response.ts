import { MonoCloudResponse } from './monocloud-response';
import { PageModel } from './page-model';

export class MonoCloudPageResponse<
  TResult = unknown,
> extends MonoCloudResponse<TResult> {
  /** Pagination metadata parsed from the X-Pagination response header. */
  pageData: PageModel;

  constructor(
    status: number,
    headers: Record<string, any>,
    result: TResult,
    pageData: PageModel
  ) {
    super(status, headers, result);
    this.pageData = pageData;
  }
}
