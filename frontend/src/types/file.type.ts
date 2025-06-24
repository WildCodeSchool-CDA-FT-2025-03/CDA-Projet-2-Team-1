export type UploadedFile = {
  id: string;
  name: string;
  path: string;
  created_at: string;
  is_confidential: boolean;
};

export type UploadFileProps = {
  consultationId: string;
  onUploadSuccess?: (file: UploadedFile) => void;
};
