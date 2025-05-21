export type RestProps = {
  user_id: string;
};

export type RestModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (type: string) => void;
  selectedDates: { start: Date; end: Date } | null;
};
