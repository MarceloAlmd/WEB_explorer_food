import styled from "styled-components";
import { BREAK_POINTS } from "../../utils/breakPoints";

export const Container = styled.label`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  line-height: 1rem;
  width: 100%;
  max-width: 16.375rem;

  @media (max-width: ${BREAK_POINTS.ST}) {
    max-width: 320px;
  }

  color: ${({ theme }) => theme.colors.text.secondary};
  > input {
    display: none;
  }

  > p {
    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme.colors.text.primary};
    padding: 1rem;
    height: 3rem;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      font-size: 2rem;
    }
  }
`;
