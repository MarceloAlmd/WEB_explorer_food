import { ButtonLink } from "../../components/buttonLink/buttonLink.comp";
import { IoIosArrowBack } from "react-icons/io";
import { Footer } from "../../components/footer/footer.comp";
import { Header } from "../../components/header/header.comp";
import { Input } from "../../components/input/input.comp";
import * as Styles from "./styles";

import { InputImage } from "../../components/inputImage/inputImage.comp";
import { Ingredients } from "../../components/ingredients/ingredients.comp";

export function UpdateOrNewDish() {
  return (
    <Styles.Container>
      <Header />

      <Styles.Content>
        <ButtonLink
          to="/"
          title="Voltar"
          fontSize="1.5rem"
          icon={IoIosArrowBack}
        />

        <Styles.Title>Editar prato</Styles.Title>

        <Styles.FirstWrapper>
          <InputImage label="Imagem do prato" />
          <Input type="text" label="Nome" placeholder="Ex.: Salada Ceasar" />

          <div className="selectGroup">
            <label>Categoria</label>
            <select placeholder="test">
              <option value="pratos principais">Prato principal</option>
              <option value="sobremesas">Sobremesa</option>
              <option value="sucos">Suco</option>
            </select>
          </div>
        </Styles.FirstWrapper>

        <Styles.SecondWrapper>
          <label>Ingredientes</label>
          <div>
            <Ingredients isNew placeholder="adicionar" />
            <Ingredients value="Pão Naan" />
          </div>
        </Styles.SecondWrapper>
        <label>
          Descrição
          <textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" />
        </label>
        <button type="button">Adicionar pedido</button>
      </Styles.Content>

      <Footer />
    </Styles.Container>
  );
}
