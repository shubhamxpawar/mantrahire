// Founders.jsx
import React from 'react';
import JobCard from '../components/JobCard';
import { FoundersVision } from '../components/FounderVision';
import { WorkGlance } from '../components/WorkAtGlance';
import Himanshu from '../assets/Himanshu_Shukla.jpg'
import Abhishek from '../assets/Abhishek_Gautam.jpg'
import Sakshi from '../assets/Sakshi_Shinde.jpg'

export const MeetOurFounders = () => {
  const founders = [
    {
      name: 'Himanshu Shukla',
      imgurl: Himanshu,
      position: 'CEO & Founder',
    },
    {
      name: 'Abhishek Gautam',
      imgurl: Abhishek,
      position: 'Co-Founder',
    },
    {
      name: 'Sakshi Shinde',
      imgurl: Sakshi,
      position: 'Co-Founder',
    },
  ];

  return (
    <div className="w-full justify-center gap-6 pb-8 overflow-x-hidden">

      {/* heading */}

      <div className='w-full h-[170px] flex items-center'>
        <h2 className='underline font-extrabold decoration-amber-500 decoration-4 text-[#003b6f] mx-auto text-2xl md:text-3xl shadow-2xl'>Meet Our Founders</h2>
      </div>

      {/* founders list */}

      <div className='flex flex-wrap justify-center gap-6 py-12'>
        {founders.map((f, i) => (
          <JobCard key={i} name={f.name} imgurl={f.imgurl} position={f.position} />
        ))}
      </div>

      <FoundersVision />
      <WorkGlance />    
    </div>
  );
};


