import { viteStaticCopy } from 'vite-plugin-static-copy';

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
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  esbuild: {
    format: 'esm',
    target: 'es2022',
  },
  rollupOptions: {
    output: {
      name: 'window',
      sourcemap: false,
      extend: true,
    },
  },
};
