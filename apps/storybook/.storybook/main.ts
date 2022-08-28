import { join, resolve } from 'path'
import type { StorybookViteConfig } from '@storybook/builder-vite'
import WindiCSS from 'vite-plugin-windicss'

const config: StorybookViteConfig = {
  core: {
    builder: '@storybook/builder-vite'
  },
  stories: [
    '../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../../../packages/ui/src/components/**/*.stories.@(js|jsx|ts|tsx|mdx)'
  ],
  features: {
    interactionsDebugger: true,
    buildStoriesJson: true
  },
  framework: '@storybook/vue3',
  addons: [
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss')
        }
      }
    },
    '@storybook/addon-essentials',
    '@storybook/addon-interactions'
  ],
  viteFinal (config, { configType }) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@ui': resolve(__dirname, '../../../packages/ui/src')
    }
    // config.resolve.modules = [resolve(__dirname, '@', '../components'), 'node_modules'];
    config.plugins = config.plugins ?? []
    config.plugins.push([
      WindiCSS({
        config: join(__dirname, '../', 'windi.config.ts'),
        scan: {
          include: ['../../packages/ui/src/components/**/*.{vue,html,jsx,tsx}']
        }
      })
    ])
    config.resolve.dedupe = ['@storybook/client-api', '@emotion/react']

    if (configType !== 'PRODUCTION') {
      config.optimizeDeps.include = [
        ...(config?.optimizeDeps?.include ?? []),
        '@storybook/vue3/dist/esm/client/preview/config',
        '@storybook/vue3/dist/esm/client/docs/config',
        '@storybook/addon-docs/preview.js',
        '@storybook/addon-actions/preview.js',
        '@storybook/addon-backgrounds/preview.js',
        '@storybook/addon-measure/preview.js',
        '@storybook/addon-outline/preview.js',
        '@storybook/addon-interactions/preview.js',
        'util'
      ]
    }

    // return the customized config
    return config
  }
}

export default config
