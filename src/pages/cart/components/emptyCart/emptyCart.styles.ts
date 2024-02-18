import styled from "styled-components";

export const Container = styled.div`
  > h2 {
    color: ${(props) => props.theme.colors.text.secondary};
  }
`;
