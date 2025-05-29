import { Outlet } from 'react-router';
import Header from './components/header/header';
import { ModalNavProvider } from './context/ModalNav';

function App() {
  return (
    <>
      <Header />
      <div className="app">
        <ModalNavProvider>
          <Outlet />
        </ModalNavProvider>
      </div>
    </>
  );
}

export default App;
