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
  .ButtonRequestAndUpdate {
    display: flex;
    align-items: center;
    justify-content: center;
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

  .selectGroup {
    display: flex;
    flex-direction: column;
    gap: 8px;
    color: ${({ theme }) => theme.colors.text.secondary};
    width: 50%;

    > select {
      height: 3rem;
      padding: 0 1rem;
      border-radius: 5px;
      color: ${({ theme }) => theme.colors.text.secondary};
      background: transparent;
      border: 1px solid ${({ theme }) => theme.colors.text.primary};
      font-size: 1rem;
      option {
        background: ${({ theme }) => theme.colors.body};
        font-size: 1rem;
      }
    }
  }

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

export const Third = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  > label {
    font-weight: 400;

    color: ${({ theme }) => theme.colors.text.secondary};
  }

  @media (max-width: ${BREAK_POINTS.ST}) {
    width: 40%;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 2rem;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 2rem;
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ContentModal = styled.div`
  background: ${({ theme }) => theme.colors.search};
  width: 30rem;

  padding: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  border-radius: 9px;

  > h1 {
    color: ${({ theme }) => theme.colors.text.primary};
    font-weight: 500;
  }

  .closeModal {
    border: none;
    background: transparent;

    align-self: flex-end;

    display: flex;
    align-items: center;
    justify-content: center;

    > svg {
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.text.primary};
    }
  }

  .fullInput {
    width: 55%;
    display: flex;
    justify-content: center;
    align-items: center;

    flex-direction: column;

    gap: 1.5rem;

    > h4 {
      color: ${({ theme }) => theme.colors.text.secondary};
      font-weight: 300;

      align-self: flex-start;
    }
  }

  .contentButton {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    margin-top: 2rem;

    .addWithImage {
      border: 0;
      padding: 8px 26px;
      border-radius: 4px;
      background: ${({ theme }) => theme.colors.text.delivered};

      font-weight: 500;
      color: ${({ theme }) => theme.colors.text.primary};
    }

    .addWithoutImage {
      border: 0;
      padding: 8px 26px;
      border-radius: 4px;
      background: ${({ theme }) => theme.colors.text.pending};

      font-weight: 500;
      color: ${({ theme }) => theme.colors.text.primary};
    }
  }
`;

export const InputImgAndLabel = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 8px;

  width: 100%;

  > label {
    align-self: self-start;
    color: ${({ theme }) => theme.colors.text.secondary};
  }
`;
