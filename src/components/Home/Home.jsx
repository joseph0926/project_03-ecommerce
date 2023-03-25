import React from "react";
import MainProducts from "../Products/MainProducts";
import Footer from "./Footer";
import Hero from "./Hero";
import NewsLetter from "./NewsLetter";

const Home = ({ mainProducts }) => {
  return (
    <>
      <Hero />
      <MainProducts products={mainProducts} />
      <NewsLetter />
      <Footer />
    </>
  );
};

export default Home;
