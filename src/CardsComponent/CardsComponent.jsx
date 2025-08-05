import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../InputField/InputField";

const CardsComponent = () => {
  const [cards, setCards] = useState([]);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [showInputField, setShowInputField] = useState(false);

  const navigate = useNavigate();

  // ✅ FIX: Correct public path
  useEffect(() => {
    fetch("/FakeData/data.json")
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((err) => console.error("Failed to load data:", err));
  }, []);

  const handleCardClick = (id) => {
    setSelectedCardId(id);
    setShowInputField(true);
    setInputValue("");
    navigate(`/websitebuilder/payment-form/${id}`);
  };

  const handleNavigate = (id) => {
    const selectedCard = cards.find((card) => card.id === selectedCardId);

    if (selectedCard) {
      navigate(`/payment/${selectedCardId}`, {
        state: {
          ...selectedCard,
          inputMessage: inputValue,
        },
      });
    }
  };

  return (
    <div className="p-8">
      {showInputField ? (
        <div>
          <InputField id={selectedCardId} />
        </div>
      ) : (
        <>
          <h1 className="text-3xl font-semibold font-plus-jakarta text-gray-800 mb-6 text-left">
            Kies een thema
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card) => (
              <div
                key={card.id}
                onClick={() => handleCardClick(card.id)}
                className={`flex flex-col border rounded-lg shadow-md overflow-hidden cursor-pointer ${
                  selectedCardId === card.id ? "ring-2 ring-blue-400" : ""
                }`}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-48 object-cover"
                />

                <div className="flex flex-col flex-grow p-4">
                  <h2 className="text-lg font-semibold">{card.title}</h2>

                  <ul className="text-sm list-disc pl-5 mt-2 text-gray-500">
                    {card.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>

                  <button
                    // onClick={handleNavigate(card.id)}
                    className="bg-[rgba(126,126,126,1)] w-full mt-auto text-white px-4 py-2 rounded-xl hover:bg-blue-600"
                  >
                    {card.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default CardsComponent;
