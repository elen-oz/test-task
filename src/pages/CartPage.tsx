import { Box, Grid, GridItem, List, ListItem, Text } from '@chakra-ui/react';

const CartPage = () => {
  return (
    <Box h='100vh' p={2}>
      <Grid h='100%' templateColumns='repeat(4, 1fr)' gap={2}>
        <GridItem colSpan={3} bg='papayawhip'>
          <Text>Корзина</Text>
          <List>
            <ListItem>Lorem ipsum dolor sit amet</ListItem>
            <ListItem>Consectetur adipiscing elit</ListItem>
            <ListItem>Integer molestie lorem at massa</ListItem>
            <ListItem>Facilisis in pretium nisl aliquet</ListItem>
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
