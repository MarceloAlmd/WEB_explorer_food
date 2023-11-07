import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 8px;

  > label {
    font-weight: 400;
    line-height: 1rem;

    color: ${({ theme }) => theme.colors.text.secondary};
  }

  > input {
    border-radius: 5px;

    border: 1px solid ${({ theme }) => theme.colors.text.primary};

    background: none;

    padding: 1rem;
  }
`;
