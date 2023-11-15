import styled from "styled-components";

export const Container = styled.label`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 8px;
  line-height: 1rem;
  width: 100%;
  max-width: 16.375rem;

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
