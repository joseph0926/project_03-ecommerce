import React from "react";
import { Link } from "react-router-dom";

import ProductPause from "./ProductPause";

const ProductCard = ({ product }) => {
  const { id, title, price, image } = product;

  return (
    <div className="flex flex-col w-[250px] h-[350px] p-4 bg-white cursor-pointer border-4 border-zinc-400 mb-4">
      <div className="relative w-full h-[14rem] p-4">
        <Link
          to={`/products/${id}`}
          className="absolute inset-0 justify-center items-center bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-500"
        >
          <ProductPause size={35} id={id}></ProductPause>
        </Link>
        <img className="w-full h-full" src={image} alt="product"></img>
      </div>
      <div className="mt-4 h-full flex flex-col justify-between items-center">
        <p className="font-bold text-sm">
          <Link to={`${id}`}>{title}</Link>
        </p>
        <p className="font-light text-xl">
          <Link to={`${id}`}>${price}</Link>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
