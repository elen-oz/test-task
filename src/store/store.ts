import { configureStore } from '@reduxjs/toolkit';
import productReducer from './productSlice.ts';
import cartReducer from './cartSlice.ts';

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});

export default store;
