import { ChakraProvider, extendTheme, ThemeConfig } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import type { AppProps } from 'next/app'
// import Navbar from '../components/Header/Header'
import '../styles/globals.css'

const NavBarWithNoSSR = dynamic(import('../components/Header/Header'), {
  ssr: false
})

function MyApp({ Component, pageProps }: AppProps) {

  const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
  }

  const theme = extendTheme({ config })

  return (
    <ChakraProvider theme={theme}>
      <NavBarWithNoSSR />
      <Component {...pageProps} />
    </ChakraProvider>)
}

export default MyApp
