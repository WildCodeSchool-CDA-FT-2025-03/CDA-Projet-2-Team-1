import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import DataUserType from '../types/DataUser.type';
import { useAuth } from '../context/Auth.context';

const useAuthCheck = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false); // False = non connecté
  const [userInfo, setUserInfo] = useState<DataUserType | null>(null); // DataUser
  const [isChecking, setIsChecking] = useState<boolean>(true); // True = en cours de vérification
  const { user, setUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    /* Si pas connecté donc contexte vide alors on redirige vers la page Login */
    if (!user) {
      navigate('/login');
      return;
    }

    try {
      /* Vérification de la date d'expiration */
      const now: number = Math.floor(Date.now() / 1000);
      /* Vérification si exp n'est pas undefined et si exp n'est pas < à la date d'expiration */
      if (user.exp && user.exp < now) {
        /* Force la déconnexion */
        setUser(null); /* Supprime les données utilisateur */
        navigate('/login'); /* Redirige */
        return;
      }

      setUserInfo(user); /* Mise a disposition des données utilisateur Vérifié */
      setIsLoggedIn(true); /* Utilisateur connecté */
    } catch {
      setUser(null); /* Supprime les données utilisateur en cas de problème */
      navigate('/login'); /* Redirige vers Login */
    } finally {
      setIsChecking(false); /* Fin de la vérification */
    }
  }, [navigate, user, setUser]);

  return { isLoggedIn, userInfo, isChecking };
};

export default useAuthCheck;

/*
Utilisation :

import useAuthCheck from "../hooks/useAuthCheck";
const { isLoggedIn, userInfo, isChecking  } = useAuthCheck();

if (!isLoggedIn || !userInfo) {
    return <p>Chargement ou redirection...</p>;
  }

*/
