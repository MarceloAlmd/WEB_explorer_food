import { IoIosArrowBack } from "react-icons/io";
import { ButtonLink } from "../../components/buttonLink/buttonLink.comp";
import { Category } from "../../components/category/category.comp";
import { Footer } from "../../components/footer/footer.comp";
import { Header } from "../../components/header/header.comp";
import { Select } from "../../components/select/select.comp";
import * as Styles from "./styles";

export function Requests() {
  return (
    <Styles.Container>
      <Header />
      <Styles.Content>
        <ButtonLink
          to="/"
          title="Voltar"
          fontSize="1.5rem"
          icon={IoIosArrowBack}
          marginLeft="-0.8rem"
        />
        <Category title="Pedidos">
          <Styles.Table>
            <table>
              <thead>
                <tr>
                  <th>Status</th>
                  <th>Código</th>
                  <th>Detalhamento</th>
                  <th>Data e hora</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Select />
                  </td>
                  <td>000004</td>
                  <td>
                    1 x Salada Radish, 1 x Torradas de Parma, 1 x Chá de Canela,
                    1 x Suco de Maracujá
                  </td>
                  <td>20/05 às 18h00</td>
                </tr>
              </tbody>
            </table>
          </Styles.Table>
        </Category>
      </Styles.Content>
      <Footer />
    </Styles.Container>
  );
}
