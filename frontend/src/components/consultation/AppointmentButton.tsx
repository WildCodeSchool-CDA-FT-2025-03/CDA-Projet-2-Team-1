import { Button } from '@/components/ui/button';

interface AppointmentButtonProps {
  onClick: () => void;
}

export function AppointmentButton({ onClick }: AppointmentButtonProps) {
  return (
    <div className="p-4">
      <Button onClick={onClick} className="bg-[#0395d3] hover:bg-[#0284bc] text-white">
        Programer un rendez-vous
      </Button>
    </div>
  );
}
