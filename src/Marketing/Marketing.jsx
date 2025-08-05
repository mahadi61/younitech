import { useEffect, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { IoCheckmarkCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import ghislan from "../assets/Ghislan.png";
import Linda from "../assets/Linda.png";
import i1 from "../assets/Vector11.png";
import i2 from "../assets/Vector12.png";
import i3 from "../assets/Vector13.png";
import i4 from "../assets/Vector14.png";
import das from "../assets/das.png";
import meet from "../assets/meet.jpg";
import img from "../shassets/consult.png";

const Marketing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };
  return (
    <>
      <div className="bg-[#F5F5F5] w-full flex flex-col items-center py-16">
        <h1 className="text-xl font-bold text-gray-800">
          Marketingontwikkeling
        </h1>
        <h1 className="flex items-center gap-2 text-gray-600 text-sm md:text-base">
          Home
          <img className="w-5 h-[2px]" src={das} alt="separator" />
          Diensten
        </h1>
      </div>
      <div className=" mx-auto md:px-6 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center lg:px-12 mt-10 lg:m-20 ">
          <div className="mr-5">
            <div className="">
              <p className=" rounded-3xl bg-[rgba(180,121,217,0.15)] text-[rgba(180,121,217,1)] font-bold p-2  text-center  mb-3 font-plus-jakarta w-2/5  lg:w-1/4">
                Marketing
              </p>
            </div>
            <div className="mb-6">
              <h1 className=" text-3xl lg:text-[40px] font-plus-jakarta font-bold text-left ">
                Marketing
              </h1>
              <h1 className="text-3xl lg:text-4xl font-bold text-left mb-3 relative ">
                Ontwikkeling
              </h1>
              {/* <img className="-mt-6 w-40 lg:w-64" src="/article/Heading 2.png" alt=""></img>*/}
            </div>

            <p className="text-left text-base lg:text-lg text-slate-500 mb-5">
              Creëer een krachtige marketingstrategie voor uw bedrijf Bij
              Younitech helpen we bedrijven om op te vallen in een steeds
              veranderend digitaal landschap. Wij combineren innovatieve
              technologie met data-gedreven strategieën om uw merk zichtbaarder
              te maken en uw doelgroep te bereiken.
            </p>

            <div className="flex gap-5 items-center ">
              <IoCheckmarkCircle className="text-teal-500 text-3xl" />
              <h1 className="text-[rgba(38,50,56,1) text-[22px] font-medium">
                Data-gedreven strategieën
              </h1>
            </div>

            <div className="flex gap-5 items-center">
              <IoCheckmarkCircle className="text-teal-500 text-3xl" />
              <h1 className="text-[rgba(38,50,56,1) text-[22px] font-medium">
                Multichannel campagnes
              </h1>
            </div>

            <div className="flex gap-5 items-center">
              <IoCheckmarkCircle className="text-teal-500 text-3xl" />
              <h1 className="text-[rgba(38,50,56,1) text-[22px] font-medium">
                Contentcreatie
              </h1>
            </div>

            <div className="flex gap-5 items-center">
              <IoCheckmarkCircle className="text-teal-500 text-3xl" />
              <h1 className="text-[rgba(38,50,56,1) text-[22px] font-medium">
                Resultaatgericht
              </h1>
            </div>

            <div className="mt-5 mr-6">
              <button
                onClick={() => navigate("/marketingprijsplannen")}
                className="btn btn-sm hover:bg-[#468AFFE6]  text-sm p-5 bg-[rgba(70,138,255,1)] rounded-xl text-slate-100 w-40"
              >
                Bereik jouw klant
              </button>
            </div>
          </div>

          <div className="mt-10 mb-5 mr-10">
            <img className="w-full" src={meet} alt="" />
          </div>
        </div>

        {/** first part end here */}

        {/** second part start from here */}

        <div className="flex items-center justify-center ">
          <p className=" rounded-3xl mb-5 font-medium p-2 text-base text-center bg-[rgba(180,121,217,0.15)] text-[rgba(180,121,217,1)]  font-sans w-5/6  lg:w-1/5">
            Snelle en Kwalitatieve Service
          </p>
        </div>
        <h1 className=" text-[25px] lg:text-[40px] text-center font-bold font-plus-jakarta">
          Een marketingaanpak die eenvoudig werkt
        </h1>
        <p className=" text-sm lg:text-base text-slate-400 text-center px-2 mt-2">
          We bieden complete online marketing, van Google tot sociale media, met
          een doelgerichte en{" "}
        </p>
        <p className=" text-sm lg:text-base text-slate-400 text-center px-2 mt-2">
          kostenefficiënte aanpak. Geen standaardoplossingen – we begrijpen jouw
          merk en gebruiken unieke{" "}
        </p>
        <p className=" text-sm lg:text-base text-slate-400 text-center px-2 mt-2">
          strategieën, zoals straatsteen marketing, om jouw bedrijf creatief en
          impactvol te laten opvallen!{" "}
        </p>

        {/** second part end here */}

        {/** 3rd  part start from here <img className="" src="/linkImages/consult.png" alt="" /> */}

        <div className="flex flex-col lg:flex-row gap-8 mt-5 lg:px-36 py-8">
          {/* Left Section with Image */}
          <div className="w-full  lg:w-1/2">
            <img
              src={img}
              alt="Branding"
              className="w-full rounded-lg shadow-md"
            />
          </div>

          {/* Right Section with Buttons */}
          <div className="w-full lg:w-1/2 space-y-6">
            {/* Button 1 */}
            <div>
              <button
                onClick={() => toggleSection("logo")}
                className="w-full drop-shadow-[0_0_10px_rgba(0,0,0,0.4)] bg-[#FFFFFF] text-[#263238]   font-plus-jakarta py-2 px-4 text-left rounded-md flex justify-between items-center"
              >
                Strategische Planning
                <GoChevronDown
                  className={`transform transition-transform ${
                    activeSection === "logo" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeSection === "logo" && (
                <p className="mt-2 text-gray-600">
                  Onze eerste stap is het creëren van een doordachte strategie
                  die gericht is op jouw specifieke doelen en doelgroepen. We
                  starten met een grondige analyse van je bedrijf, merk en de
                  markt waarin je opereert. Op basis hiervan ontwikkelen we een
                  strategisch plan dat gericht is op het maximaliseren van je
                  marketinginspanningen. Geen onnodige kosten, maar een
                  doelgerichte benadering waarbij we de juiste marketingkanalen
                  kiezen, van Google en YouTube tot sociale media en offline
                  media. Alles is afgestemd op wat jouw bedrijf nodig heef
                </p>
              )}
            </div>

            {/* Button 2 */}
            <div>
              <button
                onClick={() => toggleSection("visualGuidelines")}
                className="w-full drop-shadow-[0_0_10px_rgba(0,0,0,0.4)] bg-[#FFFFFF] text-[#263238]  font-plus-jakarta py-2 px-4 text-left rounded-md flex justify-between items-center"
              >
                Creatieve Uitvoering
                <GoChevronDown
                  className={`transform transition-transform ${
                    activeSection === "visualGuidelines" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeSection === "visualGuidelines" && (
                <p className="mt-2 text-gray-600">
                  Na de strategische planning zetten we de ideeën om in actie.
                  Onze creatieve uitvoering is simpel maar krachtig, gericht op
                  het effectief bereiken van je doelgroep. We zorgen ervoor dat
                  je merk zich onderscheidt met unieke campagnes die jouw
                  klanten aanspreken. Of het nu gaat om online advertenties of
                  offline marketing zoals onze straatsteen marketing, we creëren
                  campagnes die niet alleen opvallen, maar ook impact maken. Jij
                  bent geen nummer voor ons, we zorgen ervoor dat de boodschap
                  aansluit bij jouw merkidentiteit en klantbehoeften.
                </p>
              )}
            </div>

            {/* Button 3 */}
            <div>
              <button
                onClick={() => toggleSection("printMedia")}
                className="w-full drop-shadow-[0_0_10px_rgba(0,0,0,0.4)] bg-[#FFFFFF] text-[#263238]  font-plus-jakarta py-2 px-4 text-left rounded-md flex justify-between items-center"
              >
                Analyse en Optimalisatie
                <GoChevronDown
                  className={`transform transition-transform ${
                    activeSection === "printMedia" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeSection === "printMedia" && (
                <p className="mt-2 text-gray-600">
                  Onze aanpak stopt niet bij de lancering van de campagnes. We
                  monitoren en analyseren de resultaten voortdurend om te zien
                  wat werkt en waar we kunnen verbeteren. Door gebruik te maken
                  van verschillende marketingtools optimaliseren we de campagnes
                  voor de beste prestaties. We passen onze strategieën aan op
                  basis van data en feedback, zodat jouw marketinginspanningen
                  altijd blijven groeien en verbeteren. Zo zorgen we ervoor dat
                  je de beste resultaten haalt zonder verspilling van middelen
                </p>
              )}
            </div>
          </div>
        </div>

        {/** 3rd  part end  here */}

        {/** 4th   part start from here */}

        <div className="flex items-center justify-center relative bg-custom-bg lg:bg-cover bg-center bg-slate-50 w-full mt-36 h-60  lg:w-auto  ">
          <div className="text-center flex flex-col items-center justify-center max-w-96  absolute mx-auto md:mt-16 ">
            <h1 className="font-bold text-xl lg:text-2xl ">
              Word onderdeel van onze groeiende gemeenschap van tevreden klanten
            </h1>

            <p className="mb-7 font-plus-jakarta font-medium text-[20px] text-slate-600">
              U heeft de ideeën, wij hebben de tools
            </p>
            <button
              onClick={() => navigate("/marketingprijsplannen")}
              className=" btn-info relative text-white btn bg-[#468AFF] px-6 py-2 sm:px-8 sm:py-3 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:bg-[#3570D4] hover:scale-105 active:scale-95 focus:outline-none text-sm sm:text-base "
            >
              Aan de Slag
            </button>
          </div>
        </div>

        {/** 4th   part end  here */}

        {/** 5th   part start  here */}

        <div className="lg:px-36 py-3 bg-gray-50">
          <div className="bg-[#F8F8F8] md:my-16  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="p-6  flex flex-col justify-center items-center ">
              <div className="lg:px-7 flex justify-center items-center">
                {" "}
                <img className="" src={i1} alt="" />
              </div>
              <h1 className="mt-2 text-xl font-bold "> Oprechtheid</h1>
              <p className="mt-2 text-sm ">
                Eerlijke en transparante <br />
                bedrijfsvoering staat centraal in alles <br />
                wat we doen
              </p>
            </div>

            <div className="p-6 flex flex-col justify-center items-center">
              <div className="lg:px-8 flex justify-center items-center">
                <img src={i2} alt="" />
              </div>
              <h1 className="mt-2 text-xl font-bold ">
                Maatschappelijke betrokkenheid
              </h1>
              <p className="mt-2 text-sm">
                We bieden kansen aan werknemers om hun <br />
                potentieel te benutten <br />
              </p>
            </div>

            <div className="p-6  flex flex-col justify-center items-center">
              <div className="lg:px-8 flex justify-center items-center">
                <img src={i3} alt="" />
              </div>
              <h1 className="mt-2 text-xl font-bold ">Innovativiteit</h1>
              <p className="mt-2 text-sm">
                We denken contrarian en kiezen voor <br />
                unieke oplossingen in een <br />
                concurrerende markt.
              </p>
            </div>
            <div className="p-6 flex flex-col justify-center items-center">
              <div className="lg:px-8 flex justify-center items-center">
                {" "}
                <img src={i4} alt="" />
              </div>
              <h1 className="mt-2 text-xl font-bold "> Authenticiteit</h1>
              <p className="mt-2 text-sm">
                We blijven trouw aan onze principes en laten ons niet leiden
                door trends of competitie
              </p>
            </div>
          </div>
        </div>

        {/** 5th   part end  here */}

        {/** 6th   part start here <div className=""><img src="/avatar/Main (1).png" alt="" /></div> */}

        {/** 6th   part start here <div className=""><img src="/avatar/Main (1).png" alt="" /></div> */}

        <div className=" mt-10 mb-10">
          <div className="flex items-center justify-center ">
            <p className=" rounded-3xl bg-[rgba(180,121,217,0.15)] text-[rgba(180,121,217,1)] font-medium p-2 text-base text-center  mb-3 font-sans  w-3/6  lg:w-1/6">
              Getuigenissen
            </p>
          </div>
          <h1 className="text-3xl text-center font-medium">
            Wat klanten over ons zeggen
          </h1>

          <div className="w-full lg:mt-10 lg:ml-56 lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-4">
                <img
                  src={ghislan}
                  alt="Sophie de Vries"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Ghislan Ammouz
                  </h3>
                  <p className="text-sm text-gray-500">
                    Eigenaresse Wedding & Eventplanning
                  </p>
                </div>
              </div>

              <h2 className="text-lg font-semibold text-gray-800">
                Gerichte Advertenties voor Groei
              </h2>
              <p className="text-gray-600 leading-relaxed">
                “Als klein bedrijf vertrouwde ik vooral op mond-tot-mondreclame,
                waardoor het lastig was om nieuwe klanten aan te trekken.
                Younitech zette gerichte advertenties in nichegroepen op, wat
                zorgde voor een enorme stijging in boekingen met een klein
                budget. De campagne was zo succesvol dat ik hem zelfs tijdelijk
                moest stopzetten!”
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-4">
                <img
                  src={Linda}
                  alt="Mark Janssen"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">Linda Vernooi</h3>
                  <p className="text-sm text-gray-500">
                    Eigenaresse Kledingzaak Venova
                  </p>
                </div>
              </div>

              <h2 className="text-lg font-semibold text-gray-800">
                Slimme Data voor een Succesvolle Webshop
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Na een dure samenwerking met een groot bedrijf zochten we een
                efficiëntere manier om onze webshop te laten groeien. Younitech
                hielp ons data te begrijpen en strategisch te gebruiken. Dankzij
                hun aanpak spelen we nu sneller in op trends en blijven we
                relevant in een concurrerende markt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Marketing;
