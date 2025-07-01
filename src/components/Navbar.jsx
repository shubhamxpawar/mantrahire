import { NavLink } from 'react-router';

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 shadow-md bg-white">
      {/* Left: Logo and Brand */}
      <div className="flex items-center space-x-3">
        <img src="https://i.pinimg.com/736x/53/96/10/539610835d5ce20568c564249afd94e7.jpg" alt="MantraHire Logo" className="h-15 w-15" />
        <span className="text-[#015eae] font-bold text-2xl"> MantraHire Solutions </span>
      </div>

      {/* Center: Nav Links (One-liner) */}
      <div className="space-x-8 font-medium">
        <NavLink to="/" className="inline-block text-gray-700 hover:text-[#015eae] hover:scale-110 transition-transform duration-300 text-lg">Home</NavLink>
        <NavLink to="/founders" className="inline-block mx- text-gray-700 hover:text-[#015eae] text-lg hover:scale-110 transition-transform duration-300">Meet Our Founders</NavLink>
        <NavLink to="/clients" className="inline-block mx- text-gray-700 hover:text-[#015eae] text-lg hover:scale-110 transition-transform duration-300">Our Clients</NavLink>
        <NavLink to="/services" className="inline-block mx- text-gray-700 hover:text-[#015eae] text-lg hover:scale-110 transition-transform duration-300">Our Services</NavLink>
        <NavLink to="/careers" className="inline-block mx- text-gray-700 hover:text-[#015eae] text-lg hover:scale-110 transition-transform duration-300">Careers</NavLink>
      </div>

      {/* Right: Button */}
      <div>
        <NavLink to="/contact" className="bg-[#015eae] text-white px-5 py-2 rounded-md font-semibold hover:bg-[#014b8a] transition">Contact us</NavLink>
      </div>
    </nav>
  );
}
