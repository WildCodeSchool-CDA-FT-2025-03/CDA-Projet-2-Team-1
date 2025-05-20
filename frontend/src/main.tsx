import './index.css';

import { RouterProvider, createBrowserRouter } from 'react-router';

import AdminPage from './pages/AdminPage.tsx';
import AgentPage from './pages/AgentPage.tsx';
import { ApolloProvider } from '@apollo/client';
import App from './App.tsx';
import DoctorPage from './pages/DoctorPage.tsx';
import SecretaryPage from './pages/SecretaryPage.tsx';
import { StrictMode } from 'react';
import { apolloClient } from './lib/apollo-client';
import { createRoot } from 'react-dom/client';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: 'secretary', element: <SecretaryPage /> },
      { path: 'doctor', element: <DoctorPage /> },
      { path: 'agent', element: <AgentPage /> },
      { path: 'admin', element: <AdminPage /> },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={apolloClient}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </StrictMode>
);
