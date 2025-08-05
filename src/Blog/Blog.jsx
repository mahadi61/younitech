import { useEffect } from "react";
import das from "../assets/das.png";
import SingleCard from "../Card/SingleCard";

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <div className="bg-[#F5F5F5] w-full flex flex-col items-center py-16 mb-10">
        <h1 className="text-xl font-bold text-gray-800">Portfolio</h1>
        <h1 className="flex items-center gap-2 text-gray-600 text-sm md:text-base">
          Home
          <img className="w-5 h-[2px]" src={das} alt="separator" />
          Portfolio
        </h1>
      </div>
      <div className="bg-gray-50 py-12 px-6 lg:px-36">
        <SingleCard />
      </div>
    </>
  );
};

export default Blog;
