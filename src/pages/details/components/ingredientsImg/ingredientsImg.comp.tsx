import { DishesAndIngredientsProps } from "../comps";
import * as Styles from "./ingredientsImgcomp.styles";

export function IngredientsImg({ src, name }: DishesAndIngredientsProps) {
  return (
    <Styles.Container>
      <img src={src} />
      <span>{name}</span>
    </Styles.Container>
  );
}
