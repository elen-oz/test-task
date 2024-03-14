import { Box } from '@chakra-ui/react';

type Props = {
  totalAmount: number;
};

const SideBar = ({ totalAmount }: Props) => {
  const roundNumber = (num) => {
    return num.toFixed(2);
  };

  return (
    <Box p='3rem' fontSize='xl'>
      Всего: {roundNumber(totalAmount)}руб.
    </Box>
  );
};
export default SideBar;
