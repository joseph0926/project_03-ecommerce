import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import CartItem from "./CartItem";

const Cart = () => {
  const [loading, setLoading] = useState(false);
  const { cartItems, totalPrice } = useSelector((state) => state.cart);

  return (
    <div className="w-full md:py-20">
      <div className={`w-full max-w-[1280px] px-5 md:px-10 mx-auto`}>
        {cartItems.length > 0 && (
          <>
            <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
              <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">Shopping Cart</div>
            </div>
            <div className="flex flex-col lg:flex-row gap-12 py-10">
              <div className="flex-[2]">
                <div className="text-lg font-bold">Cart Items</div>
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
              <div className="flex-[1]">
                <div className="text-lg font-bold">Summary</div>

                <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
                  <div className="flex justify-between">
                    <div className="uppercase text-md md:text-lg font-medium text-black">합계</div>
                    <div className="text-md md:text-lg font-medium text-black">&#8377;{totalPrice}</div>
                  </div>
                  <div className="text-sm md:text-md py-5 border-t mt-5">아직 구매기능은 구현이 되어있지 않습니다,,</div>
                </div>
                <button
                  disabled={true}
                  className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 flex items-center gap-2 justify-center cursor-not-allowed"
                >
                  Checkout
                </button>
              </div>
            </div>
          </>
        )}

        {cartItems.length < 1 && (
          <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
            <span className="text-xl font-bold">장바구니가 비어있습니다</span>
            <span className="text-center mt-4">관심있는 상품을 장바구니에 추가해보세요!</span>
            <Link
              to="/"
              className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
