import styled, { keyframes } from "styled-components";
import { BREAK_POINTS } from "../../utils/breakPoints";

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: space-around;
  align-items: center;

  padding: 2rem;

  animation: ${fadeIn} 0.5s ease-in-out;

  @media (max-width: ${BREAK_POINTS.MD}) {
    flex-direction: column;

    > img {
      width: 15rem;
    }
  }
`;

export const Card = styled.div`
  > h2 {
    font-size: 2rem;
  }

  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2rem;

  max-width: 30rem;
  width: 100%;
  max-height: 37.5rem;
  border-radius: 1rem;

  padding: 3rem;

  @media (max-width: ${BREAK_POINTS.MD}) {
    background: transparent;
  }
`;
