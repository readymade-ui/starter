This is a simple example. 67% reduction in bundle size when bundling with rollup of instead parcel. Parcel is not tree shaking several classes from `@readymade/core` FESM, while `rollup` can.

# Steps to reproduce

1. `yarn install`
2. `yarn prod && yarn serve`

Observe size of client.js (~23.17 KB)

3. `yarn prod:rollup && yarn serve`

Observe size of client.js (~7.61 KB)
