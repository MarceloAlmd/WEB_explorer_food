import { ButtonPaymentProps } from "./buttonPayment";
import * as Styles from "./buttonPayment.comp.styles";

export function ButtonPayment({
  title,
  icon: Icon,
  checked,
  handleButtonClick,
  ...rest
}: ButtonPaymentProps) {
  return (
    <Styles.Container checked={checked} onClick={handleButtonClick} {...rest}>
      <Icon />
      {title}
    </Styles.Container>
  );
}
