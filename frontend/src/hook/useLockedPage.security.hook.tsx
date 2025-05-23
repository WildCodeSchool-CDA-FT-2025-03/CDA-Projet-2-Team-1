import useAuthCheck from './useAuthCheck.utils.hook';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

type UserType = 'admin' | 'medecin' | 'secretaire' | 'agent';

/* Cette fonction prend en parametre une string qui indique quel utilisateur est autorisé sur la page */
function useLockedPage(userTarget: UserType) {
  const { isLoggedIn, userInfo, isChecking } = useAuthCheck();
  const navigate = useNavigate();

  let userVerify: number = 0;
  let redirectRoute: string = '';
  /* Détermination du rôle interdit et de la route de redirection */
  if (userTarget === 'admin') {
    userVerify = 1;
    redirectRoute = '/';
  }
  if (userTarget === 'medecin') {
    userVerify = 2;
    redirectRoute = '/doctor';
  }
  if (userTarget === 'secretaire') {
    userVerify = 3;
    redirectRoute = '/secretary';
  }
  if (userTarget === 'agent') {
    userVerify = 4;
    redirectRoute = '/agent';
  }

  // Vérification du Role et de la connexion pour forcer la redirection
  useEffect(() => {
    if (!isChecking && userInfo && userInfo.role_id !== userVerify) {
      navigate(redirectRoute);
    }
  }, [isChecking, userInfo, navigate, redirectRoute, userVerify]);

  // En attente de vérification du token
  if (isChecking) return null;

  // Sécurité supplémentaire
  if (!isLoggedIn || !userInfo) return null;

  return userInfo;
}

export default useLockedPage;

/**
  Notice d'utilisation :

  import useLockedPage from "../../hook/useLockedPage.security.hook";

  const userInfo = useLockedPage("admin");
  if (!userInfo) return <p>Chargement...</p>;
 */
