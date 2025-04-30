import { Outlet } from 'react-router';

function App() {
  return (
    <>
      <div className="card">
        <p>Bienvenue sur Care-Plan votre site de santé</p>
        <Outlet />
      </div>
    </>
  );
}

export default App;