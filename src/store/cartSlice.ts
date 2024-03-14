import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { type CartState, type Product } from '../models';

const storedCartItems = localStorage.getItem('cartItems');
let initialCartItems: Product[] = [];

if (storedCartItems) {
  initialCartItems = JSON.parse(storedCartItems);
}

const initialState: CartState = {
  cartItems: initialCartItems,
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  status: 'idle',
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
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        if (state.cartItems[itemIndex].cartQuantity < 10) {
          state.cartItems[itemIndex].cartQuantity += 1;
        } else {
          return;
        }
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
      }

      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      const nextCartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );

      state.cartItems = nextCartItems;
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );

      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
      } else if (state.cartItems[itemIndex].cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );

        state.cartItems = nextCartItems;
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    getTotals(state, action) {
      const { total, quantity } = state.cartItems.reduce(
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
      .addCase(loadProducts.pending, (state, action) => {
        state.status = 'pending';
      })
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.status = 'success';
        state.cartItems = action.payload.map((product) => ({
          ...product,
          cartQuantity: 1,
        }));
      })
      .addCase(loadProducts.rejected, (state, action) => {
        state.status = 'rejected';
      });
  },
});

export const selectCartState = (state) => state.cart;

export const { addToCart, removeFromCart, decreaseCart, getTotals } =
  cartSlice.actions;

export default cartSlice.reducer;
