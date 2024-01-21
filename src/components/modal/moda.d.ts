export interface ModalProps {
  message: string;
  cancel: () => void;
  confirm: () => void;
  onCLose: () => void;
}
