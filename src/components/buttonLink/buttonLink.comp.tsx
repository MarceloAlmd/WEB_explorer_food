import * as Styles from "./buttonLink.styles";
import { ButtonLinkProps } from "./buttonLink";

export function ButtonLink({
  title,
  to,
  fontSize,
  icon: Icon,
  onClick,
  color,
  ...rest
}: ButtonLinkProps) {
  return (
    <Styles.Container
      style={{
        fontSize: fontSize,
        color: color,
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
