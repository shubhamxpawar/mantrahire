import React from 'react'

export const Careers = () => {
  return (
    <div>
      <div className='w-screen h-[170px] flex mx-54 items-center'>
        <h2 className='underline font-extrabold decoration-amber-500 decoration-6 text-[#003b6f] text-5xl shadow-2xl'>Careers</h2>
      </div>

      <section className="bg-white shadow-xl hover:shadow-2xl rounded-lg p-8 md:p-12 max-w-2xl my-12 text-center border-t-4 border-l-4 hover:border-t-6 hover:border-l-6 border-[#3e86c4] hover:cursor-pointer mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#3e86c4] mb-6">Careers at MantraHire</h2>
        <p className="text-gray-700 max-w-2xl text-base md:text-lg mb-8">
          We're excited to build a team of passionate professionals who believe in purpose-driven hiring. As a newly launched company, we're currently laying the foundation — but great opportunities are on their way!
        </p>
        <p className="text-gray-600 italic text-base md:text-lg">
          Stay tuned, and thank you for your interest and support.
        </p>
      </section>

    </div>
  )
}
