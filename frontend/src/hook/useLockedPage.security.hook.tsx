import useAuthCheck from './useAuthCheck.utils.hook';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

type UserType = 'admin' | 'medecin' | 'secretaire' | 'agent';

function useLockedPage(userTarget: UserType) {
  const { isLoggedIn, userInfo, isChecking } = useAuthCheck();
  const navigate = useNavigate();

  let userVerify = 0;
  let redirectRoute = '/';

  /* En fonction de l'utilisateur autorisé, on met a jours les valeur de userVerify et redirectedRoute */
  switch (userTarget) {
    case 'admin':
      userVerify = 1;
      redirectRoute = '/admin';
      break;
    case 'medecin':
      userVerify = 2;
      redirectRoute = '/doctor';
      break;
    case 'secretaire':
      userVerify = 3;
      redirectRoute = '/secretary';
      break;
    case 'agent':
      userVerify = 4;
      redirectRoute = '/agent';
      break;
  }

  useEffect(() => {
    // On attend la fin des vérifications pour agir
    /* Si la férification est terminé, que toute les data du userInfo sont disponible et que role_id n'est pas autorisé avec le role définit en paramètre */
    if (!isChecking && userInfo && userInfo.role_id !== userVerify) {
      // Redirection vers la bonne page pour cet utilisateur
      switch (userInfo.role_id) {
        case 1:
          navigate('/admin', { replace: true });
          break;
        case 2:
          navigate('/doctor', { replace: true });
          break;
        case 3:
          navigate('/secretary', { replace: true });
          break;
        case 4:
          navigate('/agent', { replace: true });
          break;
        default:
          navigate('/', { replace: true }); // Fallback
      }
    }
  }, [isChecking, userInfo, navigate, userVerify, redirectRoute]);

  if (isChecking) return null;
  if (!isLoggedIn || !userInfo || userInfo.role_id !== userVerify) return null;

  return userInfo;
}

export default useLockedPage;

/**
  Notice d'utilisation :

  import useLockedPage from "../../hook/useLockedPage.security.hook";

  const userInfo = useLockedPage("admin");
  if (!userInfo) return <p>Chargement...</p>;
 */
