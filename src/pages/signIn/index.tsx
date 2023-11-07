import * as Styles from "./styles";

import { Button } from "../../components/button/button.comp";
import { Input } from "../../components/input/input.comp";

export function SignIn() {
  return (
    <Styles.Container>
      <img src="/logo_explorer.svg" width={324} />

      <Styles.Card>
        <h2>Faça login</h2>

        <Input
          label="Email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          type="text"
        />
        <Input
          label="Senha"
          placeholder="No mínimo 6 caracteres"
          type="password"
        />
        <Button type="button" title="Entrar" />

        <a href="#">Criar uma conta</a>
      </Styles.Card>
    </Styles.Container>
  );
}
