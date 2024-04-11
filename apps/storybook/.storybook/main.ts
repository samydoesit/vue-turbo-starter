import type { StorybookConfig } from '@storybook/vue3-vite'
import remarkGfm from 'remark-gfm'

const config: StorybookConfig = {
  stories: ['../stories/**/*.@(mdx|stories.@(js|jsx|ts|tsx))', '../../../packages/ui/src/components/**/*.@(mdx|stories.@(js|jsx|ts|tsx))'],
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
  }],
  docs: {
    autodocs: true,
  },
}
export default config
