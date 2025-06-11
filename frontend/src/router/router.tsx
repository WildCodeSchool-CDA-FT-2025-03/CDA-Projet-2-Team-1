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
import LoginPage from '../pages/LoginPage';
import SecretaryPage from '../pages/SecretaryPage';

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
