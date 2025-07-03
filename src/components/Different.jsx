import React from "react";
import { motion } from "framer-motion";

export const DifferenceSection = () => {

    const bglink = "https://cdn.leonardo.ai/users/ecbf1e78-6285-4000-b1be-5901b2b7098e/generations/550f37ed-5f44-40ba-bf18-3e270f4e3e19/segments/1:4:1/Lucid_Realism_highresolution_stock_photo_of_wide_31_cinematic__0.jpg"

    return (
        <section className="w-full text-white bg-center bg-no-repeat bg-cover flex items-center justify-center py-15 px-4 md:px-20"
        style={{
            backgroundImage: `url(${bglink})`, 
            backgroundBlendMode: "overlay",
            backgroundColor: "rgba(0, 0, 0, 0.5)"
        }}>
            <div initial={{ opacity: 0, x: -80 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, amount: 0.7 }} className="max-w-4xl space-y-8">
                
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, amount: 0.7 }}>
                    <p className="text-sm text-gray-200 uppercase tracking-wider">What makes us different</p>
                    <h2 className="text-2xl md:text-5xl font-bold">Recruitment Evolved with Purpose</h2>
                </motion.div>

                <div className="space-y-8 text-base md:text-lg text-gray-100 pt-6">
                    <motion.div initial={{ opacity: 0, x: -80 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, amount: 0.7 }}>
                        <h3 className="text-xl font-bold text-white mb-3">Human + Tech Harmony</h3>
                        <p className="right-4">Our AI-powered tools speed up screening, but we never remove the human touch. <br /> Your hiring decisions are powered by insights, not just algorithms.</p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, amount: 0.7 }}>
                        <h3 className="text-xl font-bold text-white mb-3">People First. Always.</h3>
                        <p>We focus on creating meaningful connections between employers and candidates, <br /> Because happy teams build lasting success.</p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true, amount: 0.7 }}>
                        <h3 className="text-xl font-semibold text-white mb-3">Indian Roots, Global Vision</h3>
                        <p>Inspired by the values of karma, dharma, and satya, we bring spiritual integrity into every interaction — all while staying globally competitive.</p>
                    </motion.div>
                </div>

                
            </div>
        </section>
    );
};
