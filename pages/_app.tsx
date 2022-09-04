import { useState } from 'react';
import type { AppProps } from 'next/app'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query';
import { ChakraProvider } from '@chakra-ui/react';
import '../styles/globals.scss'

const App = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient())
  return (
    <QueryClientProvider client={queryClient}>
        <ChakraProvider>
      <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
      </Hydrate>
        </ChakraProvider>
    </QueryClientProvider>
  )
}

export default App
