export const SITE = {
  whatsappNumber: '919742155777',      // wa.me format (no + or spaces)
  phoneDisplay: '+91 97421 55777',
  phoneTel: '+919742155777',
  email: 'namaste@domypooja.com',
}

export const MOTTO = {
  sa: 'श्रद्धा मूलं धर्मस्य',
  roman: 'Shraddha Moolam Dharmasya',
  en: 'Faith is the root of Dharma',
}

export const LANGUAGES = ['Kannada', 'Telugu', 'Hindi', 'English'] as const

export const TIME_SLOTS = [
  'Early Morning (5–8 AM)',
  'Morning (8 AM–12 PM)',
  'Afternoon (12–4 PM)',
  'Evening (4–8 PM)',
  'Flexible / As per Muhurtam',
] as const

export const NAKSHATRAS = [
  'Ashwini', 'Bharani', 'Krittika', 'Rohini', 'Mrigashira', 'Ardra', 'Punarvasu',
  'Pushya', 'Ashlesha', 'Magha', 'Purva Phalguni', 'Uttara Phalguni', 'Hasta',
  'Chitra', 'Swati', 'Vishakha', 'Anuradha', 'Jyeshtha', 'Mula', 'Purva Ashadha',
  'Uttara Ashadha', 'Shravana', 'Dhanishta', 'Shatabhisha', 'Purva Bhadrapada',
  'Uttara Bhadrapada', 'Revati',
] as const

export function waLink(message?: string) {
  const base = `https://wa.me/${SITE.whatsappNumber}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}
