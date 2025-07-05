import React from 'react'

export const OurClients = () => {
  return (
    <div>
      <div className='w-screen h-[170px] flex mx-54 items-center'>
        <h2 className='underline font-extrabold decoration-amber-500 decoration-6 text-[#003b6f] text-5xl shadow-2xl'>Our Clients</h2>
      </div>

      <section className="w-full my-12 flex items-center justify-center px-4">
        <div className="bg-white shadow-xl hover:shadow-2xl rounded-lg p-8 md:p-12 max-w-2xl text-center border-t-4 border-l-4 hover:border-t-6 hover:border-l-6 border-[#3e86c4] hover:cursor-pointer">
          <h2 className="text-2xl md:text-3xl font-bold text-[#3e86c4] mb-4">We're Just Getting Started!</h2>
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
