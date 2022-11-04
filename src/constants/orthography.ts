import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'a',
  'i',
  'u',
  'g',
  'j',
  'k',
  'l',
  'm',
  'n',
  'p',
  'r',
  't',
  'w',
  'y'
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
