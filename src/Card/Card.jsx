import SingleCard from "./SingleCard";

const Card = () => {
  return (
    <div className="bg-gray-50 py-12 px-6 lg:px-36">
      {/* Header Section */}
      <div className="text-center  mb-10">
        <h1 className="text-3xl lg:text-[35px] font-plus-jakarta font-bold text-[#263238] mb-4">
          Inspiratie en Inzichten
        </h1>
        <h3 className="text-lg lg:text-[16px] md:px-52 font-plus-jakarta   text-[#7E7E7E] leading-relaxed">
          Blijf op de hoogte van trends, tips en succesverhalen met onze
          blogselectie. Ontdek nieuwe ideeën om uw digitale strategie te
          versterken.
        </h3>
      </div>

      {/* Cards Section */}
      <SingleCard />
    </div>
  );
};

export default Card;
