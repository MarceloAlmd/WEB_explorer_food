import styled from "styled-components";
import { BREAK_POINTS } from "../../../../utils/breakPoints";

export const Container = styled.img`
  width: 389px;
  height: 389px;

  border-radius: 50%;

  @media (max-width: ${BREAK_POINTS.MD}) {
    width: 189px;
    height: 189px;

    border-radius: 50%;
    align-self: flex-start;
  }
`;
