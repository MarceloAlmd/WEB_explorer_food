import styled from "styled-components";
import { fadeIn } from "../../../signIn/styles";

export const Container = styled.div`
  width: 100%;
  margin: 2rem auto;

  animation: ${fadeIn} 1s ease-in-out;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;

  > h1 {
    color: ${(props) => props.theme.colors.text.secondary};
  }
  > p {
    color: ${(props) => props.theme.colors.text.neutral};
  }
`;
