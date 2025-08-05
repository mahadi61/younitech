import { useEffect, useState } from "react";
import blueIcon from "../assets/blue.png";
import das from "../assets/das.png";
import img from "../assets/rafiki3.png";
import icon from "../assets/white.png";
// Add a fully blue version of the icon

const Startpagina = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [selectedCard, setSelectedCard] = useState(null);

  // Data for cards
  const cards = [
    {
      id: 1,
      title: "Basispakket",
      price: "€",
      details: [
        "Opzetten Website en Google SEO.",
        "Nulmeting (Eigen -website).",
        "Wekelijkse Consultancy (offline Verkoop en marketing).",
      ],
    },
    {
      id: 2,
      title: "Standaard SEO -pakket",
      price: "€€",
      details: [
        "Grondige Websiteanalyse.",
        "Marktonderzoek naar concurrenten.",
        "Verbeterde SEO-proof website.",
        "Inclusief alles uit het Basispakket.",
      ],
    },
    {
      id: 3,
      title: "Regelmatig online pakket",
      price: "€€€",
      details: [
        "SEO en Sociale Media Combinatie.",
        "Wekelijkse Post.",
        "Maandelijkse e-mailcampagne.",
        "Opname van Operationele Vlogs.",
        "Bevat alles Uit het reguliere pakket.",
      ],
    },
    {
      id: 4,
      title: "Premium pakket",
      price: "€€€€",
      details: [
        "Premium SEO en -website.",
        "Creëren van Reguliere -content (plus Beheer).",
        "Professionele, authentieke content.",
        "Inclusief Alles Uit Het Regulier Online Pakket.",
      ],
    },
  ];

  const handleSendEmail = () => {
    if (!selectedCard) {
      alert("Selecteer eerst een pakket.");
      return;
    }

    const card = cards.find((card) => card.id === selectedCard);
    const recipient = "info@younitech.nl";
    const subject = encodeURIComponent(`${card.title}`);

    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}`,
      "_blank"
    );
  };

  return (
    <>
      <div className="bg-[#F5F5F5] w-full flex flex-col items-center py-16">
        <h1 className="text-xl font-bold text-gray-800">
          Marketing Prijsplannen
        </h1>
        <h1 className="flex items-center gap-2 text-gray-600 text-sm md:text-base">
          Home
          <img className="w-5 h-[2px]" src={das} alt="separator" />
          Prijzen
        </h1>
      </div>
      <div className="py-8 flex flex-col lg:flex-row gap-8 p-6 md:px- 36">
        {/* Left Section */}
        <div className="lg:w-1/2 flex flex-col items-start gap-4">
          <img src={img} alt="Illustration" className="w-full rounded-lg" />
          <h2 className="text-3xl font-bold text-gray-800">
            Kies een plan en begin meteen
          </h2>
          <p className="text-[#7E7E7E] leading-relaxed font-plus-jakarta">
            <span className="text-xl font-bold text-[#253238]">
              Kies een plan en start direct:
            </span>{" "}
            Selecteer een van onze plannen, betaal een aanbetaling en ontvang
            direct een offerte in je mailbox. Twijfel je nog en speelt de prijs
            een grote rol? Vraag dan vrijblijvend onze prijslijst aan.
          </p>
          <p className="text-[#7E7E7E]  leading-relaxed font-plus-jakarta">
            De kosten zijn afhankelijk van het doel dat je wilt bereiken. Een
            lokale bakkerij die meer verkopen in het dorp wil realiseren,
            verschilt bijvoorbeeld van een muziekconcert dat heel West-Europa
            wil bereiken.
          </p>
          <p className="text-[#7E7E7E]  leading-relaxed font-plus-jakarta">
            De opgegeven prijzen zijn onze servicekosten. Kies je voor een
            agressieve marketingcampagne? Dan worden extra mediakosten direct
            doorgerekend, uiteraard altijd in goed overleg.
          </p>
          {/* <p className="text-[#FF4B32] font-semibold text-xl">
            ⚠ Let op: Alle vermelde prijzen zijn exclusief BTW.
          </p> */}
          <p className="text-[#7E7E7E] leading-relaxed font-plus-jakarta">
            <span className="text-xl font-bold text-[#253238]">
              Korting voor directe aanbetalingen:
            </span>{" "}
            Voor klanten die direct een aanbetaling doen, bieden wij een korting
            van 20% op onze diensten. Zo profiteer je direct van een voordeliger
            tarief!
          </p>
        </div>

        {/* Right Section (Cards) */}
        <div className="lg:w-1/2 grid gap-6">
          {cards.map((card) => (
            <div
              key={card.id}
              className={`p-6 border bg-white shadow-lg rounded-xl border-gray-200 cursor-pointer ${
                selectedCard === card.id ? "border-[#468AFF]" : ""
              }`}
              onClick={() => setSelectedCard(card.id)}
            >
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <img
                    src={selectedCard === card.id ? blueIcon : icon}
                    alt="Icon"
                    className="w-4 h-4"
                  />
                  <h2 className="text-lg font-semibold text-gray-800">
                    {card.title}
                  </h2>
                </div>
                <h2 className="text-lg font-bold text-gray-800">
                  {card.price}
                  <span className="text-[#7E7E7E] text-sm">/ maand</span>
                </h2>
              </div>
              <ul className="list-disc pl-5 text-gray-600">
                {card.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}

          <button
            onClick={handleSendEmail}
            className="btn hover:bg-[#468AFFE6] bg-[#468AFF]  rounded-lg text-white text-lg md:text-md lg:text-xl"
          >
            Boek offerte
          </button>
        </div>
      </div>
    </>
  );
};

export default Startpagina;
