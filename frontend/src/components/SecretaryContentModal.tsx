import { AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Modal } from "./Modal";
import { X } from "lucide-react";
import { useState } from "react";

interface SecretaryContentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SecretaryContentModal({ isOpen, onClose }: SecretaryContentModalProps) {
  const [isClosing, setIsClosing] = useState(false);

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
                variant="ghost"
                className="absolute -top-2 -right-2 h-8 w-8 p-0 rounded-full hover:bg-gray-100"
                aria-label="Fermer"
                onClick={handleClose}
              >
                <X className="h-4 w-4" />
              </Button>
            </DialogClose>
            <form className="space-y-4 py-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="patientName" className="text-sm font-medium">
                  Nom du patient
                </Label>
                <Input
                  id="patientName"
                  placeholder="Entrez le nom du patient"
                  className="border-2 border-[#0395d3] focus:border-[#0395d3] focus:ring-1 focus:ring-[#0395d3]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="date" className="text-sm font-medium">
                  Date
                </Label>
                <Input
                  id="date"
                  type="date"
                  className="border-2 border-[#0395d3] focus:border-[#0395d3] focus:ring-1 focus:ring-[#0395d3]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="time" className="text-sm font-medium">
                  Heure
                </Label>
                <Input
                  id="time"
                  type="time"
                  className="border-2 border-[#0395d3] focus:border-[#0395d3] focus:ring-1 focus:ring-[#0395d3]"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="doctor" className="text-sm font-medium">
                  Médecin
                </Label>
                <Input
                  id="doctor"
                  placeholder="Sélectionnez le médecin"
                  className="border-2 border-[#0395d3] focus:border-[#0395d3] focus:ring-1 focus:ring-[#0395d3]"
                />
              </div>
              <div className="flex justify-end pt-4">
                <Button
                  type="submit"
                  className="bg-[#0395d3] hover:bg-[#0284bc] text-white px-6"
                >
                  Valider
                </Button>
              </div>
            </form>
          </div>
        </Modal>
      )}
    </AnimatePresence>
  );
} 