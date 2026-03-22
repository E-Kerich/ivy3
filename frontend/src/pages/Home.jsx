import React from 'react'
import Hero from '../components/ui/Hero'
import AboutPreview from '../components/ui/About'
import ServicesPreview from '../components/ui/ServicePreview'
import CTASection from '../components/ui/CTA'

const Home = () => {
  return (
    <div>
      <Hero/>
      <AboutPreview/>
      <ServicesPreview/>
      <CTASection/>
    </div>
  )
}

export default Home

