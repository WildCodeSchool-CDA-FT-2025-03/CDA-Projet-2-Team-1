import './App.css';
import { Outlet } from 'react-router-dom';
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
