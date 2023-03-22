import React from "react";
import { Link } from "react-router-dom";

import ProductPause from "./ProductPause";
import { formatPrice } from "../helpers/productsHelp";

const Product = ({ product }) => {
  const { id, title, price, image } = product;

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/20 cursor-pointer">
      <div className="relative w-full h-[14rem] hover: opacity-100">
        <Link
          to={`products/${id}`}
          className=" absolute inset-0 justify-center items-center bg-black/5 opacity-0 transition-opacity duration-75"
        >
          <ProductPause size={35} id={id}></ProductPause>
        </Link>
        <img className="w-full h-full" src={image} alt="product"></img>
      </div>
      <div className="mt-4 flex flex-col">
        <p className="font-bold text-lg">
          <Link to={`products/${id}`}>{title}</Link>
        </p>
        <p className="mt-0 font-light text-xl">
          <Link to={`products/${id}`}>{formatPrice(price)}</Link>
        </p>
      </div>
    </div>
  );
};

export default Product;
