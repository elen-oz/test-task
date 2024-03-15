import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Grid, GridItem } from '@chakra-ui/react';
import {
  add,
  remove,
  decrease,
  getTotals,
  selectCartState,
} from '../store/cartSlice';
import { type CartState, type Product } from '../models';
import SideBar from '../components/SideBar';
import CartSection from '../components/CartSection';

const CartPage = () => {
  const cart: CartState = useSelector(selectCartState);
  const { cartProducts, cartTotalAmount, status } = cart;
  const isLoading = status === 'pending';

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (product: Product) => {
    dispatch(add(product));
  };

  const handleRemoveFromCart = (product: Product) => {
    dispatch(remove(product));
  };

  const handleDecreaseCart = (product: Product) => {
    dispatch(decrease(product));
  };

  return (
    <Box h='100vh' maxW='1441px' mx='auto'>
      <Grid
        h='100%'
        templateColumns={['1fr', '1fr', '1fr', 'repeat(4, 1fr)']}
        gap={[0, 0, 2]}
      >
        <GridItem as='section' colSpan={3}>
          <CartSection
            isLoading={isLoading}
            products={cartProducts}
            add={handleAddToCart}
            decrease={handleDecreaseCart}
            remove={handleRemoveFromCart}
          />
        </GridItem>
        <GridItem as='aside' w='100%' rowSpan={1} colSpan={1} bg='#dbeafe'>
          <SideBar totalAmount={cartTotalAmount} isLoading={isLoading} />
        </GridItem>
      </Grid>
    </Box>
  );
};
export default CartPage;
