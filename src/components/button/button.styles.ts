import styled from "styled-components";

export const Container = styled.button`
  height: 3rem;
  /* width: 100%; */

  border: none;
  border-radius: 5px;

  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text.primary};
`;
