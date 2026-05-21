import PujaDetailClient from '@/components/services/PujaDetailClient'
import { SERVICES } from '@/data/services'

export default function OfficeSubscriptionPage() {
  const puja = SERVICES.find(s => s.id === 'office-subscription')!
  const detail = {
    id: 'office-subscription',
    duration: 'Monthly / As per schedule',
    bestTime: 'Fixed day of each month per your preference',
    procedure: `Subscribe for Office Pooja is a monthly subscription service where our verified Purohit/Pandit visits your office or business premises on a scheduled basis. Each visit includes Ganapathi Pooja, Lakshmi Pooja or a seasonal festival pooja as applicable. The Purohit performs all rituals as per Vedic tradition, with or without Saamagri depending on your subscription plan.`,
    keyInsights: [
      'Monthly scheduled visits — no need to book individually each time',
      'Covers Ganapathi Pooja, Lakshmi Pooja and seasonal festival poojas',
      'Ideal for offices, shops, factories and business establishments',
      'Saamagri (incl. Alankara/Decoration) included based on plan opted',
      'Currently available in Bengaluru — contact us for custom scheduling',
    ],
    benefits: [
      'Ensures regular divine blessings for your business throughout the year',
      'Keeps the workplace spiritually charged with positive energy',
      'Covers all major festivals — Ganesha Chaturthi, Diwali, Navaratri and more',
      'Builds a sacred routine that employees and customers appreciate',
      'Cost-effective compared to individual bookings for each occasion',
    ],
    samagriByUs: ['Flowers & Garlands', 'Turmeric & Kumkum', 'Coconut', 'Camphor & Agarbatti', 'Kalasha', 'Betel leaves & nuts', 'Seasonal items per festival'],
    samagriByYou: ['Puja table/space', 'Prasad for distribution (optional)'],
    packages: [
      {
        name: 'Basic',
        price: 'Contact for pricing',
        duration: '45–60 min/visit',
        pandits: 1,
        highlights: [
          'Monthly Ganapathi Pooja',
          'Lakshmi Pooja on Fridays (2/month)',
          'Saamagri included',
          'Verified Purohit/Pandit assigned',
          'Kannada, Telugu, Hindi or English',
          'Constant updates & reminders',
        ],
      },
      {
        name: 'Standard',
        price: 'Contact for pricing',
        duration: '1–1.5 hrs/visit',
        pandits: 1,
        highlights: [
          'All Basic items',
          'Festival poojas (Ganesha Chaturthi, Diwali, Navaratri etc.)',
          'Alankara/Decoration for major festivals',
          'Priority scheduling',
          'Dedicated Purohit/Pandit',
          'Monthly pooja calendar shared',
        ],
      },
      {
        name: 'Premium',
        price: 'Contact for pricing',
        duration: 'Custom per event',
        pandits: 1,
        highlights: [
          'All Standard items',
          'Custom ceremony scheduling',
          'Homas/Havans on request',
          'Full Alankara/Decoration included',
          'Annual Ayudha Pooja coverage',
          'Dedicated coordinator assigned',
        ],
      },
    ],
    faq: [
      { q: 'How is the subscription billed?', a: 'Billing is monthly. We share a detailed pooja calendar at the start of each month so you know exactly what is planned. Pricing is shared based on your location, team size and requirements.' },
      { q: 'Can we customise which poojas are included?', a: 'Absolutely. We work with you to create a calendar that matches your business tradition, regional customs and preferred festivals.' },
      { q: 'Is Saamagri included?', a: 'Saamagri is included in Standard and Premium plans. For Basic plan, Saamagri is available at an additional cost. Alankara/Decoration is available on request.' },
      { q: 'Which areas in Bengaluru do you cover?', a: 'We currently cover all areas within Bengaluru. Contact us with your office address and we will confirm availability and assign a nearby Purohit/Pandit.' },
    ],
  }

  return <PujaDetailClient puja={puja} detail={detail} related={[]} />
}
