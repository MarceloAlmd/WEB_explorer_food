import * as Styles from "./styles";
import { AxiosError } from "axios";
import { Button } from "../../components/button/button.comp";
import { Input } from "../../components/input/input.comp";
import { ButtonLink } from "../../components/buttonLink/buttonLink.comp";
import { useState } from "react";
import { useAuth } from "../../context/auth.context";
import { FormError } from "../../components/formError/formError.comp";
import { translation } from "../../utils/translation";
import { PacmanLoader } from "react-spinners";

export function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const [error, setError] = useState<string>("");

  const { login, loading } = useAuth();

  const handleLogin = async () => {
    if (!email || !password) {
      return setError("Preencha todos os campos");
    }

    if (!email.includes("@") || !email.includes(".com")) {
      return setEmailError("Formato de email inválido");
    }

    if (password.length < 6) {
      return setPasswordError("A senha precisa de no minimo 6 caracteres");
    }
    try {
      await login({ email, password });
    } catch (error) {
      if (error instanceof AxiosError) {
        const response = error.response;
        if (response) {
          const message = translation(response.data.message);
          setError(message);
        }
      } else {
        console.error(error);
      }
    }
  };

  const clearEmailError = () => {
    setEmailError("");
    setError("");
  };

  const clearPasswordError = () => {
    setEmailError("");
    setError("");
  };

  return (
    <Styles.Container>
      <img src="/logo_explorer.svg" width={324} />

      <Styles.Card>
        <h2>Faça login</h2>

        <Input
          label="Email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
            clearEmailError();
          }}
        />
        {emailError && <FormError message={emailError} />}
        <Input
          label="Senha"
          placeholder="No mínimo 6 caracteres"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
            clearPasswordError();
          }}
        />
        {passwordError && <FormError message={passwordError} />}
        {error && <FormError message={error} />}
        {loading ? (
          <PacmanLoader
            color="#92000E"
            size={10}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <Button type="button" title="Entrar" onClick={handleLogin} />
        )}

        <ButtonLink title="Criar uma conta" to="/register" />
      </Styles.Card>
    </Styles.Container>
  );
}
