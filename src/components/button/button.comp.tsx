import { ButtonProps } from "./button";
import * as Styles from "./button.styles";

export function Button({
  width = "100%",
  title,
  type,
  src,
  ...rest
}: ButtonProps) {
  return (
    <Styles.Container>
      <button type={type} style={{ width: width }} {...rest}>
        {src && <img src={src} />}
        {title}
      </button>
    </Styles.Container>
  );
}
