import { Category } from "../../components/category/category.comp";
import { Dishes } from "../../components/dishes/dishes.comp";
import { Footer } from "../../components/footer/footer.comp";
import { Header } from "../../components/header/header.comp";
import * as Styles from "./styles";

export function Home() {
  return (
    <Styles.Container>
      <Header isSearch />

      <Styles.Banner>
        <img src="/banner.svg" />
      </Styles.Banner>

      <Styles.Content>
        <Category title="Pratos principais">
          <Dishes
            title="Salada Ravanello"
            description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
            price={47.99}
          />

          <Dishes
            title="Torradas de Parma"
            description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
            price={47.99}
          />

          <Dishes
            title="Salada Ravanellos"
            description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
            price={47.99}
          />

          <Dishes
            title="Salada Ravanelloz"
            description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
            price={47.99}
          />
        </Category>
        <Category title="Sobremesas">
          <Dishes
            title="Spaguetti Gambe"
            description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
            price={47.99}
          />
        </Category>

        <Category title="Bebidas">
          <Dishes
            title="Salada Ravanello"
            description="Rabanetes, folhas verdes e molho agridoce salpicados com gergelim"
            price={47.99}
          />
        </Category>
      </Styles.Content>

      <Footer />
    </Styles.Container>
  );
}
