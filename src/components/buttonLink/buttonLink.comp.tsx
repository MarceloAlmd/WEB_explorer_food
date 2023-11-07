import * as Styles from "./buttonLink.styles";
import { ButtonLinkProps } from "./buttonLink";

export function ButtonLink({ title, href, ...rest }: ButtonLinkProps) {
  return (
    <Styles.Container href={href} {...rest}>
      {title}
    </Styles.Container>
  );
}
