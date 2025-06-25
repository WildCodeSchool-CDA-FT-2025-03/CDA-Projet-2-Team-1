import { Outlet } from 'react-router';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <main className="h-[calc(100vh-10rem)] flex flex-col gap-8 p-4 md:p-8 lg:p-12 xl:p-16">
        <Outlet />
      </main>
    </>
  );
}

export default App;
