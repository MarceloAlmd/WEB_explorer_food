import styled from "styled-components";

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

  margin: 0 auto;
`;

export const Table = styled.div`
  width: 100%;
  border-radius: 10px;
  overflow-x: auto;
  border: 2px solid ${({ theme }) => theme.colors.primary};

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
  }

  td {
    padding: clamp(10px, 3vw, 30px) clamp(10px, 3vw, 25px);
    font-size: clamp(14px, 4vw, 16px);
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
