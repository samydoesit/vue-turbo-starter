import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    { input: 'src/index', format: 'esm' }
  ],
  clean: true,
  declaration: true,
  externals: [
    'unocss',
    '@unocss/core',
    '@unocss/config',
    '@unocss/nuxt',
    '@unocss/preset-wind',
    '@unocss/preset-mini',
    '@unocss/preset-mini/utils',
    '@unocss/transformer-variant-group'
  ],
  rollup: {
    emitCJS: true,
    dts: {
      respectExternal: false
    }
  }
})
