import React from "react";
import FeatureProducts from "../Products/FeatureProducts";
import Hero from "./Hero";

const Home = ({ featureProducts }) => {
  return (
    <>
      <main className="relative h-[195vh] bg-[#E7ECEE]">
        <Hero />
      </main>
      <FeatureProducts products={featureProducts} />
    </>
  );
};

export default Home;
