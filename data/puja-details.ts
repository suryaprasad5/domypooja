export interface PujaPackage {
  name: string
  price: string
  duration: string
  pandits: number
  highlights: string[]
}

export interface PujaDetail {
  id: string
  procedure: string
  keyInsights: string[]
  benefits: string[]
  samagriByUs: string[]
  samagriByYou: string[]
  duration: string
  bestTime?: string
  packages: PujaPackage[]
  faq?: { q: string; a: string }[]
}

export const PUJA_DETAILS: Record<string, PujaDetail> = {

  'gruhapravesha': {
    duration: '4–8 hours (or 2 days as per Kannada paddati)',
    bestTime: 'Shukla Paksha; date fixed per Rashi Nakshatra of male/female head of family',
    procedure: `As per Kannada paddati, first day evening Vastu Rakshogana Homa and Vastu Bali are performed to remove all Vastu doshas from construction works. Next day morning after Pravesha, all other poojas are continued. Ceremony starts with purohits chanting mantras to purify the house. Gau Pooja is performed, then Gruha Pravesham is done, milk boiling ceremony starts. After that Ganesha Pooja, Maha Sankalpam, Punyaha Vachanam, then Ganapathi Homa, Lakshmi Kubera Homa, Navagraha Homa and Vastu Mantra Japa & Homa are performed. Concludes with Poornahuti and Satyanarayana Vrata.`,
    keyInsights: [
      'Performed before moving into any new or rented house',
      'Removes Negative energy, Vastu Doshas and evil forces from the property',
      'Auspicious Muhurta date selected per Rashi Nakshatra of house owners',
      'Main pujas: Vastu, Gana, Navagraha Homa and Satyanarayana Vrata',
      'Milk boiling ceremony ensures wealth, health and happiness for residents',
    ],
    benefits: [
      'House remains free from all kinds of negative energy and Vastu doshas',
      'Blesses the home with good fortune and protects from evil eyes (Drishti)',
      'Harmonizes husband-wife relationship and provides mental peace',
      'Pleases all nine planets (Navagrahas) for smooth family life',
      'Invokes blessings of Vastu Purusha for a harmonious living space',
    ],
    samagriByUs: ['Arshina (Turmeric)', 'Kumkum', 'Mango leaves', 'Tulasi', 'Darba', 'Kalasha', 'Vastra (Cloth)', 'Navadhanya', 'Beetle Leaves & Nuts', 'Homam Sticks & Samidha', 'Dravyas', 'Ghee', 'Flowers & Garlands', 'Camphor'],
    samagriByYou: ['Gas stove', 'New milk boiling vessel', 'Vessels, Trays & Plates', 'Oil Lamps (Diyas)', 'Mats', 'Bowls', 'Photos of deities', 'Coconuts', 'Prasadam items'],
    packages: [
      { name: 'Silver', price: '₹18,800', duration: '4–5 hrs', pandits: 1, highlights: ['Ganapathi Pooja', 'Punyahavachanam', 'Vastu Pooja', 'Navagraha Homa', 'Milk Boiling Ceremony', 'Samagri included'] },
      { name: 'Gold', price: '₹38,000', duration: '6–7 hrs', pandits: 2, highlights: ['All Silver items', 'Ganapathi Homa', 'Lakshmi Kubera Homa', 'Vastu Rakshogana Homa', 'Vastu Bali', 'Satyanarayana Vrata'] },
      { name: 'Platinum', price: '₹91,999', duration: '2 days', pandits: 3, highlights: ['All Gold items', '2-day ceremony per Kannada paddati', 'Navagraha Japa', 'Full Griha Shanti Homa', 'Brahmin Bhoj arrangements', 'Dedicated coordinator'] },
    ],
    faq: [
      { q: 'Can it be done for a rented house?', a: 'Yes. We offer a separate Gruhapravesha for Rented House package with rituals adapted accordingly.' },
      { q: 'How far in advance should I book?', a: 'At least 7–10 days in advance to identify an auspicious Muhurta and arrange all samagri on time.' },
    ],
  },

  'satyanarayana-pooja': {
    duration: '1–3 hours',
    bestTime: 'Poornima (full moon day) or any date compatible with Janma Nakshatra',
    procedure: `Satyanarayana Pooja is performed by worshipping Lord Satyanarayana (Vishnu) and chanting his mantras. The pooja begins with Ganapathi Pooja and Sankalpam. Kalasha Sthapana is done, followed by Shodashopachar Puja to Lord Satyanarayana. The chief part is the narration of the five chapters of the Satyanarayana Katha (story) from the Skanda Purana. Concludes with Mangalarati and distribution of Sheera (Rava Kesari) as Prasad.`,
    keyInsights: [
      'Dedicated to Lord Satyanarayana (Vishnu) — the embodiment of Truth',
      'Satya = Truth, Nara = Human, Ayan = place where truth resides',
      'Main Prasad: Rava Kesari (Sheera)',
      'Done on Poornima or any date compatible with Janma Nakshatra',
      'Suitable for new ventures, career growth, marriage, housewarming thanksgiving',
    ],
    benefits: [
      'Removes all obstacles and negative energies from life',
      'Blesses with good health, wealth and success in career or business',
      'Fulfills sincere wishes and desires of devotees',
      'Brings peace, prosperity and happiness to the family',
      'Thanksgiving puja — express gratitude for blessings received',
    ],
    samagriByUs: ['Kalasha', 'Panchapatra & Uddharani', 'Flowers & Garlands', 'Turmeric & Kumkum', 'Betel leaves & nuts', 'Banana', 'Coconut', 'Camphor & Agarbatti', 'Ghee', 'Rava/Sooji for Sheera', 'Satyanarayana idol/photo'],
    samagriByYou: ['Plates & Trays', 'Bowls', 'Mats', 'Gas stove for Sheera preparation', 'Milk & Sugar'],
    packages: [
      { name: 'Silver', price: '₹2,500', duration: '1.5–2 hrs', pandits: 1, highlights: ['Ganapathi Pooja', 'Kalasha Pooja', 'Satyanarayana Vrata Katha (5 chapters)', 'Mangalarati', 'Prasad (Sheera) preparation', 'All samagri included'] },
      { name: 'Gold', price: '₹8,500', duration: '2–3 hrs', pandits: 1, highlights: ['All Silver items', 'Navagraha Pooja', 'Lakshmi Pooja', 'Extended Archana', 'Vastra (cloth) offering'] },
      { name: 'Platinum', price: '₹23,200', duration: '3+ hrs', pandits: 2, highlights: ['All Gold items', 'Punyahavachanam', 'Shodashopachar Puja', 'Brahmin Bhoj', 'Special Prasad distribution'] },
    ],
    faq: [
      { q: 'Can Satyanarayana Pooja be done at any time of year?', a: 'Yes, though Poornima is most auspicious. It can be done for thanksgiving, housewarming, birthdays, or any special occasion.' },
      { q: 'Is the Prasad (Sheera) prepared by the Purohit?', a: 'The Purohit guides the Yajamana in preparing the Sheera. Ingredients are included in our samagri.' },
    ],
  },

  'ganapathi-pooja': {
    duration: '1–2 hours',
    bestTime: 'Ganesh Chaturthi, Sankashti Chaturthi, or start of any new venture',
    procedure: `Ganapathi Pooja begins with Dhyana Shloka and Sankalpam. Shodashopachara (16-step) puja is performed — Avahana, Asana, Padya, Arghya, Achamana, Snana, Vastra, Yagnopaveeta, Gandha, Pushpa, Dhupa, Dipa, Naivedya, Tambula, Nirajana and Mantrapushpa. Ganapathi Atharvashirsha and Ganapathi Stotra are chanted. Concludes with Aarti and Modak prasad distribution.`,
    keyInsights: [
      'Lord Ganesha is worshipped first in all Hindu rituals — Vighnaharta',
      'Removes all obstacles before beginning any new venture or ceremony',
      'Suitable for start of business, education, travel, or any auspicious occasion',
      'Main Prasad: Modak (sweet dumpling beloved of Ganesha)',
      'Ekadanta — the Lord with one tusk symbolizing focus and discrimination',
    ],
    benefits: [
      'Removes all obstacles (Vighnas) from life and new beginnings',
      'Blesses with wisdom, intelligence and success in education',
      'Ensures smooth execution of all ceremonies and life events',
      'Brings prosperity, auspiciousness and divine protection',
      'Clears negativity and fills the space with positive cosmic energy',
    ],
    samagriByUs: ['Ganesha idol/photo', 'Durva grass (21 blades)', 'Red flowers (Hibiscus/Jaaswand)', 'Modak ingredients', 'Turmeric & Kumkum', 'Sandalwood paste', 'Panchamrit', 'Ghee & Camphor', 'Betel leaves & nuts'],
    samagriByYou: ['Puja plates & lamps', 'Mats', 'Water in vessel'],
    packages: [
      { name: 'Silver', price: '₹4,500', duration: '1–1.5 hrs', pandits: 1, highlights: ['Ganapathi Avahana & Shodashopachara', 'Ganapathi Atharvashirsha Parayana', 'Aarti & Modak Prasad', 'All samagri included'] },
      { name: 'Gold', price: '₹6,500', duration: '1.5–2 hrs', pandits: 1, highlights: ['All Silver items', '21 Durva Archana', 'Ganapathi Sahasranama', 'Extended Stotra chanting'] },
      { name: 'Platinum', price: '₹8,500', duration: '2+ hrs', pandits: 2, highlights: ['All Gold items', 'Ganapathi Homa (fire ritual)', 'Coconut breaking ritual', 'Full Shodashopachara with Abhishekam'] },
    ],
    faq: [
      { q: 'Should Ganapathi Pooja be done before every other ritual?', a: 'Yes, Ganapathi Pooja (Vighna Vinayaka Pooja) is traditionally the first puja performed at the start of any ceremony to seek Ganesha\'s blessings and remove obstacles.' },
    ],
  },

  'rudrabhishekam': {
    duration: '2–5 hours',
    bestTime: 'Pradosh (13th lunar day), Shivaratri, or Monday (Somavar)',
    procedure: `Rudrabhishekam begins with Ganapathi Pooja and Sankalpam. Kalasha Sthapana is done. The Shiva Linga is then bathed (Abhishekam) with Panchamrit (milk, curd, ghee, honey, sugar), then with water, coconut water, rose water and Panchagavya, each accompanied by chanting of the Namakam (Sri Rudram Chapter 1 — 11 Anuvakas) and Chamakam (Chapter 2). Bilva leaves (108 or 1008) are offered with each name. Concludes with Dipa Aarti and Vibhuti Prasad.`,
    keyInsights: [
      'Sri Rudram from Yajur Veda — one of the most powerful Vedic hymns',
      'Abhishekam done with Panchamrit, water, coconut water, rose water',
      'Bilva (Bel) leaves are the most sacred offering to Lord Shiva',
      'Namakam chanting: seeking Rudra\'s mercy; Chamakam: asking for boons',
      'Especially powerful on Pradosh Kala, Mondays and Shivaratri',
    ],
    benefits: [
      'Bestows good health, long life and liberation from suffering',
      'Removes Graha Doshas (planetary afflictions) and Pitru Doshas',
      'Brings peace of mind, mental strength and spiritual progress',
      'Protects from accidents, diseases and untimely death',
      'Fulfills desires for wealth, progeny and family harmony',
    ],
    samagriByUs: ['Shiva Linga (if needed)', 'Panchamrit ingredients', 'Bilva leaves (108/1008)', 'Vibhuti (sacred ash)', 'Dhatura flowers', 'White flowers', 'Ghee & Camphor', 'Panchamrta Abhisheka items', 'Rudraksha for Archana'],
    samagriByYou: ['Abhisheka vessel (Kalasha)', 'Puja plates & lamps', 'Mats', 'Water containers'],
    packages: [
      { name: 'Silver', price: '₹5,300', duration: '2–3 hrs', pandits: 1, highlights: ['Ganapathi Pooja', 'Panchamrit Abhishekam', 'Namakam & Chamakam chanting', '108 Bilva Archana', 'Vibhuti Prasad'] },
      { name: 'Gold', price: '₹18,000', duration: '3–4 hrs', pandits: 2, highlights: ['All Silver items', '1008 Bilva Archana', 'Ashtottara Shatanamavali', 'Rudra Trisati', 'Shiva Sahasranama Archana'] },
      { name: 'Platinum', price: '₹50,700', duration: '5+ hrs', pandits: 3, highlights: ['All Gold items', 'Ekadasha Rudrabhishekam (11 rounds)', 'Laghu Rudra or Maha Rudra', 'Full Rudra Homa', 'Brahmin Bhoj'] },
    ],
    faq: [
      { q: 'What is the difference between Rudrabhishekam and Rudra Homa?', a: 'Rudrabhishekam is the bathing (Abhisheka) of Shiva Linga with sacred substances while chanting Sri Rudram. Rudra Homa is a fire ritual (Havan) to Lord Rudra. They can be combined for maximum benefit.' },
    ],
  },

  'mrityunjaya-homa': {
    duration: '3–6 hours',
    bestTime: 'Any day; especially Mondays, Pradosh, or during illness/health crises',
    procedure: `Maha Mrityunjaya Homa begins with Ganapathi Pooja and Punyahavachanam. Kalasha Sthapana and Navagraha Pooja are performed. The Homa Kunda (fire altar) is prepared with specific wood. The Mrityunjaya Mantra (ॐ त्र्यम्बकं यजामहे...) is chanted 1,008, 11,000, or 1,25,000 times (as per package) with Ahutis of ghee, sesame seeds, and sacred herbs. Purnahuti is offered and Vibhuti Prasad is distributed.`,
    keyInsights: [
      'One of the most powerful Vedic mantras from Rig Veda (7.59.12)',
      'Tryambakam Yajamahe — worshipping the three-eyed Lord Shiva',
      'Protects from untimely death, accidents and serious illness',
      'Number of mantra recitations: 1,008 / 11,000 / 1,25,000 per package',
      'Vibhuti (sacred ash) from the homa is applied for healing',
    ],
    benefits: [
      'Protects from untimely death and life-threatening situations',
      'Heals serious illnesses and restores good health',
      'Removes fear, anxiety and mental disturbances',
      'Grants longevity, vitality and overall wellbeing',
      'Liberates from the cycle of suffering and bestows moksha',
    ],
    samagriByUs: ['Homa kunda & samagri', 'Sesame seeds (Til)', 'Sacred herbs (Aushadi)', 'Ghee', 'Samidha (wood)', 'Bilva leaves', 'Vibhuti', 'Mrutyunjaya Yantra (in Platinum)'],
    samagriByYou: ['Mats & seating', 'Water containers', 'Plates for Prasad'],
    packages: [
      { name: 'Silver', price: '₹9,500', duration: '3 hrs', pandits: 1, highlights: ['Ganapathi Pooja', 'Navagraha Pooja', 'Mrityunjaya Mantra Japa (1,008 times)', 'Homa with ghee & sesame', 'Vibhuti Prasad'] },
      { name: 'Gold', price: '₹33,000', duration: '4–5 hrs', pandits: 2, highlights: ['All Silver items', 'Mrityunjaya Japa (11,000 times)', 'Rudrabhishekam', 'Extended Homa', 'Mrutyunjaya Yantra'] },
      { name: 'Platinum', price: '₹88,000', duration: '6+ hrs', pandits: 3, highlights: ['All Gold items', 'Mrityunjaya Japa (1,25,000 times — Purashcharana)', 'Laghu Rudra Homa', 'Brahmin Bhoj', 'Special Yantra Puja'] },
    ],
    faq: [
      { q: 'Can this homa be performed for someone who is ill?', a: 'Yes, this is one of the primary purposes of Maha Mrityunjaya Homa. The Yajamana can be present or the homa can be performed on their behalf with their name and Nakshatra (Sankalpa).' },
    ],
  },

  'vastu-shanti': {
    duration: '3–5 hours',
    bestTime: 'Before moving into a new house or office, or when facing repeated problems',
    procedure: `Vastu Shanti begins with Ganapathi Pooja and Punyahavachanam. 32 Vastu Devatas (deities) are invoked in the 8 directions and Brahmasthan (center). Vastu Mandala is created. Vastu Homa is performed with chanting of Vastu Sukta mantras. Each room and corner of the house is purified. Concludes with Griha Shanti Japa and Poornahuti.`,
    keyInsights: [
      'Appeases the 32 Vastu Devatas who govern each direction of the house',
      'Corrects Vastu doshas without physical demolition or reconstruction',
      'Purifies and re-energizes the entire property with positive cosmic energy',
      'Suitable for new homes, offices, factories, or any troubled property',
      'Muhurta selected per owners\' Rashi Nakshatra for maximum benefit',
    ],
    benefits: [
      'Removes all Vastu doshas accumulated during construction',
      'Brings peace, harmony and positive energy to all residents',
      'Improves health, prosperity and relationships in the household',
      'Neutralizes negative directions and harmful energy zones',
      'Protects from recurring problems, accidents and financial losses',
    ],
    samagriByUs: ['Vastu Mandala materials', 'Navadhanya', 'Turmeric & Kumkum', 'Homa samagri', 'Flowers & Mango leaves', 'Kalasha', 'Ghee & Camphor', 'Darba grass'],
    samagriByYou: ['Plates & vessels', 'Water containers', 'Mats', 'Lamps & oil'],
    packages: [
      { name: 'Silver', price: '₹13,300', duration: '3–4 hrs', pandits: 1, highlights: ['Ganapathi Pooja', 'Punyahavachanam', 'Vastu Devata Puja (32 devatas)', 'Vastu Homa', 'Room-by-room purification'] },
      { name: 'Gold', price: '₹24,000', duration: '4–5 hrs', pandits: 2, highlights: ['All Silver items', 'Navagraha Pooja', 'Extended Vastu Sukta chanting', 'Griha Shanti Japa', 'Kalasha Abhishekam'] },
      { name: 'Platinum', price: '₹32,800', duration: '5+ hrs', pandits: 3, highlights: ['All Gold items', 'Vastu Bali', 'Full Griha Shanti Homa', 'Navagraha Homa', 'Brahmin Bhoj'] },
    ],
    faq: [
      { q: 'Is Vastu Shanti the same as Gruhapravesha?', a: 'No. Vastu Shanti specifically corrects Vastu doshas and can be done for an existing home. Gruhapravesha is the housewarming ceremony done before first entry into a new home.' },
    ],
  },

  'namakarana': {
    duration: '1.5–3 hours',
    bestTime: '11th or 12th day after birth (can be done later)',
    procedure: `Namakarana begins with Ganapathi Pooja and Sankalpam. Punyahavachanam is performed to purify the space. The baby is bathed ritually. The father (or elder) whispers the chosen name into the baby's right ear four times. The mother then sits facing east and the baby is placed on her lap. The Purohit chants Navagraha mantras and blesses the baby. Name is announced to the gathering. Concludes with Aarti and Prasad.`,
    keyInsights: [
      'One of the 16 Shodasha Samskaras — formal introduction of the child',
      'Name should ideally be based on the child\'s Janma Nakshatra (birth star)',
      'First syllable of the name is traditionally determined by Nakshatra',
      'Done on the 11th or 12th day after birth, or on an auspicious date later',
      'Baby\'s horoscope (Janam Kundali) is also prepared at this time',
    ],
    benefits: [
      'Formally introduces the child to family, community and the divine',
      'Nakshatra-based name ensures alignment with cosmic energies',
      'Invokes blessings of all Navagrahas for a prosperous life',
      'Purifies the mother and child after the delivery period',
      'Establishes the child\'s spiritual identity in the Vedic tradition',
    ],
    samagriByUs: ['Kalasha & Puja items', 'Turmeric & Kumkum', 'Flowers', 'Coconut', 'Camphor & Agarbatti', 'Navagraha rice/grains', 'New cloth for baby', 'Betel leaves & nuts'],
    samagriByYou: ['New clothes for parents', 'Gifts for Purohit (Dakshina)', 'Baby\'s birth chart (if available)', 'Honey & ghee for Jatakarma'],
    packages: [
      { name: 'Silver', price: '₹5,500', duration: '1.5–2 hrs', pandits: 1, highlights: ['Ganapathi Pooja', 'Punyahavachanam', 'Navagraha Puja', 'Namakarana ritual', 'Aarti & Prasad', 'All samagri included'] },
      { name: 'Gold', price: '₹10,000', duration: '2–3 hrs', pandits: 1, highlights: ['All Silver items', 'Janam Kundali preparation', 'Jatakarma Sanskar', 'Nakshatra Shanti', 'Extended blessings & Archana'] },
      { name: 'Platinum', price: '₹15,800', duration: '3+ hrs', pandits: 2, highlights: ['All Gold items', 'Ayusha Homa', 'Annaprashana blessings', 'Full Samskar documentation', 'Brahmin Bhoj'] },
    ],
    faq: [
      { q: 'How is the name determined per Nakshatra?', a: 'Each Nakshatra has specific syllables (aksharas) associated with it. The first syllable of the child\'s name should begin with the syllable corresponding to their Janma Nakshatra. Our Purohit will guide you.' },
    ],
  },

  'upanayana': {
    duration: '6–8 hours (typically a day-long ceremony)',
    bestTime: 'Spring months (Uttarayana); between Makar Sankranti and Ashadha',
    procedure: `Upanayana (Thread Ceremony) is a major samskara. Day begins with Ganapathi Pooja and Nandi Shradha. Seemanta Puja is performed. The boy's head is shaved (Chuda Karma). After bath, the boy wears new dhoti. The Yagnopaveeta (sacred thread) is prepared. Acharya (Guru) initiates the boy by whispering the Gayatri Mantra into his right ear. The boy then performs Surya Namaskar, Agni Pooja and Bhiksha Vandana (asking for alms). Finally, Samavartana is performed symbolically.`,
    keyInsights: [
      'One of the most important Shodasha Samskaras — second birth (Dvija)',
      'Boy receives Yagnopaveeta (Janeu/Munja) and Gayatri Mantra initiation',
      'Marks transition from childhood to studentship (Brahmacharya Ashrama)',
      'Traditionally performed between ages 7–12 for Brahmin boys',
      'After this, boy is initiated into daily Sandhyavandanam and Vedic studies',
    ],
    benefits: [
      'Marks spiritual rebirth and entry into Brahmacharya (studentship)',
      'Gayatri Mantra initiation activates intellectual and spiritual faculties',
      'Sacred thread acts as constant reminder of Vedic duties and dharma',
      'Connects the boy to the unbroken lineage of Vedic tradition',
      'Prepares the child for responsible adult life with dharmic values',
    ],
    samagriByUs: ['Yagnopaveeta (sacred thread)', 'Homa samagri', 'Samidha', 'Ghee', 'Flowers', 'Kalasha', 'Darbha grass', 'Vastra (cloth)', 'Navadhanya', 'All ritual items'],
    samagriByYou: ['New dhoti for the boy', 'New clothes for parents', 'Mangala Sutra (if applicable)', 'Dakshina for Purohit', 'Feast arrangements for guests'],
    packages: [
      { name: 'Silver', price: '₹19,300', duration: '6–7 hrs', pandits: 2, highlights: ['Ganapathi Pooja', 'Nandi Shradha', 'Chuda Karma', 'Yagnopaveeta Dharana', 'Gayatri Mantra Upadesa', 'Surya Namaskar', 'Bhiksha Vandana'] },
      { name: 'Gold', price: '₹55,000', duration: '7–8 hrs', pandits: 3, highlights: ['All Silver items', 'Agni Pooja', 'Samavartana', 'Vedic Ashirvadam', 'Extended homa', 'Full samagri'] },
      { name: 'Platinum', price: '₹1,23,300', duration: 'Full day', pandits: 4, highlights: ['All Gold items', 'Brahmin Bhoj (51+ guests)', 'Detailed Vedic documentation', 'Post-ceremony Sandhyavandana training', 'Dedicated coordinator'] },
    ],
    faq: [
      { q: 'At what age should Upanayana be performed?', a: 'Traditionally between 7–12 years. However, it can be performed at any age before marriage. Our Purohits will advise the ideal age based on your tradition and Gotra.' },
      { q: 'Which communities perform Upanayana?', a: 'Upanayana is performed by Brahmin, Kshatriya and Vaishya communities (Dwija). The procedure varies by community — Smartha, Madhwa, Iyengar, etc. Our Purohits are trained in all traditions.' },
    ],
  },

  'seemantha': {
    duration: '2–4 hours',
    bestTime: '5th or 7th month of pregnancy',
    procedure: `Seemantha (also called Simantonnayana) begins with Ganapathi Pooja and Sankalpam. Punyahavachanam is performed. The husband parts the wife's hair three times upward while chanting Vedic mantras to wish for a healthy child. Navagraha Pooja is done for the wellbeing of mother and child. Gifts of fruits, flowers and auspicious items are offered. Lakshmi Puja and Garbha Rakshana mantras are chanted for protection.`,
    keyInsights: [
      'One of the Shodasha Samskaras — performed during 5th or 7th month of pregnancy',
      'Seeks divine blessings for the wellbeing of mother and unborn child',
      'Husband parts wife\'s hair upward — symbolizing care and protection',
      'Garbha Rakshana mantras are chanted for safe delivery',
      'Also known as Baby Shower ceremony in modern context',
    ],
    benefits: [
      'Protects the unborn child from negative influences and evil eye',
      'Ensures physical and mental wellbeing of the pregnant mother',
      'Invokes blessings of Lakshmi and Navagrahas for a healthy birth',
      'Creates a spiritually charged, positive atmosphere for the baby',
      'Strengthens the bond between husband and wife during pregnancy',
    ],
    samagriByUs: ['Kalasha', 'Flowers', 'Fruits basket', 'Turmeric & Kumkum', 'New sari/cloth', 'Bangles', 'Coconut', 'Betel leaves & nuts', 'Camphor & Agarbatti'],
    samagriByYou: ['Fruits and sweets for distribution', 'New clothes for the mother', 'Seating arrangements for guests'],
    packages: [
      { name: 'Silver', price: '₹9,800', duration: '2–3 hrs', pandits: 1, highlights: ['Ganapathi Pooja', 'Punyahavachanam', 'Simantonnayana ritual', 'Navagraha Puja', 'Garbha Rakshana mantras', 'Aarti & Prasad'] },
      { name: 'Gold', price: '₹18,500', duration: '3–4 hrs', pandits: 2, highlights: ['All Silver items', 'Lakshmi Puja', 'Ayusha Homa', 'Fruit basket offering', 'Extended Ashirvadam'] },
      { name: 'Platinum', price: '₹27,800', duration: '4+ hrs', pandits: 2, highlights: ['All Gold items', 'Full Samskar documentation', 'Brahmin Bhoj', 'Dedicated coordinator', 'Horoscope consultation'] },
    ],
    faq: [
      { q: 'Can Seemantha be done at home?', a: 'Yes, Seemantha is traditionally performed at home. Our Purohit will come to your home with all samagri.' },
    ],
  },

  'annaprasana': {
    duration: '1–2 hours',
    bestTime: '6th month for boys, 5th or 7th month for girls',
    procedure: `Annaprasana (first food ceremony) begins with Ganapathi Pooja and Sankalpam. Punyahavachanam is performed. The baby is dressed in new clothes and placed on the lap of the father or grandfather. Rice mixed with ghee, curd, honey and a few drops of gold water is prepared. The Purohit chants Vedic mantras. The father feeds the first morsel to the baby symbolically. Navagraha blessings are sought. Concludes with family blessing ceremony.`,
    keyInsights: [
      'One of the Shodasha Samskaras — baby\'s first introduction to solid food',
      '6th month for boys, 5th or 7th month for girls as per tradition',
      'First food is rice mixed with ghee, honey, curd and gold-infused water',
      'Gold water symbolizes wealth and auspiciousness for the child',
      'Also called Choroonu (South India) or Mukhe Bhaat (Bengal)',
    ],
    benefits: [
      'Marks the transition from mother\'s milk to solid food — important developmental milestone',
      'Vedic blessings ensure the child grows healthy, intelligent and prosperous',
      'Seeks protection from digestive ailments and childhood diseases',
      'Navagraha blessings ensure favorable planetary influences throughout life',
      'Connects the child to ancestral food traditions and cultural identity',
    ],
    samagriByUs: ['Kalasha', 'Flowers & Garlands', 'Turmeric & Kumkum', 'Coconut', 'Banana', 'Camphor', 'Silver/brass plate for baby', 'New cloth for baby'],
    samagriByYou: ['Cooked rice', 'Ghee', 'Honey', 'Curd', 'Gold ring/ornament for gold water', 'New clothes for baby', 'Family members for blessings'],
    packages: [
      { name: 'Silver', price: '₹4,000', duration: '1–1.5 hrs', pandits: 1, highlights: ['Ganapathi Pooja', 'Punyahavachanam', 'Annaprasana ritual with mantras', 'Navagraha Puja', 'First food ceremony', 'Family blessing'] },
      { name: 'Gold', price: '₹9,500', duration: '2 hrs', pandits: 1, highlights: ['All Silver items', 'Ayusha Homa', 'Nakshatra Shanti', 'Extended Ashirvadam', 'Janam Kundali consultation'] },
      { name: 'Platinum', price: '₹15,600', duration: '2+ hrs', pandits: 2, highlights: ['All Gold items', 'Full Samskar documentation', 'Brahmin Bhoj', 'Vastra (new clothes) offering'] },
    ],
    faq: [
      { q: 'What foods are given at Annaprasana?', a: 'The first food is traditionally cooked rice (Annam) mixed with ghee, honey, curd, and sometimes a drop of gold-infused water. Our Purohit will guide on exact preparation.' },
    ],
  },

  'pitru-paksha': {
    duration: '2–4 hours',
    bestTime: 'During Pitru Paksha (Krishna Paksha of Bhadrapada month)',
    procedure: `Pitru Paksha Shradha begins with Sankalpam taking the names of the departed (up to 3 generations). Tarpana (water libation) is offered to Pitrus with sesame seeds (Til) and Darbha grass. Pinda Pradanam (rice ball offering) is performed as per the tradition of the family Gotra. Brahmin Bhoj or Brahmin Dana is offered. Concludes with Kshamapana (seeking forgiveness) and Pitru Ashirvadam.`,
    keyInsights: [
      'Performed during Pitru Paksha — the 16-day lunar period for ancestor worship',
      'Tarpana with Til (sesame) and Darbha grass appeases departed souls',
      'Pinda Pradana — rice ball offering for the peace of ancestors',
      'Shradha on specific Tithi (date of death) is most efficacious',
      'Addresses Pitru Dosha — ancestral debt that causes family problems',
    ],
    benefits: [
      'Ensures peace (Sadgati) for departed ancestors',
      'Removes Pitru Dosha and associated life problems',
      'Brings blessings of ancestors for prosperity and progeny',
      'Heals family issues, marriage delays and health problems caused by Pitru Dosha',
      'Fulfills the sacred duty (Runa) owed to one\'s ancestors',
    ],
    samagriByUs: ['Til (sesame seeds)', 'Darbha grass', 'Rice flour for Pinda', 'Flowers', 'Kalasha', 'Banana leaves', 'Honey & Ghee', 'Vastra for Brahmin'],
    samagriByYou: ['Cooked food for Brahmin Bhoj', 'Dakshina (cash for Brahmin)', 'Water containers for Tarpana', 'Names and death dates of ancestors'],
    packages: [
      { name: 'Silver', price: '₹2,500', duration: '2 hrs', pandits: 1, highlights: ['Sankalpam', 'Tarpana (3 generations)', 'Pinda Pradana', 'Pitru Stotra chanting', 'All samagri included'] },
      { name: 'Gold', price: '₹8,500', duration: '3 hrs', pandits: 1, highlights: ['All Silver items', 'Narayana Bali (Preta Shanti)', 'Brahmin Bhoj (1 Brahmin)', 'Pitru Dosha Nivarana mantra'] },
      { name: 'Platinum', price: '₹18,800', duration: '4+ hrs', pandits: 2, highlights: ['All Gold items', 'Tripindi Shradha', 'Extended Pinda Pradana', 'Brahmin Bhoj (5 Brahmins)', 'Cow and food donation'] },
    ],
    faq: [
      { q: 'Can Shradha be performed if we don\'t know the exact date of death?', a: 'Yes. Amavasya Shradha (on new moon day) or Mahalaya Amavasya (during Pitru Paksha) can be performed when the exact date is unknown. Our Purohit will guide you.' },
    ],
  },

  'navagraha-homa': {
    duration: '3–5 hours',
    bestTime: 'Any auspicious day; especially during planetary transits (Gochar)',
    procedure: `Navagraha Homa begins with Ganapathi Pooja and Punyahavachanam. Nine separate Homa Kundas (or sections) are prepared for each planet. Each Graha (Surya, Chandra, Mangala, Budha, Guru, Shukra, Shani, Rahu, Ketu) is invoked with their specific mantras, colors, and offerings. 108 Ahutis are given for each Graha. Concludes with Navagraha Shanti Japa and Poornahuti.`,
    keyInsights: [
      'Appeases all 9 planetary deities simultaneously for comprehensive protection',
      'Each planet gets specific offerings: Sun — wheat/red flowers, Moon — white rice, Mars — red lentils, etc.',
      'Recommended when facing multiple challenges in different life areas',
      'Especially effective during major planetary transitions (Sade Sati, Dhaiya, etc.)',
      'Combined Graha Shanti — more cost-effective than 9 individual remedies',
    ],
    benefits: [
      'Neutralizes malefic effects of all nine planets in the horoscope',
      'Brings balance, harmony and positive planetary support in all life areas',
      'Removes Graha Doshas — Shani Dosha, Rahu-Ketu affliction, Mangal Dosha',
      'Improves health, wealth, relationships and career simultaneously',
      'Provides comprehensive astrological protection for the entire family',
    ],
    samagriByUs: ['9-color cloths (Navagraha Vastra)', 'Navadhanya (9 grains)', 'Specific flowers for each graha', 'Homa samagri', 'Ghee & Til', 'Samidha', 'Navagraha Yantra (Platinum)'],
    samagriByYou: ['Mats & seating', 'Water containers', 'Plates for Prasad'],
    packages: [
      { name: 'Silver', price: '₹9,000', duration: '3–4 hrs', pandits: 2, highlights: ['Ganapathi Pooja', 'Navagraha Pooja (9 deities)', 'Navagraha Homa (108 ahutis each)', 'Navagraha Shanti Japa', 'Navagraha Vastra offering'] },
      { name: 'Gold', price: '₹22,000', duration: '4–5 hrs', pandits: 2, highlights: ['All Silver items', '1008 ahutis per graha', 'Navagraha Shanti Mantra Japa (10,000 each)', 'Navagraha Yantra Puja', 'Extended homa'] },
      { name: 'Platinum', price: '₹35,800', duration: '5+ hrs', pandits: 3, highlights: ['All Gold items', 'Individual Graha Japa (as per horoscope)', 'Brahmin Bhoj', 'Astrological consultation', 'Yantra installation'] },
    ],
    faq: [
      { q: 'Should I get a horoscope reading before Navagraha Homa?', a: 'It is recommended. A horoscope reading helps identify which specific Graha is most afflicted. This allows us to perform more targeted Japa for that planet within the homa. We can arrange an astrology consultation along with booking.' },
    ],
  },

  'gana-homa': {
    duration: '2–4 hours',
    bestTime: 'Ganesh Chaturthi, Sankashti Chaturthi, or before any major new beginning',
    procedure: `Gana Homa (Ganapathi Homa) begins with Ganapathi Dhyana and Sankalpam. The Homa Kunda is prepared in a square form representing Prithvi (earth). 21 types of sacred leaves (Patri) and 21 Modaks are offered. The main mantra "OM Gam Ganapataye Namaha" is chanted with Ahutis. Durva grass and red flowers are key offerings. After Poornahuti, Aarti is performed and Modak Prasad is distributed.`,
    keyInsights: [
      'Ganesha is worshipped as Vighnaharta — the remover of all obstacles',
      '21 Patri (leaves) and 21 Modaks are the most sacred Ganesha offerings',
      'Red flowers (especially Hibiscus/Jaaswand) are Ganesha\'s favorite',
      'Durva grass is essential — it pleased Ganesha and must not be omitted',
      'Most auspicious on Ganesh Chaturthi or the 4th lunar day (Chaturthi)',
    ],
    benefits: [
      'Removes all obstacles (Vighnas) from current and upcoming life events',
      'Ensures success in new businesses, academic pursuits and career transitions',
      'Invokes divine intelligence and wisdom for decision-making',
      'Protects from negative forces and clears path to prosperity',
      'Creates auspicious beginnings — ideal before major life ceremonies',
    ],
    samagriByUs: ['Ganesha idol', '21 types of leaves (Patri)', '21 Modaks', 'Durva grass', 'Red Hibiscus flowers', 'Ghee', 'Samidha', 'Homa samagri', 'Coconut'],
    samagriByYou: ['Mats & seating', 'Plates for Prasad', 'Additional Modaks for distribution (optional)'],
    packages: [
      { name: 'Silver', price: '₹8,300', duration: '2–3 hrs', pandits: 1, highlights: ['Ganapathi Dhyana & Sankalpam', '21-Patri Archana', 'Gana Homa (1,008 ahutis)', 'Durva Archana', 'Modak Prasad', 'All samagri included'] },
      { name: 'Gold', price: '₹28,000', duration: '3–4 hrs', pandits: 2, highlights: ['All Silver items', '1,008 Modak offering', 'Ganapathi Sahasranama Archana', 'Extended Homa (10,000 ahutis)', 'Shri Ganesh Stotra chanting'] },
      { name: 'Platinum', price: '₹88,000', duration: '4+ hrs', pandits: 3, highlights: ['All Gold items', '1,25,000 Japa Purashcharana', 'Full Shodashopachara Puja', 'Brahmin Bhoj', 'Ganesha Yantra installation'] },
    ],
    faq: [
      { q: 'Is Gana Homa always done before Gruhapravesha?', a: 'Yes, Ganapathi Puja or Homa is the first ritual in virtually every Hindu ceremony. For Gruhapravesha, a standalone Gana Homa is often done, followed by Vastu and Navagraha Homas.' },
    ],
  },

  'lakshmi-kubera-homa': {
    duration: '3–4 hours',
    bestTime: 'Fridays, Diwali, Akshaya Tritiya, or any auspicious Friday',
    procedure: `Lakshmi Kubera Homa begins with Ganapathi Pooja and Sankalpam. Lakshmi (Goddess of Wealth) and Kubera (Lord of Wealth) are invoked together. Sri Sukta mantras and Kubera mantras are chanted alternately. Lotus flowers, gold coins, yellow flowers and saffron are key offerings. Kubera Yantra is worshipped. Concludes with Lakshmi Aarti and distribution of Kumkum Prasad.`,
    keyInsights: [
      'Dual invocation of Goddess Lakshmi and Lord Kubera — both wealth deities',
      'Sri Sukta from Rig Veda — most powerful Lakshmi hymn',
      'Kubera is the treasurer of the devas — Lord of wealth and directions',
      'Lotus flowers, gold coins and yellow/red items are key offerings',
      'Especially powerful on Fridays, Diwali and Akshaya Tritiya',
    ],
    benefits: [
      'Attracts wealth, abundance and financial prosperity',
      'Removes financial blocks, debt and business stagnation',
      'Brings steady income, business growth and investment returns',
      'Invokes Goddess Lakshmi\'s blessings for all forms of prosperity',
      'Establishes Kubera\'s protection over home and business finances',
    ],
    samagriByUs: ['Lakshmi & Kubera photos/idols', 'Lotus flowers', 'Yellow & red flowers', 'Gold coins (symbolic)', 'Kumkum', 'Turmeric', 'Ghee', 'Homa samagri', 'Sri Yantra', 'Kubera Yantra'],
    samagriByYou: ['Plates & vessels', 'Mats', 'Water containers'],
    packages: [
      { name: 'Silver', price: '₹9,500', duration: '3 hrs', pandits: 1, highlights: ['Ganapathi Pooja', 'Lakshmi & Kubera Puja', 'Sri Sukta Japa', 'Kubera Mantra Japa (1,008)', 'Lakshmi Kubera Homa', 'Kumkum Prasad'] },
      { name: 'Gold', price: '₹35,000', duration: '3–4 hrs', pandits: 2, highlights: ['All Silver items', 'Sri Sukta Homa', 'Kubera Ashtottara Archana', 'Extended Japa (11,000)', 'Yantra Puja & installation'] },
      { name: 'Platinum', price: '₹88,000', duration: '4+ hrs', pandits: 3, highlights: ['All Gold items', 'Sri Sukta Purashcharana (1,25,000)', 'Brahmin Bhoj', 'Business vastu consultation', 'Special Yantra installation'] },
    ],
    faq: [
      { q: 'Can this homa be done for a business/office?', a: 'Absolutely. Lakshmi Kubera Homa is extremely popular for business establishments and offices. Our Purohit will also perform Vastu Puja for the premises if needed.' },
    ],
  },
}
