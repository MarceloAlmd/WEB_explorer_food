import { SearchProps } from "./search";
import * as Styles from "./search.styles";
import { AiOutlineSearch } from "react-icons/ai";

export function Search({ searchDishes }: SearchProps) {
  return (
    <Styles.Container>
      <label htmlFor="search">
        <AiOutlineSearch />
      </label>

      <input
        type="text"
        placeholder="Busque pelas opções de pratos"
        id="search"
        onChange={(e) => searchDishes(e.target.value)}
      />
    </Styles.Container>
  );
}
