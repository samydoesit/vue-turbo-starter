import { defineConfig } from 'unocss'
import { extendUnocssOptions } from './packages/css-preset'

// for IDE support
export default defineConfig({
  ...extendUnocssOptions(),
  include: [
    '**/*.ts',
    '**/*.vue',
    '**/*.mdx',
  ],
})
