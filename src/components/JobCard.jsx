// JobCard.jsx
import React from 'react';

const JobCard = ({ name, imgurl, position }) => {
  return (
    <div className="bg-white rounded-2xl max-w-[225px] shadow-xl hover:shadow-2xl hover:outline-2 outline-slate-300 mx-8 pb-4 text-center transition hover:scale-110 cursor-pointer">
      <img
        src={imgurl}
        alt={name}
        className="w-56 h-auto object-cover rounded-t-xl aspect-[5/6] "
      />
      <h2 className="text-xl font-semibold mt-4">{name}</h2>
      <p className="text-gray-600 break-words whitespace-normal max-w-full mt-2">{position}</p>
    </div>
  );
};

export default JobCard;
