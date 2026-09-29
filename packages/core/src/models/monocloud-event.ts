/** An event received from a server-sent events stream. Data is the raw text payload. */
export interface MonoCloudEvent {
  event: string;
  data: string;
  id: string;
}
