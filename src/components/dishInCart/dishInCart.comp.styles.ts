import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  gap: 13px;

  > img {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const DishInfo = styled.div`
  > span {
    margin-right: 6px;

    font-size: 1.25rem;
  }

  > span:nth-child(3) {
    font-size: 12px;
    position: relative;
    bottom: 5px;

    color: ${({ theme }) => theme.colors.text.secondary};
  }

  > button {
    display: block;

    background-color: transparent;
    border: none;
    margin-top: 5px;
    color: ${({ theme }) => theme.colors.text.buttonTrash};
  }
`;
