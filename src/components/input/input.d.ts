export interface InputProps {
  label?: string;
  placeholder: string;
  type: string;
  width?: string;
  value?: string; // Adicionando a propriedade value à interface
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
