import { useState } from "react";
import bgImg from "../assets/Ellipse 477.png";
import update from "../assets/Image (2).png";
import img1 from "../assets/Group 1000005748.png";
import mobile from "../assets/mobile.jpg";

const Prest = () => {
  const [selected, setSelected] = useState(null);
  const [currentImg, setCurrentImg] = useState(update);

  const data = [
    {
      title: "Schaalbaarheid ",
      description: "Digitale oplossingen die toekomstbestendig zijn.",
      image: update,
    },
    {
      title: "Ondersteuning ",
      description: "24/7 klantenservice om u te ondersteunen waar nodig.",
      image: img1,
    },
    {
      title: "Wereldwijde impact ",
      description:
        "Technologie die uw bereik vergroot en klanten wereldwijd aanspreekt.",
      image: mobile,
    },
  ];

  const handleSelect = (index) => {
    setSelected(selected === index ? null : index);
    setCurrentImg(data[index].image);
  };

  return (
    <div className="bg-[#263238] mt-8 md:px-16">
      <div className="relative top-16 flex flex-col ml-8 items-start lg:items-start">
        <img
          src={bgImg}
          alt="Background"
          className="object-cover w-28 h-28 sm:w-40 sm:h-40 lg:w-auto lg:h-auto lg:ml-96"
        />

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ml-4 md:ml-24 pt-6 text-start lg:text-left text-[#FFFFFF] w-full px-4 sm:px-4 lg:w-auto">
          <h2 className="text-lg sm:text-3xl lg:text-4xl font-bold mb-2">
            Prestaties die resultaten leveren
          </h2>
          <h2 className="text-sm sm:text-xl lg:text-base">
            Onze aanpak is gericht op het bieden van
          </h2>
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex flex-col lg:flex-row pt-12 px-6 lg:px-20 gap-6 lg:gap-12">
        {/* Left Side */}
        <div className="lg:w-1/2 mt-12 lg:mt-24 lg:ml-36">
          {data.map((item, index) => (
            <div key={index} className="mb-6 lg:mb-8">
              <h2
                className="text-lg lg:text-2xl font-semibold text-[#D4D4D8] py-3 lg:py-4 cursor-pointer flex items-center justify-between lg:justify-start gap-4 relative"
                onClick={() => handleSelect(index)}
              >
                {item.title}
                <span className="text-lg">
                  {selected === index ? "-" : "+"}
                </span>
                {selected !== index && (
                  <span className="absolute bottom-[-1px] left-0 w-full h-[1px] bg-[#FFFFFF]"></span>
                )}
              </h2>
              {selected === index && (
                <h2 className="text-sm lg:text-base py-2 lg:py-4 text-[#FFFFFF] mt-2 relative">
                  {item.description}
                  <span className="absolute bottom-[-1px] left-0 w-full h-[1px] bg-[#D4D4D8]"></span>
                </h2>
              )}
            </div>
          ))}
        </div>

        {/* Right Side */}
        <div className="lg:w-1/2 relative">
          <img
            src={currentImg}
            alt="Selected Image"
            className="w-full  max-w-xs mx-auto lg:max-w-full lg:mx-0 h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Prest;
