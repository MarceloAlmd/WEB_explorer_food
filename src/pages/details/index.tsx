import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { PiNewspaperClipping } from "react-icons/pi";
import { useState } from "react";
import { Footer } from "../../components/footer/footer.comp";
import { Header } from "../../components/header/header.comp";
import * as Styles from "./styles";
import { Button } from "../../components/button/button.comp";
import { DishesImg } from "./components/dishesImg/dishesImg.comp";
import { IngredientsImg } from "./components/ingredientsImg/ingreditentsImg.comp";

export function Details() {
  const [counter, setCounter] = useState(1);

  function addedMoreCounter() {
    if (counter < 10) {
      setCounter((prevState) => prevState + 1);
    }
  }

  function addedMinusCounter() {
    if (counter > 1) {
      setCounter((prevState) => prevState - 1);
    }
  }
  const formattedCounter = counter.toString().padStart(2, "0");

  const ingredients = [
    {
      id: "1",
      name: "alface",
      src: "https://img.freepik.com/fotos-gratis/closeup-de-carne-assada-com-molho-legumes-e-batatas-fritas-em-um-prato-sobre-a-mesa_181624-35847.jpg?w=1380&t=st=1699386986~exp=1699387586~hmac=27f97018d94f0be7d20da3f23f6358ba5a2707a708484a4824354cc0dd69d919",
    },
    {
      id: "2",
      name: "tomate",
      src: "https://img.freepik.com/fotos-gratis/closeup-de-carne-assada-com-molho-legumes-e-batatas-fritas-em-um-prato-sobre-a-mesa_181624-35847.jpg?w=1380&t=st=1699386986~exp=1699387586~hmac=27f97018d94f0be7d20da3f23f6358ba5a2707a708484a4824354cc0dd69d919",
    },
    {
      id: "3",
      name: "repolho",
      src: "https://img.freepik.com/fotos-gratis/closeup-de-carne-assada-com-molho-legumes-e-batatas-fritas-em-um-prato-sobre-a-mesa_181624-35847.jpg?w=1380&t=st=1699386986~exp=1699387586~hmac=27f97018d94f0be7d20da3f23f6358ba5a2707a708484a4824354cc0dd69d919",
    },
    {
      id: "4",
      name: "pao",
      src: "https://img.freepik.com/fotos-gratis/closeup-de-carne-assada-com-molho-legumes-e-batatas-fritas-em-um-prato-sobre-a-mesa_181624-35847.jpg?w=1380&t=st=1699386986~exp=1699387586~hmac=27f97018d94f0be7d20da3f23f6358ba5a2707a708484a4824354cc0dd69d919",
    },
    {
      id: "3",
      name: "repolho",
      src: "https://img.freepik.com/fotos-gratis/closeup-de-carne-assada-com-molho-legumes-e-batatas-fritas-em-um-prato-sobre-a-mesa_181624-35847.jpg?w=1380&t=st=1699386986~exp=1699387586~hmac=27f97018d94f0be7d20da3f23f6358ba5a2707a708484a4824354cc0dd69d919",
    },
    {
      id: "4",
      name: "pao",
      src: "https://img.freepik.com/fotos-gratis/closeup-de-carne-assada-com-molho-legumes-e-batatas-fritas-em-um-prato-sobre-a-mesa_181624-35847.jpg?w=1380&t=st=1699386986~exp=1699387586~hmac=27f97018d94f0be7d20da3f23f6358ba5a2707a708484a4824354cc0dd69d919",
    },
  ];

  return (
    <Styles.Container>
      <Header isSearch={false} />
      <Styles.Content>
        <DishesImg src="https://img.freepik.com/fotos-gratis/closeup-de-carne-assada-com-molho-legumes-e-batatas-fritas-em-um-prato-sobre-a-mesa_181624-35847.jpg?w=1380&t=st=1699386986~exp=1699387586~hmac=27f97018d94f0be7d20da3f23f6358ba5a2707a708484a4824354cc0dd69d919" />

        <Styles.Details>
          <h1>Salada Ravanello</h1>
          <p>
            Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
          </p>

          <Styles.IngredientsContent>
            {ingredients.map((ingredient, index) => (
              <IngredientsImg
                key={String(index)}
                src={ingredient.src}
                name={ingredient.name}
              />
            ))}
          </Styles.IngredientsContent>

          <Styles.Counter>
            <h2>R$ 25,97</h2>
            <button className="btn-plus-minus" onClick={addedMinusCounter}>
              <AiOutlineMinus />
            </button>
            {formattedCounter}
            <button className="btn-plus-minus" onClick={addedMoreCounter}>
              <AiOutlinePlus />
            </button>

            <Button
              width="5.75rem"
              type="button"
              title="incluir"
              icon={PiNewspaperClipping}
            />
          </Styles.Counter>
        </Styles.Details>
      </Styles.Content>
      <Footer />
    </Styles.Container>
  );
}
