import React from 'react'
import { ApplicantForm } from '../components/ApplicantForm'
import { ContactCard } from '../components/ContactCard'


export const ContactUs = () => {
  return (
    <section className='w-full overflow-x-hidden'>

      {/* header */}
      
      <div className="bg-[url('/contact.jpg')] lg:mt-20 bg-center min-h-[300px] lg:min-h-[400px] bg-[length:auto_280px] lg:bg-contain bg-no-repeat w-full bg-blend-overlay bg-gray-700 flex">
        <h2 className='mx-auto my-auto text-4xl md:text-6xl text-gray-200 font-extrabold'>Contact Us</h2>
      </div>


      <div className='flex flex-col px-4 lg:px-0 lg:flex-row mx-auto w-full justify-around my-6 lg:mt-20 lg:h-[450px] gap-10'>
        <ApplicantForm />
        <ContactCard />
      </div>
    </section>
  )
}
