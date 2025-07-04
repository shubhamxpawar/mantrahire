// Founders.jsx
import React from 'react';
import JobCard from '../components/JobCard';
import { FoundersVision } from '../components/FounderVision';
import { WorkGlance } from '../components/WorkAtGlance';

export const MeetOurFounders = () => {
  const founders = [
    {
      name: 'Himanshu Shukla',
      imgurl: 'https://lh3.googleusercontent.com/lz0WtyTM-Ecwf2rO6xQSMPS--jyVdHQlNeNc5tKtSMfP1iJpVFQAsGW2lObP-X1RiHYZVC67xtoBvaGxzFoNhPXVDzZ0-FbtX_e8PhHJauKcSsdNFYQTCj9CppTRioc8ts0ffH7HFRen6pMS4R1EuqsoK3t6TP2l_tkRXb3IHZynAnvLxLXKbA=w1280',
      position: 'CEO & Founder',
    },
    {
      name: 'Abhishek Gautam',
      imgurl: 'https://lh4.googleusercontent.com/rDqSWMj_yfn5tiXm8OGRt7rX9b_MQ_XXPOwgTbalqm97zVbBTMz_pEghyjR98NV3NkxmTHMsvkogHF56ESLvF9S6nwbAWQBRaZ_dTY841AebjUKPDRxseW9NNrDHTz8jHhB7tXPFRnFKICYugc8RE0tIXnJ7jPMgrQEXuFDqBLZzJmBv3hmQVA=w1280',
      position: 'Co-Founder',
    },
    {
      name: 'Sakshi Shinde',
      imgurl: 'https://lh6.googleusercontent.com/HMgJK3MCGo-o5RAceOOGZbVibV07hK23103nN10aTHi5ofLUX-d3_OtkZX8eGGmB0gIOOYELraS2uZSEdxqB940GiC0-MbZJIQ4y9k6zG3NOJSQ_UKH7NupC4WB_zNV8ic1u1PVHpGL_G57RV30jzeTgwO27hAEwLeMtX_eaDd4RmdFKh8ptlw=w1280',
      position: 'Co-Founder',
    },
  ];

  return (
    <div className="justify-center gap-6 pb-8">

      {/* heading */}

      <div className='w-screen h-[170px] flex mx-54 items-center'>
        <h2 className='underline font-extrabold decoration-amber-500 decoration-6 text-[#003b6f] text-5xl shadow-2xl'>Meet Our Founders</h2>
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


