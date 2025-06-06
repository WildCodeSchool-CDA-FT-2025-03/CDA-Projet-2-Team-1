import { createContext, useContext, useMemo, useState } from 'react';
import DataUserType from '../types/DataUser.type';

/* -------------------------------------------------------------------------------- */
/* Typage du contexte */
interface AuthContextType {
  user: DataUserType | null;
  setUser: React.Dispatch<React.SetStateAction<DataUserType | null>>;
}

/* Typage des props enfants */
interface AuthProviderProps {
  children: React.ReactNode;
}

/* -------------------------------------------------------------------------------- */
/* Création du contexte */
const AuthContext = createContext<AuthContextType | null>(null);

/* -------------------------------------------------------------------------------- */
/* Provider du contexte */
export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<DataUserType | null>(null);

  // Mémoïsation de la valeur du contexte pour éviter les re-rendus inutiles
  const value = useMemo(() => ({ user, setUser }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

/* -------------------------------------------------------------------------------- */
/* Hook personnalisé pour utiliser le contexte */
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth doit être utilisé à l'intérieur d’un AuthProvider.");
  }
  return context;
};
