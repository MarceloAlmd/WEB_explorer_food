import * as Styles from "./ingredientsImgcomp.styles";
import { DishesAndIngredientsProps } from "../dishesImg/dishesImg.comp";
import { api } from "../../../../api/axios";

export function IngredientsImg({ src, name }: DishesAndIngredientsProps) {
  const imgUrlIngredients = `${api.defaults.baseURL}/files/ingredient/${src}`;

  return (
    <Styles.Container>
      <img src={imgUrlIngredients} />
      <span>{name}</span>
    </Styles.Container>
  );
}
