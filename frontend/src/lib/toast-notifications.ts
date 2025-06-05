import { Id, toast } from 'react-toastify';

// Types simplifiés pour votre usage
export type ToastType = 'success' | 'error' | 'loading';

export interface SimpleToastOptions {
  duration?: number;
}

// Styles simplifiés qui ne conflictent pas avec les CSS
const styles = {
  success: {
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  },
  error: {
    autoClose: 6000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  },
  loading: {
    autoClose: false,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
  },
};

// Classe simplifiée pour vos besoins spécifiques
export class ToastNotifications {
  // Toast d'erreur simple
  static error(message: string, options?: SimpleToastOptions): Id {
    return toast.error(message, {
      ...styles.error,
      autoClose: options?.duration || styles.error.autoClose,
    });
  }

  // Toast de succès
  static success(message: string, options?: SimpleToastOptions): Id {
    return toast.success(message, {
      ...styles.success,
      autoClose: options?.duration || styles.success.autoClose,
    });
  }

  // Toast de chargement
  static loading(message: string): Id {
    return toast.loading(message, styles.loading);
  }

  // Mettre à jour un toast - VERSION CORRIGÉE
  static update(toastId: Id, type: 'success', message: string, options?: SimpleToastOptions): void {
    toast.update(toastId, {
      render: message,
      type: 'success',
      isLoading: false,
      autoClose: options?.duration || styles.success.autoClose,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      closeButton: true, // Important : s'assurer que le bouton de fermeture est activé
    });
  }

  // Toast d'erreur pour les opérations CRUD
  static crudError(
    operation: 'création' | 'modification' | 'suppression',
    entity: string,
    error?: string
  ): Id {
    const message = `Erreur lors de la ${operation} ${entity}`;
    const fullMessage = error ? `${message}\n${error}` : message;

    return toast.error(fullMessage, {
      ...styles.error,
      autoClose: 8000,
    });
  }

  // Fermer un toast spécifique
  static dismiss(toastId?: Id): void {
    toast.dismiss(toastId);
  }

  // Fermer tous les toasts
  static dismissAll(): void {
    toast.dismiss();
  }
}

// Export simplifié
export const showToast = ToastNotifications;
export default ToastNotifications;
