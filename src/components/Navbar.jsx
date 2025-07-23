import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="w-[100vw] flex items-center justify-between px-4 md:px-8 py-4 shadow-md bg-white border-b-5 border-[#3e86c4] z-50 fixed">
      {/* Logo and Brand Name */}
      <Link className="flex items-center space-x-2" to="/">
        <img
          src="/mhs_logo.png"
          alt="MantraHire Logo"
          className="h-16 w-16 md:h-16 md:w-16 bg-black rounded-2xl"
        />
        <span className="text-[#015eae] font-bold text-base sm:text-lg md:text-xl whitespace-nowrap">
          MantraHire Solutions
        </span>
      </Link>

      {/* Hamburger for sm and md */}
      <div className="lg:hidden">
        <button onClick={toggleMenu}>
          {menuOpen ? (
            <HiX className="text-3xl text-[#015eae]" />
          ) : (
            <HiMenuAlt3 className="text-3xl text-[#015eae]" />
          )}
        </button>
      </div>

      {/* Navigation Links - Large screens */}
      <div className="hidden lg:flex md:space-x-4 space-x-2 lg:space-x-8 font-medium">
        <NavLink to="/" className="inline-block text-gray-700 hover:text-[#015eae] hover:scale-110 transition-transform duration-300 text-sm md:text-lg" >
          Home
        </NavLink>
        <NavLink to="/meetourfounders" className="inline-block text-gray-700 hover:text-[#015eae] hover:scale-110 transition-transform duration-300 text-sm md:text-lg" >
          Meet Our Founders
        </NavLink>
        <NavLink to="/ourclients" className="inline-block text-gray-700 hover:text-[#015eae] hover:scale-110 transition-transform duration-300 text-sm md:text-lg" >
          Our Clients
        </NavLink>
        <NavLink to="/ourservices" className="inline-block text-gray-700 hover:text-[#015eae] hover:scale-110 transition-transform duration-300 text-sm md:text-lg" >
          Our Services
        </NavLink>
        <NavLink to="/careers" className="inline-block text-gray-700 hover:text-[#015eae] hover:scale-110 transition-transform duration-300 text-sm md:text-lg" >
          Careers
        </NavLink>
      </div>

      {/* Contact Button - Large screens */}
      <div className="hidden lg:flex">
        <Link to="/contactus" className="bg-amber-600 hover:bg-amber-700 text-white px-4 sm:px-5 py-2 rounded-md font-semibold transition text-sm sm:text-base" > Contact us </Link>
      </div>

      {/* Mobile/Tablet Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md border-t border-gray-200 flex flex-col px-6 py-4 lg:hidden z-50">
          <NavLink to="/" className="py-2 text-gray-700 hover:text-[#015eae]" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/meetourfounders" className="py-2 text-gray-700 hover:text-[#015eae]" onClick={() => setMenuOpen(false)}>
            Meet Our Founders
          </NavLink>
          <NavLink to="/ourclients" className="py-2 text-gray-700 hover:text-[#015eae]" onClick={() => setMenuOpen(false)}>
            Our Clients
          </NavLink>
          <NavLink to="/ourservices" className="py-2 text-gray-700 hover:text-[#015eae]" onClick={() => setMenuOpen(false)}>
            Our Services
          </NavLink>
          <NavLink to="/careers" className="py-2 text-gray-700 hover:text-[#015eae]" onClick={() => setMenuOpen(false)}>
            Careers
          </NavLink>
          <Link to="/contactus" className="mt-4 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md font-semibold text-center" onClick={() => setMenuOpen(false)}>
            Contact us
          </Link>
        </div>
      )}
    </nav>
  );
};
