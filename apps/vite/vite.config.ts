import { resolve } from 'path'
import Unocss from 'unocss/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), Unocss()],
  server: {
    port: 4000,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@ui': resolve(__dirname, '../../packages/ui/src'),
    },
  },
})
