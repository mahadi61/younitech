import { useState } from "react";
// import { GoChevronDown } from "react-icons/go";
import { RiArrowDropDownLine } from "react-icons/ri";

const Vragen = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleContent = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questions = [
    {
      question: "Hoe werkt maatwerk voor digitale oplossingen?",
      answer:
        "Onze maatwerkdiensten beginnen met een gesprek waarin we uw doelen en behoeften bespreken. Vervolgens creëren we een strategie en ontwerp dat volledig is afgestemd op uw wensen. Ons team ontwikkelt, implementeert en optimaliseert de oplossing om te zorgen dat deze naadloos aansluit bij uw bedrijfsdoelstellingen.",
    },
    {
      question:
        "Welke diensten kunnen worden aangepast aan mijn specifieke behoeften?",
      answer: (
        <>
          <h2>Bijna al onze diensten zijn aanpasbaar, waaronder:</h2>
          <ul>
            <li>• Websites en webapps</li>
            <li>• Mobiele applicaties</li>
            <li>• Marketingstrategieën</li>
            <li>• Branding en visueel ontwerp</li>
            <li>• Hosting en onderhoud</li>
          </ul>
        </>
      ),
    },
    {
      question: "Hoe zorgen jullie voor de kwaliteit van jullie diensten?",
      answer:
        "Wij volgen een gestructureerde aanpak waarin elk project verschillende kwaliteitscontroles doorloopt. Van het ontwerp tot de implementatie, elk aspect wordt zorgvuldig getest en afgestemd om aan de hoogste normen te voldoen.",
    },
    {
      question: "Hoe kan ik mijn project volgen?",
      answer:
        "Tijdens het project houden we u op de hoogte via regelmatige updates. U krijgt toegang tot een dedicated projectmanager die uw vragen beantwoordt en u informeert over de voortgang.",
    },
    {
      question: "Hoe kan ik met jullie contact opnemen?",
      answer: (
        <>
          <h2>
            Heeft u een specifieke vraag of wilt u een vrijblijvend gesprek? U
            kunt ons bereiken via:
          </h2>
          <ul>
            <li>• E-mail: info@younitech.nl</li>
            <li>• Telefoon: +31 (0)20 123 4567</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row items-center gap-8 p-6">
      {/* Left Section */}
      <div className="lg:w-1/2  flex flex-col justify-center items-center space-y-4">
        <div className="w-full flex justify-center">
          <button className="bg-[rgba(180,121,217,0.15)] text-[rgba(180,121,217,1)] py-2 px-4 rounded-full font-bold text-[18px] ">
            Ondersteuning
          </button>
        </div>
        <h2 className="text-[40px]  text-[rgba(38,50,56,1)] font-bold font-plus-jakarta">
          Veelgestelde Vragen
        </h2>
        <h3 className="text-lg text-gray-700">
          Heeft u vragen over onze brandingdiensten?
        </h3>
        <p className="text-gray-600 px-12 text-center lg:px-0">
          Wij staan klaar om uw vragen te beantwoorden en u te begeleiden in het
          brandingproces.
        </p>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 w-full space-y-4">
        {/* ///////////// */}

        {questions.map((item, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleContent(index)}
              className={`flex justify-between items-center w-full text-left px-6 py-2 rounded-md shadow-md  
              ${
                activeIndex === index
                  ? "text-[#FFFFFF] bg-[#468AFF]"
                  : "text-black"
              }`}
            >
              {item.question}
              <RiArrowDropDownLine
                className={`w-6 h-6 transition-transform duration-300 ${
                  activeIndex === index
                    ? "rotate-180 text-[#FFFFFF]"
                    : "text-black"
                }`}
              />
            </button>
            {activeIndex === index && (
              <div className="p-4 rounded mt-2">
                <p className="text-sm">{item.answer}</p>
              </div>
            )}
          </div>
        ))}

        {/* ///////////// */}
      </div>
    </div>
    // </div>
  );
};

export default Vragen;
