import * as Styles from "./buttonLink.styles";
import { ButtonLinkProps } from "./buttonLink";

export function ButtonLink({
  title,
  href,
  fontSize,
  icon: Icon,
  ...rest
}: ButtonLinkProps) {
  return (
    <Styles.Container
      style={{
        fontSize: fontSize,
      }}
      href={href}
      {...rest}
    >
      {Icon && <Icon />}
      {title}
    </Styles.Container>
  );
}
