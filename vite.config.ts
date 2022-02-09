// https://vitejs.dev/config/
import { fileURLToPath, URL } from 'url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import copy from 'rollup-plugin-copy';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

const path = require('path');
const plugins = [vue(), vueJsx(), AutoImport({
    resolvers: [ElementPlusResolver()],
  }),
  Components({
    resolvers: [ElementPlusResolver()],
  })
];

process.env.NODE_ENV !== 'production' && plugins.push(copy({ 
  targets:[ 
    { src: path.resolve(__dirname, 'samples'), dest: path.resolve(__dirname, 'dist') } 
  ] 
}))

export default defineConfig({
  plugins,
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
