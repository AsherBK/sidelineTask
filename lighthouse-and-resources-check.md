# Lighthouse and Resources Check

## Overview
This script performs two main tasks:
1. **Lighthouse Performance Audit**: Generates a JSON report using Google's Lighthouse tool for a given URL.
2. **Resource Validation**: Checks for failed network requests (HTTP status codes other than 200) using Playwright.

## Prerequisites
Ensure you have the following installed:
- Node.js (latest LTS recommended)
- npm or yarn package manager

## Installation
To install required dependencies, run:

```sh
npm install playwright lighthouse chrome-launcher
```

## Script Breakdown

### 1. Lighthouse Performance Audit
Function: `generateLightHouseReportAsJson(url)`
- Launches a headless Chrome instance.
- Runs Lighthouse audits for `performance`, `SEO`, `accessibility`, and `best practices`.
- Saves the Lighthouse report as `lhreport.json`.
- Closes the Chrome instance after execution.

Usage:
```js
await generateLightHouseReportAsJson('https://example.com');
```

### 2. Resource Validation
Function: `validateResources(url)`
- Uses Playwright to launch a headless browser.
- Captures network responses and logs non-200 status codes.
- Navigates to the specified URL and checks for failed requests.
- Closes the browser instance after validation.

Usage:
```js
await validateResources('https://example.com');
```

## Running the Script
Uncomment the desired function call and execute:

```sh
node lighthouse-and-resources-check.js
```

## Output
- **Lighthouse Report**: `lhreport.json`
- **Console Logs**: Displays failed network requests with their URLs and status codes.

## Notes
- The script currently checks `https://www.jdn.co.il` by default.
- Ensure Chrome is installed for Lighthouse audits.
- Modify the script to analyze different URLs as needed.


