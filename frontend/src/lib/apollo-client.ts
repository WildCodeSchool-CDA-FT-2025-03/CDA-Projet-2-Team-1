import { ApolloClient, InMemoryCache } from '@apollo/client';

// 🧠 Apollo Client
export const apolloClient = new ApolloClient({
  uri: `/graphql`,
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'network-only',
    },
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    },
  },
  connectToDevTools: true,
});
