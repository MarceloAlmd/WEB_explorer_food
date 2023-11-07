import { ButtonProps } from "./button";
import * as Styles from "./button.styles";

export function Button({ title, type, ...rest }: ButtonProps) {
  return (
    <Styles.Container type={type} {...rest}>
      {title}
    </Styles.Container>
  );
}
