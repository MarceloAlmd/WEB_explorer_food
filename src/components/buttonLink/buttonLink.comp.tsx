import * as Styles from "./buttonLink.styles";
import { ButtonLinkProps } from "./buttonLink";

export function ButtonLink({
  title,
  to,
  fontSize,
  icon: Icon,
  onClick,
  ...rest
}: ButtonLinkProps) {
  return (
    <Styles.Container
      style={{
        fontSize: fontSize,
      }}
      to={to}
      onClick={onClick}
      {...rest}
    >
      {Icon && <Icon />}
      {title}
    </Styles.Container>
  );
}
