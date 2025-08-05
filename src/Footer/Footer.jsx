import logo from "../assets/logo black 1.png";
import { MdOutlineMarkEmailUnread } from "react-icons/md";



import { FaTwitter } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { FaInstagramSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdPhoneInTalk } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-white py-10 px-4 sm:px-6 md:px-10 lg:px-20">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:gap-4 lg:gap-8">
    {/* Company Info */}
    <div className="space-y-5 w-full md:w-1/2">
      <img src={logo} alt="Logo" className="mb-6 w-28 sm:w-36 md:w-40" />
      <p className="font-plus-jakarta text-[#263238] text-base sm:text-[16px] leading-relaxed">
        Younitech is een softwarebedrijf gespecialiseerd in app-ontwikkeling, marketing en branding. Het bedrijf onderscheidt zich door oprechte en eerlijke bedrijfsvoering, met aandacht voor maatschappelijke belangen en kansen voor werknemers, zonder dat expliciet uit te dragen. Younitech denkt contrarian en kiest voor een unieke aanpak in een wereld vol concurrentie.
      </p>
      <div className="mt-6 space-y-3">
        <div className="flex items-center gap-3 text-sm sm:text-base">
          <MdPhoneInTalk className="text-xl text-[#263238]" />
          <span className="text-[#263238]">085-203 15 20</span>
        </div>
        <div className="flex items-center gap-3 text-sm sm:text-base">
          <MdOutlineMarkEmailUnread className="text-xl text-[#263238]" />
          <span className="text-[#263238]">Info@younitech.nl</span>
        </div>
      </div>
      <div className="flex space-x-5 sm:space-x-6 mt-6 text-2xl text-[#263238]">
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaInstagramSquare />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="#" target="_blank" rel="noopener noreferrer">
          <ImLinkedin />
        </a>
      </div>
    </div>

    {/* Useful Links */}
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-x-10 sm:gap-x-14 md:gap-x-32 lg:gap-x-8 gap-y-8 mt-10 md:mt-0 w-full md:w-1/2">
      {/* Diensten */}
      <div className="space-y-4">
        <h3 className="font-bold font-plus-jakarta text-base sm:text-lg text-[#263238]">Diensten</h3>
        <ul className="space-y-3 text-sm sm:text-base text-[#263238]">
          <li className="hover:text-blue-600 transition-colors"><Link to="/appontwikkeling">App ontwikkeling</Link></li>
          <li className="hover:text-blue-600 transition-colors"><Link to="/brandingdiensten">Branding</Link></li>
          <li className="hover:text-blue-600 transition-colors"><Link to="/marketingontwikkeling">Marketingsdiensten</Link></li>
          <li className="hover:text-blue-600 transition-colors"><Link to="/websitebuilder">Website builder</Link></li>
        </ul>
      </div>

      {/* Prijzen */}
      <div className="space-y-4">
        <h3 className="font-bold font-plus-jakarta text-base sm:text-lg text-[#263238]">Prijzen</h3>
        <ul className="space-y-3 text-sm sm:text-base text-[#263238]">
          <li className="hover:text-blue-600 transition-colors"><Link to="/appontwikkelingprijsplannen">App ontwikkeling</Link></li>
          <li className="hover:text-blue-600 transition-colors"><Link to="/brandingprijsplannen">Branding</Link></li>
          <li className="hover:text-blue-600 transition-colors"><Link to="/marketingprijsplannen">Marketingsdiensten</Link></li>
          <li className="hover:text-blue-600 transition-colors"><Link to="/websitebuilder">Website builder</Link></li>
        </ul>
      </div>

      {/* Over ons */}
      <div className="space-y-4">
        <h3 className="font-bold font-plus-jakarta text-base sm:text-lg text-[#263238] hover:text-blue-600 transition-colors">
          <Link to="/overons">Over ons</Link>
        </h3>
        <ul className="space-y-3 text-sm sm:text-base text-[#263238]">
          <li className="hover:text-blue-600 transition-colors"><Link to="/veelgesteldevragen">FAQ</Link></li>
          <li className="hover:text-blue-600 transition-colors"><Link to="/portfolio">Portfolio</Link></li>
        </ul>
      </div>
    </div>
  </div>

  {/* Footer Bottom */}
  <div className="mt-10 text-center text-gray-600 text-xs sm:text-sm border-t pt-6">
    &copy; {new Date().getFullYear()} Younitech. All rights reserved.
  </div>
</footer>


  );
};

export default Footer;
