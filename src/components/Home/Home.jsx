import React from "react";
import FeatureProducts from "../Products/FeatureProducts";
import Hero from "./Hero";

const Home = ({ featureProducts }) => {
  return (
    <>
      <Hero />
      <FeatureProducts products={featureProducts} />
    </>
  );
};

export default Home;
