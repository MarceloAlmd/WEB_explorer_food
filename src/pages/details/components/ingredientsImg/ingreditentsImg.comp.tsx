import * as Styles from "./ingredientsImg.comp.styles";
import { DishesAndIngredientsProps } from "../dishesImg/dishesImg.comp";

export function IngredientsImg({ src, name }: DishesAndIngredientsProps) {
  return (
    <Styles.Container>
      <img src={src} />
      <span>{name}</span>
    </Styles.Container>
  );
}
