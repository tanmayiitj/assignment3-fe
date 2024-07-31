// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
  },
  reducers: {
    addToCart(state, action) {
        const { id, color } = action.payload; // Destructure id and color
        const itemInCart = state.products.find(item => item.id === id && item.color === color); // Check for both id and color
  
        if (itemInCart) {
          itemInCart.quantity=itemInCart.quantity + action.payload.quantity; // Increase quantity if found
        } else {
          state.products.push({ ...action.payload, quantity: action.payload.quantity }); // Add new product with quantity 1
        }
      },
    removeFromCart(state, action) {
      return {
        ...state,
        products: state.products.filter(item => item.id !== action.payload),
      };
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;