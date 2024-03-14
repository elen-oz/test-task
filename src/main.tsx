import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App.tsx';

import { Provider } from 'react-redux';
import store from './store/store.ts';
import { productsFetch } from './store/productSlice.ts';
import { getTotals, loadProducts } from './store/cartSlice.ts';
import theme from './theme.tsx';

// store.dispatch(productsFetch());
// store.dispatch(getTotals());
store.dispatch(loadProducts());

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
