require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  extends: ['@nuxtjs/eslint-config-typescript', 'plugin:vue/vue3-recommended'],
  overrides: [],
  rules: {
    'vue/component-tags-order': [
      'error',
      {
        order: ['script', 'template', 'style']
      }
    ],
    'vue/no-multiple-template-root': 'off'
  },
  ignorePatterns: ['**/*.json', 'dist', 'node_modules', '.turbo', '.nuxt', 'public', '.output', '!.storybook']
}
