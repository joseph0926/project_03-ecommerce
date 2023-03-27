import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import IMG from "../../assets/hero.png";

const Hero = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <main className="relative min-h-screen bg-white flex justify-center items-center max-md:flex-col">
      <div className="text-white">
        <h1 className="text-4xl font-semibold tracking-wide lg:text-6xl xl:text-7xl mb-[2rem] ">
          <span
            className="block bg-gradient-to-r from-pink-400 to-violet-500 bg-clip-text text-transparent max-md:pl-6"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            Fashion
          </span>
          <span className="block ml-[5rem] text-pink-600" data-aos="fade-right" data-aos-duration="2500">
            Digital
          </span>
          <span className="block max-md:pr-6 ml-[10rem] text-violet-600" data-aos="fade-right" data-aos-duration="3000">
            Accessories
          </span>
        </h1>
      </div>
      <div className="block" data-aos="fade-down" data-aos-duration="3000">
        <img src={IMG} className="h-[30rem]"></img>
      </div>
    </main>
  );
};

export default Hero;
