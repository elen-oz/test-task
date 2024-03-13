import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App.tsx';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import productReducer, { productsFetch } from './slices/productSlice.ts';
import cartReducer, { getTotals } from './slices/cartSlise.ts';

import { extendTheme } from '@chakra-ui/react';
import '@fontsource-variable/nunito';

const theme = extendTheme({
  fonts: {
    heading: `'Nunito Variable', sans-serif`,
    body: `'Nunito Variable', sans-serif`,
  },
});

const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});

store.dispatch(productsFetch());
store.dispatch(getTotals());

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
