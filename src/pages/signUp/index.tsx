import * as Styles from "./styles";

import { Button } from "../../components/button/button.comp";
import { Input } from "../../components/input/input.comp";
import { ButtonLink } from "../../components/buttonLink/buttonLink.comp";
import { useState } from "react";
import { api } from "../../api/axios";

export function SignUp() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string | number>("");

  const handleCreateNewUser = async () => {
    await api
      .post("/users", { name, email, password })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <Styles.Container>
      <img src="/logo_explorer.svg" width={324} />

      <Styles.Card>
        <h2>Crie sua conta</h2>

        <Input
          label="Seu nome"
          placeholder="Exemplo: Maria da Silva"
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          label="Email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Senha"
          placeholder="No mínimo 6 caracteres"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          onClick={handleCreateNewUser}
          type="button"
          title="Criar Conta"
        />

        <ButtonLink title="Já tenho uma conta" to="/" />
      </Styles.Card>
    </Styles.Container>
  );
}
