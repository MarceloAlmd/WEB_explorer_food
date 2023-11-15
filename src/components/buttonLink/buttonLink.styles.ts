import styled from "styled-components";

export const Container = styled.a`
  color: ${({ theme }) => theme.colors.text.primary};
  font-family: 400;

  display: flex;
  align-items: center;

  > svg {
    font-size: 2rem;
  }
`;
