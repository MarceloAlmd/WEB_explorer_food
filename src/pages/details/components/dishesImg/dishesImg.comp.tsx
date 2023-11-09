import * as Styles from "./dishesImg.comp.styles";

export interface DishesAndIngredientsProps {
  src: string;
  name?: string;
}

export function DishesImg({ src }: DishesAndIngredientsProps) {
  return <Styles.Container src={src} />;
}
