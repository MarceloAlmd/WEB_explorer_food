import { Button } from "../../components/button/button.comp";
import { Input } from "../../components/input/input.comp";

export function SignUp() {
  return (
    <>
      <Input
        label="Seu nome"
        placeholder="Exemplo: Maria da Silva"
        type="text"
      />
      <Button type="button" title="Criar Conta" />
    </>
  );
}
