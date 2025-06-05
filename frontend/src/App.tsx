import Header from './components/header/header';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <Header />
      <div className="app">
        <Outlet />
      </div>

      {/* Configuration simplifiée et fonctionnelle */}
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick={true}
        pauseOnFocusLoss={true}
        draggable={true}
        pauseOnHover={true}
        theme="light"
        limit={3}
      />
    </>
  );
}

export default App;
