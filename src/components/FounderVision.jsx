import React from "react";
import { motion } from "framer-motion";
import illus from "../assets/illus.svg"; // Replace with your SVG or Lottie

export const FoundersVision = () => {
  return (
    <section className="w-full flex flex-col md:flex-row md:justify-around items-center gap-10 py-12 px-6 md:px-32">
      {/* Illustration */}
        <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.7 }}
        className="w-full md:w-1/2"
        >
            <img src={illus} alt="illustration" className="w-xl object-contain " />
        </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2"
      >
        <h2 className=" text-2xl md:text-4xl font-bold mb-8 text-[#003b6f]">The Vision Behind MantraHire</h2>
        <p className="text-gray-700 leading-relaxed text-wrap">
          We're not just building an HR company — we're building a movement.
          As students and first-gen entrepreneurs, we launched MantraHire to blend
          cultural insight with modern recruitment intelligence. Our mission is
          to make hiring more human, ethical, and smart. With fresh ideas and grounded
          values, we're solving hiring challenges with empathy, innovation, and purpose.
        </p>
      </motion.div>
    </section>
  );
};


