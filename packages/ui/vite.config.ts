import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import Pages from 'vite-plugin-pages';
import { replaceCodePlugin } from 'vite-plugin-replace';
import { version } from './package.json';

export default defineConfig({
  plugins: [
    replaceCodePlugin({
      replacements: [
        {
          from: '__VERSION__',
          to: `v${version}`
        }
      ]
    }),
    vue(),
    Pages(),
    AutoImport({
      imports: ['vue', 'vue-router', 'vue/macros', 'pinia'],
      dts: './src/auto-imports.d.ts',
      dirs: ['./src/stores/**'],
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true
      }
    }),
    Components({ dts: 'src/components.d.ts' })
  ]
});
