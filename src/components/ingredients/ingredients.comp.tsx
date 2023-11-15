import { FiPlus, FiX } from "react-icons/fi";
import { Container } from "./ingredients.comp.styles";
import { IngredientsProps } from "./ingredients";

export function Ingredients({
  isNew,
  value,
  onClick,
  placeholder,
  ...rest
}: IngredientsProps) {
  return (
    <Container isNew={isNew}>
      <input
        placeholder={placeholder}
        type="text"
        value={value}
        readOnly={!isNew}
        {...rest}
      />

      <button
        type="button"
        onClick={onClick}
        className={isNew ? "button-add" : "button-delete"}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
}
