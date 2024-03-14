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
  useBreakpointValue,
} from '@chakra-ui/react';

import { RepeatIcon, AddIcon, MinusIcon, DeleteIcon } from '@chakra-ui/icons';

import { type CartState } from '../models';

const CartPage = () => {
  const breakpoint = useBreakpointValue({ base: 'base', sm: 'sm' });
  // const { items, status } = useSelector((state) =>
  //   state ? state.products : null
  // );

  const cart: CartState = useSelector((state) => (state ? state.cart : null));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  console.log('cart', cart);

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
    <Box h='100vh'>
      <Grid
        h='100%'
        templateColumns={['1fr', '1fr', '1fr', 'repeat(4, 1fr)']}
        gap={[0, 0, 2]}
      >
        <GridItem as='section' colSpan={3}>
          <Box mx='auto' h='100vh' overflow='scroll'>
            <HStack p={3} fontSize='4xl'>
              <Text as='h1' fontSize='3xl'>
                Ваша корзина
              </Text>
              <Spacer />
              {breakpoint === 'base' ? (
                <Button
                  colorScheme='blue'
                  onClick={() => handleRemoveFromCart(item)}
                >
                  <RepeatIcon />
                </Button>
              ) : (
                <Button
                  colorScheme='blue'
                  onClick={() => handleRemoveFromCart(item)}
                  leftIcon={<RepeatIcon />}
                >
                  Восстановить корзину
                </Button>
              )}
            </HStack>
            {cart.cartItems.length === 0 ? (
              <Box>
                <AbsoluteCenter fontSize='3xl'>Cart is empty</AbsoluteCenter>
              </Box>
            ) : (
              <>
                {cart.cartItems.length === 0 ? (
                  <Box>
                    <AbsoluteCenter fontSize='3xl'>
                      Корзина пуста
                    </AbsoluteCenter>
                  </Box>
                ) : (
                  <List px={{ md: '1rem', lg: '1rem' }}>
                    {cart.cartItems.map((item, index) => (
                      <ListItem key={item.id}>
                        <Card
                          direction={{ base: 'column', md: 'row' }}
                          overflow='hidden'
                          mb={4}
                        >
                          <Text px={3} pt={2} fontSize='lg'>
                            {index + 1}
                          </Text>

                          <Image
                            objectFit='contain'
                            px={[4, 0]}
                            mx='auto'
                            maxW={{ base: '100%', sm: '300px', md: '200px' }}
                            src={item.image}
                            alt='Product image'
                          />
                          <Stack>
                            <CardBody>
                              <Grid
                                templateColumns={[
                                  '1fr',
                                  '1fr',
                                  '1fr',
                                  '1fr',
                                  'repeat(5, 1fr)',
                                ]}
                                gap={4}
                              >
                                <GridItem colSpan={[5, 5, 5, 5, 4]}>
                                  <Heading size='md'>{item.title}</Heading>
                                  <Text py='2'>{item.description}</Text>
                                </GridItem>
                                <GridItem colSpan={[5, 5, 5, 5, 1]}>
                                  <HStack spacing={2}>
                                    <Text fontSize='lg'>
                                      {roundNumber(item.price)}
                                    </Text>

                                    <Button
                                      onClick={() => handleAddToCart(item)}
                                      variant='solid'
                                      colorScheme='blue'
                                      size='xs'
                                    >
                                      <AddIcon />
                                    </Button>
                                    <Text>{item.cartQuantity}</Text>
                                    <Button
                                      onClick={() => handleDecreaseCart(item)}
                                      variant='solid'
                                      size='xs'
                                    >
                                      <MinusIcon />
                                    </Button>
                                  </HStack>
                                </GridItem>
                              </Grid>
                            </CardBody>
                            <CardFooter>
                              <Spacer />

                              <Button
                                onClick={() => handleRemoveFromCart(item)}
                              >
                                <DeleteIcon />
                              </Button>
                            </CardFooter>
                          </Stack>
                        </Card>
                      </ListItem>
                    ))}
                  </List>
                )}
              </>
            )}
          </Box>
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
          <Box p='3rem' fontSize='xl'>
            Всего: {roundNumber(cart.cartTotalAmount)}руб.
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};
export default CartPage;
