import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './lib/apollo-client.ts';
// pages
import App from './App.tsx';
import AdminPage from './pages/AdminPage.tsx';
import AgentPage from './pages/AgentPage.tsx';
import DoctorPage from './pages/DoctorPage.tsx';
import SecretaryPage from './pages/SecretaryPage.tsx';
// styles
import './index.css';

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
