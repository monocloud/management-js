export interface MonoCloudConfig {
  domain: string;
  apiKey: string;
  config?: {
    timeout?: number;
  };
}
