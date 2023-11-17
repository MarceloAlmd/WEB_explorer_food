import styled from "styled-components";
import { ButtonHTMLAttributes } from "react";

interface ContainerProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  checked?: boolean;
}

export const Container = styled.button<ContainerProps>`
  width: 100%;
  height: 5.063rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  background-color: ${({ checked, theme }) =>
    checked ? theme.colors.buttonPayment : "transparent"};

  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.ingredient};

  color: ${({ theme }) => theme.colors.text.primary};

  > svg {
    font-size: 1.7rem;
  }

  &:first-child {
    border-right: 1px solid ${({ theme }) => theme.colors.ingredient};
  }

  &:nth-child(2) {
    border-left: 1px solid ${({ theme }) => theme.colors.ingredient};
  }
`;
