import one from "../assets/1 (2).png";
import three from "../assets/2.png";
import four from "../assets/3.png";
import two from "../assets/4 (2).png";
import five from "../assets/5.png";

import six from "../assets/bg.jpg";

const BannerPhoto = () => {
  return (
    <div>
      <div className="absolute flex top-0 right-0 items-center justify-center -mt-6">
        <img
          src={six}
          alt="Background"
          className="w-full -mt-14  h-[550px] object-cover"
        />
        <div className="absolute flex flex-col gap-6 items-center h-full">
          <div className="flex ">
            <img
              src={one}
              alt="Overlay 1"
              className="-ml-64 mt-16  w-96 h-56"
            />
            <img
              src={two}
              alt="Overlay 2"
              className="-ml-8 mt-8 w- 40 h- 36 w-52 h-40"
            />
          </div>
          <div className="flex">
            <img
              src={three}
              alt="Overlay 3"
              className="w h-3:w-[348px] -ml-48 -mt-32 h-[336px]"
            />
            <img
              src={four}
              alt="Overlay 4"
              className="-ml-20 w-[336px] -mt-52 h-[304px]"
            />
            <img
              src={five}
              alt="Overlay 5"
              className="w-[336px] -ml-[400px] mt-8 h-60"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerPhoto;
