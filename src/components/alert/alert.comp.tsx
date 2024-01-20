import * as Styles from "./alert.styles";

import { AlertProps } from "./alert";

export function Alert({ message }: AlertProps) {
  return <Styles.Container>{message}</Styles.Container>;
}
