import * as Styles from "./search.styles";

export function Search() {
  return (
    <Styles.Container>
      <img src="/search.svg" />

      <input type="text" placeholder="Busque pelas opções de pratos" />
    </Styles.Container>
  );
}
