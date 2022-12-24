// @ts-check
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defineConfig } = require('eslint-define-config')

module.exports = defineConfig({
  extends: ['@nuxtjs/eslint-config-typescript'],
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
  overrides: [
    {
      files: ['*.mdx', '*.md'],
      extends: ['plugin:mdx/recommended'],
      settings: {
        'mdx/code-blocks': false,
        'import/ignore': [ // TODO: atm necessary otherwise strange lint errors
          '@storybook/addon-docs',
        ],
      },
      rules: {
        indent: 'off',
        'prettier/prettier': 'off',
      },
    },
  ],
})
