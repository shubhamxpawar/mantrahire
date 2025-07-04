import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between px-4 md:px-8 py-4 shadow-md bg-white border-b-5 border-[#3e86c4] w-full z-50 fixed">
      <div className="flex items-center space-x-2 md:space-x-3">
        <img src="https://i.pinimg.com/736x/53/96/10/539610835d5ce20568c564249afd94e7.jpg" alt="MantraHire Logo" className="h-10 w-10 md:h-12 md:w-12" />
        <span className="text-[#015eae] font-bold text-lg sm:text-xl md:text-2xl hidden sm:inline-block whitespace-nowrap">MantraHire Solutions</span>
      </div>

      <div className="flex md:space-x-4 space-x-2 lg:space-x-8 font-medium mt-4 md:mt-0 flex-wrap">
        <NavLink to="/" className="inline-block text-gray-700 hover:text-[#015eae] hover:scale-110 transition-transform duration-300 text-sm sm:text-base md:text-lg whitespace-nowrap">Home</NavLink>
        <NavLink to="/meetourfounders" className="inline-block text-gray-700 hover:text-[#015eae] hover:scale-110 transition-transform duration-300 text-sm sm:text-base md:text-lg whitespace-nowrap">Meet Our Founders</NavLink>
        <NavLink to="/ourclients" className="inline-block text-gray-700 hover:text-[#015eae] hover:scale-110 transition-transform duration-300 text-sm sm:text-base md:text-lg whitespace-nowrap">Our Clients</NavLink>
        <NavLink to="/ourservices" className="inline-block text-gray-700 hover:text-[#015eae] hover:scale-110 transition-transform duration-300 text-sm sm:text-base md:text-lg whitespace-nowrap">Our Services</NavLink>
        <NavLink to="/careers" className="inline-block text-gray-700 hover:text-[#015eae] hover:scale-110 transition-transform duration-300 text-sm sm:text-base md:text-lg whitespace-nowrap">Careers</NavLink>
      </div>

      <div className="mt-4 md:mt-0 hidden sm:flex">
        <NavLink to="/contactus" className=" bg-amber-600 hover:bg-amber-700 text-white px-4 sm:px-5 py-2 rounded-md font-semibold transition text-sm sm:text-base whitespace-nowrap">Contact us</NavLink>
      </div>
    </nav>
  );
};
