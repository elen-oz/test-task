import { Link } from 'react-router-dom';
import { Center, Box, VStack, AbsoluteCenter } from '@chakra-ui/react';

const ErrorPage = () => {
  return (
    <VStack h='100vh'>
      <AbsoluteCenter>
        <Box fontSize='2xl'>404: Страница нен найдена</Box>
        <Link to='/'>
          <Center as='u'>Вернуться на главную</Center>
        </Link>
      </AbsoluteCenter>
    </VStack>
  );
};
export default ErrorPage;
