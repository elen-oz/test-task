import { useSelector, useDispatch } from 'react-redux';
import {
  productsFetch,
  selectStatus,
  selectItems,
} from '../slices/productSlice';

import { Box, Grid, GridItem, List, ListItem, Text } from '@chakra-ui/react';

const CartPage = () => {
  // const dispatch = useDispatch();
  const status = useSelector(selectStatus);
  const products = useSelector(selectItems);

  const isLoaded = status !== 'succes';

  // useEffect(() => {
  //   dispatch(productsFetch());
  // }, [dispatch]);

  console.log('products', products);

  return (
    <Box h='100vh' p={2}>
      <Grid h='100%' templateColumns='repeat(4, 1fr)' gap={2}>
        <GridItem colSpan={3} bg='papayawhip'>
          <Text>Корзина</Text>
          <List>
            {isLoaded &&
              products.map((product) => (
                <ListItem key={product.id}>{product.title}</ListItem>
              ))}
          </List>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1} bg='tomato'>
          <Text>Итого: [сумма] руб.</Text>
        </GridItem>
      </Grid>
    </Box>
  );
};
export default CartPage;
