import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      //   state.cart = [...state.cart, action.payload];
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    clearCart(state) {
      state.cart = [];
    },
    IncreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      //   if (item) {
      //     item.quantity += 1;
      //   }
      //   state.totalPrice += item.price;
      item.quantity++;
      item.totalPrice = item.price * item.quantity;
    },
    DecreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload.id);
      //   if (item && item.quantity > 1) {
      //     item.quantity -= 1;
      //   }
      //   state.totalPrice -= item.price;
      item.quantity--;
      item.totalPrice = item.price * item.quantity;
    },
  },
});

export const {
  addItem,
  deleteItem,
  clearCart,
  IncreaseItemQuantity,
  DecreaseItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;
//   Get the total quantity of items in the cart
export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

//   Get the total price of items in the cart
export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
