import { CONFIG } from './config'

export const ORTHOGRAPHY = [
  'a',
  'aa',
  'i',
  'ii',
  'k',
  'l',
  'ly',
  'rl',
  'm',
  'n',
  'ny',
  'rn',
  'ng',
  'p',
  'r',
  'rr',
  't',
  'j',
  'rt',
  'u',
  'uu',
  'w',
  'y'
]

if (CONFIG.normalization) {
  ORTHOGRAPHY.forEach(
    (val, i) => (ORTHOGRAPHY[i] = val.normalize(CONFIG.normalization))
  )
}
