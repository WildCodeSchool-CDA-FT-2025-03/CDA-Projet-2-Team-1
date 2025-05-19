// apollo-client.ts

import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

import { RetryLink } from '@apollo/client/link/retry';
import { onError } from '@apollo/client/link/error';

// 🔗 HTTP Link : lien vers ton serveur GraphQL
const httpLink = createHttpLink({
  uri: `${import.meta.env.VITE_APOLLO_SERVER}/graphql`,
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json',
  },
});

// 🔁 Retry Link : en cas d'échec, retente automatiquement
const retryLink = new RetryLink({
  attempts: {
    max: 3,
    retryIf: (error, _operation) => !!error,
  },
  delay: {
    initial: 500,
    max: 2000,
    jitter: true,
  },
});

// ⚠️ Error Link : gère les erreurs réseau ou GraphQL
const errorLink = onError(({ networkError, graphQLErrors }) => {
  if (networkError) {
    // TODO: Implémenter un système de notification d'erreur
    // Par exemple: toast.error('Erreur de connexion au serveur');
  }
  if (graphQLErrors?.length) {
    graphQLErrors.forEach((_err) => {
      // TODO: Implémenter un système de notification d'erreur
      // Par exemple: toast.error(`Erreur GraphQL: ${_err.message}`);
    });
  }
});

// 🧠 Apollo Client
export const apolloClient = new ApolloClient({
  link: retryLink.concat(errorLink).concat(httpLink),
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
