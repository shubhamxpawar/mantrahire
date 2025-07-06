import React, { useState } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'

export const ApplicantForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    jobType: '',
    locationType: '',
    resume: null,
    workProfile: ''
  })

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = e => {
    setFormData(prev => ({ ...prev, resume: e.target.files[0] }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const data = new FormData()
    for (const key in formData) {
      data.append(key, formData[key])
    }

    try {
      const res = await axios.post('https://mantra-hire-solutions-backend-v1.vercel.app/api/v1/applicant/applicantRegister', data,{
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      })
      alert('Application sent!')
    } catch (err) {
      console.error(err)
      alert('Failed to submit.')
    }
  }

  return (
    <motion.form onSubmit={handleSubmit} className='space-y-4' initial={{ opacity: 0, x: -80 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, amount: 0.7 }}>
      <h2 className='text-3xl font-bold text-[#003b6f] mb-8'>For Applicants</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
        <input name='name' type='text' placeholder='Name' value={formData.name} onChange={handleChange} className='p-3 border rounded w-full px-4' />
        <input name='email' type='email' placeholder='Email' value={formData.email} onChange={handleChange} className='p-3 border rounded w-full px-4' />
        <input name='phone' type='text' placeholder='Phone' value={formData.phone} onChange={handleChange} className='p-3 border rounded w-full px-4' />
        <select name='jobType' value={formData.jobType} onChange={handleChange} className='p-2 border hover:border-2 rounded w-full hover:cursor-pointer'>
          <option value=''>Job / Internship</option>
          <option value='Job'>Job</option>
          <option value='Internship'>Internship</option>
        </select>
        <select name='locationType' value={formData.locationType} onChange={handleChange} className='p-2 border hover:border-2 rounded w-full hover:cursor-pointer'>
          <option value=''>WFH / In-office</option>
          <option value='WFH'>Work From Home</option>
          <option value='In-office'>In-office</option>
        </select>
        <input type='file' onChange={handleFileChange}  className='p-3 border rounded w-full text-gray-600 px-4' />
      </div>

      <textarea name='workProfile' rows='4' placeholder='Work Profile Interested In' value={formData.workProfile} onChange={handleChange} className='w-full p-2 border rounded mb-6'></textarea>

      <button type='submit' className='bg-[#3e86c4] text-white px-6 py-2 rounded hover:bg-blue-700 cursor-pointer'>
        Send Application
      </button>
    </motion.form>
  )
}
