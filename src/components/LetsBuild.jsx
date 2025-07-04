import React from "react";

export const LetsBuildSection = () => {

    const bglink = "https://cdn.leonardo.ai/users/ecbf1e78-6285-4000-b1be-5901b2b7098e/generations/ad7a6a09-3bee-41dc-9718-f945780b412e/segments/4:4:1/Flux_Dev_A_vibrant_Googleinspired_digital_illustration_featuri_3.jpg"

    return (
        <section className="w-full py-6 mx-auto md:px-30 bg-white flex flex-col md:flex-row items-center justify-between">
            <div className="w-xs md:w-1/2 ml-8 md:ml-32">
                <img src={bglink} alt="Let's Build Together Illustration" className="w-lg h-auto object-contain"/>
            </div>

            <div className="w-full md:w-1/2 space-y-6 ml-8 md:ml-0 my-10">
                <h2 className="text-[#015eae] text-2xl md:text-3xl font-bold">Let's Build Better Together</h2>
                <p className="text-gray-700 text-base md:text-lg">If you're looking for an HR partner who truly listens, genuinely cares, <br /> and brings a blend of <span className="underline decoration-3 font-semibold decoration-[#3e86c4] inline cursor-default">tech, empathy, and ethics</span> — you're in the right place.</p>
                <p className="text-gray-700 text-base md:text-lg"> Let's create teams that don't just work, but <span className="underline decoration-3 font-semibold decoration-[#3e86c4] inline cursor-default"> work beautifully together.</span> </p>
            </div>
        </section>
    );
};
