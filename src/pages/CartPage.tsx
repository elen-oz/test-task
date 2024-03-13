import { useSelector, useDispatch } from 'react-redux';
import {
  productsFetch,
  selectStatus,
  selectItems,
} from '../slices/productSlice';

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
} from '@chakra-ui/react';

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
                <ListItem key={product.id}>
                  <Flex alignItems='center' gap='2'>
                    <Box w='100px'>
                      <Image
                        src={product.image}
                        boxSize='100%'
                        objectFit='cover'
                        alt='Product Image'
                      />
                    </Box>

                    <Accordion allowToggle w='400px'>
                      <AccordionItem>
                        <h2>
                          <AccordionButton>
                            <Box as='span' flex='1' textAlign='left'>
                              {product.title}
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          {product.description}
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>

                    <Text>quantity</Text>
                    <Text w='50px' textAlign='right'>
                      {product.price}
                    </Text>
                  </Flex>
                </ListItem>
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
