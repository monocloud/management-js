![MonoCloud Logo](https://raw.githubusercontent.com/monocloud/api-sdk-js/refs/heads/main/MonoCloud.png)

## Introduction

**MonoCloud Management API SDK for Javascript – programmatically manage apps, policies, configurations via the MonoCloud APIs.**

[MonoCloud](https://www.monocloud.com?utm_source=github&utm_medium=api_sdk_js) is a modern, developer-friendly Identity & Access Management platform.

This SDK provides a full-featured, typed JavaScript client for interacting with the **MonoCloud Management APIs**, allowing you to automate tenant administration programmatically.

## 📘 Documentation

- **Documentation:** [https://www.monocloud.com/docs](https://www.monocloud.com/docs?utm_source=github&utm_medium=api_sdk_js)
- **SDK Docs:** [https://www.monocloud.com/docs/apis/management](https://www.monocloud.com/docs/apis/management?utm_source=github&utm_medium=api_sdk_js)
- **API Reference:** [https://monocloud.github.io/api-sdk-js](https://monocloud.github.io/api-sdk-js?utm_source=github&utm_medium=api_sdk_js)

## Supported Platforms

- **Node.js >= 11.0.0**

## 🚀 Getting Started

### Requirements

- A **MonoCloud tenant**
- A **Tenant API key** with appropriate permissions

## 📦 Installation

```bash
npm install @monocloud/api-management
```

## Usage

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

Explore further operations at [https://www.monocloud.com/docs](https://www.monocloud.com/docs?utm_source=github&utm_medium=api_sdk_js)

## 🤝 Contributing & Support

### Issues & Feedback

- Use **GitHub Issues** for bug reports and feature requests.
- For tenant or account-specific help, contact MonoCloud Support through your dashboard.

### Security

Do **not** report security issues publicly. Please follow the contact instructions at: [https://www.monocloud.com/contact](https://www.monocloud.com/contact?utm_source=github&utm_medium=api_sdk_js)

## 📄 License

Licensed under the **MIT License**. See the included [`LICENSE`](https://github.com/monocloud/api-sdk-js/blob/main/LICENSE) file.
