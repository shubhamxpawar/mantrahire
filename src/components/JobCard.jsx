// JobCard.jsx
import React from 'react';

const JobCard = ({ name, imgurl, position }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl hover:outline-2 outline-slate-300 w-auto mx-8 pb-6 text-center transition hover:scale-110 cursor-pointer">
      <img
        src={imgurl}
        alt={name}
        className="w-56 h-auto object-cover rounded-t-xl aspect-[5/6] "
      />
      <h2 className="text-xl font-semibold mt-4">{name}</h2>
      <p className="text-gray-600">{position}</p>
    </div>
  );
};

export default JobCard;
