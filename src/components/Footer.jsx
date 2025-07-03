import { Link } from "react-router";

export const Footer = () => {
  return (
    <footer className="bg-[#3e86c4] text-gray-200 py-6 px-4 md:px-12">
      <div className="flex flex-col md:flex-row space-y-4 justify-between items-center w-full">
        <img src="https://i.pinimg.com/736x/53/96/10/539610835d5ce20568c564249afd94e7.jpg" alt="MantraHire Logo" className="h-10" />

        <div className="flex gap-6 text-sm ml-18">
          <Link to="/founders" className="hover:text-white transition">About Us</Link>
          <Link to="/" className="hover:text-white transition">Privacy Policy</Link>
          <Link to="/contact" className="hover:text-white transition">Contact Us</Link>
        </div>

        <div className="flex gap-4">
          <a className="h-8 w-8 hover:-translate-y-2 transition-transform duration-450" href="https://www.instagram.com/mantrahire_solutions/"><img src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Instagram_svg-512.png" alt="Instagram"/></a>
          <a className="h-8 w-8 hover:-translate-y-2 transition-transform duration-450" href="https://facebook.com"><img src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Facebook_svg-512.png" alt="Facebook"/></a>
          <a className="h-8 w-8 hover:-translate-y-2 transition-transform duration-450" href="https://www.linkedin.com/in/mantrahire-solutions-4b58a5371/"><img src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Linkedin2_svg-512.png" alt="LinkedIn"/></a>
        </div>
      </div>

      <div className="border-t border-gray-300 opacity-30 my-4"></div>

      <p className="text-center text-xs text-gray-300 cursor-default">&copy; 2025 MantraHire Solutions, All rights reserved</p>
    </footer>
  );
};
