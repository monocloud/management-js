---
"@monocloud/management-core": patch
"@monocloud/management": patch
---

Preserve every Set-Cookie response header as a string array in `response.headers['set-cookie']`, including responses from paginated requests. Other headers remain strings. Server-side consumers can forward each cookie separately without losing authentication, browser-binding, or logout cookies, or splitting Expires dates on commas. Browsers still hide Set-Cookie from JavaScript. Add descriptions for configuration and response properties.
