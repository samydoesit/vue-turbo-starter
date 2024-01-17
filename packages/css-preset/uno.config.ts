import { defineConfig } from 'unocss'

import { extendUnocssOptions } from './src'

export default defineConfig({
  ...extendUnocssOptions(),
})
