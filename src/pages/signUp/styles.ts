import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: space-around;
  align-items: center;

  padding: 2rem;
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2rem;

  max-width: 30rem;
  width: 100%;
  max-height: 37.5rem;
  border-radius: 1rem;

  padding: 4rem;

  > a {
    font-weight: 500;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.text.primary};
  }
`;
