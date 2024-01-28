import styled from "styled-components";
import { BREAK_POINTS } from "../../utils/breakPoints";
import { Link } from "react-router-dom";

export const Container = styled.header`
  grid-area: header;
  position: fixed;
  width: 100%;
  height: 6.5rem;
  background: ${({ theme }) => theme.colors.primary};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  padding: 0 1rem;

  z-index: 1000;

  .buttonCart {
    color: ${({ theme }) => theme.colors.text.primary};
    font-size: 1.5rem;
  }
`;

export const Logo = styled.img`
  width: 12.313rem;
  height: 1.875rem;

  @media (max-width: ${BREAK_POINTS.MD}) {
    display: none;
  }
`;

export const SignOut = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text.primary};
  line-height: 0;
`;

export const IconButton = styled(Link)`
  font-size: 2rem;
  display: flex;
  line-height: 0;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.text.primary};
`;
