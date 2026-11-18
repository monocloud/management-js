export interface MonoCloudConfig {
  /** Tenant domain used by the default fetcher to build API request URLs. */
  domain: string;

  /** API key sent in the X-API-KEY header by the default fetcher. */
  apiKey: string;

  /** Optional HTTP request settings. */
  config?: {
    /** Default fetcher request timeout in milliseconds. Defaults to 10000. */
    timeout?: number;
  };
}
