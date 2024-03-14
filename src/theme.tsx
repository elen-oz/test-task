import { extendTheme } from '@chakra-ui/react';
import '@fontsource-variable/nunito';

const theme = extendTheme({
  fonts: {
    heading: `'Nunito Variable', sans-serif`,
    body: `'Nunito Variable', sans-serif`,
  },
});

export default theme;
