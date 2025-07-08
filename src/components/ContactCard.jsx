import React from 'react'
import { Mail } from 'lucide-react'
import { motion } from 'framer-motion'

export const ContactCard = () => {
  return (
    <motion.div className='flex flex-col h-[250px] lg:h-full p-10 lg:p-20  text-[#082946] bg-amber-500 rounded justify-center' initial={{ opacity: 0, x: 80 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, amount: 0.7 }}>
      <h2 className='text-xl lg:text-3xl font-bold mb-6 underline decoration-5 decoration-amber-500'>Get in touch</h2>

      <a className='flex flex-row items-center gap-2 mb-4' href="mailto:mantrahiresolutions@gmail.com">
        <Mail /> mantrahiresolutions@gmail.com
      </a>
      <p className='flex flex-col gap-2 mb-8'>
        <span className='underline decoration-1 decoration-amber-800 cursor-pointer text-amber-800 font-semibold '> +91<span className='ml-2'>7499182831</span></span>
        <span className='underline decoration-1 decoration-amber-800 cursor-pointer text-amber-800 font-semibold '> +91<span className='ml-2'>7821899741</span></span>
      </p>

      
    </motion.div>
  )
}
