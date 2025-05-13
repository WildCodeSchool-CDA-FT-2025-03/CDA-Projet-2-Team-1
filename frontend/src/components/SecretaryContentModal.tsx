import { useEffect, useRef, useState } from "react";

import { AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Modal } from "./Modal";
import { X } from "lucide-react";

interface SecretaryContentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SecretaryContentModal({ isOpen, onClose }: SecretaryContentModalProps) {
  const [isClosing, setIsClosing] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isOpen]);

  const handleClose = () => {
    if (!isClosing) {
      setIsClosing(true);
      setTimeout(() => {
        setIsClosing(false);
        onClose();
      }, 300);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleClose();
  };

  return (
    <AnimatePresence mode="wait" onExitComplete={() => setIsClosing(false)}>
      {(isOpen || isClosing) && (
        <Modal isOpen={isOpen} onClose={handleClose} title="Nouveau rendez-vous">
          <div className="relative">
            <DialogClose asChild>
              <Button
                ref={closeButtonRef}
                variant="ghost"
                className="absolute -top-2 -right-2 h-8 w-8 p-0 rounded-full hover:bg-gray-100"
                aria-label="Fermer"
                onClick={handleClose}
              >
                <X className="h-4 w-4" />
              </Button>
            </DialogClose>
          </div>
        </Modal>
      )}
    </AnimatePresence>
  );
} 