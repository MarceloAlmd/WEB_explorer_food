import { ButtonProps } from "./button";
import * as Styles from "./button.styles";

export function Button({
  width = "100%",
  title,
  type,
  icon: Icon,
  disabled = false,
  ...rest
}: ButtonProps) {
  return (
    <Styles.Container
      disabled={disabled}
      type={type}
      style={{ width: width }}
      {...rest}
    >
      {Icon && <Icon />}
      {title}
    </Styles.Container>
  );
}
