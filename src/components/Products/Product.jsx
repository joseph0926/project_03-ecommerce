import React from "react";
import { Link } from "react-router-dom";

import Stars from "../UI/Stars";

const Product = ({ product }) => {
  const { id, title, price, description, category, image, rating } = product;

  return (
    <div>
      <div className="w-full flex flex-col justify-center items-center p-8">
        <Link to="/" className="">
          상품 전체보기
        </Link>
        <div className="grid gap-[4rem] mt-8">
          <img src={image}></img>
          <section>
            <h2>{title}</h2>
            <Stars rates={rating} />
            <h5 className>${price}</h5>
            <p className="mt-4 max-w-[45rem]">{description}</p>
            <p className="capitalize w-[300px] grid grid-cols-[125px 1fr]">
              <span className="w-full">상품ID :</span>
              {id}
            </p>
            <p className="capitalize w-[300px] grid grid-cols-[125px 1fr]">
              <span className="w-full">카테고리 :</span>
              {category}
            </p>
            <hr />
            <div className="mt-8 flex justify-around items-center">
              <button type="button">카트에 담기</button>
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
