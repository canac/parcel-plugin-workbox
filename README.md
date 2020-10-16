# parcel-plugin-workbox
Workbox plugin for Parcel. Inspired by [parcel-plugin-workbox](https://github.com/dahnielson/parcel-plugin-workbox) by [@dahnielson](https://github.com/dahnielson).

## Install

Install using npm

```bash
npm install @canac/parcel-plugin-workbox --save-dev
```

## Usage

Configure the options passed to Workbox's [generateSW](https://developers.google.com/web/tools/workbox/reference-docs/latest/module-workbox-build#.generateSW) in the `workbox` property of your project's `package.json` file. For example:

```json
{
  "dependencies": { ... },
  "workbox": {
    "importScripts": ["./worker.js"],
    "sourcemap": false
  }
}
```
