import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

type State = {
  items: [];
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

export default productsSlice.reducer;
