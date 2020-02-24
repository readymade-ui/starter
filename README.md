# Readymade Starter

Starter code for developing Readymade projects built with Parcel.

Developing projects with Web Components can seem daunting without sophisticated tooling.

Parcel brings the following to developing Web Components with Readymade.

- zero config bundling and optimization
- code splitting and lazyloading
- fast build times through caching and hot module replacement
- import component style and template from separate files
- css and html pre / postprocessing
- typescript compilation

This repository adds some features too

- server side rendering with @skatejs/ssr
- client side routing

NOTE: client side router is experimental and may someday become a package.

### Installation

To get started, fork and clone the repo. Install dependencies with yarn.

`yarn install`

### Development

`yarn dev` starts up a local development server with code splitting, hot module replacement enabled by default. The first build takes longer. After the cache is populated the "hello world" project loads in ~1 second.

For more information about Parcel, read the official [documentation](https://parceljs.org/getting_started.html).

The project is viewable at `http://localhost:4444`.

### Source

The default project is split into two directories found in the `src` directory: `client` and `server`. The server portion is only used in the production build.

### Production

`yarn prod` builds the project for production. Found in the `dist` directory, the production build optimizes the html, css and javascript and prepares whitelisted components for server side rendering.

Run `yarn serve` to check the production build locally at `http://localhost:4444`.

More documentation coming soon.