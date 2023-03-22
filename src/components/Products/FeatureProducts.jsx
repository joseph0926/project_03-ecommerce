import React from "react";
import Product from "./Product";

const FeatureProducts = ({ products }) => {
  return (
    <div className="flex flex-wrap my-8 gap-[4%]">
      {products
        .map((product) => {
          return (
            <div className="basis-[22%]">
              <Product key={product.id} product={product} />
            </div>
          );
        })
        .slice(0, 4)}
    </div>
  );
};

export default FeatureProducts;
