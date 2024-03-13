import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  removeFromCart,
  decreaseCart,
  getTotals,
} from '../slices/cartSlise';
import { useEffect } from 'react';

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
  Center,
} from '@chakra-ui/react';
import { GoTrash } from 'react-icons/go';
import { CiShoppingCart } from 'react-icons/ci';

const CartPage = () => {
  // const { items } = useSelector((state) => (state ? state.products : null));
  const cart = useSelector((state) => (state ? state.cart : null));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  console.log('cart.cartTotalQuantity', cart.cartTotalQuantity);

  const roundNumber = (num) => {
    return num.toFixed(1);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
  };

  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };

  return (
    <Box h='100vh' p={2}>
      <Grid h='100%' templateColumns='repeat(4, 1fr)' gap={2}>
        <GridItem as='section' colSpan={3}>
          <Box maxW='800px' mx='auto' px='1rem' h='100vh' overflow='scroll'>
            <HStack p={3} fontSize='4xl'>
              <Text as='h1' fontSize='3xl'>
                Your Cart
              </Text>
              <CiShoppingCart />
            </HStack>
            <List>
              {cart.cartItems.length === 0 ? (
                <Box>
                  <AbsoluteCenter fontSize='3xl'>Cart is empty</AbsoluteCenter>
                </Box>
              ) : (
                cart.cartItems.map((item) => (
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
                          <Grid templateColumns='repeat(4, 1fr)' gap={4}>
                            <GridItem colSpan={3}>
                              <Heading size='md'>{item.title}</Heading>
                              <Text py='2'>{item.description}</Text>
                            </GridItem>
                            <GridItem colSpan={1}>
                              <HStack>
                                <Text mr='1rem' fontSize='lg'>
                                  {roundNumber(item.price)}
                                </Text>
                                <Button
                                  onClick={() => handleAddToCart(item)}
                                  variant='solid'
                                  colorScheme='blue'
                                  size='xs'
                                >
                                  +
                                </Button>
                                <Text>{item.cartQuantity}</Text>
                                <Button
                                  onClick={() => handleDecreaseCart(item)}
                                  variant='solid'
                                  size='xs'
                                >
                                  -
                                </Button>
                                <Spacer />
                              </HStack>
                            </GridItem>
                          </Grid>
                        </CardBody>
                        <CardFooter>
                          <Spacer />
                          <Button onClick={() => handleRemoveFromCart(item)}>
                            <GoTrash />
                          </Button>
                        </CardFooter>
                      </Stack>
                    </Card>
                  </ListItem>
                ))
              )}
            </List>
          </Box>
        </GridItem>
        <GridItem
          as='section'
          rowSpan={1}
          colSpan={1}
          // bg='#fafafa'
          borderLeft
          borderLeftWidth='1px'
          borderLeftColor='gray.200'
        >
          <Box p='3rem' fontSize='xl'>
            Total: {roundNumber(cart.cartTotalAmount)}RUB
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};
export default CartPage;
