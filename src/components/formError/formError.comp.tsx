import { FormErrorProps } from "./formError";
import * as Styles from "./formError.styles";

export function FormError({ message }: FormErrorProps) {
  return <Styles.MessageError>{message}</Styles.MessageError>;
}
