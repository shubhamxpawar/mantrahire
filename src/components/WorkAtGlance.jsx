import React from "react";
import Marquee from "react-fast-marquee";

const points = [
  "Purpose-driven Talent Acquisition",
  "AI-based Resume Filtering & Screening",
  "Modern HR Consulting with Cultural Alignment",
  "Early-stage Hiring Strategies for Startups",
  "Mindful Engagement & Retention Planning",
];

export const WorkGlance = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-32 overflow-x-hidden">
      <div className="mb-12">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-[#003b6f]">Our Work at a Glance</h2>
        <p className="mt-2 text-gray-600 max-w-3xl "> From a dorm room idea to a growing HR brand, we're proud to build <span className="underline decoration-3 font-semibold decoration-[#3e86c4] inline cursor-default">with heart, hustle, and impact.</span></p>
      </div>

      <Marquee pauseOnHover={true} speed={50} gradient={false} gradientColor="#3e86c4" gradientWidth={50}>
        {points.map((point, index) => (
          <div key={index} id="marquee" className="bg-[#3e86c4] text-white cursor-default shadow-xl rounded-xl px-3 md:px-6 py-2 md:py-4 mx-4 min-w-[300px] flex items-center justify-center text-center font-medium text-sm md:text-lg hover:scale-105 transition-transform duration-300"> {point} </div>
        ))}
      </Marquee>
    </section>
  );
};


