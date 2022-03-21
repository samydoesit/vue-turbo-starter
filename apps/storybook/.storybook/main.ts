const { join, resolve } = require('path')
const WindiCSS = require('vite-plugin-windicss').default

module.exports = {
  core: {
    builder: 'storybook-builder-vite'
  },
  stories: [
    '../stories/**/*.stories.@(js|jsx|ts|tsx|mdx)',
    '../../../packages/ui/**/*.stories.@(js|jsx|ts|tsx|mdx)'
  ],
  framework: '@storybook/vue3',
  addons: [
    // {
    //   name: '@storybook/addon-postcss',
    //   options: {
    //     postcssLoaderOptions: {
    //       implementation: require('postcss')
    //     }
    //   }
    // }
    '@storybook/addon-essentials'
  ],
  viteFinal (config) {
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
          include: ['../../../packages/ui/src/**/*.{vue,html,jsx,tsx}']
        }
      })
    ])
    config.resolve.dedupe = ['@storybook/client-api']

    // return the customized config
    return config
  }
}
