import { createBrowserRouter } from 'react-router';
import App from '../App';
import SecretaryPage from '../pages/SecretaryPage';
import DoctorPage from '../pages/DoctorPage';
import AgentPage from '../pages/AgentPage';
import AdminPage from '../pages/AdminPage';

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
]);
export default router;
