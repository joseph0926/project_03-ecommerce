import React from "react";
import MainProducts from "../Products/MainProducts";
import Footer from "./Footer";
import Hero from "./Hero";
import NewsLetter from "./NewsLetter";

const Home = ({ mainProducts }) => {
  return (
    <>
      <main className="relative h-[195vh] bg-white">
        <Hero />
      </main>
      <MainProducts products={mainProducts} />
      <div className="relative h-screen">
        <NewsLetter />
      </div>
      <Footer />
    </>
  );
};

export default Home;
