import { ButtonLink } from "../buttonLink/buttonLink.comp";
import { useTheme } from "styled-components";
import { TbError404Off } from "react-icons/tb";
import * as Styles from "./notFoundError.styles";

export function NotFoundError() {
  const colors = useTheme();

  return (
    <Styles.Container>
      <TbError404Off />

      <ButtonLink
        color={colors.colors.secondary}
        to="/"
        title="Voltar para a página incial"
      />
    </Styles.Container>
  );
}
