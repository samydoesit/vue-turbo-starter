import { resolve } from 'node:path'

function r(p: string) {
  return resolve(__dirname, p)
}

export const alias: Record<string, string> = {
  '@ui': r('./packages/ui/src/'),
  'pinia': r('./node_modules/pinia/dist/pinia.mjs'),
}
