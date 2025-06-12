import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

interface AppointmentButtonProps {
  onClick: () => void;
}

export function AppointmentButton({ onClick }: AppointmentButtonProps) {
  return (
    <Button
      onClick={onClick}
      className="w-full h-12 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-lg shadow-sm transition-all duration-200 flex items-center justify-center gap-2"
    >
      <Plus className="h-5 w-5" />
      Ajouter un nouveau rendez-vous
    </Button>
  );
}
