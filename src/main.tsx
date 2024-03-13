import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App.tsx';
import './index.css';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import productReducer, { productsFetch } from './slices/productSlice.tsx';

const store = configureStore({
  reducer: {
    products: productReducer,
  },
});

store.dispatch(productsFetch());

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
