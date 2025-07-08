import { Link } from 'react-router';

export const HeroSection = () => {

    const bglink = "https://cdn.leonardo.ai/users/ecbf1e78-6285-4000-b1be-5901b2b7098e/generations/2a319064-f7a0-46d5-a112-d53910b411c9/segments/1:4:1/Lucid_Realism_highresolution_stock_photo_of_One_aged_HR_and_on_0.jpg"

    return (
        <section className="w-full md:aspect-[2.5/1] aspect-[2/1] min-h-[150px] flex items-center bg-center bg-cover bg-no-repeat pt-50 relative" style={{backgroundImage : `url(${bglink})`}}>
            <div className="bg-opacity-40 w-full h-full flex items-center px-10 lg:px-20 md:px-30 absolute md:static top-10">
                <div className="max-w-2xl text-white space-y-2 md:space-y-6">
                    <h1 className="M-font sm:text-[20px] md:text-5xl font-bold leading-tight">Hiring with Purpose, Powered by Mantra </h1>
                    <p className="sm:text-[20px] md:text-5xl font-medium">Find Opportunities that fit you.</p>
                    <Link to="/careers" className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-semibold md:px-6 px-3 md:py-3 py-1 rounded-md transition-transform duration-300 hover:scale-105"> Find Jobs → </Link>
                </div>
            </div>
        </section>
    );
}
