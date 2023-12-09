import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  color: ${({ theme }) => theme.colors.text.primary};
  font-family: 400;

  display: flex;
  align-items: center;

  > svg {
    font-size: 2rem;
  }
`;
