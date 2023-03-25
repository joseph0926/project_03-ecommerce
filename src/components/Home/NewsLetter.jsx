import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const NewsLetter = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div className="relative min-h-screen">
      <section className=" text-black py-20 w-full">
        <div className="container w-full">
          <div className="flex flex-col items-center">
            <p className="font-light uppercase text-center mb-8">
              최신 소식을 바로 전해드립니다!
            </p>
            <h1 className="text-3xl text-center">
              지금 바로 구독하고, 최신 소식을 받아보세요
            </h1>
            <div className="flex flex-col sm:flex-row gap-6 mt-8 w-[50%]">
              <input
                type="text"
                placeholder="email..."
                className="border-2 flex-1 px-2 py-3 rounded-md text-black"
              />
              <button
                type="button"
                className="px-4 py-2 text-white transition-colors duration-200 bg-violet-600 hover:bg-white hover:text-black"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </section>
      <div
        className="my-[3rem]
        mx-auto
        max-w-5xl
        flex
        gap-12
        flex-wrap
        items-start
        justify-center
        md:justify-between
      "
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div
          className="
        grid
        gap-4
        justify-items-center
        text-center
        md:flex-1
      "
        >
          <div
            className="
            rounded-full
            border-8
            border-violet-600
            p-4
          "
          >
            <div className="h-14 w-14 flex items-center justify-center">
              <span className="font-bold text-[3rem]">1</span>
            </div>
          </div>
          <h3 className="text-3xl font-bold">Fashion</h3>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
        <div
          className="
        grid
        gap-4
        justify-items-center
        text-center
        md:flex-1
        "
        >
          <div
            className="
            rounded-full
            border-8
            border-violet-600
            p-4
          "
          >
            <div className="h-14 w-14 flex items-center justify-center">
              <span className="font-bold text-[3rem]">2</span>
            </div>
          </div>
          <h3 className="text-3xl font-bold">Digital</h3>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
        <div
          className="
        grid
        gap-4
        justify-items-center
        text-center
        md:flex-1
        "
        >
          <div
            className="
            rounded-full
            border-8
            border-violet-600
            p-4
          "
          >
            <div className="h-14 w-14 flex items-center justify-center">
              <span className="font-bold text-[3rem]">3</span>
            </div>
          </div>
          <h3 className="text-3xl font-bold">Accessories</h3>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
