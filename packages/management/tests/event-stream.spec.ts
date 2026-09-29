import {
  Fetcher,
  MonoCloudBadRequestException,
  MonoCloudClientBase,
  MonoCloudEvent,
  MonoCloudException,
  ProblemDetails,
} from '@monocloud/management-core';

class StreamingClient extends MonoCloudClientBase {
  events(signal?: AbortSignal): AsyncGenerator<MonoCloudEvent, void, unknown> {
    return this.processEventStream(
      { method: 'GET', url: '/events', queryParams: { tracking_id: 'a b&c' } },
      signal
    );
  }

  json(): Promise<unknown> {
    return this.processRequest({ method: 'GET', url: '/status' });
  }
}

const config = { domain: 'example.com', apiKey: 'key' };
const encoder = new TextEncoder();
const streamResponse = (body: ReadableStream<Uint8Array>): Response =>
  new Response(body, {
    headers: { 'Content-Type': 'text/event-stream; charset=utf-8' },
  });

const fromChunks = (chunks: Uint8Array[]): Response =>
  streamResponse(
    new ReadableStream<Uint8Array>({
      start(controller): void {
        chunks.forEach(chunk => controller.enqueue(chunk));
        controller.close();
      },
    })
  );

async function collect(
  events: AsyncIterable<MonoCloudEvent>
): Promise<MonoCloudEvent[]> {
  const result: MonoCloudEvent[] = [];
  for await (const event of events) result.push(event);
  return result;
}

function clientFor(response: Response): StreamingClient {
  return new StreamingClient(config, () => Promise.resolve(response));
}

afterEach(() => jest.restoreAllMocks());

describe('server-sent event iteration', () => {
  test.each(['\n', '\r', '\r\n'])(
    'parses byte-sized UTF-8 chunks and %j line endings',
    async newline => {
      const bytes = encoder.encode(
        [
          '\uFEFF: comment',
          'id: 9',
          'event: ping',
          'data:',
          '',
          'data: café 😀',
          'data: next line',
          '',
          'id: bad\0id',
          'data: consumed',
          '',
          'id:',
          'data: reset',
          '',
          'retry: 100',
          'event: ignored',
          '',
          'data: incomplete',
        ].join(newline)
      );
      const events = await collect(
        clientFor(
          fromChunks(Array.from(bytes, byte => Uint8Array.of(byte)))
        ).events()
      );
      expect(events).toEqual([
        { event: 'ping', data: '', id: '9' },
        { event: 'message', data: 'café 😀\nnext line', id: '9' },
        { event: 'message', data: 'consumed', id: '9' },
        { event: 'message', data: 'reset', id: '' },
      ]);
    }
  );

  test('yields before EOF and cancels the body when the loop breaks', async () => {
    const cancel = jest.fn();
    const body = new ReadableStream<Uint8Array>({
      start(controller): void {
        controller.enqueue(encoder.encode('data: consumed\n\n'));
      },
      cancel,
    });
    const fetcher = jest
      .fn<ReturnType<Fetcher>, Parameters<Fetcher>>()
      .mockResolvedValue(streamResponse(body));
    const client = new StreamingClient(config, fetcher);
    const events = client.events();
    expect(fetcher).not.toHaveBeenCalled();
    for await (const event of events) {
      expect(event.data).toBe('consumed');
      if (event.data === 'consumed') break;
    }
    expect(cancel).toHaveBeenCalledTimes(1);
    expect(body.locked).toBe(false);
    expect(fetcher.mock.calls[0][0]).toBe('events?tracking_id=a%20b%26c');
    expect(new Headers(fetcher.mock.calls[0][1]?.headers).get('accept')).toBe(
      'text/event-stream'
    );
    expect(fetcher.mock.calls[0][1]?.signal?.aborted).toBe(true);
  });

  test('aborts a pending read even when a custom fetcher ignores the signal', async () => {
    const cancel = jest.fn();
    const body = new ReadableStream<Uint8Array>({ cancel });
    const controller = new AbortController();
    const fetcher = jest
      .fn<ReturnType<Fetcher>, Parameters<Fetcher>>()
      .mockResolvedValue(streamResponse(body));
    const events = new StreamingClient(config, fetcher).events(
      controller.signal
    );
    const next = events.next();
    // Let the response resolve and the reader wait for its first chunk.
    await Promise.resolve();
    controller.abort();
    await expect(next).rejects.toMatchObject({ name: 'AbortError' });
    expect(cancel).toHaveBeenCalledTimes(1);
    expect(body.locked).toBe(false);
  });

  test('pre-aborted signals do not start a request', async () => {
    const fetcher = jest.fn<ReturnType<Fetcher>, Parameters<Fetcher>>();
    const events = new StreamingClient(config, fetcher).events(
      AbortSignal.abort()
    );
    await expect(events.next()).rejects.toMatchObject({ name: 'AbortError' });
    expect(fetcher).not.toHaveBeenCalled();
  });

  test('aborts while waiting for response headers', async () => {
    const controller = new AbortController();
    const fetcher: Fetcher = (_url, init) =>
      new Promise((_resolve, reject) => {
        init?.signal?.addEventListener(
          'abort',
          () => reject(init.signal?.reason),
          { once: true }
        );
      });
    const next = new StreamingClient(config, fetcher)
      .events(controller.signal)
      .next();
    controller.abort();
    await expect(next).rejects.toMatchObject({ name: 'AbortError' });
  });

  test('aborts the body while the consumer is processing an event', async () => {
    const cancel = jest.fn();
    const body = new ReadableStream<Uint8Array>({
      start(controller): void {
        controller.enqueue(encoder.encode('data: first\n\ndata: second\n\n'));
      },
      cancel,
    });
    const controller = new AbortController();
    const events = clientFor(streamResponse(body)).events(controller.signal);
    expect((await events.next()).value).toMatchObject({ data: 'first' });
    controller.abort();
    expect(cancel).toHaveBeenCalledTimes(1);
    await expect(events.next()).rejects.toMatchObject({ name: 'AbortError' });
    expect(body.locked).toBe(false);
  });

  test('EOF finishes without reconnecting', async () => {
    const fetcher = jest
      .fn<ReturnType<Fetcher>, Parameters<Fetcher>>()
      .mockResolvedValue(fromChunks([encoder.encode('data: gone\n\n')]));
    expect(
      await collect(new StreamingClient(config, fetcher).events())
    ).toEqual([{ event: 'message', data: 'gone', id: '' }]);
    expect(fetcher).toHaveBeenCalledTimes(1);
  });

  test('maps problem details using the existing HTTP exception hierarchy', async () => {
    const response = new Response(
      JSON.stringify({
        status: 400,
        title: 'Invalid authorization',
        error_code: 'auth.invalid',
      }),
      {
        status: 400,
        headers: { 'Content-Type': 'application/problem+json' },
      }
    );
    await expect(clientFor(response).events().next()).rejects.toBeInstanceOf(
      MonoCloudBadRequestException
    );
  });

  test('preserves an SDK override of problem mapping', async () => {
    const failure = new MonoCloudException('custom error');
    class CustomClient extends StreamingClient {
      protected override throwProblem(_problem: ProblemDetails): never {
        throw failure;
      }
    }
    const response = new Response('{"status":400}', {
      status: 400,
      headers: { 'Content-Type': 'application/problem+json' },
    });
    await expect(
      new CustomClient(config, () => Promise.resolve(response)).events().next()
    ).rejects.toBe(failure);
  });

  test('rejects a successful JSON response and cancels its body', async () => {
    const cancel = jest.fn();
    const body = new ReadableStream<Uint8Array>({ cancel });
    const response = new Response(body, {
      headers: { 'Content-Type': 'application/json' },
    });
    await expect(clientFor(response).events().next()).rejects.toThrow(
      'Expected a text/event-stream response.'
    );
    expect(cancel).toHaveBeenCalledTimes(1);
  });

  test('releases the reader after a stream failure', async () => {
    const body = new ReadableStream<Uint8Array>({
      pull(controller): void {
        controller.error(new Error('network failed'));
      },
    });
    await expect(
      clientFor(streamResponse(body)).events().next()
    ).rejects.toThrow('Unable to read the event stream.');
    expect(body.locked).toBe(false);
  });

  test('default fetcher preserves stream headers and signal without the JSON timeout', async () => {
    const fetchMock = jest
      .spyOn(globalThis, 'fetch')
      .mockResolvedValue(fromChunks([]));
    const timeout = jest.spyOn(AbortSignal, 'timeout');
    await collect(new StreamingClient(config).events());
    expect(timeout).not.toHaveBeenCalled();
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe('https://example.com/api/events?tracking_id=a%20b%26c');
    const requestHeaders = new Headers(init?.headers);
    expect(requestHeaders.get('accept')).toBe('text/event-stream');
    expect(requestHeaders.get('x-api-key')).toBe('key');
    expect(init?.signal).toBeInstanceOf(AbortSignal);
  });

  test('ordinary JSON requests retain their configured timeout', async () => {
    jest.spyOn(globalThis, 'fetch').mockResolvedValue(new Response('{}'));
    const timeout = jest.spyOn(AbortSignal, 'timeout');
    await new StreamingClient({ ...config, config: { timeout: 1234 } }).json();
    expect(timeout).toHaveBeenCalledWith(1234);
  });
});
