export interface Quote {
  sa: string       // Devanagari
  roman: string    // simple transliteration
  en: string       // meaning
  source: string   // where it is from
}

export const Q = {
  satyam: {
    sa: 'सत्यं वद । धर्मं चर ।',
    roman: 'Satyam vada, dharmam chara',
    en: 'Speak the truth; practise dharma.',
    source: 'Taittiriya Upanishad 1.11.1',
  },
  jyoti: {
    sa: 'तमसो मा ज्योतिर्गमय ।',
    roman: 'Tamaso ma jyotir gamaya',
    en: 'Lead me from darkness to light.',
    source: 'Brihadaranyaka Upanishad 1.3.28',
  },
  asato: {
    sa: 'असतो मा सद्गमय । तमसो मा ज्योतिर्गमय । मृत्योर्मा अमृतं गमय ॥',
    roman: 'Asato ma sad gamaya, tamaso ma jyotir gamaya, mrityor ma amritam gamaya',
    en: 'Lead me from untruth to truth, from darkness to light, from death to immortality.',
    source: 'Brihadaranyaka Upanishad 1.3.28',
  },
  satyameva: {
    sa: 'सत्यमेव जयते नानृतम् ।',
    roman: 'Satyam eva jayate nanritam',
    en: 'Truth alone triumphs, not falsehood.',
    source: 'Mundaka Upanishad 3.1.6',
  },
  matru: {
    sa: 'मातृदेवो भव । पितृदेवो भव । आचार्यदेवो भव ।',
    roman: 'Matri devo bhava, pitri devo bhava, acharya devo bhava',
    en: 'Revere your mother, your father and your teacher as God.',
    source: 'Taittiriya Upanishad 1.11.2',
  },
  shraddhaya: {
    sa: 'श्रद्धया देयम् ।',
    roman: 'Shraddhaya deyam',
    en: 'Give with faith.',
    source: 'Taittiriya Upanishad 1.11.3',
  },
  saha: {
    sa: 'सह नाववतु । सह नौ भुनक्तु । सह वीर्यं करवावहै ।',
    roman: 'Saha navavatu, saha nau bhunaktu, saha viryam karavavahai',
    en: 'May we be protected together, nourished together, and work together with vigour.',
    source: 'Shanti Mantra — Katha & Taittiriya Upanishads',
  },
  isha: {
    sa: 'ईशावास्यमिदं सर्वं यत्किञ्च जगत्यां जगत् ।',
    roman: 'Ishavasyam idam sarvam yat kincha jagatyam jagat',
    en: 'All this, whatever moves in this world, is pervaded by the Divine.',
    source: 'Isha Upanishad 1',
  },
  agne: {
    sa: 'अग्ने नय सुपथा राये अस्मान् ।',
    roman: 'Agne naya supatha raye asman',
    en: 'O Agni, lead us along the good path to prosperity.',
    source: 'Isha Upanishad 18',
  },
  uttishthata: {
    sa: 'उत्तिष्ठत जाग्रत प्राप्य वरान्निबोधत ।',
    roman: 'Uttishthata jagrata prapya varan nibodhata',
    en: 'Arise, awake, and learn from the wise.',
    source: 'Katha Upanishad 1.3.14',
  },
  purnam: {
    sa: 'पूर्णमदः पूर्णमिदं पूर्णात्पूर्णमुदच्यते ।',
    roman: 'Purnam adah purnam idam, purnat purnam udachyate',
    en: 'That is whole, this is whole; from the whole arises the whole.',
    source: 'Isha & Brihadaranyaka Upanishads (Shanti Patha)',
  },
  anando: {
    sa: 'आनन्दो ब्रह्मेति व्यजानात् ।',
    roman: 'Anando brahmeti vyajanat',
    en: 'He realised that bliss is Brahman.',
    source: 'Taittiriya Upanishad 3.6',
  },
  sarvam: {
    sa: 'सर्वं खल्विदं ब्रह्म ।',
    roman: 'Sarvam khalv idam brahma',
    en: 'All this is indeed Brahman.',
    source: 'Chandogya Upanishad 3.14.1',
  },
  omityetad: {
    sa: 'ओमित्येतदक्षरमिदं सर्वम् ।',
    roman: 'Om ity etad aksharam idam sarvam',
    en: 'Om — this syllable is all this.',
    source: 'Mandukya Upanishad 1',
  },
  vasudha: {
    sa: 'उदारचरितानां तु वसुधैव कुटुम्बकम् ।',
    roman: 'Udara-charitanam tu vasudhaiva kutumbakam',
    en: 'For the large-hearted, the whole world is family.',
    source: 'Maha Upanishad',
  },
  yasya: {
    sa: 'यस्य देवे परा भक्तिर्यथा देवे तथा गुरौ ।',
    roman: 'Yasya deve para bhaktir yatha deve tatha gurau',
    en: 'One with supreme devotion to God, and to the Guru as to God.',
    source: 'Shvetashvatara Upanishad 6.23',
  },
} satisfies Record<string, Quote>

/** Which quote to show on a pooja's detail page, by category. */
export const CATEGORY_QUOTES: Record<string, Quote> = {
  ceremonies: Q.matru,
  poojas: Q.isha,
  homa: Q.agne,
  japas: Q.omityetad,
  parihara: Q.jyoti,
  devi: Q.sarvam,
  ancestor: Q.matru,
  temple: Q.anando,
  other: Q.satyam,
}
