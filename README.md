<div align="center">
  <a href="https://www.monocloud.com?utm_source=github&utm_medium=api_sdk_js" target="_blank" rel="noopener noreferrer">
    <picture>
      <img src="https://raw.githubusercontent.com/monocloud/api-sdk-js/refs/heads/main/MonoCloud.png" height="100" alt="MonoCloud Logo">
    </picture>
  </a>
  <p>Secure, simple auth for everything</p>
  <img src="https://img.shields.io/npm/v/@monocloud/api-core" alt="NPM" />
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/:license-MIT-blue.svg?style=flat" alt="License: MIT" />
  </a>
  <a href="https://github.com/monocloud/api-sdk-js/actions/workflows/build.yml">
    <img src="https://github.com/monocloud/api-sdk-js/actions/workflows/build.yml/badge.svg" alt="Build Status" />
  </a>
</div>

<br /><br />

## Introduction

**MonoCloud API SDK for JavaScript – programmatically manage apps, policies, configurations, and users via the MonoCloud APIs.**

[MonoCloud](https://www.monocloud.com?utm_source=github&utm_medium=api_sdk_js) is a modern, developer-friendly Identity & Access Management platform.

This SDK provides a full-featured, typed JavaScript client for interacting with the **MonoCloud APIs**, allowing you to automate tenant administration programmatically.

## 📘 Documentation

- **Documentation:** [https://www.monocloud.com/docs](https://www.monocloud.com/docs?utm_source=github&utm_medium=api_sdk_js)
- **Management API SDK Docs:** [https://www.monocloud.com/docs/apis/management](https://www.monocloud.com/docs/apis/management?utm_source=github&utm_medium=api_sdk_js)
- **Identity API SDK Docs:** [https://www.monocloud.com/docs/apis/identity](https://www.monocloud.com/docs/apis/identity?utm_source=github&utm_medium=api_sdk_js)
- **API Reference:** [https://monocloud.github.io/api-sdk-js](https://monocloud.github.io/api-sdk-js?utm_source=github&utm_medium=api_sdk_js)

## Supported Platforms

- **Node.js >= 11.0.0**

## 🚀 Getting Started

### Requirements

- A **MonoCloud tenant**
- A **Tenant API key** with appropriate permissions

## Management API

### 📦 Installation

```bash
npm install @monocloud/api-management
```

### Usage

```typescript
const managementClient = MonoCloudManagementClient.init({
  domain: 'https://<your-tenant-domain>',
  apiKey: '<your-api-key>',
});
```

⚠️ **Security Note:** Do not hardcode your API key. It is recommended to load it from an environment variable. See: [`monocloud-management-client`](https://github.com/monocloud/api-sdk-js/blob/main/packages/management/src/monocloud-management-client.ts)

### ✨ Usage Examples

The SDK closely mirrors the REST API structure — clients are organized by resource areas (clients, resources, etc.).

#### 🔍 Get all clients

```typescript
const result = await managementClient.clients.getAllClients(
    page: 1,
    size: 10,
    filter: "dashboard",
    sort: "name:1"
);
```

Explore further operations (clients, options, trust stores, etc.) using the same patterns.
See: [https://www.monocloud.com/docs](https://www.monocloud.com/docs?utm_source=github&utm_medium=api_sdk_js)

## Identity API

### 📦 Installation

```bash
npm install @monocloud/api-identity
```

### Usage

```typescript
const identityClient = MonoCloudIdentityClient.init({
  domain: 'https://<your-tenant-domain>',
  apiKey: '<your-api-key>',
});
```

⚠️ **Security Note:** Do not hardcode your API key. It is recommended to load it from an environment variable. See: [`monocloud-identity-client`](https://github.com/monocloud/api-sdk-js/blob/main/packages/identity/src/monocloud-identity-client.ts)

### ✨ Usage Examples

The SDK closely mirrors the REST API structure — clients are organized by users and groups.

#### 🔍 Get all users

```typescript
const result = await identityClient.users.getAllUsers(
    page: 1,
    size: 10,
    filter: "bob",
    sort: "given_name:1"
);
```

Explore further operations at [https://www.monocloud.com/docs](https://www.monocloud.com/docs?utm_source=github&utm_medium=api_sdk_js)

## 🤝 Contributing & Support

### Issues & Feedback

- Use **GitHub Issues** for bug reports and feature requests.
- For tenant or account-specific help, contact MonoCloud Support through your dashboard.

### Security

Do **not** report security issues publicly. Please follow the contact instructions at: [https://www.monocloud.com/contact](https://www.monocloud.com/contact?utm_source=github&utm_medium=api_sdk_js)

## 📄 License

Licensed under the **MIT License**. See the included [`LICENSE`](https://github.com/monocloud/api-sdk-js/blob/main/LICENSE) file.
