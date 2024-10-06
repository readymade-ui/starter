import { standardCssModules } from 'vite-plugin-standard-css-modules';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import pkgMinifyHTML from 'rollup-plugin-minify-html-literals';
import { glob } from 'glob';

const minifyHTML = pkgMinifyHTML.default;

export default {
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'public/images',
          dest: 'images',
        },
      ],
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  esbuild: {
    target: 'es2022',
  },
  assetsInclude: ['**/*.html'],
  build: {
    ssr: true,
    minify: true,
    manifest: 'route-manifest.json',
    rollupOptions: {
      input: await glob(['src/client/app/view/**/index.ts']),
      output: {
        name: 'window',
        format: 'esm',
        sourcemap: false,
        extend: true,
      },
      plugins: [
        minifyHTML(),
        standardCssModules({
          include: ['/**/*.css'],
          minify: true,
        }),
      ],
    },
  },
};
