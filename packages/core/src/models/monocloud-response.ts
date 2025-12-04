export class MonoCloudResponse<TResult = unknown> {
  status: number;

  headers: Record<string, any>;

  result: TResult;

  constructor(status: number, headers: Record<string, any>, result: TResult) {
    this.status = status;
    this.headers = headers;
    this.result = result;
  }
}
