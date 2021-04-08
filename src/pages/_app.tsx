import { ChakraProvider, ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/react';
import { Chakra } from '../Chakra';
import { theme } from '../theme'

function MyApp({ Component, pageProps }) {
  return (
    <Chakra cookies={pageProps.cookies}>
      <ChakraProvider theme={theme}>
        <ColorModeProvider 
          options={theme.config}
        >
          <CSSReset />
          <Component {...pageProps} />
        </ColorModeProvider>
      </ChakraProvider>
    </Chakra>
  )
}

export default MyApp

export { getServerSideProps } from '../Chakra';
