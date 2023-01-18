import { CONFIG } from './config'

export const WORDS = [
'parnti',
'kujupa',
'kayili',
'kulila',
'ngurra',
'mirrka',
'jirntu',
'pukurl',
'maparn',
'mamala',
'mulypa',
'kurnta',
'pukuny',
'jukuru',
'nyuntu',
'parrka',
'nyaaku',
'tatila',
'yumari',
'yukuri',
'ngarri',
'paarnu',
'karrku',
'kangin',
'manarr',
'kalaru',
'linyji',
'tilila',
'purlka',
'wajala',
'puyula',
'jiinpa',
'kamuru',
'pajala',
'yarula',
'walyku',
'pupani',
'jilyku',
'wangal',
'jikila',
'yatula',
'kaniny',
'ngampu',
'yuwayi',
'yungun',
'karnpa',
'yimiri',
'tapurr',
'pilurn',
'yaruju',
'ngumpa',
'pungin',
'pirrka',
'ngalyi',
'jiinya',
'marlpa',
'tikirl',
'parawa',
'wilyja',
'ngulyu',
'kanaji',
'jinyji',
'muungu',
'yurlta',
'jumala',
'jukuly',
'majala',
'mulyji',
'ngurlu',
'wikirr',
'nyanka',
'wirnka',
'nyirti',
'takala',
'tarrun',
'lukuti',
'walyja',
'wilyki',
'murrpu',
'jawala',
'kurlka',
'yungin',
'nyarra',
'larrja',
'marrku',
'nyampa',
'juwari',
'ngalya',
'japila',
'kanala',
'wanyja',
'jirlpi',
'jurnpa',
'kujala',
'katula',
'purrka',
'nyarru',
'jarntu',
'ngayun',
'paarni',
'jarnpa',
'wanala',
'wayila',
'wartil',
'junyju',
'yurltu',
'panaka',
'wiyala',
'pakila',
'tarrka',
'kunala',
'karrpu',
'wangka',
'karlka',
'murltu',
'warntu',
'julyju',
'katiku',
'turlku',
'katini',
'majula',
'yutila',
'pakala',
'jarrpa',
'kipara'
]

if (CONFIG.normalization) {
  WORDS.forEach((val, i) => (WORDS[i] = val.normalize(CONFIG.normalization)))
}

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

if (CONFIG.shuffle) {
  shuffle(WORDS)
}
