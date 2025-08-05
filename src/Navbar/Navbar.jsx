import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavLogo from "../assets/logo black 1.png";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDownIcon, XIcon } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isDienstenOpen, setIsDienstenOpen] = useState(false);
  const [isPrijzenOpen, setIsPrijzenOpen] = useState(false);

  const toggleDiensten = () => {
    setIsDienstenOpen((prev) => !prev);
    setIsPrijzenOpen(false);
  };

  const togglePrijzen = () => {
    setIsPrijzenOpen((prev) => !prev);
    setIsDienstenOpen(false);
  };

  const toggleMobileDropdown = () => {
    console.log("Mobile dropdown toggled");
    setIsMobileDropdownOpen((prev) => !prev);
    setIsDienstenOpen(false);
    setIsPrijzenOpen(false);
  };

  return (
    <header className="bg-[#FFFFFF] lg:px-32 shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between lg:items-center px-4 py-3 lg:py-5">
        <a href="/" className="flex items-center space-x-2">
          <img src={NavLogo} alt="Logo" className="h-8 lg:h-10 w-auto" />
        </a>
        <div className="flex flex-row gap-2">
          {/* Mobile Dropdown */}
          <div className="relative   lg:hidden">
            <button
              tabIndex={0}
              className="btn btn-ghost p-2"
              onClick={toggleMobileDropdown}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>

            <AnimatePresence>
              {isMobileDropdownOpen && (
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.3 }}
                  className="absolute right-0 mt-2 w-56 py-6 bg-white border rounded-lg shadow-lg z-50"
                >
                  {/* Close Button */}
                  <button
                    onClick={toggleMobileDropdown}
                    className="absolute top-2  right-2 text-gray-600"
                  >
                    <XIcon className="h-6 w-6 cursor-pointer" />
                  </button>

                  <div>
                    <button
                      className="block w-full text-left px-4 py-2 text-gray-700"
                      onClick={toggleDiensten}
                    >
                      Diensten{" "}
                      <ChevronDownIcon className="w-4 h-4 inline ml-16" />
                    </button>
                    <hr className="ml-4 mr-4 " />
                    <AnimatePresence>
                      {isDienstenOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="bg-white border rounded-lg shadow-lg"
                        >
                          <a
                            href="/appontwikkeling"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            App Ontwikkeling
                          </a>
                          <a
                            href="/brandingdiensten"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Branding
                          </a>
                          <a
                            href="/marketingontwikkeling"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Marketingsdiensten
                          </a>
                          <a
                            href="/websitebuilder"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Website Builder
                          </a>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div>
                    <button
                      className="block w-full text-left px-4 py-2 text-gray-700"
                      onClick={togglePrijzen}
                    >
                      Prijzen{" "}
                      <ChevronDownIcon className="w-4 h-4 inline ml-20" />
                    </button>
                    <hr className="ml-4 mr-4 " />
                    <AnimatePresence>
                      {isPrijzenOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="bg-white border rounded-lg shadow-lg"
                        >
                          <a
                            href="/appontwikkelingprijsplannen"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            App Ontwikkeling
                          </a>
                          <a
                            href="/brandingprijsplannen"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Branding
                          </a>
                          <a
                            href="/marketingprijsplannen"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Marketingsdiensten
                          </a>
                          <a
                            href="/websitebuilder"
                            className="block px-4 py-2 hover:bg-gray-100"
                          >
                            Website Builder
                          </a>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <a
                    href="/overons"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Over Ons
                  </a>
                  <hr className="ml-4 mr-4 " />
                  <a
                    href="/veelgesteldevragen"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    FAQ
                  </a>
                  <hr className="ml-4 mr-4 " />
                  <a
                    href="/portfolio"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Portfolio
                  </a>
                  <hr className="ml-4 mr-4 " />
                  <div className="my-6 ml-4">
                    <a
                      onClick={() => navigate("/contactpagina")}
                      href="#contact"
                      className="lg:block hover:bg-[#468AFFE6] bg-[#468AFF] font-plus-jakarta text-white px-6 py-2 rounded-md shadow-md"
                    >
                      Contact
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex  space-x-6 items-center mr-4">
            <DienstenDropdown />
            <PrijzenDropdown />
            <a
              href="/overons"
              className="text-[#263238] hover:text-blue-600 font-plus-jakarta text-[16px]"
            >
              Over Ons
            </a>
            <a
              href="/veelgesteldevragen"
              className="text-[#263238] hover:text-blue-600 font-plus-jakarta text-[16px]"
            >
              FAQ
            </a>
            <a
              href="/portfolio"
              className="text-[#263238] hover:text-blue-600 font-plus-jakarta text-[16px]"
            >
              Portfolio
            </a>
          </div>

          {/* Desktop Contact Button */}
          <a
            onClick={() => navigate("/contactpagina")}
            href="#contact"
            className="hidden md:block hover:bg-[#468AFFE6] bg-[#468AFF] font-plus-jakarta text-white px-6 py-2 rounded-md shadow-md"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
};

// Desktop DienstenDropdown
const DienstenDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center py-2 text-[#263238] hover:text-blue-600 font-plus-jakarta text-[16px]">
        Diensten
        <ChevronDownIcon
          className="w-5 h-5 text-black transition-transform duration-200"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>
      {isOpen && (
        <div className="absolute right-0 w-48 bg-white border rounded-lg shadow-lg">
          <a
            href="/appontwikkeling"
            className="block px-4 py-2 hover:bg-gray-100"
          >
            App Ontwikkeling
          </a>
          <a
            href="/brandingdiensten"
            className="block px-4 py-2 hover:bg-gray-100"
          >
            Branding
          </a>
          <a
            href="/marketingontwikkeling"
            className="block px-4 py-2 hover:bg-gray-100"
          >
            Marketingsdiensten
          </a>
          <a
            href="/websitebuilder"
            className="block px-4 py-2 hover:bg-gray-100"
          >
            Website Builder
          </a>
        </div>
      )}
    </div>
  );
};

// Desktop PrijzenDropdown
const PrijzenDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center text-[#263238] hover:text-blue-600 font-plus-jakarta text-[16px]">
        Prijzen
        <ChevronDownIcon
          className="w-5 h-5 text-black transition-transform duration-200"
          style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>
      {isOpen && (
        <div className="absolute right-0 w-48 bg-white border rounded-lg shadow-lg">
          <a
            href="/appontwikkelingprijsplannen"
            className="block px-4 py-2 hover:bg-gray-100"
          >
            App Ontwikkeling
          </a>
          <a
            href="/brandingprijsplannen"
            className="block px-4 py-2 hover:bg-gray-100"
          >
            Branding
          </a>
          <a
            href="/marketingprijsplannen"
            className="block px-4 py-2 hover:bg-gray-100"
          >
            Marketingsdiensten
          </a>
          <a
            href="/websitebuilder"
            className="block px-4 py-2 hover:bg-gray-100"
          >
            Website Builder
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
