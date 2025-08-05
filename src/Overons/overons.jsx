import { useEffect } from "react";
import icon1 from "../assets/Icon (2).png";
import icon2 from "../assets/Icon (3).png";
import icon3 from "../assets/Icon (4).png";
import icon4 from "../assets/Icon (5).png";
import i1 from "../assets/Vector11.png";
import i2 from "../assets/Vector12.png";
import i3 from "../assets/Vector13.png";
import i4 from "../assets/Vector14.png";
import das from "../assets/das.png";
import img from "../assets/rafiki.png";

const Overons = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="bg-[#F5F5F5] w-full flex flex-col items-center py-16">
        <h1 className="text-xl font-bold text-gray-800">Over Ons</h1>
        <h1 className="flex items-center gap-2 text-gray-600 text-sm md:text-base">
          Home
          <img className="w-5 h-[2px]" src={das} alt="separator" />
          Over Ons
        </h1>
      </div>
      <div className="w-full  py-12 bg-gray-50">
        {/* First Section */}
        <div className="flex flex-col lg:flex-row lg:px-36 items-start gap-8">
          {/* Left Section */}
          <div className="lg:w-1/2">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Wat wij doen
            </h1>
          </div>

          {/* Right Section */}
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-lg text-gray-600 leading-relaxed">
              Bij Younitech brengen we bedrijven verder met innovatieve, op maat
              gemaakte digitale oplossingen. Of het nu gaat om het ontwerpen van
              dynamische websites, het bouwen van krachtige applicaties, of het
              ontwikkelen van strategische marketingcampagnes, wij zorgen ervoor
              dat technologie voor u werkt.
            </h2>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Wij helpen bedrijven om:
              </h2>

              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Groter bereik en impact te creëren.</li>
                <li>
                  Efficiëntie te verbeteren met slimme technologische
                  oplossingen.
                </li>
                <li>
                  Klantbeleving te optimaliseren en merkloyaliteit te
                  versterken.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Second Section  */}

        <div className="bg-[#F8F8F8] md:px-32  my-16  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="p-6 flex flex-col justify-center items-center">
            <div className="">
              {" "}
              <img
                className="flex justify-center items-center"
                src={i1}
                alt=""
              />
            </div>
            <h1 className="mt-2 text-xl font-bold "> Oprechtheid</h1>
            <p className="mt-2 text-sm ">
              Eerlijke en transparante <br />
              bedrijfsvoering staat centraal in alles <br />
              wat we doen
            </p>
          </div>

          <div className="p-6 flex flex-col justify-center items-center">
            <div className="">
              <img src={i2} alt="" />
            </div>
            <h1 className="mt-2 text-xl font-bold ">Maatschappelijke </h1>
            <p className="mt-2 text-sm">
              We bieden kansen aan werknemers om hun <br />
              potentieel te benutten, zonder hiermee te <br />
              koop te lopen
            </p>
          </div>

          <div className="p-6 flex flex-col justify-center items-center">
            <div className="">
              <img src={i3} alt="" />
            </div>
            <h1 className="mt-2 text-xl font-bold ">Innovativiteit</h1>
            <p className="mt-2 text-sm">
              We denken contrarian en kiezen voor <br />
              unieke oplossingen in een <br />
              concurrerende markt.
            </p>
          </div>
          <div className="p-6 flex flex-col justify-center items-center ">
            <div className="">
              {" "}
              <img src={i4} alt="" />
            </div>
            <h1 className="mt-2 text-xl font-bold "> Authenticiteit</h1>
            <p className="mt-2 text-sm">
              We blijven trouw aan onze principes en laten ons niet leiden door
              trends of competitie
            </p>
          </div>
        </div>

        {/* Third Section  */}

        <div className="flex flex-col lg:px-36 lg:flex-row items-center my-16 lg:gap-12">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 text-start lg:text-left space-y-6">
            <h1 className="text-3xl font-bold text-blue-600">Onze Missie</h1>
            <h2 className="text-2xl font-semibold text-gray-800">
              “Uw succes is onze missie.”
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Bij Younitech geloven we dat technologie meer is dan een tool; het
              is een katalysator voor groei, efficiëntie en innovatie. Ons doel
              is om bedrijven uit te rusten met de digitale middelen die ze
              nodig hebben om zich te onderscheiden in een steeds veranderende
              markt.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-3">
              <li>
                Wij luisteren naar uw behoeften en vertalen uw visie naar
                praktische oplossingen.
              </li>
              <li>
                Wij bouwen strategieën die zorgen voor duurzame resultaten en
                groei.
              </li>
              <li>
                Wij benutten de kracht van technologie om bedrijven naar een
                hoger niveau te tillen.
              </li>
            </ul>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
            <img
              src={img}
              alt="Onze Missie"
              className="max-w-full lg:max-w-[90%] rounded-xl shadow-lg"
            />
          </div>
        </div>

        {/* Fourth Section  */}

        <div className="my-16  px-6 lg:px-16">
          {/* Header Section */}
          <div className="flex flex-col items-center justify-center mb-12">
            <h1>
              <button className="text-xl lg:text-2xl font-bold border px-4 py-4 bg-[#EFECFF] rounded-full text-blue-600 hover:text-blue-800 transition">
                Onze Missie
              </button>
            </h1>
            <h2 className="text-sm w-full lg:px-20 text-center font-sans  text-[#263238] mt-4">
              Bij Younitech bouwen we voort op jarenlange ervaring in
              dienstverlening die echt verder helpt. Onze visie? Bedrijven zo{" "}
              ondersteunen dat samenwerken met ons niet alleen vanzelfsprekend
              is, maar een blijvende verbinding creëert.
            </h2>
          </div>

          {/* Grid Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:px-20">
            {/* Card 1 */}
            <div className="flex items-center bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex-shrink-0">
                <img src={icon1} alt="Innovatie" className="w-24 h-28 mr-4" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-[#263238]">
                  Impactvolle projecten afgerond
                </h1>
                <h3 className="text-gray-700 mt-2">
                  Onze oplossingen hebben meetbare resultaten opgeleverd
                </h3>
              </div>
            </div>

            {/* Card 2 */}
            <div className="flex items-center bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex-shrink-0">
                <img src={icon2} alt="Teamwork" className="w-24 h-28 mr-4" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-[#263238]">
                  Klanten geholpen met betrouwbare oplossingen
                </h1>

                <h3 className="text-gray-700 mt-2">
                  We bieden technologieën die bedrijven vooruithelpen
                </h3>
              </div>
            </div>

            {/* Card 3 */}
            <div className="flex items-center bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex-shrink-0">
                <img
                  src={icon3}
                  alt="Uitmuntendheid"
                  className="w-24 h-28 mr-4"
                />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-[#263238]">
                  Waarde gecreëerd voor groei en succes
                </h1>

                <h3 className="text-gray-700 mt-2">
                  Gericht op het stimuleren van vooruitgang door innovatie en
                  samenwerking
                </h3>
              </div>
            </div>

            {/* Card 4 */}
            <div className="flex items-center bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex-shrink-0">
                <img
                  src={icon4}
                  alt="Verantwoordelijkheid"
                  className="w-24 h-28 mr-4"
                />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-[#263238]">
                  Succesvolle projecten in diverse sectoren
                </h1>
                <h3 className="text-gray-700 mt-2">
                  Onze expertise ondersteunt bedrijven in verschillende markten
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overons;
