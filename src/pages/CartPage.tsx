import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../slices/cartSlise';

import {
  Box,
  Grid,
  GridItem,
  Image,
  List,
  ListItem,
  Text,
  Button,
  AbsoluteCenter,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Spacer,
  HStack,
} from '@chakra-ui/react';

const CartPage = () => {
  // const { items } = useSelector((state) => (state ? state.products : null));

  const { cartItems } = useSelector((state) => (state ? state.cart : null));

  const dispatch = useDispatch();

  // const isLoading = status !== 'success';

  console.log('cartItems', cartItems);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <Box h='100vh' p={2}>
      <Grid h='100%' templateColumns='repeat(4, 1fr)' gap={2}>
        <GridItem as='section' colSpan={3}>
          <Box maxW='800px' mx='auto' px='1rem' h='100vh' overflow='scroll'>
            <Text as='h1'>Cart</Text>
            <List>
              {cartItems.length === 0 ? (
                <Box>
                  <AbsoluteCenter>Cart is empty</AbsoluteCenter>
                </Box>
              ) : (
                cartItems.map((item) => (
                  <ListItem key={item.id} mb='1rem'>
                    <Card
                      key={item.id}
                      direction={{ base: 'column', sm: 'row' }}
                      overflow='hidden'
                      variant='outline'
                    >
                      <Image
                        objectFit='cover'
                        maxW={{ base: '100%', sm: '200px' }}
                        src={item.image}
                        alt='Product image'
                      />
                      <Stack>
                        <CardBody>
                          <Grid
                            templateColumns='repeat(4, 1fr)'
                            columnGap={10}
                            rowGap={4}
                          >
                            <GridItem colSpan={3}>
                              <Heading size='md'>{item.title}</Heading>
                              <Text py='2'>{item.description}</Text>
                            </GridItem>
                            <GridItem colSpan={1}>
                              <HStack>
                                <Text>x 1</Text>
                                <Spacer />
                                <Text>price</Text>
                              </HStack>
                            </GridItem>
                          </Grid>
                        </CardBody>
                        <CardFooter>
                          <Button
                            onClick={() => handleAddToCart(item)}
                            variant='solid'
                            colorScheme='blue'
                          >
                            +
                          </Button>
                          <Button ml={2} variant='solid'>
                            -
                          </Button>
                          <Spacer />
                          <Button>Remove</Button>
                        </CardFooter>
                      </Stack>
                    </Card>
                  </ListItem>
                ))
              )}
            </List>
          </Box>
        </GridItem>
        <GridItem as='section' rowSpan={1} colSpan={1} bg='papayawhip'>
          <Box p='3rem'>Total: 000 RUB</Box>
        </GridItem>
      </Grid>
    </Box>
  );
};
export default CartPage;
