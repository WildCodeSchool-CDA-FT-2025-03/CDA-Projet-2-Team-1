import { useState } from 'react';
import { useNavigate } from 'react-router';
import css from './LoginRoot.module.css';
import { useAuth } from '../../context/Auth.context';

function LoginRoot() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setUser } = useAuth();

  async function formulaireLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch(`${import.meta.env.VITE_DOMAIN_AUTH_SERVICE}/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Identifiants incorrects.');
      }

      // On ne stocke les données utilisateur dans le contexte qu'après la connexion réussie
      setUser(data.data);
      const user = data.data;

      // Redirection selon le rôle
      if (user.role_id === 1) {
        navigate('/admin');
      }
      if (user.role_id === 2) {
        navigate('/doctor');
      }
      if (user.role_id === 3) {
        navigate('/secretary');
      }
      if (user.role_id === 4) {
        navigate('/agent');
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error('Erreur login:', err.message);
        setError(err.message);
      } else {
        setError('Erreur inconnue lors de la connexion.');
      }
    }
  }

  return (
    <section className={css.LoginRoot}>
      <h1>Connexion 🔐</h1>
      <form onSubmit={formulaireLogin} className={css.form}>
        <label htmlFor="Email">Email</label>
        <input
          className={css.input}
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Mot de passe</label>
        <input
          className={css.input}
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className={css.Button}>
          Se connecter
        </button>
        {error && <p className={css.error}>{error}</p>}
      </form>
    </section>
  );
}

export default LoginRoot;
