import styled from "styled-components";
import { BREAK_POINTS } from "../../utils/breakPoints";

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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;

  padding: 3rem;

  .dish {
    width: 389px;
    height: 389px;

    border-radius: 50%;
  }

  @media (max-width: ${BREAK_POINTS.MD}) {
    flex-direction: column;

    .dish {
      width: 189px;
      height: 189px;

      border-radius: 50%;
      align-self: flex-start;
    }
  }
`;

export const Details = styled.div`
  > h1 {
    font-size: 2.5rem;
    font-weight: 500;
    margin-bottom: 0.875rem;
  }

  > p {
    font-size: 1.5rem;
    width: 37.5rem;
    font-weight: 400;
    margin-bottom: 2rem;
  }

  @media (max-width: ${BREAK_POINTS.MD}) {
    > h1 {
      font-size: 1.5rem;
      font-weight: 500;
      margin-bottom: 0.875rem;
    }

    > p {
      font-size: 1rem;
      width: 20rem;
      font-weight: 400;
      margin-bottom: 2rem;
    }
  }
`;

export const IngredientsContent = styled.div`
  display: flex;

  gap: 1.4rem;

  @media (max-width: ${BREAK_POINTS.MD}) {
    gap: 0.4rem;
  }
`;
export const Ingredients = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-bottom: 3rem;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }
`;

export const Counter = styled.footer`
  display: flex;
  align-items: center;
  gap: 1rem;

  margin: 1rem 0;
  > h2 {
    font-size: 2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.text.price};
  }

  > button {
    svg {
      color: ${({ theme }) => theme.colors.text.primary};
      font-size: 1.5rem;
    }
  }

  .btn-plus-minus {
    border: none;
    background: none;
  }
`;
