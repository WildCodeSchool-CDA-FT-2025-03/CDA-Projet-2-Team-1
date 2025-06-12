import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './dialog';

import { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader className="relative">
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            Remplissez les informations ci-dessous pour créer un nouveau rendez-vous.
          </DialogDescription>
          <button
            className="absolute top-0 right-0 bg-transparent border-none cursor-pointer text-xl p-1 text-inherit hover:opacity-70 focus:outline-2 focus:outline-sky-500 focus:outline-offset-2 rounded"
            onClick={onClose}
            aria-label="Fermer la modal"
          >
            ✕
          </button>
        </DialogHeader>
        <div className="flex-1 overflow-hidden">{children}</div>
      </DialogContent>
    </Dialog>
  );
}
