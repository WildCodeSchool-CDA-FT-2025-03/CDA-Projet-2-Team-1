import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './lib/apollo-client.ts';
import { AuthProvider } from './context/Auth.context.tsx';
import router from './router/router.tsx';

// styles
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <ApolloProvider client={apolloClient}>
        <RouterProvider router={router} />
      </ApolloProvider>
    </AuthProvider>
  </StrictMode>
);
