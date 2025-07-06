import React from 'react'
import { ApplicantForm } from '../components/ApplicantForm'
import { ContactCard } from '../components/ContactCard'


export const ContactUs = () => {
  return (
    <section>

      {/* header */}
      
      <div className="bg-[url('/contact.jpg')] bg-center min-h-[400px] bg-no-repeat bg-contain w-full bg-blend-overlay bg-gray-700 flex">
        <h2 className='mx-auto my-auto text-4xl md:text-6xl text-gray-200 font-extrabold'>Contact Us</h2>
      </div>


      <div className='flex flex-row mx-auto w-full justify-around my-16'>
        <ApplicantForm />
        <ContactCard />
      </div>
    </section>
  )
}
