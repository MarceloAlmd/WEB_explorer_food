import * as Styles from "./alert.styles";

import { AlertProps } from "./alert";

export function Alert({ message, bgColorRed = false }: AlertProps) {
  return <Styles.Container bgColorRed={bgColorRed}>{message}</Styles.Container>;
}
