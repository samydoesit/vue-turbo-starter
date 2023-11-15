import antfu from '@antfu/eslint-config'
import unocss from '@unocss/eslint-config/flat'

export default antfu(
  {
    typescript: true,
    vue: true,
  },
  unocss,
)
