export const maskCardNumber = (input: string): string => {
  input = input.replace(/\D/g, "");
  let maskedValue = "";
  for (let i = 0; i < input.length; i++) {
    if (i === 16) {
      break;
    }
    if (i % 4 === 0 && i > 0) {
      maskedValue += " ";
    }
    maskedValue += input[i];
  }
  return maskedValue;
};

export const maskValidity = (input: string): string => {
  input = input.replace(/\D/g, "");
  let maskedValue = "";
  for (let i = 0; i < input.length; i++) {
    if (i === 2 && input.length > 2 && input.charAt(2) !== "/") {
      maskedValue += "/";
    }
    if (i === 4) {
      break;
    }
    maskedValue += input[i];
  }
  return maskedValue;
};

export const maskCvc = (input: string): string => {
  input = input.replace(/\D/g, "");
  let maskedValue = "";
  for (let i = 0; i < input.length; i++) {
    if (i === 3) {
      break;
    }
    maskedValue += input[i];
  }
  return maskedValue;
};
