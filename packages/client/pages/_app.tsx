import '../styles/globals.css';
import type { AppProps } from 'next/app';
import getConfig from 'next/config';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: `${getConfig().publicRuntimeConfig.apiBaseUrl}/api`,
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
export default MyApp;
