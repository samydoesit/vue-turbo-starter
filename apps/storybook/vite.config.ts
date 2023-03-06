// https://github.com/storybookjs/storybook/issues/20583
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import VueTypeImports from 'vite-plugin-vue-type-imports'

import { alias } from '../../alias'

const config = defineConfig({
  plugins: [
    /**
     *  https://github.com/vuejs/core/issues/4294
     */
    VueTypeImports(),
    vue(),
    Unocss(),
  ],
  resolve: {
    alias,
  },
})

export default config
