import styled from "styled-components";

export const Container = styled.button`
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;

  height: 3rem;

  border: none;

  color: ${({ theme }) => theme.colors.text.primary};

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.575rem;

  > svg {
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 1.6rem;
  }
`;
