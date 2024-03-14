import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import {
  addToCart,
  removeFromCart,
  decreaseCart,
  getTotals,
  selectCartState,
} from '../store/cartSlice';
import { type CartState, type Product } from '../models';
import SideBar from '../components/SideBar';
import CartSection from '../components/CartSection';

const CartPage = () => {
  const cart: CartState = useSelector(selectCartState);
  const { cartItems, cartTotalAmount, status } = cart;
  const isLoading = status === 'pending';

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
            isLoading={isLoading}
            products={cartItems}
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
          <SideBar totalAmount={cartTotalAmount} isLoading={isLoading} />
        </GridItem>
      </Grid>
    </Box>
  );
};
export default CartPage;
