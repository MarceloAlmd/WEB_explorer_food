import * as Styles from "./styles";

import { Button } from "../../components/button/button.comp";
import { Input } from "../../components/input/input.comp";
import { ButtonLink } from "../../components/buttonLink/buttonLink.comp";
import { useState } from "react";
import { api } from "../../api/axios";
import { FormError } from "../../components/formError/formError.comp";
import { translation } from "../../utils/translation";
import { Alert } from "../../components/alert/alert.comp";
import { useNavigate } from "react-router-dom";
import { PacmanLoader } from "react-spinners";

export function SignUp() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const handleCreateNewUser = async () => {
    if (!name || !email || !password) {
      return setError("Preencha todos os campos");
    }

    if (!email.includes("@") || !email.includes(".com")) {
      return setEmailError("Formato de e-mail inválido");
    }

    if (password.length < 6) {
      return setPasswordError("A senha precisa de no minimo 6 caracteres");
    }

    function alert() {
      setShowAlert(true);

      setTimeout(() => {
        setShowAlert(false);
        navigate("/");
      }, 2000);
    }

    setLoading(true);

    await api
      .post("/users", { name, email, password })
      .then(() => {
        setLoading(false);
        alert();
      })
      .catch((error) => {
        console.error(error);
        if (error.response) {
          const message = translation(error.response.data.message);
          setError(message);
        }
      });
  };

  const clearErrorEmail = () => {
    setEmailError("");
    setError("");
  };
  const clearErrorPassword = () => {
    setPasswordError("");
    setError("");
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
          onChange={(e) => {
            setEmail(e.target.value);
            clearErrorEmail();
          }}
        />
        {emailError && <FormError message={emailError} />}
        <Input
          label="Senha"
          placeholder="No mínimo 6 caracteres"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
            clearErrorPassword();
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
          <Button
            onClick={handleCreateNewUser}
            type="button"
            title="Criar Conta"
          />
        )}

        <ButtonLink title="Já tenho uma conta" to="/" />
      </Styles.Card>

      {showAlert && <Alert message="sucesso ao criar sua conta" />}
    </Styles.Container>
  );
}
