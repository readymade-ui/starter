# Readymade Starter

Starter code for developing Readymade projects built with Vite.

Developing projects with Web Components can seem daunting without sophisticated tooling.

Vite brings the following to developing Web Components with Readymade.

- code splitting and lazyloading
- fast build times with caching and hot module replacement
- import component style and template from separate files
- css and html pre / postprocessing
- typescript compilation

This repository adds some features too

- server side rendering with @lit-labs/ssr
- client side routing

### Installation

To get started, fork and clone the repo. Install dependencies with yarn. This project currently works with yarn v4.

`yarn`

### Development

`yarn start` starts up a local development server with code splitting, hot module replacement enabled by default. The first build takes longer. After the cache is populated the "hello world" project loads in ~1 second. Use `yarn start:client` instead for purely client-side projects.

The project is viewable at `http://localhost:4443`.

### Source

The default project is split into two directories found in the `src` directory: `client` and `server`. The server portion is only used in the production build and included middleware for server-side rendering custom elements with Declarative Shadow DOM.

### Production

`yarn build` builds the project for production. Found in the `dist` directory, the production build optimizes the html, css and javascript and prepares whitelisted components for server side rendering.

Run `yarn preview` to check the production build locally at `http://localhost:4444`.

## Github Actions

A simple workflow for checking files pass lint and format checks is included. This project has been tested with full deployments to GitHub Pages. Readymade itself is developed with this environment. [Check out how Github Actions are configured on Github](https://github.com/readymade-ui/readymade).
