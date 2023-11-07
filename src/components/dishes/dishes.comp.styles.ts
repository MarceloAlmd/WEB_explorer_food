import styled from "styled-components";

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.dishes};

  max-width: 18.75rem;
  width: 100%;

  height: 32rem;

  border: 1px solid red;
  display: flex;

  > header {
    justify-self: flex-start;
  }
`;

export const DishImg = styled.img`
  width: 11rem;
  height: 11rem;
  border-radius: 50%;
`;
