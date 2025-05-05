import { createBrowserRouter } from 'react-router';

import App from '../App';
import AdminPage from '../pages/AdminPage';
import AgentPage from '../pages/AgentPage';
import DoctorPage from '../pages/DoctorPage';
import LoginPage from '../pages/Login';
import SecretaryPage from '../pages/SecretaryPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/secretary',
        element: <SecretaryPage />,
      },
      {
        path: '/doctor',
        element: <DoctorPage />,
      },
      {
        path: '/agent',
        element: <AgentPage />,
      },
      {
        path: '/admin',
        element: <AdminPage />,
      },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);

export default router;
