import type { StorybookConfig } from '@storybook/vue3-vite'
// https://github.com/storybookjs/storybook/issues/20583
// import Unocss from 'unocss/vite'

// import { alias } from '../../../alias'

const config: StorybookConfig = {
  stories: [
    '../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../../../packages/ui/src/components/**/*.stories.@(js|jsx|ts|tsx|mdx)',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-links',
    '@storybook/addon-mdx-gfm',
  ],
  // https://github.com/storybookjs/storybook/issues/20583
  // viteFinal (config) {
  //   config.resolve.alias = {
  //     ...config.resolve.alias,
  //     ...alias,
  //   }

  //   config.plugins = config.plugins ?? []
  //   config.plugins.push(
  //     Unocss(),
  //   )

  //   // return the customized config
  //   return config
  // },
}

export default config
