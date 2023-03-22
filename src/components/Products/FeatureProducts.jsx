import React from "react";
import Product from "./Product";

const FeatureProducts = ({ products }) => {
  return (
    <div className="flex flex-wrap my-8 ml-[4%] gap-[4%]">
      {products
        .map((product) => {
          return (
            <span key={product.id} className="basis-[22%]">
              <Product product={product} />
            </span>
          );
        })
        .slice(0, 4)}
    </div>
  );
};

export default FeatureProducts;
