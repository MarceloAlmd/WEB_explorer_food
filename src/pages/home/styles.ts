import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 6.5rem 25rem auto 4.813rem;

  grid-template-areas: "header" "banner" "main" "footer";
`;

export const Banner = styled.div`
  grid-area: banner;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  max-width: 66.5rem;

  > img {
    width: 100%;
    max-width: 66.5rem;

    margin-right: 2.5rem;
  }
`;

export const Content = styled.main`
  grid-area: main;

  max-width: 66.5rem;
  width: 100%;
  margin: 0 auto;

  padding: 0 2rem;
`;
