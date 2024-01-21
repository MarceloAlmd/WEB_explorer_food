export function translation(message: string) {
  const messages: { [key: string]: string } = {
    "This email is already in use": "Este e-mail já está em uso",
    "Incorrect email or password": "Email ou senha incorretos",
  };

  return messages[message];
}
