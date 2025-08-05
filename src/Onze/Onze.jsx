import image1 from "../assets/mobile1.jpg";
import image2 from "../assets/Device (2).png";

import replace from "../assets/replace.jpg"


const Onze = () => {

  

  return (
    <div className="bg-[#FFFFFF] py-12">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl lg:text-[35px] font-plus-jakarta font-bold mb-4 sm:mb-6 text-[#263238]">
          Onze diensten, op maat voor uw succes
        </h2>
      </div>

      {/* Services Section */}
      <div className="container mx-auto flex flex-wrap justify-center gap-8 px-6">
        {/* Service Card 1 */}
        <div  className=" p-6 text-center w-full sm:w-64 md:w-80">
          <img
            src={image1}
            alt="Applicaties"
            className="mx-auto h-72 w-auto mb-4"
          />
          <h2 className="text-xl font-plus-jakarta font-bold  text-[#263238]">Applicaties</h2>
          {/* <p className="text-gray-600 mt-2 text-sm">
            Ontwikkel op maat gemaakte applicaties die uw bedrijf ondersteunen.
          </p> */}
        </div>

        {/* Service Card 2 */}
        <div  className=" p-6 text-center w-full sm:w-64 md:w-80">
          <img
            src={image2}
            alt="Marketing & Branding"
            className="mx-auto h-72 w-auto mb-4"
          />
          <h2 className="text-xl font-plus-jakarta font-bold  text-[#263238]">
            Marketing & Branding
          </h2>
          {/* <p className="text-gray-600 mt-2 text-sm">
            Creëer een unieke merkidentiteit en bereik uw doelgroep effectief.
          </p> */}
        </div>

        {/* Service Card 3 */}
        <div className=" p-6 text-center w-full sm:w-64 md:w-80">
          <img
            src={replace}
            alt="Hosting & Onderhoud"
            className="mx-auto h-72  md:h-72 w-auto mb-4"
          />
          <h2 className="text-xl font-plus-jakarta font-bold  text-[#263238]">
            Hosting & Onderhoud
          </h2>
          {/* <p className="text-gray-600 mt-2 text-sm">
            Zorg voor een veilige en betrouwbare digitale infrastructuur.
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Onze;
