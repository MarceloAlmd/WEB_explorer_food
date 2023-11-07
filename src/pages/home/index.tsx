import { Footer } from "../../components/footer/footer.comp";
import { Header } from "../../components/header/header.comp";
import * as Styles from "./styles";

export function Home() {
  return (
    <Styles.Container>
      <Header />

      <Footer />
    </Styles.Container>
  );
}
