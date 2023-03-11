// @ts-check
const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  extends: ['@antfu'],
  rules: {
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    // 'import/order': [
    //   'error',
    //   {
    //     'newlines-between': 'always',
    //     pathGroupsExcludedImportTypes: ['vue'],
    //     groups: [
    //       'builtin',
    //       'external',
    //       'internal',
    //       'parent',
    //       'sibling',
    //       'index',
    //     ],
    //     pathGroups: [
    //       {
    //         pattern: '@ui/**',
    //         group: 'internal',
    //         position: 'before',
    //       },
    //     ],
    //   },
    // ],
    'vue/component-tags-order': [
      'error',
      {
        order: ['script', 'template', 'style'],
      },
    ],
    'vue/no-multiple-template-root': 'off',
  },
  ignorePatterns: ['**/*.json', 'dist', 'node_modules', '.turbo', '.nuxt', 'public', '.output', '!.storybook'],
})
