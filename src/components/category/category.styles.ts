import styled from "styled-components";
import { BREAK_POINTS } from "../../utils/breakPoints";

export const Container = styled.div`
  width: 100%;

  > h2 {
    margin-top: 2rem;
    margin-bottom: 2rem;
    font-size: 1.5rem;
  }

  @media (max-width: ${BREAK_POINTS.MD}) {
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;
  }
`;

export const Content = styled.div`
  display: flex;
  gap: 1.688rem;
  overflow-y: hidden;

  @media (max-width: ${BREAK_POINTS.MD}) {
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;
  }
`;
