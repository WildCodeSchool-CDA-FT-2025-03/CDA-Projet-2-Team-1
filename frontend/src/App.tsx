import { Outlet } from 'react-router';

function App() {
  return (
    <>
      <div className="card">
        <p className='bg-red-500'>Bienvenue sur Care-Plan votre site de santé</p>
        <Outlet />
      </div>
    </>
  );
}

export default App;