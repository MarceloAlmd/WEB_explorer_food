import styled from "styled-components";
import { IngredientsProps } from "./ingredients";

export const Container = styled.div<IngredientsProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;

  width: 7.375rem;

  background: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.colors.ingredient};

  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.colors.ingredient}` : "none"};

  border-radius: 10px;
  padding-right: 16px;

  > button {
    border: none;
    background: none;
  }
  .button-delete {
    color: ${({ theme }) => theme.colors.text.primary};
  }
  .button-add {
    color: #7c7c8a;
  }

  > input {
    height: 56px;
    width: 100%;

    padding: 12px;

    color: ${({ theme }) => theme.colors.text.primary};
    background: transparent;

    border: none;

    &:placeholder {
      color: ${({ theme }) => theme.colors.ingredient};
    }
  }
`;
