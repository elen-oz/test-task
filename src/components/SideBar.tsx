import { Box } from '@chakra-ui/react';
import { formatNumber } from '../utils';

type Props = {
  totalAmount: number;
  isLoading: boolean;
};

const SideBar = ({ totalAmount, isLoading }: Props) => {
  return (
    <Box p='3rem' fontSize='xl'>
      {isLoading && `Загрузка корзины...`}
      {!isLoading && `Всего: ${formatNumber(totalAmount)}руб.`}
    </Box>
  );
};
export default SideBar;
