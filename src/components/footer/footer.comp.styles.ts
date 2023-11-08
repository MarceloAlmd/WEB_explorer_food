import styled from "styled-components";
import { BREAK_POINTS } from "../../utils/breakPoints";

export const Container = styled.footer`
  grid-area: footer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.primary};

  width: 100%;
  height: 4.813rem;

  padding: 0 1rem;

  > div {
    max-width: 66.5rem;
    width: 100%;

    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: ${BREAK_POINTS.MD}) {
      > img {
        display: none;
      }

      align-items: center;
      justify-content: center;
    }
  }
`;
