import styled from "styled-components";

interface AlertStylesProps {
  bgColorRed: boolean;
}

export const Container = styled.div<AlertStylesProps>`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: ${({ theme, bgColorRed }) =>
    bgColorRed ? theme.colors.text.pending : theme.colors.text.delivered};
  color: ${({ theme, bgColorRed }) =>
    bgColorRed ? theme.colors.text.primary : theme.colors.dishes};
  padding: 10px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  z-index: 1001;

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
