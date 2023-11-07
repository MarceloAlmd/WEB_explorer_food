import { ButtonProps } from "./button";
import * as Styles from "./button.styles";

export function Button({
  width = "100%",
  title,
  type,
  icon: Icon,
  ...rest
}: ButtonProps) {
  return (
    <Styles.Container type={type} style={{ width: width }} {...rest}>
      {Icon && <Icon />}
      {title}
    </Styles.Container>
  );
}
