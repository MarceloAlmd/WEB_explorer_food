import styled from "styled-components";
import { BREAK_POINTS } from "../../utils/breakPoints";

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

  width: 2rem;
  height: 2rem;
`;
