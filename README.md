This is a simple example. Project builds in Parcel 1.x fine, but in Parcel 2.0 typescript decorators cause the build to fail.

This project makes hevy use of TypeScript. The Readymade library is dependent on TypeScript decorator pattern.

```
 🚨 Build failed.
[0] @parcel/transformer-babel: Support for the experimental syntax 'decorators-legacy' isn't currently enabled (7:1):
```

This error indicates I need to load the `@babel/plugin-proposal-decorators` plugin in `.babelrc`, however this dependency was not needed in Parcel 1.x. Adding this dependency opens a whole other can of worms.

```
"plugins": [
  ["@babel/plugin-proposal-decorators", { "legacy": true }]
]
```

# Steps to reproduce

1. `yarn install`
2. `yarn prod && yarn serve`
