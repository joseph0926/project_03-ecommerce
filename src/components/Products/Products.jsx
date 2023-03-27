import React from "react";
import { useSelector } from "react-redux";

import ProductCard from "./ProductCard";

const Products = ({ products }) => {
  const { cartItems } = useSelector((state) => state.cart);
  const categories = ["clothing", "electronics", "jewelery"];

  const showProducts = (categoryIdx) => {
    return products
      .filter((product) => product.category.includes(categories[categoryIdx]))
      .map((product) => <ProductCard product={product} key={product.id} />);
  };

  return (
    <>
      <div className="my-8 flex justify-center">
        <div className="sticky top-[5rem] left-0 border-4 p-8 w-[300px] h-full mt-8 ml-4">
          <h2 className="text-xl text-center border-b-4 border-gray-600 mb-4">
            카트에 담긴 상품
          </h2>
          <ul>
            {cartItems.map((item) => {
              return (
                <li
                  key={item.id}
                  className="flex flex-col items-center justify-center mb-8"
                >
                  <img src={item.image} className="w-[5rem]"></img>
                  <span>{item.title}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="flex flex-col ml-8">
          {categories.map((category, idx) => {
            return (
              <div key={category} className="mx-2 w-full">
                <h3 className="my-8 font-medium">{category}</h3>
                <div className="flex flex-wrap">{showProducts(idx)}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Products;
