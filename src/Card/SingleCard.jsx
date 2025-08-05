import img2 from "../assets/Link → blog-6.jpg (1).png";
import img1 from "../assets/Link → blog-6.jpg.png";

import img4 from "../assets/Article (5).png";

import { useNavigate } from "react-router-dom";
import img9 from "../assets/card9.png";
import img7 from "../assets/cardImg.png";
import img8 from "../assets/cardImg1.png";

const SingleCard = () => {
  const navigate = useNavigate();
  const cardData = [
    {
      image: img1,
      tags: ["Website Design", "Appdevelopment"],
      title: "Van Idee naar Realiteit: Klantgerichte App-ontwikkeling",
      description:
        "Een succesvolle app begint met een slim concept, maar de echte uitdaging ligt in de uitvoering...",
      link: "/shiftguide",
    },
    {
      image: img2,
      tags: ["Branding", "Website Design", "App Dev", "Marketing"],
      title: "Branding in de Digitale Wereld: Bouwen aan een Sterk Merk",
      description:
        "In een tijdperk vol digitale prikkels is een krachtige merkidentiteit geen luxe, maar een noodzaak...",
      link: "/finguide",
    },
    {
      image: img7,
      tags: ["Branding", "Website Design", "App Dev", "Marketing"],
      title: "De Toekomst van Mobiele Apps: Trends die je Niet Mag Missen",
      description:
        "Technologie verandert razendsnel. Welke ontwikkelingen zijn cruciaal om als bedrijf relevant te blijven...",
      link: "/fluentlee",
    },
    {
      image: img4,
      tags: ["marketing"],
      title:
        "Meer dan Alleen een App: Hoe je jouw Product naar de Markt Brengt",
      description:
        "Een app bouwen is één ding, maar een succesvolle lancering vergt een doordachte marketingstrategie...",
      link: "/marketingstrategie",
    },
    {
      image: img9,
      tags: ["Webshop design", "marketing"],
      title: "SEO: De Sleutel tot Online Succes",
      description:
        "Zichtbaarheid in zoekmachines bepaalt of jouw bedrijf gevonden wordt of verdwijnt in de massa...",
      link: "/henna-artist",
    },
    {
      image: img8,
      tags: ["marketing", "Website building", "Branding"],
      title: "Van Visie naar Realiteit: De Kunst van een Sterk Merk",
      description:
        "Een merk is meer dan een logo; het is een visie die tot leven komt met de juiste strategie...",
      link: "/Van-Offline-naar-Online",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {cardData.map((card, index) => (
          <div
            key={index}
            onClick={() => navigate(card.link)}
            className="bg-[#F5F5F5] shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
          >
            <div className="md:min-h-[456px]">
              <img
                src={card.image}
                alt={`Card ${index + 1}`}
                className="w-full h-56 object-cover"
              />
              <div className="p-1 py-2">
                <div className="flex flex-wrap gap-1 justify-center sm:justify-start mb-4">
                  {card.tags.map((tag, tagIndex) => (
                    <button
                      key={tagIndex}
                      className="bg-white text-[#468AFF] text-sm px-2 py-1 rounded-full transition duration-300"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
                <h2 className="text-xl font-bold font-plus-jakarta text-[18px] text-[#263238] mt-4 mb-2">
                  {card.title}
                </h2>
                <p className="text-[#7E7E7E] font-plus-jakarta text-[14px] mb-6 line-clamp-3">
                  {card.description}
                </p>
              </div>
            </div>
            <div>
              <button className="ml-3 mb-4 relative hover:bg-[#468AFFE6] bg-[#468AFF] text-white px-8 py-3 rounded-md shadow-md">
                Lees meer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleCard;
