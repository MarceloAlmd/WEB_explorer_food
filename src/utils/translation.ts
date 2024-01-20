export function translation(message: string) {
  const messages: { [key: string]: string } = {
    "This email is already in use": "Este e-mail já está em uso",
  };

  return messages[message];
}
