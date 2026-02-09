<div align="center">
  <a href="https://www.monocloud.com?utm_source=github&utm_medium=management_js" target="_blank" rel="noopener noreferrer">
    <picture>
      <img src="https://raw.githubusercontent.com/monocloud/management-js/refs/heads/main/banner.svg" alt="MonoCloud Banner">
    </picture>
  </a>
  <div align="right">
    <a href="https://www.npmjs.com/package/@monocloud/management" target="_blank">
      <img src="https://img.shields.io/npm/v/@monocloud/management" alt="NPM" />
    </a>
    <a href="https://opensource.org/licenses/MIT" target="_blank">
      <img src="https://img.shields.io/:license-MIT-blue.svg?style=flat" alt="License: MIT" />
    </a>
    <a href="https://github.com/monocloud/management-js/actions/workflows/build.yml" target="_blank">
      <img src="https://github.com/monocloud/management-js/actions/workflows/build.yml/badge.svg" alt="Build Status" />
    </a>
  </div>
</div>

## Introduction

**MonoCloud Management SDK for JavaScript – programmatically manage apps, policies, configurations, users, and groups via the MonoCloud Management APIs.**

[MonoCloud](https://www.monocloud.com?utm_source=github&utm_medium=management_js) is a modern, developer-friendly Identity & Access Management platform.

This SDK provides a full-featured, typed JavaScript client for interacting with the **MonoCloud Management APIs**, allowing you to automate tenant administration programmatically.

## 📘 Documentation

- **Documentation:** [https://www.monocloud.com/docs](https://www.monocloud.com/docs?utm_source=github&utm_medium=management_js)
- **Management API SDK Docs:** [https://www.monocloud.com/docs/apis/management](https://www.monocloud.com/docs/apis/management?utm_source=github&utm_medium=management_js)
- **API Reference:** [https://monocloud.github.io/management-js](https://monocloud.github.io/management-js?utm_source=github&utm_medium=management_js)

## Supported Platforms

- **Node.js >= 11.0.0**

## 🚀 Getting Started

### Requirements

- A **MonoCloud tenant**
- A **Management API key** with appropriate permissions

### Installation

```bash
npm install @monocloud/management
```

### Usage

The SDK closely mirrors the REST API structure — clients are organized by resource areas (clients, resources, users, groups, etc.).

```typescript
const managementClient = MonoCloudManagementClient.init({
  domain: 'https://<your-tenant-domain>',
  apiKey: '<your-api-key>',
});
```

> [!CAUTION]
> Do not hardcode your API key. It is recommended to load it from an environment variable. See: [`monocloud-management-client`](https://github.com/monocloud/management-js/blob/main/packages/management/src/monocloud-management-client.ts)

#### Example - Get all clients

```typescript
const result = await managementClient.clients.getAllClients(
    page: 1,
    size: 10,
    filter: "dashboard",
    sort: "name:1"
);
```

Explore further operations at [https://www.monocloud.com/docs](https://www.monocloud.com/docs?utm_source=github&utm_medium=management_js)

## 🤝 Contributing & Support

### Issues & Feedback

- Use **GitHub Issues** for bug reports and feature requests.
- For tenant or account-specific help, contact MonoCloud Support through your dashboard.

### Security

Do **not** report security issues publicly. Please follow the contact instructions at: [https://www.monocloud.com/contact](https://www.monocloud.com/contact?utm_source=github&utm_medium=management_js)

## 📄 License

Licensed under the **MIT License**. See the included [`LICENSE`](https://github.com/monocloud/management-js/blob/main/LICENSE) file.
