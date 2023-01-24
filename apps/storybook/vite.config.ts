// https://github.com/storybookjs/storybook/issues/20583
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'

import { alias } from '../../alias'

const config = defineConfig({
  plugins: [
    vue(),
    Unocss(),
  ],
  resolve: {
    alias,
  },
})

export default config
