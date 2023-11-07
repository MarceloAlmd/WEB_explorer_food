import { ButtonLink } from "../buttonLink/buttonLink.comp";
import * as Styles from "./header.comp.styles";

export function Header() {
  return (
    <Styles.Container>
      <Styles.Logo src="/logo_explorer.svg" />

      <ButtonLink title="Meus Favoritos" />
    </Styles.Container>
  );
}
