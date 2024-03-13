import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from '@reduxjs/toolkit';
import axios from 'axios';
import { type Product } from '../models';

type State = {
  items: Product[];
  status: string | null;
};

const initialState: State = {
  items: [],
  status: null,
};

export const productsFetch = createAsyncThunk(
  'products/productsFetch',
  async () => {
    const response = await axios.get('https://fakestoreapi.com/products');

    console.log('response', response?.data);

    return response?.data;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(productsFetch.pending, (state, action) => {
        state.status = 'pending';
      })
      .addCase(productsFetch.fulfilled, (state, action) => {
        state.status = 'success';
        state.items = action.payload;
      })
      .addCase(productsFetch.rejected, (state, action) => {
        state.status = 'rejected';
      });
  },
});

const selectProductsState = (state) => state.products;

export const selectStatus = createSelector(
  selectProductsState,
  (state) => state.status
);

export const selectItems = createSelector(
  selectProductsState,
  (state) => state.items
);

export default productsSlice.reducer;
