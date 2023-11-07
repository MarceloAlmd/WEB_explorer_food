import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 6.5rem auto 4.813rem;

  grid-template-areas: "header" "main" "footer";
`;
