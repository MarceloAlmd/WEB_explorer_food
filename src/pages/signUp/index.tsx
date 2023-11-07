import * as Styles from "./styles";

import { Button } from "../../components/button/button.comp";
import { Input } from "../../components/input/input.comp";

export function SignUp() {
  return (
    <Styles.Container>
      <img src="/logo_explorer.svg" width={324} />

      <Styles.Card>
        <h2>Crie sua conta</h2>

        <Input
          label="Seu nome"
          placeholder="Exemplo: Maria da Silva"
          type="text"
        />
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
        <Button type="button" title="Criar Conta" />

        <a href="#">Já tenho uma conta</a>
      </Styles.Card>
    </Styles.Container>
  );
}
