import { MonoCloudEvent } from '../models/monocloud-event';

/** Reads one connection; EOF ends the iterator without reconnecting. */
export async function* readEventStream(
  body: ReadableStream<Uint8Array>,
  signal: AbortSignal
): AsyncGenerator<MonoCloudEvent, void, unknown> {
  const reader = body.getReader();
  const cancel = (): void => {
    void reader.cancel().catch(() => undefined);
  };
  signal.addEventListener('abort', cancel, { once: true });

  const decoder = new TextDecoder();
  let line = '';
  let skipLf = false;
  let data = '';
  let event = '';
  let id = '';

  try {
    while (true) {
      signal.throwIfAborted();
      const chunk = await reader.read();
      signal.throwIfAborted();
      if (chunk.done) {
        // SSE discards an event that has no terminating blank line.
        return;
      }

      for (const character of decoder.decode(chunk.value, { stream: true })) {
        signal.throwIfAborted();
        if (skipLf && character === '\n') {
          skipLf = false;
          continue;
        }
        skipLf = character === '\r';
        if (character !== '\r' && character !== '\n') {
          line += character;
          continue;
        }

        if (line === '') {
          if (data !== '') {
            yield { event: event || 'message', data: data.slice(0, -1), id };
          }
          data = '';
          event = '';
        } else if (!line.startsWith(':')) {
          const separator = line.indexOf(':');
          const field = separator < 0 ? line : line.slice(0, separator);
          let value = separator < 0 ? '' : line.slice(separator + 1);
          if (value.startsWith(' ')) {
            value = value.slice(1);
          }
          switch (field) {
            case 'data':
              data += `${value}\n`;
              break;
            case 'event':
              event = value;
              break;
            case 'id':
              if (!value.includes('\0')) {
                id = value;
              }
              break;
            default:
              // Unknown fields and retry are ignored: this reader never reconnects.
              break;
          }
        }
        line = '';
      }
    }
  } finally {
    signal.removeEventListener('abort', cancel);
    await reader.cancel().catch(() => undefined);
    reader.releaseLock();
  }
}
