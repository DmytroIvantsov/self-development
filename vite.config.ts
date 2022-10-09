import { fileURLToPath, URL } from 'node:url'
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue", "vue-router", "@vueuse/head", "@vueuse/core"],
      dirs: ["composables", "stores"],
      vueTemplate: true,
      dts: "auto-imports.d.ts",
    }),
    Components({
      dirs: ["components"],
      extensions: ["vue"],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: "components.d.ts",
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
