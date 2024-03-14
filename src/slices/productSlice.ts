import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from '@reduxjs/toolkit';
import axios from 'axios';
import { type ProductsState } from '../models';

const initialState: ProductsState = {
  items: [],
  status: null,
};

export const productsFetch = createAsyncThunk(
  'products/productsFetch',
  async () => {
    try {
      const response = await axios.get('/data.json');

      // console.log('response.data', response.data);

      return response.data;
    } catch (error) {
      throw new Error('Failed to fetch products data');
    }
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
