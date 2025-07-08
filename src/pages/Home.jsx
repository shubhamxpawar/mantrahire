import React from 'react'
import { HeroSection } from '../components/Hero'
import { AboutUs } from '../components/AboutUs'
import { DifferenceSection } from '../components/Different'
import { MottoSection } from '../components/OurMotto'
import { LetsBuildSection } from '../components/LetsBuild'
import { Helmet } from 'react-helmet'

export const Home = () => {
  return (
    <div className='w-full overflow-x-hidden'>

      <Helmet>
        <title>Home | Hiring Solutions</title>
        <meta
          name="description"
          content="Hiring Solutions is a purpose-driven HR agency providing recruitment, payroll, and consultancy services across India."
        />
        <meta
          name="keywords"
          content="HR agency, recruitment, hiring, payroll services, consultancy, hiring solutions, India"
        />
        <link rel="canonical" href="https://mantrahiresolutions.vercel.app/" />
      </Helmet>

      <HeroSection />
      <AboutUs />
      <DifferenceSection />
      <MottoSection />
      <LetsBuildSection />
    </div>
  )
}
