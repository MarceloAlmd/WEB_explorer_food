import { useState } from "react";
import { DishesProps } from "./dishes";
import * as Styles from "./dishes.comp.styles";
import { AiOutlineHeart, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { Button } from "../button/button.comp";

export function Dishes({ title, description, price, ...rest }: DishesProps) {
  const [counter] = useState(1);

  return (
    <Styles.Container {...rest}>
      <Styles.Favorite>
        <AiOutlineHeart />
      </Styles.Favorite>

      <Styles.DishImg src="https://img.freepik.com/fotos-gratis/closeup-de-carne-assada-com-molho-legumes-e-batatas-fritas-em-um-prato-sobre-a-mesa_181624-35847.jpg?w=1380&t=st=1699386986~exp=1699387586~hmac=27f97018d94f0be7d20da3f23f6358ba5a2707a708484a4824354cc0dd69d919" />

      <Styles.Info>
        <h2>{title}</h2>
        <span>{description}</span>
        <h3>{`R$ ${price}`}</h3>
      </Styles.Info>

      <Styles.Counter>
        <button>
          <AiOutlineMinus />
        </button>
        {`0${counter}`}
        <button>
          <AiOutlinePlus />
        </button>

        <Button width="5.75rem" type="button" title="incluir" />
      </Styles.Counter>
    </Styles.Container>
  );
}
