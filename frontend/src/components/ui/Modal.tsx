import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './dialog';

import { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export function Modal({ isOpen, onClose: _onClose, title, children }: ModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            Remplissez les informations ci-dessous pour créer un nouveau rendez-vous.
          </DialogDescription>
        </DialogHeader>
        <div className="flex-1 overflow-hidden">{children}</div>
      </DialogContent>
    </Dialog>
  );
}
