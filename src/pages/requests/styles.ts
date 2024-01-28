import styled, { keyframes } from "styled-components";
import { BREAK_POINTS } from "../../utils/breakPoints";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 6.5rem auto 4.813rem;

  grid-template-areas: "header" "content" "footer";
`;

export const Content = styled.div`
  grid-area: content;

  max-width: 66.5rem;
  width: 100%;

  margin: 1rem auto;
`;

export const Table = styled.div`
  width: 100%;
  border-radius: 10px;
  overflow-x: auto;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  animation: ${fadeIn} 1s ease-in-out;
  @media (max-width: ${BREAK_POINTS.ST}) {
    max-width: 47rem;
  }
  @media (max-width: ${BREAK_POINTS.SM}) {
    max-width: 27rem;
  }

  @media (max-width: ${BREAK_POINTS.EM}) {
    max-width: 20rem;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
  }

  th,
  td {
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }

  th {
    padding: clamp(10px, 3vw, 20px) clamp(15px, 4vw, 25px);
    font-size: 0.875rem;
  }

  td {
    padding: clamp(10px, 3vw, 30px) clamp(10px, 3vw, 25px);
    font-size: 0.875rem;
  }

  thead tr th {
    border-top: none;
  }

  thead tr th:first-child,
  tbody tr td:first-child {
    border-left: none;
  }

  thead tr th:last-child,
  tbody tr td:last-child {
    border-right: none;
  }

  tbody tr:last-child td {
    border-bottom: none;
  }

  thead tr th:last-child {
    min-width: 140px;
  }
`;
