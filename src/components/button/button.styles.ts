import styled from "styled-components";

export const Container = styled.button`
  background: ${({ disabled, theme }) =>
    disabled ? theme.colors.buttonPayment : theme.colors.secondary};
  border-radius: 5px;

  min-height: 3rem;

  border: none;

  color: ${({ theme }) => theme.colors.text.primary};

  &:hover {
    cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
    filter: brightness(1);
  }

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.575rem;

  > svg {
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 1.6rem;
  }
`;
