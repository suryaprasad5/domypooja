import Hero from '@/components/home/Hero'
import StatsBar from '@/components/home/StatsBar'
import ServiceTypes from '@/components/home/ServiceTypes'
import FeaturedPujas from '@/components/home/FeaturedPujas'
import HowItWorks from '@/components/home/HowItWorks'
import Cities from '@/components/home/Cities'
import Advantage from '@/components/home/Advantage'
import Events from '@/components/home/Events'
import Testimonials from '@/components/home/Testimonials'
import BlogPreview from '@/components/home/BlogPreview'
import PanditCta from '@/components/home/PanditCta'
import RevealOnScroll from '@/components/shared/RevealOnScroll'

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <RevealOnScroll><ServiceTypes /></RevealOnScroll>
      <RevealOnScroll><FeaturedPujas /></RevealOnScroll>
      <HowItWorks />
      <RevealOnScroll><Cities /></RevealOnScroll>
      <RevealOnScroll><Advantage /></RevealOnScroll>
      <RevealOnScroll><Events /></RevealOnScroll>
      <RevealOnScroll><Testimonials /></RevealOnScroll>
      <RevealOnScroll><BlogPreview /></RevealOnScroll>
      <PanditCta />
    </>
  )
}
