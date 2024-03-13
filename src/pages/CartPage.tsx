import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../slices/cartSlise';

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  List,
  ListItem,
  Text,
  Spinner,
  Center,
  HStack,
  Button,
  AbsoluteCenter,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Spacer,
} from '@chakra-ui/react';

const CartPage = () => {
  // const { status, items } = useSelector((state) =>
  //   state ? state.products : null
  // );

  const { cartItems } = useSelector((state) => (state ? state.cart : null));

  const dispatch = useDispatch();

  // const isLoading = status !== 'success';

  // console.log('items', items);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <Box h='100vh' p={2}>
      <Grid h='100%' templateColumns='repeat(4, 1fr)' gap={2}>
        <GridItem colSpan={3}>
          <Text>Cart</Text>
          <List>
            {cartItems.length === 0 ? (
              <Box>
                <AbsoluteCenter>Cart is empty</AbsoluteCenter>
              </Box>
            ) : (
              cartItems.map((item) => (
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
                      <Heading size='md'>{item.title}</Heading>
                      <Text py='2'>{item.description}</Text>
                    </CardBody>
                    <CardFooter>
                      <Button
                        onClick={() => handleAddToCart(item)}
                        variant='solid'
                        colorScheme='blue'
                      >
                        +
                      </Button>
                      <Button
                        onClick={() => handleAddToCart(item)}
                        variant='solid'
                      >
                        -
                      </Button>
                      <Spacer />
                      <Button onClick={() => handleAddToCart(item)}>
                        Remove
                      </Button>
                    </CardFooter>
                  </Stack>
                </Card>
              ))
            )}
          </List>
        </GridItem>
        <GridItem rowSpan={1} colSpan={1} bg='papayawhip'>
          <Text>Total: 000 RUB</Text>
        </GridItem>
      </Grid>
    </Box>
  );
};
export default CartPage;
