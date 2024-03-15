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
  Spinner,
} from '@chakra-ui/react';
import { AddIcon, MinusIcon, DeleteIcon } from '@chakra-ui/icons';
import { formatNumber } from '../utils';
import { type Product } from '../models';

type Props = {
  products: Product[];
  add: (product: Product) => void;
  decrease: (product: Product) => void;
  remove: (product: Product) => void;
  isLoading: boolean;
};

const CartSection = (props: Props) => {
  const { products, add, decrease, remove, isLoading } = props;

  return (
    <Box mx='auto' h='100vh' overflow='scroll'>
      <HStack p={3} fontSize='4xl'>
        <Text as='h1' fontSize='3xl' p='5'>
          Ваша корзина
        </Text>
      </HStack>
      {isLoading && (
        <Box>
          <AbsoluteCenter fontSize='3xl'>
            <Spinner />
          </AbsoluteCenter>
        </Box>
      )}
      {!isLoading && products.length === 0 ? (
        <Box>
          <AbsoluteCenter fontSize='3xl'>Корзина пуста</AbsoluteCenter>
        </Box>
      ) : (
        <List px={{ md: '1rem', lg: '1rem' }}>
          {products.map((item, index) => (
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
                      gap={5}
                    >
                      <GridItem colSpan={[5, 5, 5, 5, 4]}>
                        <Heading size='md'>{item.title}</Heading>
                        <Text py='2'>{item.description}</Text>
                      </GridItem>
                      <GridItem colSpan={[5, 5, 5, 5, 1]}>
                        <HStack spacing={2}>
                          <Text fontSize='lg'>{formatNumber(item.price)}&#8381;</Text>
                          <Button
                            onClick={() => add(item)}
                            variant='solid'
                            colorScheme='blue'
                            size='xs'
                          >
                            <AddIcon />
                          </Button>
                          <Text w='5' textAlign='center'>
                            {item.cartQuantity}
                          </Text>
                          <Button
                            onClick={() => decrease(item)}
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
                    <Button onClick={() => remove(item)}>
                      <DeleteIcon />
                    </Button>
                  </CardFooter>
                </Stack>
              </Card>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};
export default CartSection;
