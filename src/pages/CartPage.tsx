import { useSelector } from 'react-redux';

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
} from '@chakra-ui/react';

const CartPage = () => {
  const { status, items } = useSelector((state) =>
    state ? state.products : null
  );

  const isLoading = status !== 'success';

  // console.log('isLoaded', isLoaded);
  console.log('items', items);
  // console.log('status', status);

  return (
    <Box h='100vh' p={2}>
      <Grid h='100%' templateColumns='repeat(4, 1fr)' gap={2}>
        <GridItem colSpan={3} bg='papayawhip'>
          <Text>Корзина</Text>

          <List>
            {isLoading ? (
              <Center>
                <Spinner />
              </Center>
            ) : (
              items.map((item) => (
                <ListItem key={item.id}>
                  <Flex alignItems='center' gap='2'>
                    <Box w='100px'>
                      <Image
                        src={item.image}
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
                              {item.title}
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          {item.description}
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>

                    <Text>quantity</Text>
                    <Text w='50px' textAlign='right'>
                      {item.price}
                    </Text>
                  </Flex>
                </ListItem>
              ))
            )}
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
