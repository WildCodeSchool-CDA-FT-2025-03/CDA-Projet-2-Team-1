// import LoginRoot from '../components/LoginRoot/LoginRoot';
import style from './LoginPage.module.css';
import Login from '../components/LoginRoot/Login';

function LoginPage() {
  return (
    <div className={`LoginPage ${style.Page}`}>
      <main className={style.Main}>
        {/* <LoginRoot /> */}
        <Login />
      </main>
    </div>
  );
}

export default LoginPage;
