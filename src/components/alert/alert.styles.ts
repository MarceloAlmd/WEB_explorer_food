import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: ${({ theme }) => theme.colors.text.delivered};
  color: ${({ theme }) => theme.colors.dishes};
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 999;

  animation: slideIn 0.5s forwards;

  transition: all 1s;

  @keyframes slideIn {
    0% {
      right: -100%;
    }
    100% {
      right: 20px;
    }
  }
`;
