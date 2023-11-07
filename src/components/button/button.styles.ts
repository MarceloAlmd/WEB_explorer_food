import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.secondary};

  > button {
    height: 3rem;

    border: none;
    border-radius: 5px;

    background: transparent;
    color: ${({ theme }) => theme.colors.text.primary};

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 0.875rem;
  }
`;
