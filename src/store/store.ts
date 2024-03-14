import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice.ts';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
