import { DishesAndIngredientsProps } from "../comps";
import * as Styles from "./dishesImg.comp.styles";

export function DishesImg({ src }: DishesAndIngredientsProps) {
  return <Styles.Container src={src} />;
}
