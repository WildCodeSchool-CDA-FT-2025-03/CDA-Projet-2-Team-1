import AdminPage from '../pages/AdminPage';
import AgentPage from '../pages/AgentPage';
import App from '../App';
import ConsultationDetails from '@/components/consultation/ConsultationDetails';
import CreateAppointmentDialog from '@/components/consultation/CreateAppointmentDialog';
import CreatePatient from '@/components/patients/CreatePatient';
import DoctorPage from '../pages/DoctorPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import Modal from '@/components/Modal';
import SecretaryPage from '../pages/SecretaryPage';
import { createBrowserRouter } from 'react-router';
import RestPassword from '@/components/user/RestPassword';

const router = createBrowserRouter([
  //TOFIX: rework LoginPage avec HomePage
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
            path: 'appointment/creation',
            element: (
              <Modal>
                <CreateAppointmentDialog />
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
