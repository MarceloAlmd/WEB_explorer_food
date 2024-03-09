import * as Styles from "./ingredientsImgcomp.styles";
import { DishesAndIngredientsProps } from "../dishesImg/dishesImg.comp";
// import { api } from "../../../../api/axios";

export function IngredientsImg({ src, name }: DishesAndIngredientsProps) {
  return (
    <Styles.Container>
      <img src={src} />
      <span>{name}</span>
    </Styles.Container>
  );
}
