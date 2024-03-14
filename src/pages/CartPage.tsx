import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  removeFromCart,
  decreaseCart,
  getTotals,
} from '../store/cartSlice';
import { selectProductsState } from '../store/productSlice';
import { selectCartState } from '../store/cartSlice';
import { useEffect } from 'react';
import { type CartState, type Product, type ProductsState } from '../models';

import { Box, Grid, GridItem } from '@chakra-ui/react';

import SideBar from '../components/SideBar';
import CartSection from '../components/CartSection';

const CartPage = () => {
  const productsState = useSelector(selectProductsState);
  const { items } = productsState;

  const cart: CartState = useSelector(selectCartState);
  const { cartItems, cartTotalQuantity, cartTotalAmount } = cart;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (product: Product) => {
    dispatch(removeFromCart(product));
  };

  const handleDecreaseCart = (product: Product) => {
    dispatch(decreaseCart(product));
  };

  return (
    <Box h='100vh'>
      <Grid
        h='100%'
        templateColumns={['1fr', '1fr', '1fr', 'repeat(4, 1fr)']}
        gap={[0, 0, 2]}
      >
        <GridItem as='section' colSpan={3}>
          <CartSection
            products={items}
            addToCart={handleAddToCart}
            decreaseCart={handleDecreaseCart}
            removeFromCart={handleRemoveFromCart}
          />
        </GridItem>
        <GridItem
          as='section'
          w='100%'
          rowSpan={1}
          colSpan={1}
          bg='#fafafa'
          borderLeftWidth='1px'
          borderLeftColor='gray.200'
          borderTopWidth='1px'
          borderTopColor='gray.200'
        >
          <SideBar totalAmount={cart.cartTotalAmount} />
        </GridItem>
      </Grid>
    </Box>
  );
};
export default CartPage;
