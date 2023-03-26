import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Stars from "../UI/Stars";
import { addToCart } from "../../store/slice/cart-slice";

const Product = ({ productId, product }) => {
  const singleProduct = product.find((p) => {
    return p.id === +productId;
  });
  const { id, image, title, rating, price, description, category } =
    singleProduct;
  const dipatchFn = useDispatch();

  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center p-8">
        <Link to="/" className="">
          상품 전체보기
        </Link>
        <div className="flex gap-8 mt-8">
          <img src={image} className="w-[20rem] h-[20rem]"></img>
          <section className="flex flex-col justify-center">
            <h2>{title}</h2>
            <Stars rates={rating} />
            <h5 className="">${price}</h5>
            <p className="mt-4 max-w-[45rem]">{description}</p>
            <p className="capitalize w-[50%] flex mt-12">
              <span className="w-full mb-4">상품ID :</span>
              <span className="w-full">{id}</span>
            </p>
            <p className="capitalize w-[50%] flex">
              <span className="w-full mb-4">카테고리 :</span>
              <span className="w-full">{category}</span>
            </p>
            <hr />
            <div className="mt-8 flex justify-around items-center">
              <button
                type="button"
                onClick={() => {
                  dipatchFn(addToCart(singleProduct));
                }}
              >
                카트에 담기
              </button>
              <div className="cursor-not-allowed">
                <Link to="asdasdasd" className="pointer-events-none">
                  구매하기
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Product;
