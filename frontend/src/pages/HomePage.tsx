import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';
import IllustrationLogin from '/login.webp';
import LogoCarePlanFull from '/logo-cp-full.svg';

function HomePage() {
  return (
    <section className="w-full min-h-screen flex flex-row" role="main">
      {/* Image latérale (décorative) */}
      <aside
        className="hidden md:flex w-1/2 items-center justify-center bg-white"
        aria-hidden="true"
      >
        <img src={IllustrationLogin} alt="" className="max-w-full h-auto" />
      </aside>
      {/* Section formulaire */}
      <section className="w-full md:w-1/2 p-4 flex flex-col items-center justify-center gap-4 bg-turquoise-50">
        <img
          src={LogoCarePlanFull}
          alt="Logo de l'application Care Plan"
          className="w-56 md:w-72 my-12"
        />
        <Outlet />
      </section>
      <ToastContainer />
    </section>
  );
}

export default HomePage;
