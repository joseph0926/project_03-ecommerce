import React from "react";
import { useDispatch } from "react-redux";
import { removeItem, increase, decrease } from "../../store/slice/cart-slice";

const CartItem = ({ item }) => {
  const { id, img, title, price, amount } = item;
  const dispatchFn = useDispatch();

  return (
    <article className="flex justify-between items-center p-4">
      <img src={img} className="w-[5rem] h-[5rem] object-cover mr-4" />
      <div className="w-full">
        <h4 className="mb-2 font-semibold text-2xl">{title}</h4>
        <h4 className="text-zinc-600">${price}</h4>
        <button
          className="cursor-pointer text-red-300 text-sm bg-transparent border-none mt-1 transition-colors duration-300 hover:text-red-600"
          onClick={() => {
            dispatchFn(removeItem(id));
          }}
        >
          remove
        </button>
      </div>
      <div>
        <button
          className="w-[24px] bg-transparent border-none cursor-pointer"
          onClick={() => {
            dispatchFn(increase({ id }));
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </button>
        <p className="text-center mb-0 text-xl">{amount}</p>
        <button
          className="w-[24px] bg-transparent border-none cursor-pointer"
          onClick={() => {
            if (amount === 1) {
              dispatchFn(removeItem(id));
              return;
            }
            dispatchFn(decrease({ id }));
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </article>
  );
};

export default CartItem;
