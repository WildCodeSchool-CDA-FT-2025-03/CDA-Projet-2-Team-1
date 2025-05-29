import useModal from '@/context/ModalNav';
import { useRef, useEffect } from 'react';

function Modal() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { currentContent, isOpen, setIsOpen } = useModal();

  //useEffect pour gérer l'ouverture/fermeture et les événements de la modale
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    // Fermer la modale lorsque l'utilisateur appuie sur Escape
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    // Fermer la modale lorsque l'utilisateur clique à l'extérieur
    const handleBackdropClick = (e: MouseEvent) => {
      const rect = dialog.getBoundingClientRect();
      if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      ) {
        setIsOpen(false);
      }
    };

    // Affichage de la modale
    if (isOpen) {
      dialog.showModal();

      // Ajout des événements de fermeture a11y de la modale
      dialog.addEventListener('keydown', handleKeyDown);
      dialog.addEventListener('click', handleBackdropClick);
    } else {
      dialog.close();
    }

    // Nettoyage des événements
    return () => {
      dialog.removeEventListener('keydown', handleKeyDown);
      dialog.removeEventListener('click', handleBackdropClick);
    };
  }, [isOpen, currentContent, setIsOpen]);

  return (
    <dialog
      ref={dialogRef}
      className="z-50 m-0 p-6 min-h-screen fixed top-0 right-0 left-auto bottom-0 w-3/7 max-w-[700px] border-l border-gray-200 rounded-none bg-white shadow-xl backdrop:bg-transparent backdrop:backdrop-blur-xs pointer-events-auto"
      aria-labelledby="dialog-title"
      aria-describedby="dialog-desc"
    >
      <button
        type="button"
        onClick={() => setIsOpen(false)}
        className="p-2 text-gray-600 hover:text-gray-800 cursor-pointer"
        aria-label="Fermer le panneau"
      >
        {'>>'}
      </button>
      {currentContent}
    </dialog>
  );
}

export default Modal;
