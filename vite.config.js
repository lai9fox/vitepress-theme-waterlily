import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import { svgIconSymbolIdPrefix } from './src/const/svg-icons';

const resolvePath = path => resolve(__dirname, path);

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolvePath('./index.js'),
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: { external: ['vue', 'vitepress', 'node'] },
  },
  plugins: [
    createSvgIconsPlugin({
      iconDirs: [resolvePath('./src/assets/svgs')],
      symbolId: `${ svgIconSymbolIdPrefix }-[dir]-[name]`,
      svgoOptions: {
        full: true,
        plugins: [{ name: 'removeAttrs', params: { attrs: 'fill' } }],
      },
    }),
    vue()
  ],
  resolve: {
    alias: {
      '~': resolvePath('./'),
      '@': resolvePath('./src'),
    },
  },
});
