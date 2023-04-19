import type { Rule } from '@unocss/core'
import { customRules } from './customRules'

// import { safeArea } from './safe-area'

export const rules: Rule[] = [
  // safeArea // not ready yet
  customRules,
].flat(1)
