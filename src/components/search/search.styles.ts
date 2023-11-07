import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 3rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.search};

  border-radius: 5px;

  > input {
    height: 3rem;
    padding: 0 1rem;

    width: 100%;

    background: none;
    border: none;

    color: ${({ theme }) => theme.colors.text.primary};
  }

  > img {
    margin-left: 1rem;
  }
`;
