import { ButtonLink } from "../../../../components/buttonLink/buttonLink.comp";
import * as Styles from "./empty.styles";

export function EmptyFavorites() {
  return (
    <Styles.Container>
      <h1>Parece que você ainda não favoritou nenhum prato</h1>
      <p>
        Adicione já seus pratos favoritos e fique sempre mais perto do seu sabor
        preferido
      </p>
      <ButtonLink color="#AB4D55" to="/" title="ver todos os pratos" />
    </Styles.Container>
  );
}
