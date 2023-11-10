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
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const IconButton = styled.a`
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  > span {
    width: 10px;
    height: 10px;

    background: ${({ theme }) => theme.colors.secondary};
    border-radius: 50%;

    position: absolute;

    top: 1px;
    right: -1px;
  }
`;
