import antfu from '@antfu/eslint-config'
import unocss from '@unocss/eslint-config/flat'

const apps = 'apps'
const histoirePath = `${apps}/histoire`

export default await antfu(
  {
    typescript: true,
    vue: true,
  },
  unocss,
  // Histoire Overrides
  {
    files: [`${histoirePath}/**/*.{js,ts,vue}`],
    rules: {
      'import/default': 'off',
    },
  },
)
