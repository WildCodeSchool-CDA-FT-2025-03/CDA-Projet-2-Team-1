import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter } from 'react-router';
// eslint-disable-next-line no-duplicate-imports
import { RouterProvider } from 'react-router';
import './index.css';
import App from './App.tsx';
import SecretaryPage from '../Pages/SecretaryPage';
import DoctorPage from '../Pages/DoctorPage';
import AgentPage from '../Pages/AgentPage';
import AdminPage from '../Pages/AdminPage';

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
    <RouterProvider router={router} />
  </StrictMode>,
);
