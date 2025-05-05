import { Outlet } from 'react-router';
import Header from '../components/header/header';

function App() {
  return (
    <>
      <Header />
      <div className="card">
        <p className="bg-red-500">
          Bienvenue sur Care-Plan votre site de santé
        </p>
        <Outlet />
      </div>
    </>
  );
}

export default App;
