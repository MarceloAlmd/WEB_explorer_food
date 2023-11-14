import styled from "styled-components";

export const Container = styled.label`
  display: flex;

  align-items: center;
  justify-content: center;

  > span {
    width: 10px;
    height: 10px;
    border-radius: 50%;

    position: relative;
    left: 1.1rem;
  }

  > select {
    padding: 0.5rem 1rem;
    background: transparent;
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.text.primary};

    > option {
      background: ${({ theme }) => theme.colors.body};
    }
  }

  .red {
    background: ${({ theme }) => theme.colors.text.pending};
  }
  .orange {
    background: ${({ theme }) => theme.colors.text.preparing};
  }
  .green {
    background: ${({ theme }) => theme.colors.text.delivered};
  }

  .hidden {
    display: none;
  }
`;
