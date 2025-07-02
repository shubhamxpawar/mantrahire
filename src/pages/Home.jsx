import React from 'react'
import { HeroSection } from '../components/Hero'
import { AboutUs } from '../components/AboutUs'
import { DifferenceSection } from '../components/Different'

export const Home = () => {
  return (
    <div  className='pt-20'>
      <HeroSection />
      <AboutUs />
      <DifferenceSection />
    </div>
  )
}
