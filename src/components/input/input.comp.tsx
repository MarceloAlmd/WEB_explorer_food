import { InputProps } from "./input";
import * as Styles from "./input.comp.styles";

export function Input({ label, placeholder, type }: InputProps) {
  return (
    <Styles.Container>
      <label htmlFor="input">{label}</label>
      <input placeholder={placeholder} type={type} id="input" />
    </Styles.Container>
  );
}
