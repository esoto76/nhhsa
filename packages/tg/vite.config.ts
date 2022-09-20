import { fileURLToPath, URL } from 'node:url';
import { join } from 'node:path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import Pages from 'vite-plugin-pages';
import Electron from 'vite-plugin-electron';
import { replaceCodePlugin } from 'vite-plugin-replace';
import { version } from './package.json';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
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
    Components({ dts: 'src/components.d.ts' }),
    Electron({
      main: {
        entry: 'electron/main.ts'
      },
      preload: {
        input: {
          // Must be use absolute path, this is the restrict of Rollup
          preload: join(__dirname, 'electron/preload.ts')
        }
      },
      // Enables use of Node.js API in the Renderer-process
      // https://github.com/electron-vite/vite-plugin-electron/tree/main/packages/electron-renderer#electron-renderervite-serve
      renderer: {}
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
