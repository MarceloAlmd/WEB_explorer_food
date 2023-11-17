import { dishInCartProps } from "./dishInCart";
import * as Styles from "./dishInCart.comp.styles";

export function DishInCart({ src, amount, dish, value }: dishInCartProps) {
  return (
    <Styles.Container>
      <img src={src} />
      <Styles.DishInfo>
        <span>{amount}x</span>
        <span>{dish}</span>
        <span>R$ {value}</span>
        <button>Excluir</button>
      </Styles.DishInfo>
    </Styles.Container>
  );
}
