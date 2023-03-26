import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  amount: 0,
  totalPrice: 0,
  isLoading: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const cartItem = state.cartItems.find((item) => item.id === action.payload.id);
      if (cartItem) {
        cartItem.amount++;
      } else {
        state.cartItems.push({ ...action.payload, amount: 1 });
      }
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => {
        return item.id !== itemId;
      });
    },
    increase: (state, action) => {
      const cartItem = state.cartItems.find((item) => {
        return item.id === action.payload.id;
      });
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, action) => {
      const cartItem = state.cartItems.find((item) => {
        return item.id === action.payload.id;
      });
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotals: (state, action) => {
      let amount = 0;
      let totalPrice = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        totalPrice += item.price * item.amount;
      });
      state.amount = amount;
      state.totalPrice = totalPrice;
    },
  },
});

export const { addToCart, clearCart, removeItem, increase, decrease, calculateTotals } = cartSlice.actions;

export default cartSlice.reducer;
