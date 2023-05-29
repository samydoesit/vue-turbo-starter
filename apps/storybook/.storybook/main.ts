import type { StorybookConfig } from '@storybook/vue3-vite'
import remarkGfm from 'remark-gfm'
import Unocss from 'unocss/vite'

import { alias } from '../../../alias'

const config: StorybookConfig = {
  stories: ['../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)', '../../../packages/ui/src/components/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  addons: [{
    name: '@storybook/addon-essentials',
    options: {
      docs: false,
    },
  }, '@storybook/addon-interactions', '@storybook/addon-links', {
    name: '@storybook/addon-docs',
    options: {
      mdxPluginOptions: {
        mdxCompileOptions: {
          // MDX2 turned off Github flavoured markdown
          // https://storybook.js.org/docs/7.0/react/writing-docs/mdx#lack-of-github-flavored-markdown-gfm
          remarkPlugins: [remarkGfm],
        },
      },
    },
  }], // https://github.com/storybookjs/storybook/issues/20583
  viteFinal(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      ...alias,
    }

    config.plugins = config.plugins ?? []
    config.plugins.push(
      Unocss(),
    )

    // return the customized config
    return config
  },
  docs: {
    autodocs: true,
  },
}
export default config
