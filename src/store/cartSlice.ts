import { createSlice, createAsyncThunk, createAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { type CartState } from '../models';

const initialState: CartState = {
  cartProducts: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  status: null,
};

export const loadProducts = createAsyncThunk('cart/loadProducts', async () => {
  try {
    const response = await axios.get('/data.json');
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch products data');
  }
});

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add(state, action) {
      const itemIndex = state.cartProducts.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex < 0) {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartProducts.push(tempProduct);
      }

      if (state.cartProducts[itemIndex].cartQuantity >= 10) {
        return;
      }

      state.cartProducts[itemIndex].cartQuantity += 1;
    },
    remove(state, action) {
      const remainedItems = state.cartProducts.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );

      state.cartProducts = remainedItems;
    },
    decrease(state, action) {
      const itemIndex = state.cartProducts.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );

      if (state.cartProducts[itemIndex].cartQuantity > 1) {
        state.cartProducts[itemIndex].cartQuantity -= 1;
      } else if (state.cartProducts[itemIndex].cartQuantity === 1) {
        const remainedItems = state.cartProducts.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );

        state.cartProducts = remainedItems;
      }
    },
    getTotals(state) {
      const { total, quantity } = state.cartProducts.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadProducts.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.status = 'success';
        state.cartProducts = action.payload.map((product) => ({
          ...product,
          cartQuantity: 1,
        }));
      })
      .addCase(loadProducts.rejected, (state) => {
        state.status = 'rejected';
      });
  },
});

export const getTotals = createAction('cart/getTotals');
export const selectCartState = (state) => state.cart;
export const { add, remove, decrease } = cartSlice.actions;

export default cartSlice.reducer;
