import { ButtonLink } from "../../../../components/buttonLink/buttonLink.comp";
import * as Styles from "./emptyCart.styles";

export function EmptyCart() {
  return (
    <Styles.Container>
      <h2>Não há itens em seu carrinho </h2>
      <ButtonLink title="Adicionar Agora" to="/" color="#AB4D55" />
    </Styles.Container>
  );
}
