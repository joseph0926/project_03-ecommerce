import React from "react";
import { Carousel } from "react-responsive-carousel";

import IMG1 from "../../assets/fa.jpg";
import IMG2 from "../../assets/di.jpg";
import IMG3 from "../../assets/ac.jpg";
import { BiArrowBack } from "react-icons/bi";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Hero = () => {
  return (
    <div className="relative text-white text-2xl w-full max-w-[1300px] mx-auto">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        renderArrowPrev={(clickHandler, hasPrev) => {
          return (
            <div
              onClick={clickHandler}
              className="absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex justify-center items-center cursor-pointer hover:opacity-90"
            >
              <BiArrowBack className="text-sm md:text-lg"></BiArrowBack>
            </div>
          );
        }}
        renderArrowNext={(clickHandler, hasNext) => {
          return (
            <div
              onClick={clickHandler}
              className="absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex justify-center items-center cursor-pointer hover:opacity-90"
            >
              <BiArrowBack className="rotate-180 text-sm md:text-lg"></BiArrowBack>
            </div>
          );
        }}
      >
        <div>
          <img src={IMG1} className="aspect-[16/10] md:aspect-auto h-[400px] object-cover"></img>
          <div className="px-4 md:px-10 py-2 md:py-6 bg-white absolute bottom-6 md:bottom-16 left-0 text-black/[0.9] text-lg md:text-3xl uppercase font-medium cursor-pointer hover:opacity-90">
            More Detail...
          </div>
        </div>
        <div>
          <img src={IMG2} className="aspect-[16/10] md:aspect-auto h-[400px] object-cover"></img>
          <div className="px-4 md:px-10 py-2 md:py-6 bg-white absolute bottom-6 md:bottom-16 left-0 text-black/[0.9] text-lg md:text-3xl uppercase font-medium cursor-pointer hover:opacity-90">
            More Detail...
          </div>
        </div>
        <div>
          <img src={IMG3} className="aspect-[16/10] md:aspect-auto h-[400px] object-cover"></img>
          <div className="px-4 md:px-10 py-2 md:py-6 bg-white absolute bottom-6 md:bottom-16 left-0 text-black/[0.9] text-lg md:text-3xl uppercase font-medium cursor-pointer hover:opacity-90">
            More Detail...
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
