import { ButtonProps } from "./button";
import * as Styles from "./button.styles";

export function Button({ width = "100%", title, type, ...rest }: ButtonProps) {
  return (
    <Styles.Container style={{ width: width }} type={type} {...rest}>
      {title}
    </Styles.Container>
  );
}
