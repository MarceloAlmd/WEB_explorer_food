import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { PiNewspaperClipping } from "react-icons/pi";
import { useState } from "react";
import { Footer } from "../../components/footer/footer.comp";
import { Header } from "../../components/header/header.comp";
import * as Styles from "./styles";
import { Button } from "../../components/button/button.comp";
import { BREAK_POINTS } from "../../utils/breakPoints";

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
  return (
    <Styles.Container>
      <Header />
      <Styles.Content>
        <img
          className="dish"
          src="https://img.freepik.com/fotos-gratis/closeup-de-carne-assada-com-molho-legumes-e-batatas-fritas-em-um-prato-sobre-a-mesa_181624-35847.jpg?w=1380&t=st=1699386986~exp=1699387586~hmac=27f97018d94f0be7d20da3f23f6358ba5a2707a708484a4824354cc0dd69d919"
        />

        <Styles.Details>
          <h1>Salada Ravanello</h1>
          <p>
            Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
          </p>

          <Styles.IngredientsContent>
            <Styles.Ingredients>
              <img src="https://img.elo7.com.br/product/zoom/258B7CB/adesivo-parede-restaurante-prato-feito-comida-caseira-lenha-adesivo-restaurante-fritas-salada.jpg" />
              <span>alface</span>
            </Styles.Ingredients>
            <Styles.Ingredients>
              <img src="https://img.elo7.com.br/product/zoom/258B7CB/adesivo-parede-restaurante-prato-feito-comida-caseira-lenha-adesivo-restaurante-fritas-salada.jpg" />
              <span>alface</span>
            </Styles.Ingredients>
            <Styles.Ingredients>
              <img src="https://img.elo7.com.br/product/zoom/258B7CB/adesivo-parede-restaurante-prato-feito-comida-caseira-lenha-adesivo-restaurante-fritas-salada.jpg" />
              <span>alface</span>
            </Styles.Ingredients>
            <Styles.Ingredients>
              <img src="https://img.elo7.com.br/product/zoom/258B7CB/adesivo-parede-restaurante-prato-feito-comida-caseira-lenha-adesivo-restaurante-fritas-salada.jpg" />
              <span>alface</span>
            </Styles.Ingredients>
            <Styles.Ingredients>
              <img src="https://img.elo7.com.br/product/zoom/258B7CB/adesivo-parede-restaurante-prato-feito-comida-caseira-lenha-adesivo-restaurante-fritas-salada.jpg" />
              <span>alface</span>
            </Styles.Ingredients>
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
