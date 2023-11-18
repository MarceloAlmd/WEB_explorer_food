import { ButtonProps } from "./button";
import * as Styles from "./button.styles";

export function Button({
  width = "100%",
  title,
  type,
  icon: Icon,
  disabled = false,
  onClick,
  ...rest
}: ButtonProps) {
  return (
    <Styles.Container
      disabled={disabled}
      type={type}
      style={{ width: width }}
      onClick={onClick}
      {...rest}
    >
      {Icon && <Icon />}
      {title}
    </Styles.Container>
  );
}
