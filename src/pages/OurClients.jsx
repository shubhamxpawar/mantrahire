import React from 'react'

export const OurClients = () => {
  return (
    <div>
      <div className='w-full my-16 flex items-center'>
        <h2 className='underline font-extrabold decoration-amber-500 decoration-4 text-[#003b6f] mx-auto text-3xl md:text-4xl shadow-2xl'>Our Clients</h2>
      </div>

      <section className="w-full my-12 flex items-center justify-center px-4">
        <div className="bg-white shadow-xl hover:shadow-2xl rounded-lg p-8 md:p-12 max-w-sm md:max-w-2xl text-center border-t-4 border-l-4 border-[#3e86c4] hover:cursor-pointer ">
          <h2 className="text-2xl md:text-3xl font-bold text-[#3e86c4] mb-4 text-nowrap">We're Just Getting Started!</h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            As a newly launched agency, we're in the exciting phase of building lasting partnerships. <br className="hidden md:block" />
            Our client stories are on the way — and you could be one of them!
          </p>
          <p className="mt-6 text-lg font-semibold text-gray-800">Let's grow together.</p>
        </div>  
    </section>
    </div>
  )
}
