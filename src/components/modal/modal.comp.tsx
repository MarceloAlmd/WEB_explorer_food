import { ModalProps } from "./moda";
import * as Styles from "./moda.styles";

export function Modal({ message, cancel, confirm, onCLose }: ModalProps) {
  return (
    <Styles.Container onClick={onCLose}>
      <Styles.Content>
        <h1>Confirme a ação</h1>
        <h4>{message}</h4>

        <div className="contentButton">
          <button className="buttonCancel" onClick={cancel}>
            CANCELAR
          </button>
          <button className="buttonConfirm" onClick={confirm}>
            CONFIRMAR
          </button>
        </div>
      </Styles.Content>
    </Styles.Container>
  );
}
