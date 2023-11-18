export interface ButtonProps {
  title: string;
  type: "button" | "submit" | "reset" | undefined;
  width?: string;
  icon?: string;
  disabled?: boolean;
  onClick?: () => void;
}
