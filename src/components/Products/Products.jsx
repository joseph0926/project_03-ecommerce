import React from "react";

import ProductCard from "./ProductCard";

const Products = ({ products }) => {
  const categories = ["clothing", "electronics", "jewelery"];

  const showProducts = (categoryIdx) => {
    return products
      .filter((product) => product.category.includes(categories[categoryIdx]))
      .map((product) => <ProductCard product={product} key={product.id} />);
  };

  return (
    <>
      <div className="my-8 flex flex-col justify-center items-center">
        {categories.map((category) => {
          return (
            <div key={category} className="mx-2">
              <h3 className="my-8 font-medium">{category}</h3>
              <div className="flex flex-wrap">{showProducts(0)}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
