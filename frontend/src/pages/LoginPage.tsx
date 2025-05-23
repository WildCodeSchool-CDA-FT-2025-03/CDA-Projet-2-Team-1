import LoginRoot from '../components/LoginRoot/LoginRoot';
import style from './LoginPage.module.css';

function LoginPage() {
  return (
    <div className={`LoginPage ${style.Page}`}>
      <main className={style.Main}>
        <LoginRoot />
      </main>
    </div>
  );
}

export default LoginPage;
