/**
 * The technology type.
 * @export
 * @enum {string}
 */

export const TechTypes = {
  /**
   * Technology not specified or unknown
   */
  Unknown: 'unknown',

  /**
   * React single-page application
   */
  React: 'react',

  /**
   * React Native mobile application
   */
  ReactNative: 'react_native',

  /**
   * Angular web application
   */
  Angular: 'angular',

  /**
   * Vue.js web application
   */
  Vue: 'vue',

  /**
   * Next.js full-stack application
   */
  NextJs: 'next_js',

  /**
   * Node.js server-side application
   */
  NodeJs: 'node_js',

  /**
   * .NET application
   */
  Dotnet: 'dotnet',

  /**
   * Spring Boot application
   */
  SpringBoot: 'spring_boot',

  /**
   * JavaScript application without a specific framework
   */
  Javascript: 'javascript',

  /**
   * Laravel (PHP) application
   */
  Laravel: 'laravel',

  /**
   * Django (Python) application
   */
  Django: 'django',

  /**
   * Ruby on Rails application
   */
  Rails: 'rails',

  /**
   * Go (Golang) application
   */
  Go: 'go',

  /**
   * Native Android application
   */
  Android: 'android',

  /**
   * Kotlin-based application
   */
  Kotlin: 'kotlin',

  /**
   * Swift-based iOS or macOS application
   */
  Swift: 'swift',

  /**
   * Flutter cross-platform application
   */
  Flutter: 'flutter',

  /**
   * Expo-managed React Native application
   */
  Expo: 'expo',

  /**
   * Device-based or embedded application
   */
  Device: 'device',

  /**
   * mTLS or certificate-based integration
   */
  Mtls: 'mtls',

  /**
   * Svelte application
   */
  Svelte: 'svelte',

  /**
   * AWS Lambda function
   */
  AwsLambda: 'aws_lambda',

  /**
   * cURL or script-based integration
   */
  Curl: 'curl',

  /**
   * iOS application
   */
  Ios: 'ios',

  /**
   * Fastify Node.js server
   */
  Fastify: 'fastify',

  /**
   * Express.js application
   */
  ExpressJs: 'express_js',

  /**
   * Espressif microcontroller platform
   */
  Espressif: 'espressif',

  /**
   * Arduino-based device
   */
  Arduino: 'arduino',

  /**
   * Astro static / hybrid web application
   */
  Astro: 'astro',
} as const;

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type TechTypes = (typeof TechTypes)[keyof typeof TechTypes];
