import { InputProps } from "./input";
import * as Styles from "./input.comp.styles";

export function Input({
  width = "100%",
  label,
  placeholder,
  type,
  ...rest
}: InputProps) {
  return (
    <Styles.Container {...rest}>
      {label && <label>{label}</label>}

      <input style={{ width: width }} placeholder={placeholder} type={type} />
    </Styles.Container>
  );
}
