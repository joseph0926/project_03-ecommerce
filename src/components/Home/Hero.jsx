import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import AOS from "aos";
import "aos/dist/aos.css";

import IMG1 from "../../assets/fa.jpg";
import IMG2 from "../../assets/di.jpg";
import IMG3 from "../../assets/ac.jpg";
import { BiArrowBack } from "react-icons/bi";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div className="relative text-black text-2xl w-[90%] mx-auto flex flex-col h-screen">
      <h1 className="space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl xl:text-7xl mb-[2rem]">
        <span
          className="block bg-gradient-to-r from-pink-400 to-violet-500 bg-clip-text text-transparent"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          Fashion
        </span>
        <span
          className="block ml-[5rem] text-pink-600"
          data-aos="fade-right"
          data-aos-duration="4000"
        >
          Digital
        </span>
        <span
          className="block ml-[10rem] text-violet-600"
          data-aos="fade-right"
          data-aos-duration="5000"
        >
          Accessories
        </span>
      </h1>
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
          <img
            src={IMG1}
            className="aspect-[16/10] md:aspect-auto h-[400px] object-cover"
          ></img>
          <div className="px-4 md:px-10 py-2 md:py-6 bg-white absolute bottom-6 md:bottom-16 left-0 text-black/[0.9] text-lg md:text-3xl uppercase font-medium cursor-pointer hover:opacity-90">
            More Detail...
          </div>
        </div>
        <div>
          <img
            src={IMG2}
            className="aspect-[16/10] md:aspect-auto h-[400px] object-cover"
          ></img>
          <div className="px-4 md:px-10 py-2 md:py-6 bg-white absolute bottom-6 md:bottom-16 left-0 text-black/[0.9] text-lg md:text-3xl uppercase font-medium cursor-pointer hover:opacity-90">
            More Detail...
          </div>
        </div>
        <div>
          <img
            src={IMG3}
            className="aspect-[16/10] md:aspect-auto h-[400px] object-cover"
          ></img>
          <div className="px-4 md:px-10 py-2 md:py-6 bg-white absolute bottom-6 md:bottom-16 left-0 text-black/[0.9] text-lg md:text-3xl uppercase font-medium cursor-pointer hover:opacity-90">
            More Detail...
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
