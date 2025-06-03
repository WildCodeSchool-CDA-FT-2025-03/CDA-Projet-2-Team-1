import { Outlet } from 'react-router';
import Header from './components/header/header';

function App() {
  return (
    <>
      <Header />
      <div className="app">
        <Outlet />
      </div>
    </>
  );
}

export default App;
