import React from 'react'
import { HeroSection } from '../components/Hero'
import { AboutUs } from '../components/AboutUs'
import { DifferenceSection } from '../components/Different'
import { MottoSection } from '../components/OurMotto'
import { LetsBuildSection } from '../components/LetsBuild'

export const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <DifferenceSection />
      <MottoSection />
      <LetsBuildSection />
    </div>
  )
}
