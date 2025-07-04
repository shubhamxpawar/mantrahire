import { motion } from "framer-motion";

export const MottoSection = () => {
  return (
    <section className="w-full py-6 pt-25 px-4 md:px-12 mx-auto bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#015eae] mb-10">Our Motto</h2>
        <div className="bg-orange-50 rounded-lg shadow-xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-start max-w-5xl mx-auto">
        
            {/* Left: Hiring with Purpose */}
            <motion.div className="flex-1" initial={{ opacity: 0, x: -80 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, amount: 0.7 }}>
                <h2 className="text-xl md:text-3xl font-semibold text-[#015eae] mb-2 ">“Hiring with Purpose, </h2>
                <p className="text-gray-700"> Every placement and strategy is intentional, ethical, <br /> and value-aligned — not just fast or transactional.</p>
            </motion.div>

            {/* Right: Powered by Mantra */}
            <motion.div className="flex-1" initial={{ opacity: 0, x: 80 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, amount: 0.7 }}>
                <h2 className="text-xl md:text-3xl font-semibold text-[#015eae] mb-2">Powered by Mantra”</h2>
                <p className="text-gray-700 list-disc list-inside space-y-2"> The <strong>core belief</strong> or guiding principle (the “mantra”) behind each hiring strategy</p>
            </motion.div>

        </div>
    </section>
  );
};
