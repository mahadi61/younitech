import bgImg from "../assets/Background (5).png";
import image from "../assets/Image.png";
import icon from "../assets/icon.png";
import icon1 from "../assets/Icon (1).png";
import { useNavigate } from "react-router-dom";

const Waaram = () => {
  const navigate = useNavigate();
  return (
    <div className="relative bg-white py-16">
     
      <div className="absolute top-0 left-0 w-full h-[200px] sm:h-[300px] lg:h-[400px] bg-cover bg-center">
        <img src={bgImg} className="h-[350px] sm:h-[620px] w-full max-w-xs sm:max-w-sm" alt="" />
      </div>

      {/* Content Section */}
      <div className="relative container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-12 gap-6 sm:gap-8">
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/2 flex justify-center z-10">
          <img
            src={image}
            alt="Visual Representation"
            className="w-4/5 sm:w-full max-w-xs sm:max-w-md lg:max-w-lg"
          />
        </div>

        {/* Right Side: Text */}
        <div className="w-full lg:w-1/2 z-10 text-start lg:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-[35px] font-plus-jakarta font-bold mb-4 sm:mb-6 text-[#263238]">
            Waarom kiezen voor  Younitech?
          </h2>
          <p className="text-base sm:text-lg lg:text-[18px] font-plus-jakarta mb-4 sm:mb-6 text-[#263238] leading-relaxed">
            Met Younitech kiest u voor een partner die uw visie begrijpt en
            omvormt tot praktische resultaten. Wij bieden:
          </p>
          <ul className="space-y-3 sm:space-y-4 text-base sm:text-lg text-gray-700">
            <li className="flex items-start lg:text-[18px] font-plus-jakarta text-[#263238]">
              <span className="mr-2 sm:mr-3 text-xl sm:text-2xl lg:text-[18px] font-plus-jakarta text-[#263238]">•</span>
              Technologische oplossingen die met uw bedrijf meegroeien.
            </li>
            <li className="flex items-start lg:text-[18px] font-plus-jakarta text-[#263238]">
              <span className="mr-2 sm:mr-3 text-xl sm:text-2xl lg:text-[18px] font-plus-jakarta text-[#263238]">•</span>
              Een focus op meetbare resultaten en een naadloze klantbeleving.
            </li>
            <li className="flex items-start lg:text-[18px] font-plus-jakarta text-[#263238]">
              <span className="mr-2 sm:mr-3 text-xl sm:text-2xl lg:text-[18px] font-plus-jakarta text-[#263238]">•</span>
              Toegang tot een team van ervaren experts.
            </li>
          </ul>

          <div className="flex flex-col ml-2 sm:flex-row justify-center lg:justify-start items-start sm:gap-10 md:gap-36 py-6">
            {/* Left Section */}
            <div className="flex flex-col items-start lg:items-start text-start lg:text-left">
              <div className="mb-3 sm:mb-4">
                <img src={icon} alt="Experience Icon" className="w-12 sm:w-16" />
              </div>
              <h2 className="text-lg sm:text-2x lg:text-[22px] font-plus-jakarta font-bold text-[#263238]">
                Uitgebreide <br /> ervaring en <br /> kennis
              </h2>
            </div>

            {/* Right Section */}
            <div className="flex flex-col items-start lg:items-start text-start mt-8 lg:text-left  sm:mt-0">
              <div className="mb-3 sm:mb-4">
                <img src={icon1} alt="Projects Icon" className="w-8 sm:w-10" />
              </div>
              <h2 className="text-lg sm:text-2xl lg:text-[22px] font-plus-jakarta font-bold text-[#263238]">
                Ruime ervaring met <br /> het bereiken van <br /> jouw doelgroep
              </h2>
            </div>
          </div>

          <div className="flex justify-center lg:justify-start ">
            <button onClick={() => navigate("/overons")} className="bg-[#263238] font-plus-jakarta  text-[18px] text-white py-3 px-5 sm:px-6 rounded-lg shadow-lg hover:bg-[#1e2a30] transition duration-300 ease-in-out">
              Ontdek meer over onze aanpak
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Waaram;
