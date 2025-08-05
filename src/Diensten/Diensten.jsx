import icon1 from "../assets/Link (1).png";
import icon2 from "../assets/Link (2).png";
import icon3 from "../assets/Link (3).png";
import Brand from "../Brand/Brand";
// import icon4 from "../assets/Vector (4).png";
//import icon5 from "../assets/Icon (6).png";
import { useEffect } from "react";
import { GoArrowRight } from "react-icons/go";
import im1 from "../assets/Achikie.png";
import das from "../assets/das.png";
import iconPark from "../assets/icon-park.png";
import im2 from "../assets/im2.png";
import link1 from "../assets/Link (1).png";
import link12 from "../assets/Link (12).png";
import link2 from "../assets/Link (2).png";
import link3 from "../assets/Link (3).png";
import link4 from "../assets/Link (5).png";
import img from "../assets/rafiki5.png";
import Vragen from "../Vragen/Vragen";
// import img2 from "../assets/avater-testi-2.png.png";
// import img3 from "../assets/avater-testi-3.png.png";

import { useNavigate } from "react-router-dom";

const Diensten = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="bg-[#F5F5F5] w-full flex flex-col items-center py-16">
        <h1 className="text-xl font-bold text-gray-800">Brandingdiensten</h1>
        <h1 className="flex items-center gap-2 text-gray-600 text-sm md:text-base">
          Home
          <img className="w-5 h-[2px]" src={das} alt="separator" />
          Diensten
        </h1>
      </div>
      <div>
        {/* first section */}
        <div className="p-6 flex items-center justify-center flex-col text-center space-y-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Snel en Kwalitatief
          </h1>
          <p className="text-[#7E7E7E] leading-relaxed font-plus-jakarta max-w-2xl px-4 text-center">
            Bij Younitech geloven we in de kracht van een sterke merkidentiteit.
            Onze brandingdiensten zijn ontworpen om uw bedrijf te laten opvallen
            in een competitieve markt. Wij bieden:
          </p>
        </div>

        {/* Card Section  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 md:px-12 lg:px-36">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-center p-6 space-y-4">
            <div className="w-16 h-16 flex justify-center items-center bg-blue-100 rounded-full">
              <img
                src={link12}
                alt="Strategische Merkontwikkeling"
                className="w-8 h-8"
              />
            </div>
            <h2 className="text-lg font-semibold text-gray-800">
              Doelgerichte <br /> branding
            </h2>
            <p className="text-sm text-gray-600">
              Creëer een merk dat de kern van uw bedrijf vertegenwoordigt.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center p-6 space-y-4">
            <div className="w-16 h-16 flex justify-center items-center bg-blue-100 rounded-full">
              <img src={icon1} alt="Grafisch Ontwerp" className="w-8 h-8" />
            </div>
            <h2 className="text-lg font-semibold text-gray-800">
              Grafisch <br /> Ontwerp
            </h2>
            <p className="text-sm text-gray-600">
              Professioneel en creatief design dat past bij uw visie.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center p-6 space-y-4">
            <div className="w-16 h-16 flex justify-center items-center bg-blue-100 rounded-full">
              <img
                src={icon2}
                alt="Ontwikkeling van Visuele Stijl"
                className="w-8 h-8"
              />
            </div>
            <h2 className="text-lg font-semibold text-gray-800">
              Ontwikkeling <br /> van Visuele Stijl
            </h2>
            <p className="text-sm text-gray-600">
              Logo’s, kleuren en typografie die uw merk versterken.
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-center text-center p-6 space-y-4">
            <div className="w-16 h-16 flex justify-center items-center bg-blue-100 rounded-full">
              <img
                src={icon3}
                alt="Campagnes en Promotie"
                className="w-8 h-8"
              />
            </div>
            <h2 className="text-lg font-semibold text-gray-800">
              Campagnes <br /> en Promotie
            </h2>
            <p className="text-sm text-gray-600">
              Consistente en impactvolle communicatie over alle kanalen.
            </p>
          </div>
        </div>

        <div className="bg-[#F8F8F8] my-8">
          {/* Third Section */}
          <div className="p-6 text-center space-y-4">
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">
              Personaliseer uw merk voor online succes
            </h1>
            <p className="text-[#7E7E7E] leading-relaxed font-sans px-4 lg:px-72 text-center">
              Wij bieden flexibele en creatieve oplossingen die aansluiten op uw
              specifieke behoeften, waaronder:
            </p>
          </div>

          {/* Brand Section */}

          <div className="my-12">
            <Brand></Brand>
          </div>

          {/* Branding Oplossingen  */}
          <div className="flex flex-col lg:flex-row gap-8 p-6 md:p x-36">
            {/* Left Section */}
            <div className="lg:w-1/2 flex flex-col items-center justify-center space-y-6">
              <h1 className="text-3xl font-bold text-gray-800">
                Onze brandingoplossingen
              </h1>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => navigate("/brandingprijsplannen")}
                  className="px-4 py-2 flex justify-center items-center gap-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600"
                >
                  Boek een offerte{" "}
                  <span className="text-xl">
                    <GoArrowRight />
                  </span>
                </button>
              </div>
              <div className="mt-4">
                <img
                  src={img}
                  alt="Branding Solutions"
                  className="w-full rounded-lg shadow-md"
                />
              </div>
            </div>

            {/* Right Section */}
            <div className="lg:w-4/5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
              {/* Card 1 */}
              <div className="p-4  bg-white shadow-md rounded-lg hover:shadow-lg">
                <div className="mb-4">
                  <img
                    src={iconPark}
                    alt="Strategie & Conceptont"
                    className="w-14 h-14 object-cover rounded-md"
                  />
                </div>
                <h1 className="text-lg font-semibold text-gray-800">
                  Strategie en conceptontwerp
                </h1>
                <h2 className="text-gray-600 mt-2">
                  Zet uw ideeën om in een doordachte strategie.
                </h2>
              </div>

              {/* Card 2 */}
              <div className="p-4 bg-white shadow-md rounded-lg hover:shadow-lg">
                <div className="mb-4">
                  <img
                    src={link1}
                    alt="Corporate Identity"
                    className="w-14 h-14 object-cover rounded-md"
                  />
                </div>
                <h1 className="text-lg font-semibold text-gray-800">
                  Huisstijl
                </h1>
                <h2 className="text-gray-600 mt-2">
                  Bouw een merk dat blijft hangen bij uw doelgroep.
                </h2>
              </div>

              {/* Card 3 */}
              <div className="p-4 bg-white shadow-md rounded-lg hover:shadow-lg">
                <div className="mb-4">
                  <img
                    src={link2}
                    alt="Digitale Branding"
                    className="w-14 h-14 object-cover rounded-md"
                  />
                </div>
                <h1 className="text-lg font-semibold text-gray-800">
                  Digitale Branding
                </h1>
                <h2 className="text-gray-600 mt-2">
                  Versterk uw online aanwezigheid met visuals die opvallen.
                </h2>
              </div>

              {/* Card 4 */}
              <div className="p-4 bg-white shadow-md rounded-lg hover:shadow-lg">
                <div className="mb-4">
                  <img
                    src={link3}
                    alt="Campagnemateriaal"
                    className="w-14 h-14 object-cover rounded-md"
                  />
                </div>
                <h1 className="text-lg font-semibold text-gray-800">
                  Campagnemateriaal
                </h1>
                <h2 className="text-gray-600 mt-2">
                  Ontwerp en productie van opvallende marketingmaterialen.
                </h2>
              </div>

              {/* Card 5 */}
              <div className="p-4 bg-white shadow-md rounded-lg hover:shadow-lg">
                <div className="mb-4">
                  <img
                    src={link4}
                    alt="Social Media Branding"
                    className="w-14 h-14 object-cover rounded-md"
                  />
                </div>
                <h1 className="text-lg font-semibold text-gray-800">
                  Social Media Branding
                </h1>
                <h2 className="text-gray-600 mt-2">
                  Zorg voor een consistente uitstraling op alle sociale
                  platforms.
                </h2>
              </div>
            </div>
          </div>

          {/* Vragen Section */}
          <div className="py-16">
            <Vragen />
          </div>
        </div>

        {/* Final Section */}

        <div className="flex flex-col lg:flex-row gap-12 px-6 md:px-20 lg:px-44 py-10">
          {/* Left Section */}
          <div className="w-full lg:w-1/3 space-y-6 text-center lg:text-left">
            <button className="bg-[rgba(180,121,217,0.15)] font-bold text-[18px] text-[rgba(180,121,217,1)] py-2 px-6 rounded-full">
              Getuigenissen
            </button>
            <h2 className="text-[40px] text-[rgba(38,50,56,1)] font-bold font-plus-jakarta">
              Wat klanten zeggen over ons
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Wij ondersteunen een breed scala aan bedrijven. Geef je merk de
              boost die het verdient!
            </p>
            <button
              onClick={() => navigate("/brandingprijsplannen")}
              className="bg-[#468AFF] text-white py-2 px-6 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Boek nu je offerte!
            </button>
          </div>

          {/* Right Section (Cards) */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-white shadow-md rounded-lg w-72 p-6 space-y-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Luxe Branding voor een Exclusief Parfummerk
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Ons parfummerk had kwaliteit en vakmanschap, maar miste de luxe
                uitstraling die nodig is om zich in het hogere segment te
                positioneren. Younitech creëerde een verfijnde merkidentiteit,
                met een elegant logo, premium verpakkingsdesign en een strategie
                die exclusiviteit uitstraalt. Dankzij hun expertise wordt ons
                merk nu herkend als high-end, en trekken we precies de juiste
                klanten aan.
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={im2}
                  alt="Sophie de Vries"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Imran Khalfoui
                  </h3>
                  <p className="text-sm text-gray-500">
                    Eigenaar parfumbedrijf
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-lg w-72 p-6 space-y-4">
              <h2 className="text-lg font-semibold text-gray-800">
                Gerichte Branding voor een Sterk Uitzendbureau
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Ons uitzendbureau had een solide klantenbestand, maar we misten
                een duidelijke identiteit die onze specialisatie benadrukte.
                Younitech ontwikkelde een brandingstrategie die onze unieke
                werkwijze en expertise in de markt positioneerde. Met een
                vernieuwde huisstijl en gerichte communicatie trokken we precies
                de juiste klanten en kandidaten aan. Onze branding weerspiegelt
                nu wie we écht zijn.
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={im1}
                  alt="Mark Janssen"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">Ackhie</h3>
                  <p className="text-sm text-gray-500">
                    Directeur Uitzendbureau
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Diensten;
