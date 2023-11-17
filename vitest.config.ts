// https://dev.to/tao/adding-vitest-to-nuxt-3-2023-lpa
// https://klj40702.medium.com/使用-vitest-測試-nuxt3-的程式-0b52d58a6fa8

import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vitest'],
      dts: true
    }),
    Components({
      dirs: ['./components']
    })
  ],
  test: {
    globals: true,
    environment: 'jsdom'
  }
})
