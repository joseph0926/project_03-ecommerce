import React from "react";
import Product from "./Product";

const FeatureProducts = ({ products }) => {
  return (
    <div>
      {products
        .map((product) => {
          return <Product key={product.id} product={product} />;
        })
        .slice(0, 5)}
    </div>
  );
};

export default FeatureProducts;
