import { MonoCloudConfig } from './monocloud-config';
import { MonoCloudResponse } from '../models/monocloud-response';
import { MonoCloudException } from '../exceptions/monocloud-exception';
import { MonoCloudPageResponse } from '../models/monocloud-page-response';
import { PageModel } from '../models/page-model';
import { ProblemDetails } from '../models/problem-details';
import { ValidationExceptionTypes } from '../exceptions/validation-exception-types';
import { IdentityValidationProblemDetails } from '../models/identity-validation-problem-details';
import { KeyValidationProblemDetails } from '../models/key-validation-problem-details';
import { MonoCloudExceptionHandler } from '../exceptions/monocloud-exception-handler';
import { MonoCloudRequest } from '../models/monocloud-request';
import { Fetcher } from '../models/fetcher';
import { MonoCloudEvent } from '../models/monocloud-event';
import { readEventStream } from './read-event-stream';

export abstract class MonoCloudClientBase {
  protected fetcher: Fetcher;

  constructor(configuration: MonoCloudConfig, fetcher?: Fetcher) {
    if (fetcher) {
      this.fetcher = fetcher;
    } else {
      if (!configuration) {
        throw new MonoCloudException('Configuration is required');
      }

      if (!configuration.domain) {
        throw new MonoCloudException('Tenant Domain is required');
      }

      if (!configuration.apiKey) {
        throw new MonoCloudException('Api Key is required');
      }

      const headers: Record<string, string> = {
        'X-API-KEY': configuration.apiKey,
        'Content-Type': 'application/json',
      };

      const baseUrl = `${this.sanitizeUrl(configuration.domain)}/api/`;

      this.fetcher = async (
        input: string | URL,
        init?: RequestInit
      ): Promise<Response> => {
        const url = new URL(input, baseUrl);

        const signal =
          init?.signal ??
          AbortSignal.timeout(configuration.config?.timeout ?? 10000);
        signal.throwIfAborted();

        const requestHeaders = new Headers(headers);

        new Headers(init?.headers).forEach((value, key) => {
          requestHeaders.set(key, value);
        });

        const resp = await fetch(url.toString(), {
          ...init,
          headers: requestHeaders,
          signal,
        });

        return resp;
      };
    }
  }

  protected async processRequest<T = unknown>(
    request: MonoCloudRequest
  ): Promise<MonoCloudResponse<T>> {
    try {
      const url = this.buildUrl(request.url, request.queryParams);

      const response = await this.fetcher(url, {
        method: request.method,
        body: request.body ? JSON.stringify(request.body) : undefined,
      });

      if (!response.ok) {
        await this.HandleErrorResponse(response);
      }

      const headers: Record<string, any> = {};

      response.headers.forEach((value, key) => {
        headers[key] = value;
      });

      const resp = response.body ? await response.text() : null;

      return new MonoCloudResponse<T>(
        response.status,
        headers,
        (resp?.length ? JSON.parse(resp) : null) as T
      );
    } catch (e: any) {
      if (e instanceof MonoCloudException) {
        throw e;
      }

      if (e.name === 'TimeoutError') {
        throw new MonoCloudException(e.message);
      }

      throw new MonoCloudException('Something went wrong.');
    }
  }

  /**
   * Opens a stream on iteration. Break the loop or abort the signal to disconnect.
   * Server EOF ends the iterator; no automatic reconnection or JSON parsing occurs.
   * Custom fetchers must preserve the supplied signal and Accept header.
   */
  protected async *processEventStream(
    request: MonoCloudRequest,
    signal?: AbortSignal
  ): AsyncGenerator<MonoCloudEvent, void, unknown> {
    const controller = new AbortController();
    const streamSignal = signal
      ? AbortSignal.any([signal, controller.signal])
      : controller.signal;
    let response: Response | undefined;

    try {
      streamSignal.throwIfAborted();

      response = await this.fetcher(
        this.buildUrl(request.url, request.queryParams),
        {
          method: request.method,
          body: request.body ? JSON.stringify(request.body) : undefined,
          headers: { Accept: 'text/event-stream' },
          cache: 'no-store',
          signal: streamSignal,
        }
      );

      streamSignal.throwIfAborted();

      if (!response.ok) {
        await this.HandleErrorResponse(response);
      }

      const contentType = response.headers
        .get('content-type')
        ?.split(';')[0]
        .trim()
        .toLowerCase();

      if (contentType !== 'text/event-stream' || !response.body) {
        throw new MonoCloudException('Expected a text/event-stream response.');
      }

      yield* readEventStream(response.body, streamSignal);
    } catch (error) {
      streamSignal.throwIfAborted();

      if (error instanceof MonoCloudException) {
        throw error;
      }

      throw new MonoCloudException('Unable to read the event stream.');
    } finally {
      controller.abort();

      if (response?.body && !response.body.locked) {
        await response.body.cancel().catch(() => undefined);
      }
    }
  }

  protected async processPaginatedRequest<T = unknown>(
    request: MonoCloudRequest
  ): Promise<MonoCloudPageResponse<T>> {
    try {
      const url = this.buildUrl(request.url, request.queryParams);

      const response = await this.fetcher(url, {
        method: request.method,
        body: request.body ? JSON.stringify(request.body) : undefined,
      });

      if (!response.ok) {
        await this.HandleErrorResponse(response);
      }

      const headers: Record<string, any> = {};

      response.headers.forEach((value, key) => {
        headers[key] = value;
      });

      const paginationData = this.resolvePaginationHeader(response.headers);

      return new MonoCloudPageResponse<T>(
        response.status,
        headers,
        (response.body ? await response.json() : null) as T,
        paginationData
      );
    } catch (e: any) {
      if (e instanceof MonoCloudException) {
        throw e;
      }

      if (e.name === 'TimeoutError') {
        throw new MonoCloudException(e.message);
      }

      throw new MonoCloudException('Something went wrong.');
    }
  }

  /**
   * Throws the exception the problem details map to.
   *
   * An sdk whose api reports errors it can throw something narrower for overrides this, and defers to the base
   * mapping for everything else. What it throws has to extend {@link MonoCloudException}, or `processRequest`
   * will discard it along with anything else it did not expect.
   *
   * @param problem - The problem details returned from the server.
   * @internal
   */
  protected throwProblem(problem: ProblemDetails): never {
    MonoCloudExceptionHandler.ThrowProblemErr(problem);

    throw new MonoCloudException(problem.title ?? 'An Unknown Error Occured');
  }

  private async HandleErrorResponse(response: Response): Promise<void> {
    const contentType = response.headers.get('content-type');
    if (contentType?.startsWith('application/problem+json')) {
      const body = await response.json();
      let result = body
        ? new ProblemDetails(body as ProblemDetails)
        : undefined;

      if (result?.type === ValidationExceptionTypes.IdentityValidationError) {
        result = new IdentityValidationProblemDetails(result);
      }

      if (result?.type === ValidationExceptionTypes.ValidationError) {
        result = new KeyValidationProblemDetails(result);
      }

      if (!result) {
        throw new MonoCloudException('Invalid body');
      }

      this.throwProblem(result);
    }

    const respStrng = await response.text();
    MonoCloudExceptionHandler.ThrowErr(
      response.status,
      respStrng && respStrng !== '' ? respStrng : response.statusText
    );
  }

  private sanitizeUrl(url: string): string {
    let u = url;
    if (!u.startsWith('https://')) {
      u = `https://${u}`;
    }

    if (u.endsWith('/')) {
      u = u.substring(0, u.length - 1);
    }

    return u;
  }

  private resolvePaginationHeader(headers: Headers): PageModel {
    const paginationHeader = headers.get('x-pagination');
    const pageData = paginationHeader
      ? JSON.parse(paginationHeader)
      : undefined;

    return {
      page_size: pageData?.page_size ?? 0,
      current_page: pageData?.current_page ?? 0,
      total_count: pageData?.total_count ?? 0,
      has_previous: pageData?.has_previous ?? false,
      has_next: pageData?.has_next ?? false,
    };
  }

  private buildUrl(
    url: string,
    queryParams?: Record<string, string | number | boolean>
  ): string {
    let urlStr = url;

    if (urlStr.startsWith('/')) {
      urlStr = urlStr.substring(1, urlStr.length);
    }

    if (!queryParams) {
      return urlStr;
    }

    urlStr += '?';

    Object.keys(queryParams).forEach(key => {
      urlStr += `${key}=${encodeURIComponent(queryParams[key])}&`;
    });

    urlStr = urlStr.substring(0, urlStr.length - 1);

    return urlStr;
  }
}
