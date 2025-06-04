import { createBrowserRouter } from 'react-router';

import App from '../App';
import AdminPage from '../pages/AdminPage';
import AgentPage from '../pages/AgentPage';
import DoctorPage from '../pages/DoctorPage';
import SecretaryPage from '../pages/SecretaryPage';
import CreatePatient from '@/components/patients/CreatePatient';
import Modal from '@/components/Modal';
import LoginPage from '@/pages/LoginPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'secretary',
        element: <SecretaryPage />,
        children: [
          {
            path: 'patient/creation',
            element: (
              <Modal>
                <CreatePatient />
              </Modal>
            ),
          },
        ],
      },
      {
        path: 'doctor',
        element: <DoctorPage />,
      },
      {
        path: 'agent',
        element: <AgentPage />,
      },
      {
        path: 'admin',
        element: <AdminPage />,
      },
    ],
  },
]);
export default router;
