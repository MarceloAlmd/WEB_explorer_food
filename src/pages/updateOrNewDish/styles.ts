import styled from "styled-components";
import { BREAK_POINTS } from "../../utils/breakPoints";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 6.5rem auto 4.813rem;

  grid-template-areas: "header" "main" "footer";
`;

export const Content = styled.form`
  grid-area: main;

  width: 100%;
  max-width: 76.25rem;

  margin: 1rem auto;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: ${BREAK_POINTS.ST}) {
    max-width: 320px;
  }

  > label {
    display: flex;
    flex-direction: column;
    gap: 8px;

    font-weight: 400;
    line-height: 1rem;

    color: ${({ theme }) => theme.colors.text.secondary};

    textarea {
      background: transparent;
      resize: none;
      width: 100%;

      height: 10rem;

      color: ${({ theme }) => theme.colors.text.primary};

      border-radius: 5px;

      border-color: ${({ theme }) => theme.colors.text.primary};
      padding: 1rem;
    }
  }

  > button {
    border: 1px solid ${({ theme }) => theme.colors.text.primary};
    background: transparent;
    width: 22.313rem;
    height: 3rem;
    border-radius: 5px;

    color: #cccecf;
    background: ${({ theme }) => theme.colors.text.buttonText};

    align-self: flex-end;

    @media (max-width: ${BREAK_POINTS.ST}) {
      align-self: center;
      width: 12.313rem;
    }
  }
`;

export const FirstWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media (max-width: ${BREAK_POINTS.ST}) {
    flex-direction: column;
  }
`;

export const SecondWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  > label {
    font-weight: 400;

    color: ${({ theme }) => theme.colors.text.secondary};
  }

  > div {
    width: 100%;
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.colors.text.primary};
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem;
    flex-wrap: wrap;
  }
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 2rem;
`;
