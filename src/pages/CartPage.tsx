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
  Flex,
  OrderedList,
} from '@chakra-ui/react';

import { RepeatIcon, AddIcon, MinusIcon, DeleteIcon } from '@chakra-ui/icons';

// import data from '../data.json';
import { type CartState } from '../models';

const CartPage = () => {
  const { items, status } = useSelector((state) =>
    state ? state.products : null
  );

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
      {/* <Grid h='100%' templateColumns='repeat(4, 1fr)' gap={2}> */}
      <Grid
        h='100%'
        templateColumns={['1fr', '1fr', '1fr', 'repeat(4, 1fr)']} // При экранах меньше 'md', элементы будут вставать в колонку
        gap={2}
      >
        <GridItem as='section' colSpan={3}>
          <Box mx='auto' px='1rem' h='100vh' overflow='scroll'>
            <HStack p={3} fontSize='4xl'>
              <Text as='h1' fontSize='3xl'>
                Your Cart
              </Text>
            </HStack>
            {items.length === 0 ? (
              <Box>
                <AbsoluteCenter fontSize='3xl'>Cart is empty</AbsoluteCenter>
              </Box>
            ) : (
              <>
                {items.length === 0 ? (
                  <Box>
                    <AbsoluteCenter fontSize='3xl'>
                      Cart is empty
                    </AbsoluteCenter>
                  </Box>
                ) : (
                  <List px={{ md: '1rem', lg: '1rem' }}>
                    {items.map((item, index) => (
                      <ListItem key={item.id}>
                        <Card
                          direction={{ base: 'column', sm: 'row' }}
                          overflow='hidden'
                          mb={4}
                        >
                          <Text px={3} pt={2} fontSize='lg'>
                            {index + 1}
                          </Text>{' '}
                          {/* Нумерация элементов */}
                          <Image
                            objectFit='contain'
                            maxW={{ base: '100%', sm: '200px' }}
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
                                colorScheme='blue'
                                onClick={() => handleRemoveFromCart(item)}
                                leftIcon={<RepeatIcon />}
                              >
                                Восстановить корзину
                              </Button>
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
