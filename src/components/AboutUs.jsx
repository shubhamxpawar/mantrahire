import React from 'react';

export const AboutUs = () => {

    const illimage = "https://img.freepik.com/free-vector/job-interview-process-hiring-new-employees-hr-specialist-cartoon-character-talking-new-candidatee-recruitment-employment-headhunting-concept-illustration_335657-2034.jpg?semt=ais_hybrid&w=740"

    return (
        <section className="w-full px-6 py-16 md:px-16 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
            
                {/* Left Content */}

                <div className="md:w-7/12 space-y-6">
                    <p className="text-[#015eae] text-md font-semibold">About Us</p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#02286d] leading-tight"> MantraHire blends timeless values with modern HR intelligence.</h2>
                    <p className="text-gray-700 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                    At MantraHire Solutions, we believe that hiring is more than filling a vacancy — it's a sacred alignment of purpose, potential, and people. <br /> <br />

                    Rooted in the timeless wisdom of Sanskrit principles and powered by modern HR intelligence, we bring a fresh yet deeply grounded approach to recruitment. Our name itself reflects our philosophy: a “mantra” is a focused intention, and that's exactly how we approach every hiring journey — with clarity, care, and purpose. <br /> <br />

                    We are not just another HR firm. We're your people partner, your growth ally, and your talent guide. Whether you're a startup shaping your first team or an enterprise scaling to the next level, we help you build the right team, not just a bigger one.
                    </p>
                    <button className="bg-amber-600 hover:bg-amber-700 cursor-pointer text-white font-semibold px-6 py-2 rounded-md transition duration-300">Know More</button>
                </div>

                {/* Right Image */}
                
                <div className="md:w-5/12">
                    <img src={illimage} alt="About MantraHire" className="w-full h-auto object-contain"/>
                </div>
            </div>
        </section>
    );
};
