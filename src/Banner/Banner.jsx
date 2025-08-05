import BannerPhoto from "./BannerPhoto";

const Banner = () => {
  return (
    <div className="relative md:flex md:bg-[#FFFFFF] lg:flex-row px-1 lg:px-6 lg:pl-36 lg:pr-0  lg:pb-20 overflow-hidden">
      {/* Text Section */}

      <div className="relative w-11/12 md:w-2/4 lg:w-1/2 py-4 mt-6">
        {/* Overlay */}
        <div className="absolute md:hidden block top-0 inset-0 bg-white opacity-80 z-10"></div>

        {/* Content */}
        <div className=" max-w-md relative lg:max-w-xl space-y-6 z-10">
          <h2 className="text-3xl leading-tight lg:text-[40px] font-plus-jakarta font-extrabold text-[#263238]">
            Younitech -<br /> Uw Partner in Digitale <br /> Innovatie
          </h2>
          <p className="text-[22px] font-plus-jakarta italic text-[#263238]">
            Transformeer uw digitale aanwezigheid met op maat gemaakte
            oplossingen
          </p>
          <p className="text-[18px] font-plus-jakarta text-[#263238]">
            Bij Younitech begrijpen we dat een sterke online aanwezigheid
            essentieel is voor succes in de moderne wereld. Met jarenlange
            ervaring in webdesign, applicatieontwikkeling, marketing, en
            branding helpen we bedrijven van elke omvang om te groeien en te
            excelleren. Onze expertise combineert creativiteit met technologie
            om resultaten te leveren die impact maken
          </p>
        </div>
      </div>

      {/* Image Section */}
      {/* Desktop View */}
      <div className="w-1/2 relative lg:block hidden">
        <BannerPhoto />
      </div>
      {/* for ipad */}
      <div className="w-full absolute top-0 left-64 block lg:hidden">
        <BannerPhoto />
      </div>
      {/* for mobile device */}
      <div className="w-full absolute top-0 bottom-3 left-64 block md:hidden">
        <BannerPhoto />
      </div>
    </div>
  );
};

export default Banner;
