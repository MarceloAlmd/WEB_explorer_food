import * as Styles from "./search.styles";
import { AiOutlineSearch } from "react-icons/ai";

export function Search() {
  return (
    <Styles.Container>
      <label htmlFor="search">
        <AiOutlineSearch />
      </label>

      <input
        type="text"
        placeholder="Busque pelas opções de pratos"
        id="search"
      />
    </Styles.Container>
  );
}
