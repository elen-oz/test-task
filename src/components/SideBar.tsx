import { Box } from '@chakra-ui/react';
import { formatNumber } from '../utils';

type Props = {
  totalAmount: number;
};

const SideBar = ({ totalAmount }: Props) => {
  return (
    <Box p='3rem' fontSize='xl'>
      Всего: {formatNumber(totalAmount)}руб.
    </Box>
  );
};
export default SideBar;
