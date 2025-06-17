import { createBrowserRouter } from 'react-router';
import App from '../App';
// Components
import ConsultationDetails from '@/components/consultation/ConsultationDetails';
import CreatePatient from '@/components/patients/CreatePatient';
import Modal from '@/components/Modal';
// Pages
import AdminPage from '../pages/AdminPage';
import AgentPage from '../pages/AgentPage';
import DoctorPage from '../pages/DoctorPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import SecretaryPage from '../pages/SecretaryPage';
import RestPassword from '@/components/form/RestPassword';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/password',
    element: <HomePage />,
    children: [
      {
        path: 'reset',
        element: <RestPassword />,
      },
    ],
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
          {
            path: 'consultation/:id',
            element: (
              <Modal>
                <ConsultationDetails />
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
